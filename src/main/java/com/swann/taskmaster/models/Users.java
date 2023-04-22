package com.swann.taskmaster.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Entity
@Table(name="user")
public class Users {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;  

    @Column(name="username", length=50,nullable = false)
    private String username;

    @Column(name="firstname", length=50,nullable = false)
    private String firstName;

    @Column(name="lastname", length=50,nullable = false)
    private String lastName;


    @Column(name="email", length=50,nullable = false)
    private String email;


    @Column(name="password", length=255,nullable = false)
    private String password;

    

    public Users() {
    }


    public Users(long id, String username, String firstName, String lastName, String email, String password) {
        this.id = id;
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }

    
}
