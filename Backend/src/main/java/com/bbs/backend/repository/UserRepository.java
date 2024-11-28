package com.bbs.backend.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.bbs.backend.model.User;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Integer> {
    User findByUserName(String username);
    boolean existsByUserName(String username);
}
