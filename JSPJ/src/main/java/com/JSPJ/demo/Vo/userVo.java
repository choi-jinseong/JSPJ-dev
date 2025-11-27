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
