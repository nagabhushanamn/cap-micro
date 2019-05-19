package com.app.service;

import java.util.List;

import com.app.model.Txn;

public interface TxrService {

	boolean transfer(double amount, String fromAccNum, String toAccNum);
	
	
	List<Txn> getTxns(String accNum);

}