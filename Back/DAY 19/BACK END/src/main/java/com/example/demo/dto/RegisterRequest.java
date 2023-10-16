package com.example.demo.dto;

import org.springframework.stereotype.Component;

import com.example.demo.enumerate.Role;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Component
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor

public class RegisterRequest {
	private String email;
	private String password;
	private Role role;
	private String name;
	public String getEmail() {
		// TODO Auto-generated method stub
		return null;
	}
	public CharSequence getPassword() {
		// TODO Auto-generated method stub
		return null;
	}
	public String getRole() {
		// TODO Auto-generated method stub
		return null;
	}
}
