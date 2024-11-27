package com.bbs.backend.repository;

import com.bbs.backend.model.Bus;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface BusRepository extends JpaRepository<Bus, Long> {

    // Find buses by the 'from' and 'to' locations
    List<Bus> findByFromLocationAndToLocation(String fromLocation, String toLocation);
}
