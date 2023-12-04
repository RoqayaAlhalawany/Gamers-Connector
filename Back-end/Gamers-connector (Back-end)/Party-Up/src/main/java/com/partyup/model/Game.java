package com.partyup.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "game", uniqueConstraints = {
        @UniqueConstraint(columnNames = {"name"})
})
public class Game implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    private String name;

    public Long getId() {
        // Getter for id
        return id;
    }

    public void setId(Long id) {
        // Setter for id
        this.id = id;
    }

    public String getName() {
        // Getter for name
        return name;
    }

    public void setName(String name) {
        // Setter for name
        this.name = name;
    }
}
