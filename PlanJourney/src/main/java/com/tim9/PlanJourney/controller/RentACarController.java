package com.tim9.PlanJourney.controller;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Set;

import javax.servlet.http.HttpServletRequest;

import org.joda.time.Days;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.tim9.PlanJourney.beans.AddVehicleBean;
import com.tim9.PlanJourney.beans.BranchOfficeBean;
import com.tim9.PlanJourney.beans.EditVehicleBean;
import com.tim9.PlanJourney.beans.RentACarCompanySearchBean;
import com.tim9.PlanJourney.beans.RentACarProfileBean;
import com.tim9.PlanJourney.beans.VehicleReservationSearchBean;
import com.tim9.PlanJourney.beans.VehicleSearchBean;
import com.tim9.PlanJourney.beans.VehicleSearchReturnBean;
import com.tim9.PlanJourney.models.Authority;
import com.tim9.PlanJourney.models.RegisteredUser;
import com.tim9.PlanJourney.models.flight.Destination;
import com.tim9.PlanJourney.models.flight.FlightCompany;
import com.tim9.PlanJourney.models.rentacar.BranchOffice;
import com.tim9.PlanJourney.models.rentacar.RentACarAdmin;
import com.tim9.PlanJourney.models.rentacar.RentACarCompany;
import com.tim9.PlanJourney.models.rentacar.Vehicle;
import com.tim9.PlanJourney.models.rentacar.VehicleReservation;
import com.tim9.PlanJourney.service.AuthorityService;
import com.tim9.PlanJourney.service.BranchOfficeService;
import com.tim9.PlanJourney.service.DestinationService;
import com.tim9.PlanJourney.service.RegisteredUserService;
import com.tim9.PlanJourney.service.RentACarAdminService;
import com.tim9.PlanJourney.service.RentACarCompanyService;
import com.tim9.PlanJourney.service.UserService;
import com.tim9.PlanJourney.service.VehicleReservationService;
import com.tim9.PlanJourney.service.VehicleService;

@RestController

public class RentACarController {

	@Autowired
	private VehicleService vehicleService;

	@Autowired
	private RentACarAdminService adminService;
	@Autowired
	private DestinationService ds;
	@Autowired
	private BranchOfficeService bs;
	@Autowired
	private AuthorityService as;

	@Autowired
	private VehicleReservationService reservationService;
	
	@Autowired
	private RentACarCompanyService companyService;
	@Autowired
	private RegisteredUserService userService;
	

