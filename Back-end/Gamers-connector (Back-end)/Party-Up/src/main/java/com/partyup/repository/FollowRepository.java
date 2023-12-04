package com.partyup.repository;

import com.partyup.model.FollowRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FollowRepository extends JpaRepository<FollowRequest, String> {

	// Find all follow requests by follower ID
	List<FollowRequest> findAllByFollower(Long followerId);

	// Count the number of follow requests by followee ID
	Long countFollowRequestByFollowee(Long followeeId);

	// Count the number of follow requests by follower ID
	Long countFollowRequestByFollower(Long followerId);
}
