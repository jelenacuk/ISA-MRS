package com.tim9.PlanJourney.beans;

public class RentACarProfileBean {
	private String name;
	private String address;
	private String description;
	public RentACarProfileBean() {
		super();
	}
	
	public RentACarProfileBean(String name, String address, String description) {
		super();
		this.name = name;
		this.address = address;
		this.description = description;
	}

	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	
	
}
