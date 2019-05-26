package com.tim9.PlanJourney.controller;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.tim9.PlanJourney.beans.FlightBean;
import com.tim9.PlanJourney.beans.FlightReservationBean;
import com.tim9.PlanJourney.beans.FrontFlightReservationBean;
import com.tim9.PlanJourney.beans.PassangerBean;
import com.tim9.PlanJourney.beans.QuickFlightReservationBean;
import com.tim9.PlanJourney.beans.ReservationRequestBean;
import com.tim9.PlanJourney.hotel.HotelReservation;
import com.tim9.PlanJourney.models.RegisteredUser;
import com.tim9.PlanJourney.models.Review;
import com.tim9.PlanJourney.models.flight.Flight;
import com.tim9.PlanJourney.models.flight.FlightReservation;
import com.tim9.PlanJourney.models.flight.Passanger;
import com.tim9.PlanJourney.models.flight.QuickFlightReservation;
import com.tim9.PlanJourney.models.flight.Seat;
import com.tim9.PlanJourney.models.rentacar.VehicleReservation;
import com.tim9.PlanJourney.service.EmailService;
import com.tim9.PlanJourney.service.FlightCompanyService;
import com.tim9.PlanJourney.service.FlightReservationService;
import com.tim9.PlanJourney.service.FlightService;
import com.tim9.PlanJourney.service.HotelReservationService;
import com.tim9.PlanJourney.service.PassangerService;
import com.tim9.PlanJourney.service.QuickFlightReservationService;
import com.tim9.PlanJourney.service.RegisteredUserService;
import com.tim9.PlanJourney.service.SeatService;
import com.tim9.PlanJourney.service.VehicleReservationService;

@RestController
public class flightReservationController {

	@Autowired
	private FlightReservationService reservationService;
	@Autowired
	private EmailService emailService;
	@Autowired
	private RegisteredUserService registeredUserService;
	@Autowired
	private FlightService flightService;
	@Autowired
	private SeatService seatService;
	@Autowired
	private PassangerService passangerService;
	@Autowired
	private QuickFlightReservationService quickReservationService;
	@Autowired
	private VehicleReservationService vehicleReservationService;
	@Autowired
	private HotelReservationService hotelReservationService;
	@Autowired
	private FlightCompanyService flightCompanyService;
	
	static SimpleDateFormat sdf = new SimpleDateFormat("dd.MM.yyyy. HH:mm");
	
