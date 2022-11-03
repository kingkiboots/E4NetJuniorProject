package com.example.demo.controller.entity;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.JpaRepositoryConfigExtension;

public interface MemberRepository extends JpaRepository<Member, String>{
	
}
