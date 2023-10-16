package com.example.demo.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Player;
import com.example.demo.repository.PlayerRepository;

import java.util.List;
import java.util.Optional;

@Service
public class PlayerService {

	@Autowired
    private  PlayerRepository playerRepository;

    public PlayerService(PlayerRepository playerRepository) {
        this.playerRepository = playerRepository;
    }

    public List<Player> getAllPlayer() {
        return playerRepository.findAll();
    }

    public Optional<Player> getPlayerById(int id) {
        return playerRepository.findById(id);
    }

    public Player createPlayer(Player Player) {
        return playerRepository.save(Player);
    }

    public Player updatePlayer(int id, Player updatedPlayer) {
        Optional<Player> existingPlayerOptional = playerRepository.findById(id);

        if (existingPlayerOptional.isPresent()) {
            Player existingPlayer = existingPlayerOptional.get();
            existingPlayer.setPlayerName(updatedPlayer.getPlayerName());
            existingPlayer.setGender(updatedPlayer.getGender());
            existingPlayer.setEmail(updatedPlayer.getEmail());
            existingPlayer.setContact(updatedPlayer.getContact());
            
            existingPlayer.setAge(updatedPlayer.getAge());
           

            return playerRepository.save(existingPlayer);
        } else {
            throw new RuntimeException("Player not found with ID: " + id);
        }
    }

    public void deletePlayer(int id) {
        playerRepository.deleteById(id);
    }
}
