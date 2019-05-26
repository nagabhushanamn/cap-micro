package com.shop.web;

import java.util.Date;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.shop.model.ItemLine;
import com.shop.model.Order;
import com.shop.repository.OrderRepository;

@CrossOrigin(origins="*")
@RestController
@RequestMapping("/api/users/{user}/orders")
public class OrderController {

	private RestTemplate restTemplate;

	@Autowired
	private OrderRepository orderRepository;
	
	
	@GetMapping
	public ResponseEntity<?> get(@PathVariable String user) {
		return new ResponseEntity<>(orderRepository.findAll(), HttpStatus.CREATED);
	}

	@PostMapping
	public ResponseEntity<?> newOrder(@PathVariable String user) {
		
		restTemplate = new RestTemplate();
		
		String url = "http://localhost:8182/api/users/Nag/cart";
		ResponseEntity<ItemLine[]> responseEntity = restTemplate.getForEntity(url, ItemLine[].class);
		ItemLine[] itemLines = responseEntity.getBody();
		
		double totalAmount=Stream.of(itemLines)
		.mapToDouble(line->line.getItem().getPrice()*line.getQty())
		.sum();
		
		Order order = new Order();
		order.setAmount(totalAmount);
		order.setOrderDate(new Date());
		order = orderRepository.save(order);
		
		restTemplate.delete(url);
		
		return new ResponseEntity<>(order, HttpStatus.CREATED);

	}

}
