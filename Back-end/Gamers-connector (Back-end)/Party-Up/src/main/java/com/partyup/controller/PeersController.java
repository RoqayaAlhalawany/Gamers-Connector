package com.partyup.controller;

import com.partyup.model.Question;
import com.partyup.payload.AnswerDto;
import com.partyup.payload.ProfileToken;
import com.partyup.payload.QuestionDto;
import com.partyup.service.PeersService;
import com.partyup.service.exception.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class PeersController {

    private final PeersService peersService;

    @Autowired
    public PeersController(PeersService peersService) {
        this.peersService = peersService;
    }

    // Handles the request to get peer requests and returns a response with a list of ProfileToken objects.
    @GetMapping("/api/peerRequests")
    public ResponseEntity<List<ProfileToken>> peerRequests()
            throws UserNotAuthenticatedException {
        return ResponseEntity.ok(peersService.getRequests());
    }

    // Handles the request to add a peer based on the provided username.
    @PostMapping("/api/addPeer/{username}")
    public ResponseEntity<String> addPeer(@PathVariable String username)
            throws UserNotAuthenticatedException, PlayerNotFoundException {
        return ResponseEntity.ok(peersService.addPeer(username));
    }

    // Handles the request to respond to a peer request based on the provided username and response.
    @PostMapping("/api/respondPeerRequest/{username}")
    public ResponseEntity<String> respondPeerRequest(@PathVariable String username, @RequestBody String response)
            throws PeerRequestNotFoundException, UserNotAuthenticatedException, PlayerNotFoundException {
        return ResponseEntity.ok(peersService.respondPeerRequest(username, response));
    }

    // Handles the request to unpeer with a peer based on the provided username.
    @PostMapping("/api/unpeer/{username}")
    public ResponseEntity<String> unpeer(@PathVariable String username)
            throws UserNotAuthenticatedException, PlayerNotFoundException {
        return ResponseEntity.ok(peersService.unpeer(username));
    }

    // Handles the request to find peers based on the provided gameName.
    @GetMapping("/api/findPeers")
    public ResponseEntity<List<ProfileToken>> findPeers(@RequestHeader("gameName") String gameName)
            throws UserNotAuthenticatedException, GameNotFoundException {
        return ResponseEntity.ok(peersService.findPeers(gameName));
    }

    // Handles the request to get the peers associated with the authenticated user and returns a response with a list of ProfileToken objects.
    @GetMapping("/api/peers")
    public ResponseEntity<List<ProfileToken>> myPeers()
            throws UserNotAuthenticatedException {
        return ResponseEntity.ok(peersService.myPeers());
    }

    // Handles the request to get the peer review questions and returns a response with a list of QuestionDto objects.
    @GetMapping("/api/peerReview")
    public ResponseEntity<List<QuestionDto>> getPeerReviewQuestions() {
        return ResponseEntity.ok(peersService.getPeerReviewQuestions());
    }

    // Handles the request to review a peer based on the provided username and answers.
    @PostMapping("/api/peerReview/{username}")
    public ResponseEntity<String> reviewPeer(@PathVariable String username, @RequestBody List<AnswerDto> answers)
            throws UserNotAuthenticatedException, PlayerNotFoundException, PlayerAlreadyReviewedException, PlayerIsNotPeerException {
        return ResponseEntity.ok(peersService.reviewPeer(username, answers));
    }

    // Handles the UserNotAuthenticatedException and returns a response with HTTP status 403 (FORBIDDEN).
    @ExceptionHandler(UserNotAuthenticatedException.class)
    public ResponseEntity<String> sendUserNotAuthenticated(UserNotAuthenticatedException exception) {
        return ResponseEntity.status(HttpStatus.FORBIDDEN).body(null);
    }

    // Handles the PlayerNotFoundException and returns a response with HTTP status 404 (NOT FOUND).
    @ExceptionHandler(PlayerNotFoundException.class)
    public ResponseEntity<String> sendPlayerNotFound(PlayerNotFoundException exception) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
    }

    // Handles the PeerRequestNotFoundException and returns a response with HTTP status 404 (NOT FOUND).
    @ExceptionHandler(PeerRequestNotFoundException.class)
    public ResponseEntity<String> sendPeerRequestNotFound(PeerRequestNotFoundException exception) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
    }

    // Handles the PlayerAlreadyReviewedException and returns a response with HTTP status 406 (NOT ACCEPTABLE).
    @ExceptionHandler(PlayerAlreadyReviewedException.class)
    public ResponseEntity<String> sendPlayerAlreadyReviewed(PlayerAlreadyReviewedException exception) {
        return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body("Player already reviewed");
    }
}
