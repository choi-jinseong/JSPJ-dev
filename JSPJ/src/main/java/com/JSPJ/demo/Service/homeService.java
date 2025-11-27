package com.JSPJ.demo.Service;

import java.util.Map;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.JSPJ.demo.Vo.userVo;

import jakarta.servlet.http.HttpSession;

public interface homeService {

	/**
	 * 사용자로그인
	 * @param userVo
	 * @param session
	 * @return
	 */
	 Map<String, Object> userLogin(userVo userVo, HttpSession session);
	 
	 /**
	  * 회원가입시 아이디 중복검사
	  * @param userVo
	  * @return
	  */
	 String userIdChk(userVo userVo);
	 
	 /**
	  * 회원가입
	  * @param userVo
	  * @return
	  */
	 String userRegist(userVo userVo);
}
