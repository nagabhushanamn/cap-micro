package com.app.config;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.boot.autoconfigure.transaction.jta.JtaAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;

//@Configuration
//@EnableAutoConfiguration
//@ComponentScan(basePackages = { "com.app.repository", "com.app.service" })
// or
@SpringBootApplication(scanBasePackages = { "com.app.repository", "com.app.service" })
@EntityScan(basePackages = { "com.app.model" })
public class TxrServiceConfiguration {

}
