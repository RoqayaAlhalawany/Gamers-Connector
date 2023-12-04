package com.partyup.model;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class FollowRequest {

	@Id
	@GenericGenerator(name = "uuid", strategy = "uuid2")
	@GeneratedValue(generator = "uuid")
	String id;

	Long follower;
	Long followee;

	public FollowRequest() {
		// Default constructor
		follower = 0L;
		followee = 0L;
	}

	public FollowRequest(Long follower, Long followee) {
		// Parameterized constructor
		this.follower = follower;
		this.followee = followee;
	}

	public Long getFollower() {
		// Getter for follower
		return follower;
	}

	public Long getFollowee() {
		// Getter for followee
		return followee;
	}

	public void setFollower(Long follower) {
		// Setter for follower
		this.follower = follower;
	}

	public void setFollowee(Long followee) {
		// Setter for followee
		this.followee = followee;
	}

	public String getId() {
		// Getter for id
		return id;
	}

	public void setId(String id) {
		// Setter for id
		this.id = id;
	}
}
