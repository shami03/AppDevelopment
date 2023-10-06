package com.gamehub.main.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gamehub.main.Entity.UserRegister;


public interface UserRegisterRepo extends JpaRepository<UserRegister,Integer>
{

}