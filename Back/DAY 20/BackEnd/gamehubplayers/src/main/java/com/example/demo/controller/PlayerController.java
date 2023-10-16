package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.entity.Player;
import com.example.demo.service.PlayerService;

import java.util.List;
import java.util.Optional;
@CrossOrigin("*")
@RestController
@RequestMapping("/players")
public class PlayerController {

	@Autowired
    private  PlayerService playerService;

    @GetMapping
    public List<Player> getAllPlayers() {
        return playerService.getAllPlayer();
    }

    @GetMapping("/{id}")
    public Optional<Player> getPlayerById(@PathVariable int id) {
        return playerService.getPlayerById(id);
    }

    @PostMapping
    public Player createPlayer(@RequestBody Player Player) {
        return playerService.createPlayer(Player);
    }

    @PutMapping("/{id}")
    public Player updatePlayer(@PathVariable int id, @RequestBody Player updatedPlayer) {
        return playerService.updatePlayer(id, updatedPlayer);
    }

    @DeleteMapping("/{id}")
    public void deletePlayer(@PathVariable int id) {
        playerService.deletePlayer(id);
    }
}
