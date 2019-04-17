package com.tim9.PlanJourney.models.flight;

import java.util.Collection;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

import org.springframework.security.core.GrantedAuthority;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.tim9.PlanJourney.models.User;

@Entity
public class FlightAdmin extends User {
	
	@ManyToOne()
	@JsonIgnoreProperties("flightAdmins")
	FlightCompany flightCompany;
	
	
	public FlightAdmin() {
	}
	
	
	public FlightAdmin( String username, String password, String firstName, String lastName, String email) {
		super(username,password,firstName,lastName,email);
	}
	
	public FlightAdmin( String username, String password, String firstName, String lastName, String email, FlightCompany fc) {
		super(username,password,firstName,lastName,email);
		this.flightCompany = fc;
	}


	public FlightCompany getFlightCompany() {
		return flightCompany;
	}


	public void setFlightCompany(FlightCompany flightCompany) {
		this.flightCompany = flightCompany;
	}


	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		// TODO Auto-generated method stub
		return null;
	}


	@Override
	public boolean isAccountNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}


	@Override
	public boolean isAccountNonLocked() {
		// TODO Auto-generated method stub
		return true;
	}


	@Override
	public boolean isCredentialsNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}


	@Override
	public boolean isEnabled() {
		// TODO Auto-generated method stub
		return true;
	}
	
	

}
