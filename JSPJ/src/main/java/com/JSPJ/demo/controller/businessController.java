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
import org.springframework.web.bind.annotation.RequestParam;
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
	public String businessRegistInit(@RequestParam(value="registId", required=false) String registId,HttpSession session,Model model) {
	    
		// 세션에서 사용자 정보 꺼내기
		userVo loginUser = (userVo) session.getAttribute("userSession");
		
		String userAuth = loginUser.getUserAuth();

		model.addAttribute("auth",userAuth);

	    // 헤더 메뉴
	    List<menuVo> menuList = commonService.menuList(userAuth);
	    model.addAttribute("menuList", menuList);

	    // registId 가 전달된 경우 → 해당 등록 정보 조회
	    if(registId != null && !registId.isEmpty()) {
	        businessVo regProductVo = businessService.selectRegProduct(registId);
	        model.addAttribute("regProductVo", regProductVo);
	    }
	    
	    //사용자 권한 확인 

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
	 * 상품 임시저장
	 * @param businessVo
	 * @return
	 */
	@PostMapping("/insTempProductRegist")
	@ResponseBody
	public String insTempProductRegist(@RequestBody businessVo businessVo) {
		String result = "fail";
		
		result = businessService.insTempProductRegist(businessVo);
		
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
