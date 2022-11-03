package com.example.demo.controller.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.data.domain.Persistable;

import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
// @Data 보다는 게터세터 쓰세요 기현쿤.
@Table(name = "member")
@NoArgsConstructor
public class Member implements Persistable<String>{
	@Id
	@Column
	private String id;
	@Column
	private String pwd;
	@Column
	private String email;

	@Builder
	public Member(String id, String pwd, String email) {
		this.id = id;
		this.pwd = pwd;
		this.email = email;
	}

	@Override
	public boolean isNew() {
		// TODO Auto-generated method stub
		return true;
	}
}
