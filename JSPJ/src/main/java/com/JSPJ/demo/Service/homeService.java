package com.JSPJ.demo.Service;

import java.util.Map;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.JSPJ.demo.Vo.userVo;

import jakarta.servlet.http.HttpSession;

public interface homeService {

	 Map<String, Object> userLogin(userVo userVo, HttpSession session);
}
