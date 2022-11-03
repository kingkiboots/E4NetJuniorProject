package com.example.demo.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.json.simple.JSONObject;
import org.springframework.stereotype.Service;
import org.springframework.util.Assert;

import com.example.demo.controller.entity.Member;
import com.example.demo.controller.entity.MemberRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class HomeService {
	private final MemberRepository repository;
	
	public ArrayList<Member> test() {
		ArrayList<Member> memberList = (ArrayList<Member>) repository.findAll();
		return memberList;
	}
	public void memberInsert(Member member) {
		System.out.println(repository.save(member)); // false면 새로운 아이디, true면 사용중인 안디ㅣ
		//com.example.demo.controller.entity.Member@6b6939e1
		//com.example.demo.controller.entity.Member@55300b93
	}
	public int dupCheck(String id) {
		Optional<Member> dupRes = repository.findById(id);
		if(dupRes.isPresent()) {
			return 1;
		}
		return 0; 
	}
	public boolean logIn(JSONObject user) {
		String id = user.get("id").toString();
		String pwd = user.get("pwd").toString();
		Optional<Member> res = repository.findById(id);
		if(!res.isPresent() || !(res.get().getPwd().equals(pwd))){
			//나온 회원의 비번이랑 입력한 비번이 같이 
			System.out.println("아이디는 있다. 근데 비번이 틀림");
			return false;
		}else {
			// 어플리케이션 프로퍼티를 점검하
			System.out.println("로그인 성공!!");
			return true;
		}
	}
}
