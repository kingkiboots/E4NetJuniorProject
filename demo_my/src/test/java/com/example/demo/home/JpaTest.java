package com.example.demo.home;

import static org.assertj.core.api.Assertions.assertThat;

import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.test.web.servlet.MockMvc;

import com.example.demo.controller.entity.Member;
import com.example.demo.controller.entity.MemberRepository;
import com.jayway.jsonpath.Option;

import lombok.RequiredArgsConstructor;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE) // oh, my god
public class JpaTest {
	@Autowired private MemberRepository repository;
	
	@Test
	void test() {
		//Member member = Member.builder().id("kk21").pwd("kk13").email("kkk@naber.com").build();
//		member.setId("kk11");
//		member.setPwd("kk12");
//		member.setEmail("kk13");
		//repository.save(member);
		//assertThat(repository.findById("kk11")).isNotNull();
//		String id = "kk98";
//		Optional<Member> dupRes = repository.findById(id);
//		System.out.println(id+"있음? "+(dupRes.isPresent()));
//		System.out.println("ffsdafa");
		String id = "kkh89";
		String pwd = "1q2w3";
		Optional<Member> res = repository.findById(id);
		if(!res.isPresent()) {
			// 비어있음 => 아이디도 없
			System.out.println("아이디도 없다. "+id);
		}else if(!(res.get().getPwd().equals(pwd))){
			//나온 회원의 비번이랑 입력한 비번이 같이 
			System.out.println("아이디는 있다. 근데 비번이 틀림");
		}else {
			// 어플리케이션 프로퍼티를 점검하
			System.out.println("로그인 성공!!");
		}
	}
}
