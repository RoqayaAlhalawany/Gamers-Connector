package com.partyup.model;

import com.partyup.model.posting.ContentData;

import javax.persistence.*;

@Entity
@Table(name = "peer_request")
public class PeerRequest {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    private String username;

    @OneToOne(cascade = CascadeType.ALL)
    private ContentData profilePicture;

    public Long getId() {
        // Getter for id
        return id;
    }

    public void setId(Long id) {
        // Setter for id
        this.id = id;
    }

    public String getUsername() {
        // Getter for username
        return username;
    }

    public void setUsername(String username) {
        // Setter for username
        this.username = username;
    }

    public ContentData getProfilePicture() {
        // Getter for profilePicture
        return profilePicture;
    }

    public void setProfilePicture(ContentData profilePicture) {
        // Setter for profilePicture
        this.profilePicture = profilePicture;
    }
}
