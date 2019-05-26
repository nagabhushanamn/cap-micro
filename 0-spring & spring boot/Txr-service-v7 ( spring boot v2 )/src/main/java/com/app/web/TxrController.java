package com.app.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.service.TxrService;

@CrossOrigin(origins="*")
@RestController
@RequestMapping("/api/txr")
public class TxrController {

	@Autowired
	private TxrService txrService;

	@PostMapping
	public TxrResponse doTxr(@RequestBody TxrRequest request) {
		this.txrService.transfer(request.getAmount(), request.getFromAccNum(), request.getToAccNum());
		TxrResponse response = new TxrResponse();
		response.setStatus("Txr success");
		return response;
	}

}
