package com.bbs.backend.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "locations")
public class Location {

    @Id
    @Column(name ="l_id")
    private Long id;

    @Column(name = "l_n") // Match the column name in the table
    private String name;

    // Getters and Setters
    public Long getId() {
        return (long) id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
