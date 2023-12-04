package com.partyup.payload;

public class FindPeersDto {
    String gameName;  // The name of the game for which peers are being searched

    public FindPeersDto(String gameName) {
        this.gameName = gameName;
    }
}
