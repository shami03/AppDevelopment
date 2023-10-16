package com.example.demo.dto;

import org.springframework.stereotype.Component;

import com.example.demo.enumerate.Role;

import lombok.Getter;
import lombok.Setter;

@Component
@Getter
@Setter
public class RegisterRequest {
	private String email;
	private String password;
	private Role role;
	private String name;
}
