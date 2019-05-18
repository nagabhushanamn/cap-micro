package com.app.service;

import org.apache.log4j.Logger;

import com.app.model.Account;
import com.app.repository.AccountRepository;

/*
 * 
 *  design & performance issues
 *  ---------------------------
 *  
 *  
 *  -> tight coupling b/w dependent & dependency
 *  	=> can't extend with modern features
 *  -> too many duplicate dependency instances created & destroyed
 *  	=> slow, memory & resource use high
 *  -> unit-testing not possible
 *  	=> dev & bug fix slow
 *  
 *  why these issues ?
 *  
 *  ==> dependent itself creating it's own dependency
 *  
 *  soln : 
 *  
 *  	==> don't create dependency in dependent's class , use factory lookup
 *  
 *  
 *  Limitation on factory lookup:
 *  
 *  ==> factory location tight coupling
 *  
 *  
 *  best soln :
 *    
 *    	==> dont create / lookup , get inject by 'third-party'  ( IOC ==> Inversion of Control )
 *    
 *    	
 *      
 *   How to implement IOC ?
 *   
 *      ==> dependency injection ( DI )
 *      
 *      		-> field
 *      		-> constructor
 *      		-> setter 
 *      		
 *      ==> AOP	
 *      
 *      
 * ----------------------------------------------------------------
 * OO concepts
 * ----------------------------------------------------------------
 * 
 * 	- Abstraction
 *  - Encapsulated
 *  - Inheritance
 *  - Polymorphism
 *      
 *      
 * ----------------------------------------------------------------
 * OO principles
 * ----------------------------------------------------------------
 * 
 * 			S.O.L.I.D. STANDS FOR:
 
 
			S — Single responsibility principle
			O — Open for extension & closed for modification principle
			L — Liskov substitution principle
			I — Interface segregation principle
			D — Dependency Inversion principle

 * 
 *      	
 *  
 *  	
 * ----------------------------------------------------------------
 * OO patterns
 * ----------------------------------------------------------------
 * 
 * 
 * 
 *  1. creational
 *  2. structural
 *  3. behavioral
 *  
 *  
 *  
 * 
 */

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
