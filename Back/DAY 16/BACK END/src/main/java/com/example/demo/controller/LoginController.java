package com.example.demo.controller;
import com.example.demo.entity.Login;
import com.example.demo.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/users")
public class LoginController {
    @Autowired
    private LoginService loginService;
    @GetMapping
    public List<Login> getAllUsers() {
        return loginService.getAllUsers();
    }
    @GetMapping("/{id}")
    public Login getUserById(@PathVariable int id) {
        return loginService.getUserById(id);
    }
    @GetMapping("/{email}")
    public Optional<Login> findByUsername(@PathVariable String email) {
    	return loginService.findByUsername(email);
    }
    @PostMapping
    public Login createUser(@RequestBody Login user) {
        return loginService.createUser(user);
    }
    @PutMapping("/{id}")
    public Login updateUser(@PathVariable int id, @RequestBody Login updatedUser) {
        return loginService.updateUser(id, updatedUser);
    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable int id) {
        loginService.deleteUser(id);
    }
}
