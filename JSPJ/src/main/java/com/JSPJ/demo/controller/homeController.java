package com.JSPJ.demo.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import com.JSPJ.demo.Service.homeService;
import com.JSPJ.demo.Vo.userVo;

import jakarta.servlet.http.HttpSession;

@Controller
public class homeController {
	
	@Autowired
	homeService homeService;
	
	/**
	 * 시작만 띄우기위한 컨트롤러
	 * @return
	 */
	@GetMapping("/")
	public String index() {
		
		return "index";
	}
	
	/**
	 * 로그인페이지 이동 
	 * @return
	 */
	@GetMapping("/login")
	public String loginPage() {
		return "login";
	}
	
	/**
	 * 로그인 시도 
	 * @param userVo
	 * @param session
	 * @return
	 */
	@PostMapping("/userLogin")
	@ResponseBody
	public Map<String, Object> userLogin(@RequestBody userVo userVo , HttpSession session) {
		Map<String,Object> result = new HashMap<>();
		
		result = homeService.userLogin(userVo, session);
		
		return result;
	}
	
	/**
	 * 회원가입 페이지 이동
	 * @return
	 */
	@GetMapping("/userRegist")
	public String userRegistPage() {
		return "userRegist";
	}
	
	/**
	 * 회원가입시 아이디 중복검사
	 * @param userVo
	 * @return
	 */
	@PostMapping("/userIdChk")
	@ResponseBody
	public String userIdChk(@RequestBody userVo userVo) {
		String result = "fail";
		
		result = homeService.userIdChk(userVo);
		
		return result;
	}
	
	/**
	 * 회원가입
	 * @param userVo
	 * @return
	 */
	@PostMapping("/userRegist")
	@ResponseBody
	public String userRegist(@RequestBody userVo userVo) {
		String result = "fail";
		
		result = homeService.userRegist(userVo);
		
		return result;
	}
}
