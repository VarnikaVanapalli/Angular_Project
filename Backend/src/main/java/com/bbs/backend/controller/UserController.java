package com.bbs.backend.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.bbs.backend.model.LoginRequest;
import com.bbs.backend.model.RegisterRequest;
import com.bbs.backend.model.User;
import com.bbs.backend.service.UserService;

@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    private UserService userService;

    // Endpoint to authenticate user
   @PostMapping("/login")
public ResponseEntity<?> login(@RequestBody User userDetails) {
    User user = userService.authenticateUser(userDetails.getUserName(), userDetails.getUserPassword());
    
    if (user != null) {
        return ResponseEntity.ok(new LoginResponse("Login successful", user));
    } else {
        return ResponseEntity.status(401).body("Invalid username or password");
    }
}


    // Endpoint to register a new user
    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody User user) {
        try {
            // Call the service method to register the user
            User registeredUser=userService.registerUser(user);
            return ResponseEntity.ok(registeredUser);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Registration failed");
        }
    }
    public static class LoginResponse {
        private String message;
        private User user;

        public LoginResponse(String message, User user) {
            this.message = message;
            this.user = user;
        }

        // Getters and setters
        public String getMessage() {
            return message;
        }

        public void setMessage(String message) {
            this.message = message;
        }

        public User getUser() {
            return user;
        }

        public void setUser(User user) {
            this.user = user;
        }
    }
}
