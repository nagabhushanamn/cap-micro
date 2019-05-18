package com.app.service;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.model.Account;
import com.app.repository.AccountRepository;

//@Component("txrService")
@Service("txrService")
public class TxrServiceImpl implements TxrService {

	private static final Logger LOGGER = Logger.getLogger("TXR");

	private AccountRepository accountRepository;

	@Autowired
	public TxrServiceImpl(@Qualifier("jpa") AccountRepository accountRepository) {
		this.accountRepository = accountRepository;
		LOGGER.info("TxrService instance created with dependency");
	}

	@Transactional
	public boolean transfer(double amount, String fromAccNum, String toAccNum) {
		LOGGER.info("txr initiated");
		// ..

		Account fromAccount = accountRepository.loadAccount(fromAccNum);
		Account toAccount = accountRepository.loadAccount(toAccNum);

		fromAccount.setBalance(fromAccount.getBalance() - amount);
		toAccount.setBalance(toAccount.getBalance() + amount);

		boolean b1 = accountRepository.updateAccount(fromAccount);
		boolean b2 = accountRepository.updateAccount(toAccount);

		LOGGER.info("txr finished");
		return b1 && b2 ? true : false;

	}

}
