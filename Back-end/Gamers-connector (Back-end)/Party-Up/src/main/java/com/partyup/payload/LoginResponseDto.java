package com.partyup.payload;

public class LoginResponseDto {
    private String sessionId; // The session ID associated with the user's login session

    public String getSessionId() {
        return sessionId;
    }

    public void setSessionId(String sessionId) {
        this.sessionId = sessionId;
    }
}
