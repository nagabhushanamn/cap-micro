package com.app;

import org.springframework.boot.SpringApplication;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.app.config.TxrServiceConfiguration;
import com.app.repository.AccountRepository;
import com.app.repository.JpaAccountRepository;
import com.app.service.TxrService;
import com.app.service.TxrServiceImpl;

public class App {

	public static void main(String[] args) {

		// by 'third-party' | ' component manager' | 'container' | 'context'
 
		// init / boot
		System.out.println("--------------------");

		ConfigurableApplicationContext context = null;
		context = SpringApplication.run(TxrServiceConfiguration.class, args);

		System.out.println("--------------------");

	}

}
