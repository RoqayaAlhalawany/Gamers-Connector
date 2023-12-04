package com.partyup.session;

import org.springframework.stereotype.Component;

import java.nio.charset.StandardCharsets;
import java.util.Base64;
import java.util.HashMap;
import java.util.UUID;

@Component
public class InMemorySessionRegistry {
    private static final HashMap<String, String > SESSIONS = new HashMap<>();

    // Register a session for a specific username.
    public String registerSession(final String username) {
        if (username == null) {
            throw new RuntimeException("Username needs to be provided");
        }
        final String sessionId = generateSessionId();
        SESSIONS.put(sessionId, username);
        return sessionId;
    }

    // Retrieve the username associated with a session ID.
    public String getUsernameForSession(final String sessionId) {
        return SESSIONS.get(sessionId);
    }

    // Generate a unique session ID using Base64 encoding.
    private String generateSessionId() {
        return new String(
                Base64.getEncoder().encode(UUID.randomUUID().toString().getBytes(StandardCharsets.UTF_8))
        );
    }
}
