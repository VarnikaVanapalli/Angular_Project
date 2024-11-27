package com.bbs.backend.controller;

import com.bbs.backend.model.Bus;
import com.bbs.backend.repository.BusRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class BusController {

    @Autowired
    private BusRepository busRepository;

    @GetMapping("/buses")
    public List<Bus> getBuses(@RequestParam String fromLocation, @RequestParam String toLocation) {
        return busRepository.findByFromLocationAndToLocation(fromLocation, toLocation);
    }
}
