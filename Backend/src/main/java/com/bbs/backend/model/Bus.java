package com.bbs.backend.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.*;

@Entity
@Table(name = "bus_details")
public class Bus {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "bus_id")
    private Long busId;

    @Column(name = "bus_name")
    private String busName;

    @Column(name = "departure_time")
    private String departureTime;

    @Column(name = "arrival_time")
    private String arrivalTime;

    @Column(name = "total_seats")
    private int totalSeats;

    @Column(name = "available_seats")
    private int availableSeats;

    @Column(name = "price")
    private double price;

    @Column(name = "from_location")
    private int fromLocation;

    @Column(name = "to_location")
    private int toLocation;

    @Column(name = "date")
    private String date;

    // Getter and Setter for busId
    @JsonProperty("busId")
    public Long getBusId() {
        return busId;
    }

    public void setBusId(int busId) {
        this.busId = (long) busId;
    }

    // Getter and Setter for busName
    @JsonProperty("busName")
    public String getBusName() {
        return busName;
    }

    public void setBusName(String busName) {
        this.busName = busName;
    }

    // Getter and Setter for departureTime
    @JsonProperty("departureTime")
    public String getDepartureTime() {
        return departureTime;
    }

    public void setDepartureTime(String departureTime) {
        this.departureTime = departureTime;
    }

    // Getter and Setter for arrivalTime
    @JsonProperty("arrivalTime")
    public String getArrivalTime() {
        return arrivalTime;
    }

    public void setArrivalTime(String arrivalTime) {
        this.arrivalTime = arrivalTime;
    }

    // Getter and Setter for totalSeats
    @JsonProperty("totalSeats")
    public int getTotalSeats() {
        return totalSeats;
    }

    public void setTotalSeats(int totalSeats) {
        this.totalSeats = totalSeats;
    }

    // Getter and Setter for availableSeats
    @JsonProperty("availableSeats")
    public int getAvailableSeats() {
        return availableSeats;
    }

    public void setAvailableSeats(int availableSeats) {
        this.availableSeats = availableSeats;
    }

    // Getter and Setter for price
    @JsonProperty("price")
    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    // Getter and Setter for fromLocation
    @JsonProperty("fromLocation")
    public int getFromLocation() {
        return fromLocation;
    }

    public void setFromLocation(int fromLocation) {
        this.fromLocation = fromLocation;
    }

    // Getter and Setter for toLocation
    @JsonProperty("toLocation")
    public int getToLocation() {
        return toLocation;
    }

    public void setToLocation(int toLocation) {
        this.toLocation = toLocation;
    }

    // Getter and Setter for date
    @JsonProperty("date")
    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }
    @Override
    public String toString() {
        return "Bus{" +
                "busId=" + busId +
                ", busName='" + busName + '\'' +
                ", departureTime=" + departureTime +
                ", arrivalTime=" + arrivalTime +
                ", totalSeats=" + totalSeats +
                ", availableSeats=" + availableSeats +
                ", price=" + price +
                ", fromLocation=" + fromLocation +
                ", toLocation=" + toLocation +
                ", date=" + date +
                '}';
    }
}
