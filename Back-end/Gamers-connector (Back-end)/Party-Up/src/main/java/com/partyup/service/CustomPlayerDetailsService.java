package com.partyup.service;

import com.partyup.model.Player;
import com.partyup.model.Role;
import com.partyup.repository.PlayerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class CustomPlayerDetailsService implements UserDetailsService {

    private final PlayerRepository playerRepository;

    @Autowired
    public CustomPlayerDetailsService(PlayerRepository playerRepository) {
        this.playerRepository = playerRepository;
    }

    @Override
    public Player loadUserByUsername(String usernameOrEmail) throws UsernameNotFoundException {
        // Find the player by username or email
        return playerRepository.findByUsernameOrEmail(usernameOrEmail, usernameOrEmail)
                .orElseThrow(() ->
                        new UsernameNotFoundException("User not found with username or email:" + usernameOrEmail));
    }

    //Maps the roles of a player to Spring Security's GrantedAuthority objects.

    private Collection<? extends GrantedAuthority> mapRolesToAuthorities(Set<Role> roles) {
        // Map the roles to SimpleGrantedAuthority objects
        return roles.stream().map(role -> new SimpleGrantedAuthority(role.getName())).collect(Collectors.toList());
    }
}
