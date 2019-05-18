package com.app.repository;

import org.apache.log4j.Logger;

import com.app.model.Account;

public class JdbcAccountRepository {

	private static final Logger LOGGER = Logger.getLogger("TXR");

	public JdbcAccountRepository() {
		LOGGER.info("JdbcAccountRepository instance created");
	}

	public Account loadAccount(String num) {
		LOGGER.info("loading account " + num);
		return new Account(num, 1000.000);
	}

	public boolean updateAccount(Account account) {
		LOGGER.info("updating account " + account.getNum());
		return false;
	}

}
