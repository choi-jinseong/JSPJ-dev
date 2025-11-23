package com.JSPJ.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.JSPJ.demo.Service.BoardService;
import com.JSPJ.demo.Vo.boardVo;

import lombok.RequiredArgsConstructor;

@Controller
@RequiredArgsConstructor
@RequestMapping("/board") //board로 시작하는 url 은 이 컨트롤러를 탄다 
public class BoardController {

	//private final BoardService boardService;
	
	@GetMapping("/save")
	public String saveForm() {
		return "save";
	}
	
	@PostMapping("/save")
	public String save(boardVo boardVo) {
		
		System.out.println("test" + boardVo);
		
		
		return"index";
	}
	
}
