package com.shop.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.shop.model.ItemLine;

@RestController
@RequestMapping("/api/users/{user}/orders")
public class OrderController {

	private RestTemplate restTemplate;

	@PostMapping
	public void newOrder(@PathVariable String user) {
		restTemplate = new RestTemplate();
		String url = "http://localhost:8182/api/users/Nag/cart";
		ResponseEntity<ItemLine[]> responseEntity = restTemplate.getForEntity(url, ItemLine[].class);
		ItemLine[] itemLines = responseEntity.getBody();
		for (ItemLine itemLine : itemLines) {
			System.out.println(itemLine);
		}

	}

}
