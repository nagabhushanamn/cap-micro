package com.shop.web;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.ListOperations;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.shop.model.ItemLine;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/users/{user}/cart")
public class CartController {

	
	@Autowired
	private RedisTemplate<String, ItemLine> redisTemplate;
 
	@PostMapping
	public ResponseEntity<ItemLine> addToCart(@PathVariable String user, @RequestBody ItemLine itemLine) {
		ListOperations<String, ItemLine> listOps = redisTemplate.opsForList();
		//listOps.rightPop(user);
		listOps.remove(user, 1, itemLine);
		listOps.rightPush(user, itemLine);
		return new ResponseEntity<ItemLine>(itemLine, HttpStatus.CREATED);
	}

	@GetMapping
	public ResponseEntity<?> getCart(@PathVariable String user) {
		ListOperations<String, ItemLine> listOps = redisTemplate.opsForList();
		List<ItemLine> itemLines = listOps.range(user, 0, -1);
		return new ResponseEntity<>(itemLines, HttpStatus.CREATED);
	}

}
