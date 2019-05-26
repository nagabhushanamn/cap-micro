package com.app.repository;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;

import org.apache.log4j.Logger;

import com.app.model.Account;

public class JpaAccountRepository implements AccountRepository {

	private static final Logger LOGGER = Logger.getLogger("TXR");

	private EntityManagerFactory emf;

	public JpaAccountRepository(EntityManagerFactory emf) {
		this.emf = emf;
		LOGGER.info("JpaAccountRepository instance created");
	}

	public Account loadAccount(String num) {
		LOGGER.info("loading account " + num);
		EntityManager em = emf.createEntityManager();
		Account account = em.find(Account.class, num);
		em.close();
		return account;
	}

	public boolean updateAccount(Account account) {
		LOGGER.info("updating account " + account.getNum());
		EntityManager em = emf.createEntityManager();
		em.getTransaction().begin();
		em.merge(account);
		em.getTransaction().commit();
		em.close();
		return true;

	}

}
