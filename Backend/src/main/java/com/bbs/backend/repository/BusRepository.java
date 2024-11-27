package com.bbs.backend.repository;

import com.bbs.backend.model.Bus;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface BusRepository extends JpaRepository<Bus, Long> {

    // Method to fetch buses by from_location and to_location
    List<Bus> findByFromLocationAndToLocation(int fromLocation, int toLocation);
}
