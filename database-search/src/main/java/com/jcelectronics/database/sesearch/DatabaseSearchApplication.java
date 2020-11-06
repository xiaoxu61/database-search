package com.jcelectronics.database.sesearch;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import tk.mybatis.spring.annotation.MapperScan;

@SpringBootApplication
@MapperScan("com.jcelectronics.database.sesearch.mapper")
public class DatabaseSearchApplication {

    public static void main(String[] args) {
        SpringApplication.run(DatabaseSearchApplication.class, args);
    }

}
