package com.partyup.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
public class Handle implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @ManyToOne(cascade = CascadeType.PERSIST)
    private Game game;

    private String handleName;

    public Long getId() {
        // Getter for id
        return id;
    }

    public void setId(Long id) {
        // Setter for id
        this.id = id;
    }

    public Game getGame() {
        // Getter for game
        return game;
    }

    public void setGame(Game game) {
        // Setter for game
        this.game = game;
    }

    public String getHandleName() {
        // Getter for handleName
        return handleName;
    }

    public void setHandleName(String handle) {
        // Setter for handleName
        this.handleName = handle;
    }
}
