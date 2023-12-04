package com.partyup.repository;

import com.partyup.model.Player;
import com.partyup.model.posting.Post;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface PostRepository extends JpaRepository<Post, String> {

	// Find a post by ID
	@Override
	Optional<Post> findById(String id);

	// Find all posts by a specific player
	List<Post> findAllByPlayer(Player player);

	// Find all posts by a specific player, ordered by creation date
	Page<Post> findAllByPlayerOrderByCreateAt(Player player, Pageable pageable);

	// Find all posts by players in the provided list, ordered by creation date
	Page<Post> findAllByPlayerInOrderByCreateAt(List<Player> ids, Pageable pageable);

}
