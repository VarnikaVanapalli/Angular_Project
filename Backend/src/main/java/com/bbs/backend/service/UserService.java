package com.bbs.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bbs.backend.model.User;
import com.bbs.backend.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    // Method to authenticate the user
    public User authenticateUser(String userName, String password) {
    // Find user by userName
        User user = userRepository.findByUserName(userName);
        
        if (user != null && user.getUserPassword().equals(password)) {
            return user; // Authentication successful
        } else {
            return null; // Authentication failed
        }
    }


    // Method to register a new user
    public User registerUser(User user) {
        if (userRepository.existsByUserName(user.getUserName())) {
            return null; // User already exists
        }
    
        if (user.getUserPassword() == null || user.getUserPassword().isEmpty()) {
            throw new IllegalArgumentException("Password cannot be null or empty");
        }
    
        User newUser = new User();
        newUser.setUserName(user.getUserName());
        newUser.setUserPassword(user.getUserPassword()); // Directly setting the password
    
        return userRepository.save(newUser); // Save new user to database
    }
    
}
