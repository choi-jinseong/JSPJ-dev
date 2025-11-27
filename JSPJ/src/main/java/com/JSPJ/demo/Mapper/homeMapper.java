package com.JSPJ.demo.Mapper;

import java.sql.SQLException;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.JSPJ.demo.Vo.userVo;

@Mapper
public interface homeMapper {
	
	/**
	 * 유저 로그인 정보 조회
	 * @param userVo
	 * @return
	 * @throws Exception
	 */
	int userLogin(userVo userVo) throws SQLException;

	userVo userInfo(userVo userVo);
	
	/**
	 * 아이디 중복검사
	 * @param userVo
	 * @return
	 */
	int userIdChk(userVo userVo);
	
	/**
	 * 회원가입
	 * @param userVo
	 * @return
	 */
	int userRegist(userVo userVo);
}
