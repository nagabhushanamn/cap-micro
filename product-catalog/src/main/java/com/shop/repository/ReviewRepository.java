package com.shop.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.shop.model.Review;

public interface ReviewRepository extends JpaRepository<Review, Integer> {

}
