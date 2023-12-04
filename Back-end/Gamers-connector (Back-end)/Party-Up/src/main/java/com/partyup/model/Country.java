package com.partyup.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import java.io.Serializable;

@Entity
public class Country implements Serializable {

    @Id
    @Column(name = "name", nullable = false)
    private String name;

    //Gets the name of the country.

    public String getName() {
        return name;
    }

    //Sets the name of the country.

    public void setName(String name) {
        this.name = name;
    }
}
