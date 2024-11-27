package com.bbs.backend.repository;

import com.bbs.backend.model.Location;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface LocationRepository extends JpaRepository<Location, Long> {
    // Find all locations
    @SuppressWarnings("null")
    List<Location> findAll();
}
