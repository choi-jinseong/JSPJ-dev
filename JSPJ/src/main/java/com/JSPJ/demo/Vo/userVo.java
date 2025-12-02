package com.JSPJ.demo.Vo;

import java.io.Serializable;

public class userVo  implements Serializable  {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 5267317973145418225L;

	private String id;
	
	private String pw;
	
	private String name;
	
	private String telNo;
	
	private String email;
	
	private String birth;
	
	private String userAuth;
	
	
	

	public String getUserAuth() {
		return userAuth;
	}

	public void setUserAuth(String userAuth) {
		this.userAuth = userAuth;
	}

	public String getBirth() {
		return birth;
	}

	public void setBirth(String birth) {
		this.birth = birth;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getPw() {
		return pw;
	}

	public void setPw(String pw) {
		this.pw = pw;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getTelNo() {
		return telNo;
	}

	public void setTelNo(String telNo) {
		this.telNo = telNo;
	}
	
	

}
