package com.tim9.PlanJourney.controller;

import org.joda.time.DateTimeComparator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;


import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.tim9.PlanJourney.beans.DestinationBean;
import com.tim9.PlanJourney.beans.FlightBean;
import com.tim9.PlanJourney.models.Authority;
import com.tim9.PlanJourney.models.flight.Destination;
import com.tim9.PlanJourney.models.flight.Flight;
import com.tim9.PlanJourney.models.flight.FlightAdmin;
import com.tim9.PlanJourney.models.flight.FlightCompany;
import com.tim9.PlanJourney.models.flight.Seat;
import com.tim9.PlanJourney.models.flight.Ticket;
import com.tim9.PlanJourney.service.AuthorityService;
import com.tim9.PlanJourney.service.DestinationService;
import com.tim9.PlanJourney.service.FlightCompanyService;
import com.tim9.PlanJourney.service.SystemAdminService;
import com.tim9.PlanJourney.service.UserService;

@RestController
public class FlightCompanyController {

	@Autowired
	private FlightCompanyService flightCompanyService;
	@Autowired
	private DestinationService destinationService;
	@Autowired
	private UserService userService;
	@Autowired
	private AuthorityService authorityService;
	@Autowired
	private SystemAdminService sysService;
	
	static SimpleDateFormat sdf = new SimpleDateFormat("dd.MM.yyyy. HH:mm");

