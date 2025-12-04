package com.JSPJ.demo.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import com.JSPJ.demo.Service.businessService;
import com.JSPJ.demo.Service.commonService;
import com.JSPJ.demo.Vo.businessVo;
import com.JSPJ.demo.Vo.menuVo;
import com.JSPJ.demo.Vo.userVo;

import jakarta.servlet.http.HttpSession;

@Controller
public class businessController {

	@Autowired
	commonService commonService;
	
	@Autowired
	businessService businessService;
	
	/**
	 * 상품등록 화면 
	 * @param session
	 * @param model
	 * @return
	 */
	@GetMapping("/producdtReg")
	public String businessRegistInit(HttpSession session, Model model) {
		
		String userAuth = "common";
		// 헤더에 보여줄 메뉴 조회 
		List<menuVo> menuList = commonService.menuList(userAuth);
		
	    if (menuList != null) {
	        model.addAttribute("menuList", menuList);
	    }
		
		return "businessRegist";
	}
	
	/**
	 * 상품등록
	 * @param businessVo
	 * @return
	 */
	@PostMapping("/insProductRegist")
	@ResponseBody
	public String insProductRegist(@RequestBody businessVo businessVo) {
		String result = "fail";
		
		result = businessService.insProductRegist(businessVo);
		
		return result;
	}
	
	/**
	 * 등록현황 조회 리스트 화면 
	 * @param session
	 * @param model
	 * @return
	 */
	@GetMapping("/list")
	public String businessInit(HttpSession session, Model model) {
		
		String userAuth = "common";
		// 헤더에 보여줄 메뉴 조회 
		List<menuVo> menuList = commonService.menuList(userAuth);
		
	    if (menuList != null) {
	        model.addAttribute("menuList", menuList);
	    }
		
		return "business";
	}
	
	/**
	 * 등록 현황 조회 
	 * @return
	 */
	@GetMapping("/registInfoList")
	@ResponseBody
	public List<businessVo> selectRegistInfoList() {
	    return businessService.selectRegistInfoList(); // VO 리스트 반환
	}
	
}
