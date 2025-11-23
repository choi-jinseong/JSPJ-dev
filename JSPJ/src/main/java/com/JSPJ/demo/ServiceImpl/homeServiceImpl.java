package com.JSPJ.demo.ServiceImpl;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.JSPJ.demo.Service.homeService;
import com.JSPJ.demo.Vo.userVo;
import com.JSPJ.demo.mapper.homeMapper;

import jakarta.servlet.http.HttpSession;

@Service
public class homeServiceImpl implements homeService {

	
	   @Override
	    public Map<String, Object> userLogin(userVo userVo, HttpSession session) {
	        Map<String, Object> result = new HashMap<>();
	        
	        int loginOk = 0;
	        
	        //해당 아이디 와 패스워드가 일치하는지확인 
	        try {
		//		loginOk = homeMapper.userLogin(userVo);
			} catch (Exception e) {
				e.printStackTrace();
			}
	        
	        // 해당 아이디와 비밀번호가 같은계정이 한개 이상이면 튕겨냄 
	        if(loginOk == 1) {
	        	result.put("result", "success");
	        }else {
	        	result.put("result", "fail");
	        }
	        
	        //로그인성공한 정보 가져와서 세션에다가 넣기 
	        

	        return result;
	    }
}
