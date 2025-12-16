package com.JSPJ.demo.Vo;

import java.io.Serializable;

public class mailVo implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 6057223272133572153L;

	private String address;
    private String title;
    private String message;
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
    
    
}
