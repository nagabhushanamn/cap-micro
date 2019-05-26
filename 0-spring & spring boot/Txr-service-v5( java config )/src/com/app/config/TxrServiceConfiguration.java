package com.app.config;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;

@Configuration
@Import(value= {DataSourceConfiguration.class,JpaConfiguration.class})
@ComponentScan(basePackages= {"com.app.repository","com.app.service"})
public class TxrServiceConfiguration {

}
