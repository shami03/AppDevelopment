package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Game;
import com.example.demo.repository.GameRepository;

import java.util.List;
import java.util.Optional;

@Service
public class GameService {

	@Autowired
    private  GameRepository gameRepository;

    public GameService(GameRepository gameRepository) {
        this.gameRepository = gameRepository;
    }

    public List<Game> getAllGame() {
        return gameRepository.findAll();
    }

    public Optional<Game> getGameById(int id) {
        return gameRepository.findById(id);
    }

    public Game createGame(Game Game) {
        return gameRepository.save(Game);
    }

    public Game updateGame(int id, Game updatedGame) {
        Optional<Game> existingGameOptional = gameRepository.findById(id);

        if (existingGameOptional.isPresent()) {
            Game existingGame = existingGameOptional.get();
            existingGame.setGameId(updatedGame.getGameId());
            existingGame.setTitle(updatedGame.getTitle());
            existingGame.setPublisher(updatedGame.getPublisher());
            existingGame.setGenre(updatedGame.getGenre());
           

            return gameRepository.save(existingGame);
        } else {
            return null; 
        }
    }

    public void deleteGame(int id) {
        gameRepository.deleteById(id);
    }
}
