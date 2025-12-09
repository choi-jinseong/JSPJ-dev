package com.JSPJ.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.JSPJ.demo.Service.commonService;
import com.JSPJ.demo.Vo.companyVo;
import com.JSPJ.demo.Vo.userVo;

@Controller
@RequestMapping("/popup")
public class commonController {
	
	@Autowired
	commonService commonService;

	/**
	 *  업체찾기 팝업
	 * @return
	 */
	@GetMapping("/company")
    public String companyPopup() {
        return "popup/companyPopup";
    }
	
	/**
	 * 업체 찾기
	 * @return
	 */
	@GetMapping("/selCompanyInfo")
	@ResponseBody
	public List<companyVo> selCompanyInfo(@RequestParam(required = false) String keyword) {
		
		List<companyVo> companyList = commonService.selCompanyInfo(keyword);
		
		return companyList;
	}

	/**
	 * 담당자 찾기 팝업
	 * @return
	 */
    @GetMapping("/manager")
    public String managerPopup() {
        return "popup/managerPopup";
    }
    
    /**
     * 담당자 찾기
     * @param keyword
     * @return
     */
    @GetMapping("/selManagerInfo")
    @ResponseBody
    public List<userVo> selManagerInfo(@RequestParam(required = false) String keyword) {
    	
    	List<userVo> companyList = commonService.selManagerInfo(keyword);
    	
    	return companyList;
    }
	
}
