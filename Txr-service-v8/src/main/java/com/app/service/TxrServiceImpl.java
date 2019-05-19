package com.app.service;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.model.Account;
import com.app.model.Txn;
import com.app.model.TxnType;
import com.app.repository.AccountRepository;

//@Component("txrService")
@Service("txrService")
public class TxrServiceImpl implements TxrService {

	private AccountRepository accountRepository;

	@Autowired
	public TxrServiceImpl(@Qualifier("jpa") AccountRepository accountRepository) {
		this.accountRepository = accountRepository;
	}

	@Transactional
	public boolean transfer(double amount, String fromAccNum, String toAccNum) {
		// ..

		Account fromAccount = accountRepository.loadAccount(fromAccNum);
		Account toAccount = accountRepository.loadAccount(toAccNum);

		fromAccount.setBalance(fromAccount.getBalance() - amount);
		toAccount.setBalance(toAccount.getBalance() + amount);

		boolean b1 = accountRepository.updateAccount(fromAccount);
		boolean b2 = accountRepository.updateAccount(toAccount);

		Txn debitTxn = new Txn();
		debitTxn.setAccount(fromAccount);
		debitTxn.setType(TxnType.DEBIT);
		debitTxn.setAmount(amount);
		debitTxn.setClosingBalance(fromAccount.getBalance());
		debitTxn.setDate(new Date());

		Txn creditTxn = new Txn();
		creditTxn.setAccount(toAccount);
		creditTxn.setType(TxnType.CREDIT);
		creditTxn.setAmount(amount);
		creditTxn.setClosingBalance(toAccount.getBalance());
		creditTxn.setDate(new Date());
		
		
		accountRepository.saveTxn(debitTxn);
		accountRepository.saveTxn(creditTxn);

		return b1 && b2 ? true : false;

	}
	
	
	public List<Txn> getTxns(String accNum) {
		return accountRepository.loadTxns(accNum);
	}
	

}
