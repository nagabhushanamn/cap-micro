package com.shop.config;

import java.io.FileReader;
import java.io.IOException;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import io.swagger.models.Contact;
import io.swagger.models.Model;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@EnableSwagger2
@Configuration
public class SwaggerConfiguration {

	@Bean
	public Docket api() throws IOException {
		ApiInfoBuilder builder = new ApiInfoBuilder()
				.title("Api Documentation")
				.description("product catalog api")
				.version("0.0.0");
		return new Docket(DocumentationType.SWAGGER_2)
				.select()
				.apis(RequestHandlerSelectors.basePackage("com.shop.web"))
				.paths(PathSelectors.any())
				.build().apiInfo(builder.build());
	}

}