	@RequestMapping(value = "/api/vehicleSearch", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	@CrossOrigin()
	// Recieves parameters for search and returns list of found vehicles
	// Visible to everyone
	public @ResponseBody ArrayList<VehicleSearchReturnBean> searchVehicles(@RequestBody VehicleSearchBean search)
			throws Exception {
		ArrayList<Vehicle> vehicles = new ArrayList<>();
		vehicles = (ArrayList<Vehicle>) vehicleService.findAll();
		ArrayList<VehicleSearchReturnBean> foundVehicles = new ArrayList<>();
		System.out.println("Poziv");
		// Needs optimization
		for (Vehicle vehicle : vehicles) {
			if ((vehicle.getMaker().equals(search.getProducer()) || search.getProducer().equals(""))
					&& (vehicle.getPrice() > search.getPriceFrom() || search.getPriceFrom() == 0)
					&& (vehicle.getPrice() < search.getPriceTo() || search.getPriceTo() == 0)
					&& (vehicle.getYear() > search.getNewer() || search.getNewer() == 0)
					&& (vehicle.getYear() < search.getOlder() || search.getOlder() == 0)
					&& (vehicle.getType().equals(search.getType()) || search.getType().equals(""))) {
				foundVehicles.add(new VehicleSearchReturnBean(vehicle.getName(), vehicle.getMaker(), vehicle.getType(),
						vehicle.getYear(), vehicle.getPrice()));
			}
		}
		return foundVehicles;
	}

	@RequestMapping(value = "/api/getProducers", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	@CrossOrigin("*")
	// Returns list of producers/makers
	// Probably will create table in database in the future - priority low
	// Visible to everyone
	public @ResponseBody ArrayList<String> getProducers() throws Exception {
		// System.out.println(jwt);
		ArrayList<String> producers = new ArrayList<>();
		producers.add("Tesla");
		producers.add("Mercedes");
		producers.add("Audi");
		producers.add("BMW");
		producers.add("Opel");
		producers.add("Fiat");
		return producers;
	}

	@RequestMapping(value = "/api/getTypes", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	@CrossOrigin()
	// Returns list of types of vehicles
	// Probably will create table in database in the future - priority low
	// Visible to everyone
	public @ResponseBody ArrayList<String> getTypes() throws Exception {
		ArrayList<String> types = new ArrayList<>();
		types.add("Sedan");
		types.add("Hatchback");
		types.add("Crossover");
		types.add("MPV");
		types.add("SUV");
		types.add("Coupe");
		return types;
	}

	// Function used to get Rent a car admin from token
	private RentACarAdmin getAdmin() {
		Authentication currentUser = SecurityContextHolder.getContext().getAuthentication();
		String username = currentUser.getName();
		RentACarAdmin admin = (RentACarAdmin) adminService.findByUsername(username);

		return admin;

	}

	@RequestMapping(value = "/api/getRentACarCompany", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	@CrossOrigin()
	@PreAuthorize("hasAuthority('RENT_ADMIN')")
	// Renturns profile of admins rent a car company
	public @ResponseBody RentACarProfileBean getRentACarCompany() throws Exception {

		RentACarAdmin admin = getAdmin();
		if (admin == null) {
			return null;
		}
		RentACarCompany rentACarService = admin.getService();

		return new RentACarProfileBean(rentACarService.getName(), rentACarService.getAddress(),
				rentACarService.getDescription());

	}

	@RequestMapping(value = "/api/updateRentACarProfile", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	@CrossOrigin()
	@PreAuthorize("hasAuthority('RENT_ADMIN')")

	// Updates profile of rent a car company and saves in database
	public void updateRentACarProfile(@RequestBody RentACarProfileBean profile) throws Exception {
		RentACarAdmin admin = getAdmin();
		RentACarCompany rentACarService = admin.getService();
		rentACarService.setName(profile.getName());
		rentACarService.setDescription(profile.getDescription());
		rentACarService.setAddress(profile.getAddress());
		companyService.save(rentACarService);
	}

	@RequestMapping(value = "/api/getRentACarCompanies", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
	@CrossOrigin()
	//Returns companies that match search criteria
	public @ResponseBody ArrayList<RentACarCompanySearchBean> getCompanies(
			@RequestBody RentACarCompanySearchBean search) throws Exception {
		List<RentACarCompany> companies = companyService.findAll();
		System.out.println(search.getDateTo());
		System.out.println(search.getDateFrom());
		ArrayList<RentACarCompany> foundCOmpanies = new ArrayList<>();
		for (RentACarCompany rentACarCompany : companies) {
			if ((rentACarCompany.getName().equals(search.getName()) || search.getName().equals(""))) {
				if (!search.getLocation().equals("")) {
					for (BranchOffice des : rentACarCompany.getOffices()) {
						if (des.getDestination().getName().equals(search.getLocation())) {
							if(hasVehicle(rentACarCompany,search.getDateFrom(),search.getDateTo())) {
								foundCOmpanies.add(rentACarCompany);
								break;
							}
							
						}
					}
				} else {
					if(hasVehicle(rentACarCompany,search.getDateFrom(),search.getDateTo())) {
						foundCOmpanies.add(rentACarCompany);
					}
				}
			}
		}
		ArrayList<RentACarCompanySearchBean> returnBean = new ArrayList<>();
		for (RentACarCompany rentACarCompany : foundCOmpanies) {
			ArrayList<BranchOfficeBean> locs = new ArrayList<>();
			for (BranchOffice office : rentACarCompany.getOffices()) {
				BranchOfficeBean be = new BranchOfficeBean(office.getName(), office.getAddress(), office.getDestination().getName());
				be.setId(office.getId());
				locs.add(be);
			}
			RentACarCompanySearchBean be = new RentACarCompanySearchBean(rentACarCompany.getName(), locs, rentACarCompany.getRating());
			be.setId(rentACarCompany.getId());
			returnBean.add(be);
		}
		return returnBean;
	}
	@RequestMapping(value = "/api/getAvaiableVehicles", method = RequestMethod.POST, produces= MediaType.APPLICATION_JSON_VALUE,consumes = MediaType.APPLICATION_JSON_VALUE)
	@CrossOrigin()
	//Returns vehicles that are avaiable for reservation in selected company
	public @ResponseBody ArrayList<VehicleSearchReturnBean>  getAvaiableVehicles(@RequestBody VehicleReservationSearchBean search) throws Exception { 
		ArrayList<VehicleSearchReturnBean> found = new ArrayList<>();
		ArrayList<Vehicle> vehicles = new ArrayList<>();
		RentACarCompany company = companyService.findOne(Long.parseLong(search.getId()));
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		String from = search.getDateFrom();
		String to = search.getDateTo();
		if(from.equals("") || to.equals("")) {
			vehicles.addAll(company.getVehicles());
		}
		else {
			Date fromDate = sdf.parse(from);
			Date toDate = sdf.parse(to);
			for (Vehicle vehicle : company.getVehicles()) {
				boolean isAvaiable = false;
				if (vehicle.getAvaiableFrom().before(fromDate) && vehicle.getAvaiableTo().after(toDate)) {
					isAvaiable = true;
					for (VehicleReservation reservation : vehicle.getReservations()) {
						if(!((toDate.before(reservation.getDateFrom()) && toDate.after(fromDate)) || 
								(fromDate.after(reservation.getDateTo()) && toDate.after(fromDate)))) {
							isAvaiable = false;
						}
					}
					if(isAvaiable) {
						vehicles.add(vehicle);
					}	
				}
			}
		}
		for (Vehicle vehicle : vehicles) {
			VehicleSearchReturnBean be = new VehicleSearchReturnBean(vehicle.getName(), vehicle.getMaker(), vehicle.getType(), vehicle.getYear(), vehicle.getPrice());
			be.setId(Long.toString(vehicle.getId()));
			found.add(be);
		}
		return found;
		
	}
	private RegisteredUser getRegisteredUser() {
		Authentication currentUser = SecurityContextHolder.getContext().getAuthentication();
		String username = currentUser.getName();
		RegisteredUser user = (RegisteredUser) userService.findOneByUsername(username);

		return user;
	}
	@RequestMapping(value = "/api/reserveVehicle", method = RequestMethod.POST, produces= MediaType.APPLICATION_JSON_VALUE,consumes = MediaType.APPLICATION_JSON_VALUE)
	@CrossOrigin()
	//Returns vehicles that are avaiable for reservation in selected company
	public @ResponseBody boolean reserveVehicle(@RequestBody VehicleReservationSearchBean search) throws Exception { 
		Vehicle vehicle = vehicleService.findOne(Long.parseLong(search.getId()));
		RegisteredUser user = getRegisteredUser();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		Date dateFrom = sdf.parse(search.getDateFrom());
		Date dateTo = sdf.parse(search.getDateTo());
		BranchOffice pick = bs.findOne(Long.parseLong(search.getOfficePick()));
		BranchOffice ret = bs.findOne(Long.parseLong(search.getOfficeReturn()));
		VehicleReservation reservation = new VehicleReservation(vehicle, user,new Date(), dateFrom, dateTo, (double)( (dateTo.getTime() - dateFrom.getTime()) / (1000 * 60 * 60 * 24)) * vehicle.getPrice() );
		reservation.setOfficePick(pick);
		reservation.setOfficeReturn(ret);
		reservationService.save(reservation);
		user.getVehicleReservations().add(reservation);
		vehicle.getReservations().add(reservation);
		
		userService.save(user);
		vehicleService.save(vehicle);
		reservationService.save(reservation);

		return true;
	}
	private boolean hasVehicle(RentACarCompany company,String from, String to) throws Exception {
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		if(from.equals("") || to.equals("")) {
			return true;
		}
		Date fromDate = sdf.parse(from);
		Date toDate = sdf.parse(to);
		for (Vehicle vehicle : company.getVehicles()) {
			boolean isAvaiable = false;
			if (vehicle.getAvaiableFrom().before(fromDate) && vehicle.getAvaiableTo().after(toDate)) {
				isAvaiable = true;
				for (VehicleReservation reservation : vehicle.getReservations()) {
					if(!((toDate.before(reservation.getDateFrom()) && toDate.after(fromDate)) || 
							(fromDate.after(reservation.getDateTo()) && toDate.after(fromDate)))) {
						isAvaiable = false;
					}
				}
				if(isAvaiable) {
					return true;
				}	
			}
		}
		return false;
	}
	@RequestMapping(value = "/api/addRentACarCompany", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
	@CrossOrigin()
	@PreAuthorize("hasAuthority('SYS_ADMIN')")
	public @ResponseBody ResponseEntity<RentACarCompany> addRentACarCompany(
			@RequestBody RentACarCompany rentACarCompany) {
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		if (!(authentication instanceof AnonymousAuthenticationToken)) {
			if (companyService.findByAddress(rentACarCompany.getAddress()) == null
					&& companyService.findByName(rentACarCompany.getName()) == null) {
				RentACarCompany r = (RentACarCompany) companyService.save(rentACarCompany);
				return new ResponseEntity<RentACarCompany>(r, HttpStatus.OK);
			} else {
				return new ResponseEntity<RentACarCompany>(rentACarCompany, HttpStatus.CONFLICT);
			}
		}
		return new ResponseEntity<RentACarCompany>(rentACarCompany, HttpStatus.CONFLICT);
	}

	@RequestMapping(value = "/api/removeRentACarCompany/{name}", method = RequestMethod.DELETE, produces = MediaType.APPLICATION_JSON_VALUE)
	@CrossOrigin()
	@PreAuthorize("hasAuthority('SYS_ADMIN')")
	public ResponseEntity<RentACarCompany> removeRentACarCompany(@PathVariable("name") String name) {

		RentACarCompany rentACarCompany = companyService.findByName(name);
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		if (!(authentication instanceof AnonymousAuthenticationToken)) {
			if (rentACarCompany == null) {
				return new ResponseEntity<RentACarCompany>(rentACarCompany, HttpStatus.CONFLICT);
			}

			companyService.remove(rentACarCompany.getId());
			return new ResponseEntity<RentACarCompany>(rentACarCompany, HttpStatus.OK);
		}
		return new ResponseEntity<RentACarCompany>(rentACarCompany, HttpStatus.CONFLICT);
	}

	@RequestMapping(value = "/api/getAllRentACars", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	@CrossOrigin()
	@PreAuthorize("hasAuthority('SYS_ADMIN')")
	public @ResponseBody ArrayList<RentACarCompany> getAllRentACars() throws Exception {
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		if (!(authentication instanceof AnonymousAuthenticationToken)) {
			ArrayList<RentACarCompany> racs = (ArrayList<RentACarCompany>) companyService.findAll();

			return racs;
		}
		return null;
	}

	/// Gets logged in user and his company. Creates vehicle from bean and adds it
	/// to company
	/// Saves company and vehicle in database
	@RequestMapping(value = "/api/addCar", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	@CrossOrigin()
	@PreAuthorize("hasAuthority('RENT_ADMIN')")
	public void addCar(@RequestBody AddVehicleBean vehicleBean) throws Exception {
		    RentACarAdmin admin =getAdmin();
		    RentACarCompany company = admin.getService();
		    Vehicle v = new Vehicle(vehicleBean.getName(), vehicleBean.getMaker(), vehicleBean.getType(), Integer.parseInt(vehicleBean.getYear()), Double.valueOf(vehicleBean.getPrice()));
		    SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		    v.setAvaiableFrom(sdf.parse(vehicleBean.getDateFrom()));
		    v.setAvaiableTo(sdf.parse(vehicleBean.getDateTo()));
		    company.getVehicles().add(v);
		    
		    vehicleService.save(v);
		    companyService.save(company);
	}
	//Admin edits vehicle
	@RequestMapping(value = "/api/editCar", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	@CrossOrigin()
	@PreAuthorize("hasAuthority('RENT_ADMIN')")
	public void editCar(@RequestBody EditVehicleBean vehicleBean) throws Exception {
		RentACarAdmin admin = getAdmin();
	    System.out.println(vehicleBean.getId());
	    Vehicle v = vehicleService.findOne(vehicleBean.getId());
	    v.setName(vehicleBean.getName());
	    v.setMaker(vehicleBean.getMaker());
	    v.setType(vehicleBean.getType()); 
	    v.setYear(Integer.parseInt(vehicleBean.getYear()));
	    v.setPrice(Double.valueOf(vehicleBean.getPrice()));
	    SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
	    v.setAvaiableFrom(sdf.parse(vehicleBean.getDateFrom()));
	    v.setAvaiableTo(sdf.parse(vehicleBean.getDateTo()));
	    vehicleService.save(v);		
	}

	@RequestMapping(value = "/api/removeCar/{id}", method = RequestMethod.DELETE)
	@CrossOrigin()
	@PreAuthorize("hasAuthority('RENT_ADMIN')")
	public void removeCar(@PathVariable Long id) throws Exception {
		vehicleService.remove(id);
	}
	@RequestMapping(value = "/api/getCarsByAdmin", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	@CrossOrigin()
	@PreAuthorize("hasAuthority('RENT_ADMIN')")
	public @ResponseBody ArrayList<EditVehicleBean> getCars() throws Exception {
	    RentACarAdmin admin = getAdmin();
	    RentACarCompany company = admin.getService();
	    Set<Vehicle> vehicles = company.getVehicles();
	    ArrayList<EditVehicleBean> vehiclesToReturn = new ArrayList<>();
	    for (Vehicle vehicle : vehicles) {
	    	EditVehicleBean eb = new EditVehicleBean();
	    	SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
	    	eb.setId(vehicle.getId());
	    	eb.setMaker(vehicle.getMaker());
	    	eb.setName(vehicle.getName());
	    	eb.setPrice(Double.toString(vehicle.getPrice()));
	    	eb.setType(vehicle.getType());
	    	eb.setYear(Integer.toString(vehicle.getYear()));
	    	try {
	    		eb.setDateFrom(sdf.format(vehicle.getAvaiableFrom()));
		    	eb.setDateTo(sdf.format(vehicle.getAvaiableTo()));
	    	}
	    	catch (Exception e) {
				eb.setDateFrom("");
				eb.setDateTo("");
			}
	    	
	    	vehiclesToReturn.add(eb);
		}
	    return vehiclesToReturn;
	    	
	}
	@RequestMapping(value = "/api/getOfficessByAdmin", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	@CrossOrigin()
	@PreAuthorize("hasAuthority('RENT_ADMIN')")
	//Returns list of officess that are owned by admins company
	public @ResponseBody ArrayList<BranchOfficeBean> getOfficess() throws Exception {
	    RentACarAdmin admin = getAdmin();
	    RentACarCompany company = admin.getService();
	    Set<BranchOffice> officess = company.getOffices();
	    ArrayList<BranchOfficeBean> officessToReturn = new ArrayList<>();
	    for (BranchOffice office : officess) {
	    	BranchOfficeBean ob = new BranchOfficeBean();
	    	ob.setId(office.getId());
	    	ob.setName(office.getName());
	    	ob.setAddress(office.getAddress());
	    	ob.setDestination(office.getDestination().getName());;
	    	officessToReturn.add(ob);
		}
	    return officessToReturn;
	    	
	}

	//Edits office, saves to database
	@RequestMapping(value = "/api/editOffice", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	@CrossOrigin()
	@PreAuthorize("hasAuthority('RENT_ADMIN')")
	public void editOffice(@RequestBody BranchOfficeBean officeBean) throws Exception {
		RentACarAdmin admin = getAdmin();
	    System.out.println(officeBean.getId());
	    BranchOffice o = bs.findOne(officeBean.getId());
	    o.setName(officeBean.getName());
	    o.setAddress(officeBean.getAddress());
	    o.setDestination(ds.findByName(officeBean.getDestination())); 
	    bs.save(o);		
	}
	
	//Adds officess to company , writes to database
	@RequestMapping(value = "/api/addOffice", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	@CrossOrigin()
	@PreAuthorize("hasAuthority('RENT_ADMIN')")
	public void addOffice(@RequestBody BranchOfficeBean bean) throws Exception {
		    RentACarAdmin admin =getAdmin();
		    RentACarCompany company = admin.getService();
		    Destination destination = ds.findByName(bean.getDestination());
		    BranchOffice bo = new BranchOffice(bean.getName(), bean.getAddress(), company, destination);
		    bs.save(bo);
		    companyService.save(company);
	}
	

}
