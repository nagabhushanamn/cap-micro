package com.app.repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import com.app.model.Account;

//@Component
@Repository
@Qualifier("jpa")
public class JpaAccountRepository implements AccountRepository {

	@PersistenceContext
	private EntityManager em;

	public JpaAccountRepository() {
	}

	public Account loadAccount(String num) {
		return em.find(Account.class, num); // SELECT * ...
	}

	public boolean updateAccount(Account account) {
		em.merge(account); // UPDATE ..
		return true;
	}

}
