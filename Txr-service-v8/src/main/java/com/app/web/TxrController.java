package com.app.web;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.model.Txn;
import com.app.service.TxrService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class TxrController {

	@Autowired
	private TxrService txrService;

	@PostMapping("/txr")
	public TxrResponse doTxr(@RequestBody TxrRequest request) {
		this.txrService.transfer(request.getAmount(), request.getFromAccNum(), request.getToAccNum());
		TxrResponse response = new TxrResponse();
		response.setStatus("Txr success");
		return response;
	}

	@GetMapping("/accounts/{accNum}/txns")
	public List<Txn> getTxns(@PathVariable String accNum) {
		return this.txrService.getTxns(accNum);
	}

}
