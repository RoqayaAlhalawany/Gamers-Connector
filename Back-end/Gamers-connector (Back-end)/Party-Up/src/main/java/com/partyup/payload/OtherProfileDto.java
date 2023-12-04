package com.partyup.payload;

import com.partyup.model.Country;
import com.partyup.model.Handle;
import com.partyup.model.Player;

import java.util.ArrayList;
import java.util.List;

public class OtherProfileDto extends ProfileDto {

    List<HandleDto> handles; // List of handles associated with the player

    String firstName; // First name of the player

    String lastName; // Last name of the player

    Country country; // Country of the player

    String discordTag; // Discord tag of the player

    boolean isPeer = false; // Flag indicating if the player is a peer

    boolean requested = false; // Flag indicating if the player has sent a peer request

    boolean otherRequested = false; // Flag indicating if the player has received a peer request

    boolean reviewed = false; // Flag indicating if the player has been reviewed

    public OtherProfileDto(Player player) {
        username = player.getUsername(); // Username of the player
        country = player.getCountry(); // Country of the player
        profilePicture = player.getProfilePicture(); // Profile picture of the player
        handles = new ArrayList<>(); // Initialize the handles list
    }

    public List<HandleDto> getHandles() {
        return handles;
    }

    public void setHandles(List<Handle> handles) {
        isPeer = true; // Set the isPeer flag to indicate that the player is a peer
        requested = false; // Reset the requested flag
        otherRequested = false; // Reset the otherRequested flag
        for (Handle handle : handles) {
            this.handles.add(new HandleDto(handle)); // Convert each Handle object to HandleDto and add it to the handles list
        }
    }
}

    public Country getCountry() {
        return country;
    }

    public boolean isPeer() {
        return isPeer;
    }

    public void setCountry(Country country) {
        this.country = country;
    }

    public void setPeer(boolean peer) {
        isPeer = peer;
    }

    public boolean isRequested() {
        return requested;
    }

    public void setRequested(boolean requested) {
        this.requested = requested;
    }

    public boolean isOtherRequested() {
        return otherRequested;
    }

    public void setOtherRequested(boolean otherRequested) {
        this.otherRequested = otherRequested;
    }

    public String getDiscordTag() {
        return discordTag;
    }

    public void setDiscordTag(String discordTag) {
        this.discordTag = discordTag;
    }

    public boolean isReviewed() {
        return reviewed;
    }

    public void setReviewed(boolean reviewed) {
        this.reviewed = reviewed;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }
}
