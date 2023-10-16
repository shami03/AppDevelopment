package com.example.demo.dto;

import org.springframework.stereotype.Component;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Component
@Getter
@Setter
@Builder
public class LoginRequest {
	private String email;
	private String password;
	public String getEmail() {
		// TODO Auto-generated method stub
		return null;
	}
	public Object getPassword() {
		// TODO Auto-generated method stub
		return null;
	}
}
