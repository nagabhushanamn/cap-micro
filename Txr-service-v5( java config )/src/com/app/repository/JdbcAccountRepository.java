package com.app.repository;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import com.app.model.Account;

//@Component
@Repository
@Qualifier("jdbc")
public class JdbcAccountRepository implements AccountRepository {

	private static final Logger LOGGER = Logger.getLogger("TXR");

	public JdbcAccountRepository() {
		LOGGER.info("JdbcAccountRepository instance created");
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see com.app.repository.AccountRepository#loadAccount(java.lang.String)
	 */
	public Account loadAccount(String num) {
		LOGGER.info("loading account " + num);
		return new Account(num, 1000.000);
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see
	 * com.app.repository.AccountRepository#updateAccount(com.app.model.Account)
	 */
	public boolean updateAccount(Account account) {
		LOGGER.info("updating account " + account.getNum());
		return false;
	}

}
