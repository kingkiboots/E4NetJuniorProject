package com.example.demo.controller;

import java.util.ArrayList;

import org.json.simple.JSONObject;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.example.demo.controller.entity.Member;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import com.example.demo.service.HomeService;

@Controller
@Slf4j
@CrossOrigin(origins = "http://localhost:3000", allowedHeaders = "*", allowCredentials = "true")
@RequiredArgsConstructor
public class HomeController {
	private final HomeService service;
	
	@RequestMapping("/memberList")
	public ResponseEntity<ArrayList<Member>> memberList(){
		ArrayList<Member> memberList = service.test();
		log.info("@@@@@@");
		for(Member e : memberList) {
			System.out.println("id : "+e.getId());
			System.out.println("pwd : "+e.getPwd());
			System.out.println("email : "+e.getEmail());
			System.out.println("--------------------");
		}
		return new ResponseEntity<ArrayList<Member>>(memberList,HttpStatus.OK);
	}
	// 포스트 방식
	// 데이터를 제이슨으로 받아올 것이다.
	// 
	
	@PostMapping("/addMember")
	public ResponseEntity<String> addMember(@RequestBody Member member) {
		//먼저 여기서 회우너강비 잘되는지 테스트
		//System.out.println(member.getEmail());
		System.out.println(member.getEmail());
		service.memberInsert(member);
		return new ResponseEntity<String>("welcome",HttpStatus.OK);
	}
	
	@RequestMapping("/dupCheck")
	public ResponseEntity<Integer> dupCheck(@RequestBody JSONObject id){
		String checkId = id.get("id").toString();
		System.out.println("checkId => "+checkId);
		int res = service.dupCheck(checkId);
		System.out.println("int => "+res);
		return new ResponseEntity<Integer>(res,HttpStatus.OK);
	}
	
	@PostMapping("/logIn")
	public ResponseEntity logIn(@RequestBody JSONObject user){
		boolean logInRes = service.logIn(user);
		if(logInRes) {
			return new ResponseEntity(HttpStatus.OK);
		}else {
			return new ResponseEntity(HttpStatus.BAD_REQUEST);
		}
	}
}