package com.shop.web;

import java.util.List;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.shop.model.Product;
import com.shop.model.Review;
import com.shop.repository.ProductRepository;

@CrossOrigin(origins = { "*" })
@RestController
@RequestMapping("/api/products")
public class ProductController {

	@Autowired
	private ProductRepository productRepository;

	@GetMapping
	public List<Product> getAll() {
		return productRepository.findAll();
	}

	@GetMapping(value = "/{productId}/reviews")
	public List<Review> getAllReviews(@PathVariable int productId) {
		return productRepository.findReviews(productId);
	}

	@PostMapping
	public ResponseEntity<?> post(@RequestBody Product product) {
		product.setId(new Random().nextInt(1000000));
		Product p=productRepository.save(product);
		return new ResponseEntity<>(p, HttpStatus.CREATED);
	}

}
