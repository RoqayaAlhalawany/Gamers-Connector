package com.partyup.service;

import com.partyup.model.FollowRequest;
import com.partyup.model.Player;
import com.partyup.repository.FollowRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FollowService {

	@Autowired
	private FollowRepository followRepository;
 // Creates a follow request from the follower to the followee.

	public FollowRequest followFromTo(Player follower, Player followee) {
		FollowRequest request = new FollowRequest(follower.getId(), followee.getId());
		return followRepository.save(request);
	}
 // Retrieves all follow requests associated with the given follower ID.

	public List<FollowRequest> findAllByFollowerId(Long id) {
		return followRepository.findAllByFollower(id);
	}
}
