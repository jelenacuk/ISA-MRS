package com.tim9.PlanJourney.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tim9.PlanJourney.models.Vehicle;

public interface VehicleRepository extends JpaRepository<Vehicle, Long>  {

}
