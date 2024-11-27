package com.bbs.backend.service;

import com.bbs.backend.model.Location;
import com.bbs.backend.repository.LocationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LocationService {

    @Autowired
    private LocationRepository locationRepository;

    // Method to fetch all locations
    public List<Location> getAllLocations() {
        return locationRepository.findAll();
    }
}
