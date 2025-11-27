package com.JSPJ.demo.ServiceImpl;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.JSPJ.demo.Mapper.homeMapper;
import com.JSPJ.demo.Service.homeService;
import com.JSPJ.demo.Vo.userVo;

import jakarta.servlet.http.HttpSession;

@Service("homeService")
public class homeServiceImpl implements homeService {

	@Autowired
	homeMapper homeMapper;
	
	/**
	 * 사용자 로그인
	 */
   @Override
    public Map<String, Object> userLogin(userVo userVo, HttpSession session) {
        Map<String, Object> result = new HashMap<>();
        
        int loginOk = 0;
        
        //해당 아이디 와 패스워드가 일치하는지확인 
        try {
			loginOk = homeMapper.userLogin(userVo);
		} catch (Exception e) {
			e.printStackTrace();
		}
        
        // 해당 아이디와 비밀번호가 같은계정이 한개 이상이면 튕겨냄 
        if(loginOk == 1) {
        	result.put("result", "success");
        }else {
        	result.put("result", "fail");
        	return result;
        }
        
        //로그인 성공시 
        userVo userInfo = new userVo();
        
        if(loginOk == 1) {
        	//성공한 로그인 사용자 정보 가져오기 
        	userInfo = homeMapper.userInfo(userVo);
        }
        
        //로그인성공한 정보 가져와서 세션에다가 넣기 
        session.setAttribute("userSession", userInfo);

        return result;
    }
   
   /**
    * 회원가입시 아이디 중복검사
    */
   @Override
   public String userIdChk(userVo userVo) {
	   String result = "fail";
	   
	   int idCnt = 0;
	   
	   //아이디 중복검사 
	   idCnt = homeMapper.userIdChk(userVo);
	   
	   if(idCnt == 0) {
		   result = "success";
	   }
	   
	   return result;
   }
   
   /**
    * 회원가입
    */
   @Override
   public String userRegist(userVo userVo) {
	   String result = "fail";
	   
	   //화면에서 입력한 정보 등록
	   int regist = homeMapper.userRegist(userVo);
	   
	   //등록성공시 1로 반환 
	   if(regist == 1) {
		   result = "success";
	   }
	   
	   return result;
   }
}
