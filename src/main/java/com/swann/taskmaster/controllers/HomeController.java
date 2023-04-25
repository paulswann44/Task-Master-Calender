package com.swann.taskmaster.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

// todo: make this @Controller
@RestController
public class HomeController {
    @GetMapping("/")
    public String home(){
        // todo: make this forward:"/home.html"
        return "This is home page";
    }


}

