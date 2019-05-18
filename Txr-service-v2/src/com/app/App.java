package com.app;

import com.app.repository.AccountRepository;
import com.app.repository.JdbcAccountRepository;
import com.app.repository.JpaAccountRepository;
import com.app.service.TxrService;
import com.app.service.TxrServiceImpl;

public class App {

	public static void main(String[] args) {

		// by 'third-party' | ' component manager' | 'container' | 'context'

		// init / boot
		System.out.println("--------------------");

		AccountRepository jdbcAccountRepository = new JdbcAccountRepository();
		AccountRepository jpaAccountRepository = new JpaAccountRepository();
		TxrService txrService = new TxrServiceImpl(jpaAccountRepository);

		System.out.println("--------------------");

		// use
		System.out.println("--------------------");

		txrService.transfer(100.00, "1", "2");
		System.out.println();
		txrService.transfer(100.00, "2", "1");

		System.out.println("--------------------");

		// destroy
		System.out.println("--------------------");
		// ....
		System.out.println("--------------------");

	}

}
