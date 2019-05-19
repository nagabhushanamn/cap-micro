package com.app.repository;

import java.util.List;

import com.app.model.Account;
import com.app.model.Txn;

public interface AccountRepository {

	Account loadAccount(String num);

	boolean updateAccount(Account account);

	void saveTxn(Txn txn);

	List<Txn> loadTxns(String accNum);

}