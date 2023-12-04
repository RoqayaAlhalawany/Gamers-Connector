package com.partyup.payload;

public class AddGameDto {
    private String gameName;  // The name of the game
    private String handle;    // The handle associated with the game

    public String getGameName() {
        return gameName;
    }

    public void setGameName(String gameName) {
        this.gameName = gameName;
    }

    public String getHandle() {
        return handle;
    }

    public void setHandle(String handle) {
        this.handle = handle;
    }
}
