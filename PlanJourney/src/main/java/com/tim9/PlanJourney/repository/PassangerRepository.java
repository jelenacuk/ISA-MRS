package com.tim9.PlanJourney.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tim9.PlanJourney.models.flight.Passanger;

public interface PassangerRepository extends JpaRepository<Passanger, Long> {

}
