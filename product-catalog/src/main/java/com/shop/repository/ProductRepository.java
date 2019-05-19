package com.shop.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.shop.model.Product;
import com.shop.model.Review;

public interface ProductRepository extends JpaRepository<Product, Integer> {

	List<Product> findByPrice(double price);

	@Query(value="from Review r where r.product.id=:productId")
	List<Review> findReviews(int productId);

}
