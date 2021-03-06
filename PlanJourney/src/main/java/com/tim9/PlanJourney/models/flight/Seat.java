package com.tim9.PlanJourney.models.flight;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Version;

@Entity
@Table(name = "seat")
public class Seat {
	
	@Id
	@GeneratedValue
	private Long id;
	
	@Column(name = "taken", unique = false, nullable = false)
	private boolean taken;
	
	@Column(name = "SeatRow", unique = false, nullable = false)
	private int SeatRow;
	
	@Column(name = "SeatColumn", unique = false, nullable = false)
	private int SeatColumn;
	
    @Column(name = "travelClassa")
	private String travelClassa;
    
    @Column(name = "active", unique = false, nullable = false)
	private boolean active;
    
    @Column(name = "unavailable", unique = false, nullable = false)
   	private boolean unavailable;
    
    @Column(name = "quick", unique = false, nullable = false)
   	private boolean quick;
    
    @Version
    private Long version;
	
	
	public Seat() {
		this.active = false;
		this.unavailable = false;
		this.quick = false;
		this.version = 0L;
		this.taken = false;
	}

	
	public Seat(boolean taken, int seatRow, int seatColumn, String travelClassa) {
		super();
		this.taken = taken;
		SeatRow = seatRow;
		SeatColumn = seatColumn;
		this.travelClassa = travelClassa;
		this.active = false;
		this.unavailable = false;
		this.quick = false;
		this.version = 0L;
	}


	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	

	public boolean isTaken() {
		return taken;
	}

	public void setTaken(boolean taken) {
		this.taken = taken;
	}

	public int getSeatRow() {
		return SeatRow;
	}

	public void setSeatRow(int seatRow) {
		SeatRow = seatRow;
	}

	public int getSeatColumn() {
		return SeatColumn;
	}

	public void setSeatColumn(int seatColumn) {
		SeatColumn = seatColumn;
	}

	public String getTravelClassa() {
		return travelClassa;
	}

	public void setTravelClassa(String travelClassa) {
		this.travelClassa = travelClassa;
	}


	public boolean isActive() {
		return active;
	}


	public void setActive(boolean active) {
		this.active = active;
	}


	public boolean isUnavailable() {
		return unavailable;
	}


	public void setUnavailable(boolean unavailable) {
		this.unavailable = unavailable;
	}


	public boolean isQuick() {
		return quick;
	}


	public void setQuick(boolean quick) {
		this.quick = quick;
	}


	public Long getVersion() {
		return version;
	}


	public void setVersion(Long version) {
		this.version = version;
	}


	

	

	
	
	

}
