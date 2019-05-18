package com.app.service;

import org.apache.log4j.Logger;

import com.app.model.Account;
import com.app.repository.AccountRepository;


public class TxrServiceImpl implements TxrService {

	private static final Logger LOGGER = Logger.getLogger("TXR");

	private AccountRepository accountRepository;

	public TxrServiceImpl(AccountRepository accountRepository) {
		this.accountRepository = accountRepository;
		LOGGER.info("TxrService instance created with dependency");
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see com.app.service.TxrService#transfer(double, java.lang.String,
	 * java.lang.String)
	 */
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
