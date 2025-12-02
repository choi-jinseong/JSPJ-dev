package com.JSPJ.demo.Vo;

import java.io.Serializable;

public class menuVo implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1724631164474573854L;

	private String menuId;
	
	private String menuUrl;
	
	private String title;
	
	private String useYn;

	public String getMenuId() {
		return menuId;
	}

	public void setMenuId(String menuId) {
		this.menuId = menuId;
	}

	public String getMenuUrl() {
		return menuUrl;
	}

	public void setMenuUrl(String menuUrl) {
		this.menuUrl = menuUrl;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getUseYn() {
		return useYn;
	}

	public void setUseYn(String useYn) {
		this.useYn = useYn;
	}
	
	
	
}
