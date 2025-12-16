package com.JSPJ.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import com.JSPJ.demo.Service.commonService;
import com.JSPJ.demo.Service.userProdService;
import com.JSPJ.demo.Vo.businessVo;
import com.JSPJ.demo.Vo.menuVo;
import com.JSPJ.demo.Vo.userVo;

import jakarta.servlet.http.HttpSession;

@Controller
public class userProdController {

	@Autowired
	commonService commonService;
	
	@Autowired
	userProdService userProdService;
	
	/**
	 * 상품목록 화면 이동
	 * @param session
	 * @param model
	 * @return
	 */
	@GetMapping("/productList")
	public String productListInit(HttpSession session,Model model) {
	    
		// 세션에서 사용자 정보 꺼내기
		userVo loginUser = (userVo) session.getAttribute("userSession");
		
		String userAuth = loginUser.getUserAuth();

		model.addAttribute("auth",userAuth);

	    // 헤더 메뉴
	    List<menuVo> menuList = commonService.menuList(userAuth);
	    model.addAttribute("menuList", menuList);
	    
	    List<businessVo> productList = userProdService.selectProductList();
	    model.addAttribute("productList", productList);
	    
	    return "productList";
	}
}
