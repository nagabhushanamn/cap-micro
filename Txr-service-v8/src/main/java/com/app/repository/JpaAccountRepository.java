package com.app.repository;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import com.app.model.Account;
import com.app.model.Txn;

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

	@Override
	public void saveTxn(Txn txn) {
		em.persist(txn);
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Txn> loadTxns(String accNum) {
		Query query=em.createQuery("from Txn txn  where txn.account.num=:accNum");
		query.setParameter("accNum", accNum);
		return query.getResultList();
	}

}
