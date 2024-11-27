package com.bbs.backend.service;

import com.bbs.backend.model.Bus;
import com.bbs.backend.repository.BusRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class BusService {

    @Autowired
    private BusRepository busRepository;

    public  List<Bus> getBusesByLocation(int fromLocation, int toLocation) {
        List<Bus> buses = busRepository.findByFromLocationAndToLocation(fromLocation, toLocation);
        System.out.println("Fetched buses: " + buses); // Debugging line
        return buses;
    }
}

