package com.swann.taskmaster.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.swann.taskmaster.models.User;

@RestController
public class RegisterController {

    private final userRepository userRepository;

    public RegisterController(userRepository userRepository) {
        this.userRepository = userRepository;
    }

    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody User user) {
        if (user == null || user.getEmail() == null || user.getPassword() == null) {
            return ResponseEntity.badRequest().body("Invalid user details");
        }

        // check if user already exists
        if (userRepository.findByEmail(user.getEmail()) != null) {
            return ResponseEntity.badRequest().body("User already exists");
        }

        // create user and save to database
        userRepository.save(user);

        return ResponseEntity.ok("User registered successfully");
    }
}
