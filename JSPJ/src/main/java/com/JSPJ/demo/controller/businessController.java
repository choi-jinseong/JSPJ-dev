package com.JSPJ.demo.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import com.JSPJ.demo.Service.commonService;
import com.JSPJ.demo.Vo.menuVo;

import jakarta.servlet.http.HttpSession;

@Controller
public class businessController {

	@Autowired
	commonService commonService;
	
	/**
	 * 등록현황 조회 리스트 
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
}
