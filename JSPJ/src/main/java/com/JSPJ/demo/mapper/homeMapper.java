package com.JSPJ.demo.mapper;

import java.sql.SQLException;

import com.JSPJ.demo.Vo.userVo;

public interface homeMapper {
	
	/**
	 * 유저 로그인 정보 조회
	 * @param userVo
	 * @return
	 * @throws Exception
	 */
	int userLogin(userVo userVo) throws SQLException;

}
