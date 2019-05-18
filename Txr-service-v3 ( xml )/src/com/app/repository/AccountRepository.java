package com.app.repository;

import com.app.model.Account;

public interface AccountRepository {

	Account loadAccount(String num);

	boolean updateAccount(Account account);

}