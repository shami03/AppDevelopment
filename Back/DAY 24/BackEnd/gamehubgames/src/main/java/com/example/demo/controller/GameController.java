
package com.example.demo.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.demo.entity.Game;
import com.example.demo.service.GameService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/Game")
public class GameController {

    @Autowired
    private GameService gameService;

    @GetMapping
    public List<Game> getAllGame() {
        return gameService.getAllGame();
    }

    @GetMapping("/{id}")
    public Game getGameById(@PathVariable int id) {
        Optional<Game> Game = gameService.getGameById(id);
        return Game.orElse(null);  
    }

    @PostMapping
    public Game createGame(@RequestBody Game Game) {
        return gameService.createGame(Game);
    }

    @PutMapping("/{id}")
    public Game updateGame(@PathVariable int id, @RequestBody Game updatedGame) {
        return gameService.updateGame(id, updatedGame);
    }

    @DeleteMapping("/{id}")
    public void deleteGame(@PathVariable int id) {
        gameService.deleteGame(id);
    }
}