	@RequestMapping(value = "/api/getFlightCompanyProfile", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	@CrossOrigin()
	@PreAuthorize("hasAuthority('FLIGHT_ADMIN')")
	// Method returns flightCompany information
	public @ResponseBody FlightCompany getFlightCompanyProfile() throws Exception {

		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		if (!(authentication instanceof AnonymousAuthenticationToken)) {

			String username = authentication.getName();
			FlightAdmin user = (FlightAdmin) userService.findOneByUsername(username);
			FlightCompany flightCompany = user.getFlightCompany();
			if (flightCompany == null) {
				System.out.println("Flight admin doesnt't have flight company.");
				return null;
			}
			return flightCompany;
		}
		return null;
	}

	@RequestMapping(value = "/api/updateFlightCompanyProfile", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
	@PreAuthorize("hasAuthority('FLIGHT_ADMIN')")
	@CrossOrigin()
	// Method for updating flight company profile, returns flight company object
	public @ResponseBody FlightCompany updateFlightCompanyProfile(@RequestBody FlightCompany updatedFC)
			throws Exception {

		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		if (!(authentication instanceof AnonymousAuthenticationToken)) {

			String username = authentication.getName();
			FlightAdmin user = (FlightAdmin) userService.findOneByUsername(username);
			FlightCompany flightCompany = user.getFlightCompany();
			if (flightCompany == null) {
				System.out.println("Flight admin doesnt't have flight company.");
				return null;
			}
			// set new info
			flightCompany.setName(updatedFC.getName());
			flightCompany.setAddress(updatedFC.getAddress());
			flightCompany.setDescription(updatedFC.getDescription());
			// save to database
			flightCompanyService.save(flightCompany);
			return flightCompany;
		}
		return null;
	}

	@RequestMapping(value = "/api/addDestination", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	@CrossOrigin()
	@PreAuthorize("hasAuthority('FLIGHT_ADMIN')")
	// Method for adding new destination on which flight company operates
	public @ResponseBody Destination addDestination(@RequestBody DestinationBean destInfo) throws Exception {

		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		if (!(authentication instanceof AnonymousAuthenticationToken)) {

			String username = authentication.getName();
			FlightAdmin user = (FlightAdmin) userService.findOneByUsername(username);
			FlightCompany flightCompany = user.getFlightCompany();
			if (flightCompany == null) {
				System.out.println("Flight admin doesnt't have flight company.");
				return null;
			}
			Destination newDestination = new Destination(destInfo.getName(), destInfo.getDescription(),
					destInfo.getCoordinates());
			destinationService.save(newDestination);
			flightCompany.getDestinations().add(newDestination);
			// update flight company
			flightCompanyService.save(flightCompany);
			return newDestination;
		}
		return null;
	}

	@RequestMapping(value = "/api/getFlights", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	@CrossOrigin()
	@PreAuthorize("hasAuthority('FLIGHT_ADMIN')")
	// Method returns flight information
	public @ResponseBody ArrayList<FlightBean> getFlights() throws Exception {

		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		if (!(authentication instanceof AnonymousAuthenticationToken)) {

			String username = authentication.getName();
			FlightAdmin user = (FlightAdmin) userService.findOneByUsername(username);
			FlightCompany flightCompany = user.getFlightCompany();
			if (flightCompany == null) {
				System.out.println("Flight admin doesnt't have flight company.");
				return null;
			}
			ArrayList<FlightBean> flights = new ArrayList<>();
			for (Flight f : flightCompany.getFlights()) {
				flights.add(new FlightBean(f,"", sdf.format(f.getStartDate()), sdf.format(f.getEndDate())));
			}
			return flights;
		}
		return null;
	}

	@RequestMapping(value = "/api/getDestinations", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	@CrossOrigin()
	@PreAuthorize("hasAuthority('FLIGHT_ADMIN')")
	// Method returns list of destinations on which flight company operates
	public @ResponseBody ArrayList<Destination> getDestinations() throws Exception {

		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		if (!(authentication instanceof AnonymousAuthenticationToken)) {

			String username = authentication.getName();
			FlightAdmin user = (FlightAdmin) userService.findOneByUsername(username);
			FlightCompany flightCompany = user.getFlightCompany();
			if (flightCompany == null) {
				System.out.println("Flight admin doesnt't have flight company.");
				return null;
			}
			ArrayList<Destination> destinations = new ArrayList<>();
			for (Destination d : flightCompany.getDestinations()) {
				destinations.add(d);
			}
			return destinations;
		}
		return null;
	}

	@RequestMapping(value = "/api/flightsInCompany", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	@CrossOrigin()
	@PreAuthorize("hasAuthority('FLIGHT_ADMIN')")
	// Method for searching flights in flight company
	public @ResponseBody ArrayList<FlightBean> flightsInCompany(@RequestBody FlightBean search) throws Exception {

		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		if (!(authentication instanceof AnonymousAuthenticationToken)) {

			String username = authentication.getName();
			FlightAdmin user = (FlightAdmin) userService.findOneByUsername(username);
			FlightCompany flightCompany = user.getFlightCompany();
			if (flightCompany == null) {
				System.out.println("Flight admin doesnt't have flight company.");
				return null;
			}
			ArrayList<FlightBean> foundFlights = new ArrayList<>();
			DateTimeComparator dateTimeComparator = DateTimeComparator.getDateOnlyInstance();
			for (Flight f : flightCompany.getFlights()) {
				if ( (f.getStartDestination().getName().equals(search.getStartDestination()) || search.getStartDestination().equals(""))
						&& (f.getEndDestination().getName().equals(search.getEndDestination()) || search.getEndDestination().equals(""))
						&& (f.getEconomicPrice() >= search.getMinEconomic() || (search.getMinEconomic() == 0))
						&& (f.getBusinessPrice() >= search.getMinBusiness() || (search.getMinBusiness() == 0))
						&& (f.getFirstClassPrice() >= search.getMinFirstClass() || (search.getMinFirstClass() == 0))
						&& (f.getEconomicPrice() <= search.getMaxEconomic() || (search.getMaxEconomic() == 0))
						&& (f.getBusinessPrice() <= search.getMaxBusiness() || (search.getMaxBusiness() == 0))
						&& (f.getFirstClassPrice() <= search.getMaxFirstClass() || (search.getMaxFirstClass() == 0))
						&& (f.getFlightDuration() == search.getFlightDuration() || search.getFlightDuration() == 0)
						&& (f.getFlightLength() == search.getFlightLength() || search.getFlightLength() == 0)
						&& ( search.getStartDate()==null || dateTimeComparator.compare(f.getStartDate(),search.getStartDate()) == 0) 
						&& (search.getEndDate() == null  || dateTimeComparator.compare(f.getEndDate(),search.getEndDate()) == 0)
						)
							 {
					foundFlights.add(new FlightBean(f,"", sdf.format(f.getStartDate()), sdf.format(f.getEndDate())));
				}
			}
			return foundFlights;
		}
		return null;
	}
	
	@RequestMapping(value = "/api/searchFlightCompanies/{companyName}", method = RequestMethod.GET,   produces = MediaType.APPLICATION_JSON_VALUE)
	@CrossOrigin()
	// Method for searching flight companies 
	public @ResponseBody ArrayList<FlightCompany> searchFlightCompanies(@PathVariable("companyName") String companyName) throws Exception {
		
		ArrayList<FlightCompany> companies = (ArrayList<FlightCompany>) flightCompanyService.findAll();
		ArrayList<FlightCompany> found = new ArrayList<FlightCompany>();
		if (companyName.equals("-")) {
			return companies;
		}
		for (FlightCompany c : companies) {
			if ( c.getName().equalsIgnoreCase(companyName)) {
				found.add(c);
			}
		}
		System.out.println("\t pronasao je: " + found.size());
		return found;
	}
	
	// Method puts some test data into database
	@RequestMapping(value = "/api/testFlightData", method = RequestMethod.GET)
	@CrossOrigin()
	public void testData() throws Exception {

		Destination destinatinon1 = new Destination("Moscow", "description", "coords");
		Destination destinatinon2 = new Destination("Belgrade", "description", "coords");
		Destination destinatinon3 = new Destination("Paris", "description", "coords");
		Destination destinatinon4 = new Destination("New York", "description", "coords");
		Set<Destination> destinations = new HashSet<Destination>();
		destinations.add(destinatinon1);
		destinations.add(destinatinon2);
		destinations.add(destinatinon3);
		destinations.add(destinatinon4);
		
		Set<Seat> seats1 = new HashSet<Seat>();
		makeSeats(seats1, "6|4", "economic");
		makeSeats(seats1, "5|4", "business");
		makeSeats(seats1, "3|4", "first class");
		
		Set<Seat> seats2 = new HashSet<Seat>();
		makeSeats(seats2, "7|4", "economic");
		makeSeats(seats2, "5|4", "business");
		makeSeats(seats2, "3|3", "first class");

		Flight flight1 = new Flight(new Date(), new Date(), 3, 6000, destinatinon1, destinatinon2,
				new HashSet<Ticket>(), seats1, 100, 120, 140);
		Flight flight2 = new Flight(new Date(), new Date(), 5, 3000, destinatinon3, destinatinon4,
				new HashSet<Ticket>(), seats2, 546, 151, 84);
		Set<Flight> flights = new HashSet<Flight>();
		flights.add(flight1);
		flights.add(flight2);
		FlightCompany fc = new FlightCompany("Avio", "address", "description", 0, new HashSet<FlightAdmin>(),
				destinations, flights, new HashSet<Ticket>());
		flightCompanyService.save(fc);
		BCryptPasswordEncoder bc = new BCryptPasswordEncoder();
		FlightAdmin flightAdmin = new FlightAdmin("mira", bc.encode("miric"), "Mira", "Miric", "mira@gmail.com");
		Authority authority = (Authority) authorityService.findOne(2l);
		ArrayList<Authority> authorities = new ArrayList<>();
		authorities.add(authority);
		flightAdmin.setAuthorities(authorities);
		flightAdmin.setFlightCompany(fc);
		userService.save(flightAdmin);
	}
	
	private Set<Seat> makeSeats(Set<Seat> seats, String capacity, String flightClass) {
		int rows = Integer.parseInt(capacity.split("|")[0]);
		int columns = Integer.parseInt(capacity.split("|")[2]);
		for (int row = 1; row <= rows; row++) {
			for (int col = 1; col <= columns; col++) {
				seats.add(new Seat(false, row, col, flightClass));
			}
		}
		return seats;
	}

	@RequestMapping(value = "/api/addFlightCompany", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
	@CrossOrigin()
	@PreAuthorize("hasAuthority('SYS_ADMIN')")
	public @ResponseBody ResponseEntity<FlightCompany> addFlightCompany(@RequestBody FlightCompany flightCompany) {
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		if (!(authentication instanceof AnonymousAuthenticationToken)) {
			if (flightCompanyService.findByAddress(flightCompany.getAddress()) == null
					&& flightCompanyService.findByName(flightCompany.getName()) == null) {
				FlightCompany f = (FlightCompany) flightCompanyService.save(flightCompany);
				return new ResponseEntity<FlightCompany>(f, HttpStatus.OK);
			} else {
				return new ResponseEntity<FlightCompany>(flightCompany, HttpStatus.CONFLICT);
			}
		}
		return new ResponseEntity<FlightCompany>(flightCompany, HttpStatus.CONFLICT);
	}

	@RequestMapping(value = "/api/removeFlightCompany/{name}", method = RequestMethod.DELETE, produces = MediaType.APPLICATION_JSON_VALUE)
	@CrossOrigin()
	@PreAuthorize("hasAuthority('SYS_ADMIN')")
	public ResponseEntity<FlightCompany> removeFlightCompany(@PathVariable("name") String name) {

		FlightCompany flightCompany = flightCompanyService.findByName(name);
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		if (!(authentication instanceof AnonymousAuthenticationToken)) {
			if (flightCompany == null) {
				return new ResponseEntity<FlightCompany>(flightCompany, HttpStatus.CONFLICT);
			}

			flightCompanyService.remove(flightCompany.getId());
			return new ResponseEntity<FlightCompany>(flightCompany, HttpStatus.OK);
		}
		return new ResponseEntity<FlightCompany>(flightCompany, HttpStatus.CONFLICT);
	}

	@RequestMapping(value = "/api/getAllFlightCompanies", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	@CrossOrigin()
	@PreAuthorize("hasAuthority('SYS_ADMIN')")
	public @ResponseBody ArrayList<FlightCompany> getAllFlightCompanies() throws Exception {
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		if (!(authentication instanceof AnonymousAuthenticationToken)) {
			ArrayList<FlightCompany> fcs = (ArrayList<FlightCompany>) flightCompanyService.findAll();

			return fcs;
		}
		return null;
	}

}
