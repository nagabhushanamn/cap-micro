package com.custom.config;

import org.springframework.boot.autoconfigure.condition.ConditionalOnBean;
import org.springframework.boot.autoconfigure.condition.ConditionalOnClass;
import org.springframework.boot.autoconfigure.condition.ConditionalOnMissingBean;
import org.springframework.boot.autoconfigure.condition.ConditionalOnMissingClass;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

import com.app.service.TxrService;

@Configuration
//@ConditionalOnClass(value= {TxrService.class})
//@ConditionalOnMissingClass(value = "com.app.UnknownClass")
//@ConditionalOnBean(name = "txrService")
//@ConditionalOnMissingBean(name = "nobean")
@ConditionalOnProperty(name = "prop", prefix = "custom")
@ConfigurationProperties(prefix="custom")
public class CustomAutoConfiguration {

	private String prop;

	public void setProp(String prop) {
		this.prop = prop;
		System.out.println("custom.prop : "+this.prop);
	}
	

}
