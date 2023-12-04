package com.partyup.repository;

import com.partyup.model.Player;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface PlayerRepository extends JpaRepository<Player, Long> {

    // Find a player by email
    Optional<Player> findByEmail(String email);

    // Find a player by username or email
    Optional<Player> findByUsernameOrEmail(String username, String email);

    // Find a player by username
    Optional<Player> findByUsername(String username);

    // Find all players with a specific email
    List<Player> findAllByEmail(String email);

    // Find all players with a specific username
    List<Player> findAllByUsername(String username);

    // Find all players with a specific Discord tag
    List<Player> findAllByDiscordTag(String discordTag);

    // Find all players with IDs in the provided list
    List<Player> findAllByIdIn(List<Long> ids);

    // Check if a player exists with the given username
    Boolean existsByUsername(String username);

    // Check if a player exists with the given email
    Boolean existsByEmail(String email);

    // Check if a player exists with the given Discord tag
    Boolean existsByDiscordTag(String discordTag);
}
