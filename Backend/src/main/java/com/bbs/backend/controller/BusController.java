package com.bbs.backend.controller;

import com.bbs.backend.model.Bus;
import com.bbs.backend.service.BusService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/buses")
public class BusController {

    private final BusService busService;

    // Constructor injection for BusService
    public BusController(BusService busService) {
        this.busService = busService;
    }

    @GetMapping
    public List<Bus> getBusesByLocation(
            @RequestParam int fromLocation, 
            @RequestParam int toLocation) {
                List<Bus> buses = busService.getBusesByLocation(fromLocation, toLocation);
                return buses;
    }
}