	@RequestMapping(value = "/api/getMyReservations", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	@CrossOrigin()
	@PreAuthorize("hasAuthority('REGISTERED')")
	public @ResponseBody ArrayList<FrontFlightReservationBean> getMyReservations() {

		RegisteredUser loggedUser = getLoggedRegisteredUser();
		if (loggedUser == null) {
			return null;
		}
		ArrayList<FrontFlightReservationBean> toReturn = new ArrayList<>();
		ArrayList<FlightReservation> reservations = new ArrayList<>();
		reservations.addAll(loggedUser.getFlightReservations());
		for (FlightReservation flightReservation : reservations) {
			
			FrontFlightReservationBean ffrb = new FrontFlightReservationBean(flightReservation.getId(),
					flightReservation.getFlight().getStartDestination().getName(),
					flightReservation.getFlight().getEndDestination().getName(),
					sdf.format(flightReservation.getFlight().getStartDate()),
					sdf.format(flightReservation.getFlight().getEndDate()),
					flightReservation.getSeat().getTravelClassa(),
					flightReservation.getPrice(),
					flightReservation.getPassangers().size(),
					0,flightReservation.getSeat().getSeatRow(),flightReservation.getSeat().getSeatColumn());
					Set<Review> reviews = flightReservation.getReservationReviews();
			for (Review r : reviews) {
				if (r.getUser().getUsername().equals(loggedUser.getUsername())) {
					ffrb.setRating(r.getRating());
				}
			}
			toReturn.add(ffrb);
		}
		return toReturn;
	}
	
	@RequestMapping(value = "/api/getFlightReservation/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	@CrossOrigin()
	@PreAuthorize("hasAuthority('REGISTERED')")
	public @ResponseBody FlightReservationBean getReservation(@PathVariable("id") Long id) {
		System.out.println("\t" + id );
		RegisteredUser loggedUser = getLoggedRegisteredUser();
		if (loggedUser == null) {
			return null;
		}
		FlightReservation reservation = reservationService.findOne(id);
		if (reservation == null) {
			return null;
		}
		FlightBean flight = new FlightBean(reservation.getFlight(),"", sdf.format(reservation.getFlight().getStartDate()),sdf.format(reservation.getFlight().getEndDate()));
		return new FlightReservationBean(flight, reservation.getPassangers(), reservation.getPrice(), sdf.format(reservation.getDate()));
	}
	
	@RequestMapping(value = "/api/getReservationRequest/{requestId}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	@CrossOrigin()
	public @ResponseBody FlightReservation getReservationRequest(@PathVariable("requestId") Long requestId) {

		FlightReservation request = reservationService.findOne(requestId);
		return request;
	}
	
	@RequestMapping(value = "/api/makeFlightReservation", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	@CrossOrigin()
	@PreAuthorize("hasAuthority('REGISTERED')")
	public @ResponseBody String makeReservation(@RequestBody FlightReservationBean reservationBean)  {

		RegisteredUser loggedUser = getLoggedRegisteredUser();
		if (loggedUser == null) {
			return null;
		}
		Flight flight = flightService.findOne(reservationBean.getFlightId());
		double total = reservationBean.getPassangers().get(0).getPrice();
		Seat main_seat = seatService.findOne(reservationBean.getPassangers().get(0).getSeatId());
		main_seat.setTaken(true);
		seatService.save(main_seat);
		
		ArrayList<Seat> seats = new ArrayList<>();
		ArrayList<RegisteredUser> friends = new ArrayList<>();
		ArrayList<Passanger> passangersList = new ArrayList<>();
		reservationBean.getPassangers().get(0).setFirstName(loggedUser.getFirstName());
		reservationBean.getPassangers().get(0).setFirstName(loggedUser.getLastName());
		
		Set<Passanger> passangers = new HashSet<>();
		Set<HotelReservation> hotelReservations = getHotelReservations(reservationBean.getHotelReservations());
		Set<VehicleReservation> vehicleReservations = getRentReservations(reservationBean.getRentReservations());
		
		for (PassangerBean passanger : reservationBean.getPassangers()) {
			
			total += passanger.getPrice();
			Seat seat = seatService.findOne(passanger.getSeatId());
			seat.setTaken(true);
			seats.add(seat);
			Passanger pass = null;
			if (passanger.getFriendId() != -1) {
				RegisteredUser friend = registeredUserService.findOne(passanger.getFriendId());
				friends.add(friend);
				pass = new Passanger( passanger.getFirstName(), passanger.getLastName(), passanger.getPassport(), seat,  friend, passanger.getPrice());
			}
			else {
				pass = new Passanger( passanger.getFirstName(), passanger.getLastName(), passanger.getPassport(), seat,  null, passanger.getPrice());
			}
			passangersList.add(pass);
			passangers.add(pass);
		}
		seatService.saveAll(seats);
		passangerService.saveAll(passangersList);
		
		FlightReservation reservation = new FlightReservation(loggedUser, main_seat, passangers, flight, total, new Date(), false, hotelReservations, vehicleReservations);
		flight.getFlightCompany().getFlightReservation().add(reservation);
		reservation.setCompany(flight.getFlightCompany());
		reservationService.save(reservation);
		flightCompanyService.save(flight.getFlightCompany());
		for (RegisteredUser friend: friends) {
			try {
				emailService.sendReservationRequest(friend, reservation.getId());

			} catch (Exception e) {
				System.out.println("Error while sending email: " + e.getMessage());
			}
		}
		try {
			emailService.sendReservationMade(reservation);

		} catch (Exception e) {

			System.out.println("Error while sending email: " + e.getMessage());
			return "Reservation is made but we didn't succeed to send the email!";
		}
		return "success";
	}
	
	private Set<HotelReservation> getHotelReservations(ArrayList<Long> ids){
		Set<HotelReservation> retVal = new HashSet<HotelReservation>();
		if (ids.size() == 0) {
			return retVal;
		}
		for (Long id : ids) {
			retVal.add(hotelReservationService.findOne(id));
		}
		return retVal;
	}
	
	private Set<VehicleReservation> getRentReservations(ArrayList<Long> ids){
		Set<VehicleReservation> retVal = new HashSet<VehicleReservation>();
		if (ids.size() == 0) {
			return retVal;
		}
		for (Long id : ids) {
			retVal.add(vehicleReservationService.findOne(id));
		}
		return retVal;
	}
	
	@RequestMapping(value = "/api/makeQuickReservation", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	@CrossOrigin()
	@PreAuthorize("hasAuthority('REGISTERED')")
	public @ResponseBody String makeQuickReservation(@RequestBody QuickFlightReservationBean reservationBean)  {

		RegisteredUser loggedUser = getLoggedRegisteredUser();
		if (loggedUser == null) {
			return "You are not logged in!";
		}
		Flight flight = flightService.findOne(reservationBean.getFlightId());
		double originPrice = reservationBean.getOriginPrice();
		double discount = reservationBean.getDiscount();
		Seat main_seat = seatService.findOne(reservationBean.getSeatId());
		main_seat.setTaken(true);
		main_seat.setQuick(false);
		seatService.save(main_seat);
		double total = originPrice * discount/100;
		FlightReservation reservation = new FlightReservation(loggedUser, main_seat, new HashSet<Passanger>(), flight, total, new Date(), true, new HashSet<>(),  new HashSet<>() );
		QuickFlightReservation quick = quickReservationService.findOne(reservationBean.getId());
		quick.setTaken(true);
		quickReservationService.save(quick);
		reservationService.save(reservation);
		try {
			emailService.sendReservationMade(reservation);

		} catch (Exception e) {

			System.out.println("Error while sending email: " + e.getMessage());
			return "Reservation is made, but we didn'y succeed to send e-mail about details!";
		}
		return "success";
	}

	
	@RequestMapping(value = "/api/confirmReservationRequest/{requestId}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	@CrossOrigin()
	public @ResponseBody FlightReservation confirmReservationRequest(@PathVariable("requestId") Long requestId) {

		FlightReservation request = reservationService.findOne(requestId);
		request.setConfirmed(true);
		reservationService.save(request);
		return request;
	}
	
	@RequestMapping(value = "/api/refuseReservationRequest", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	@CrossOrigin()
	public @ResponseBody String refuseReservationRequest(@RequestBody ReservationRequestBean request) {
		
		RegisteredUser logged = registeredUserService.findByUsername(request.getUsername());
		if (logged == null) {
			return "This username doesn't exist!";
		}
		FlightReservation reservation = reservationService.findOne(request.getRequestId());
		for (Passanger passanger : reservation.getPassangers()) {
			if (passanger.getFriend() != null) {
				if (passanger.getFriend().getId() == logged.getId() ) {
					passanger.getSeat().setTaken(false);
					seatService.save(passanger.getSeat());
					reservation.setPrice(reservation.getPrice() - passanger.getPrice());
					reservation.getPassangers().remove(passanger);
					reservationService.save(reservation);
					return "success";
				}
			}
		}
		return "It's not your reservation";
	}
	
	private RegisteredUser getLoggedRegisteredUser() {

		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		if (!(authentication instanceof AnonymousAuthenticationToken)) {
			String username = authentication.getName();
			RegisteredUser user = (RegisteredUser) registeredUserService.findByUsername(username);
			return user;
		}
		return null;
	}
	
	private double findPrice(Flight f, Seat s) {
		
		if (s.getTravelClassa() == "economic") {
			return f.getEconomicPrice();
		}
		else if (s.getTravelClassa() == "business") {
			return f.getBusinessPrice();
		}
		else {
			return f.getFirstClassPrice();
		}
	}

}
