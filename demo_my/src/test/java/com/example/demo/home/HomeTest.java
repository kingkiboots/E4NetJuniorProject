package com.example.demo.home;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.HashMap;
import java.util.Map;

import org.json.simple.JSONObject;
import org.junit.jupiter.api.Test;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@SpringBootTest
@AutoConfigureMockMvc
//@WebMvcTest
public class HomeTest {
	@Autowired MockMvc mvc;

	@Test
	void test() throws JsonProcessingException, Exception {
		//given
		Map<String, String> json = new HashMap<>();
		json.put("id", "hhhh11");

		//when
		mvc.perform(post("/dupCheck")
		.contentType(MediaType.APPLICATION_JSON) // Json 타입으로 지정
		.content(new ObjectMapper().writeValueAsString(json))
		.accept(MediaType.APPLICATION_JSON))
		.andExpect(status().is2xxSuccessful());

		//then

	}
}
