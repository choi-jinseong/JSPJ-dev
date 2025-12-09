package com.JSPJ.demo.controller;

import java.io.File;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

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
	    
	    return "businessRegist";
	}
	
	/**
	 * 상품등록
	 * @param businessVo
	 * @return
	 */
	@PostMapping("/insProductRegist")
	@ResponseBody
	public String insProductRegist(businessVo businessVo ,  @RequestParam(value = "productImage", required = false) MultipartFile productImage) throws Exception {
		
		String result = "fail";
		
		// 파일 저장
	    if (productImage != null && !productImage.isEmpty()) {

	        String uploadDir = "C:/upload/product/";

	        File dir = new File(uploadDir);
	        if (!dir.exists()) dir.mkdirs();

	        String originalName = Paths.get(productImage.getOriginalFilename()).getFileName().toString();
	        String savedName = UUID.randomUUID() + "_" + originalName;

	        File saveFile = new File(uploadDir + savedName);
	        productImage.transferTo(saveFile);

	        // VO 에 파일 정보 set
	        businessVo.setFileName(savedName);
	        businessVo.setFilePath("/upload/product/" + savedName);
	    }
		
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
