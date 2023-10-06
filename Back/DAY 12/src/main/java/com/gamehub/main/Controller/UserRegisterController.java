package com.gamehub.main.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.gamehub.main.Entity.UserRegister;
import com.gamehub.main.Service.UserRegisterService;


@RestController
public class UserRegisterController {
	@Autowired
	private UserRegisterService urs;
	@GetMapping("/getUserRegister")
	public List<UserRegister> getUserRegister(){
		return urs.getUserRegister();
	}
	@GetMapping("/getUserRegister/{id}")
	public Optional<UserRegister> getUserRegisterbyId(@PathVariable int id){
		return urs.getUserRegisterbyId(id);
	}
	@PostMapping("/postUserRegister")
	public void postUserRegister(@RequestBody UserRegister ur) {
		urs.postUserRegister(ur);
	}
	@PutMapping("/putUserRegister/{id}")
	public void putUserRegister(@PathVariable int id,@RequestBody UserRegister ur)
	{
		ur.setUserRegisterId(id);
		urs.putUserRegister(ur);
	}
	@DeleteMapping("/delUserRegister/{id}")
	public void deleteUserRegister(@PathVariable int id)
	{
		urs.deleteUserRegister(id);
	}
	

}
