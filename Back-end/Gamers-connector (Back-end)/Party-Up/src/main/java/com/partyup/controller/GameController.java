package com.partyup.controller;

import com.partyup.payload.AddGameDto;
import com.partyup.payload.GameDto;
import com.partyup.service.GameService;
import com.partyup.service.exception.GameNotFoundException;
import com.partyup.service.exception.PlayerNotFoundException;
import com.partyup.service.exception.UserNotAuthenticatedException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class GameController {

    private GameService gameService;

    @Autowired
    public GameController(GameService gameService) {
        this.gameService = gameService;
    }

    // Handles the request to add a game based on the provided AddGameDto.
    @PostMapping("/api/addGame")
    public ResponseEntity<String> addGame(@RequestBody AddGameDto addGameDto)
            throws UserNotAuthenticatedException, PlayerNotFoundException, GameNotFoundException {
        return ResponseEntity.ok(gameService.addGame(addGameDto));
    }

    // Handles the request to get all games and returns a response with a list of GameDto objects.
    @GetMapping("/api/games")
    public ResponseEntity<List<GameDto>> getGames() {
        return ResponseEntity.ok(gameService.getAllGames());
    }

    // Handles the request to get the games associated with the authenticated user and returns a response with a list of GameDto objects.
    @GetMapping("/api/myGames")
    public ResponseEntity<List<GameDto>> myGames() throws UserNotAuthenticatedException {
        return ResponseEntity.ok(gameService.myGames());
    }
}
