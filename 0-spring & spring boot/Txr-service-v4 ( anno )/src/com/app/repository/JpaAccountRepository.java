package com.app.repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import com.app.model.Account;

//@Component
@Repository
@Qualifier("jpa")
public class JpaAccountRepository implements AccountRepository {

	private static final Logger LOGGER = Logger.getLogger("TXR");

	@PersistenceContext
	private EntityManager em;

	public JpaAccountRepository() {
		LOGGER.info("JpaAccountRepository instance created");
	}

	public Account loadAccount(String num) {
		LOGGER.info("loading account " + num);
		return em.find(Account.class, num);  // SELECT * ...
	}

	public boolean updateAccount(Account account) {
		LOGGER.info("updating account " + account.getNum());
		em.merge(account);  // UPDATE ..
		return true;
	}

}
