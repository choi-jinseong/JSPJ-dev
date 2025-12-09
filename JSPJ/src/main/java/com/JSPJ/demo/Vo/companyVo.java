package com.JSPJ.demo.Vo;

import java.io.Serializable;

public class companyVo implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 6568433275817231960L;
	
	private String compCd;
	
	private String compNm;
	
	private String compAddress;
	
	private String managerNm;
	
	private String managerTel;
	
	private String companyTel;

	public String getCompCd() {
		return compCd;
	}

	public void setCompCd(String compCd) {
		this.compCd = compCd;
	}

	public String getCompNm() {
		return compNm;
	}

	public void setCompNm(String compNm) {
		this.compNm = compNm;
	}

	public String getCompAddress() {
		return compAddress;
	}

	public void setCompAddress(String compAddress) {
		this.compAddress = compAddress;
	}

	public String getManagerNm() {
		return managerNm;
	}

	public void setManagerNm(String managerNm) {
		this.managerNm = managerNm;
	}

	public String getManagerTel() {
		return managerTel;
	}

	public void setManagerTel(String managerTel) {
		this.managerTel = managerTel;
	}

	public String getCompanyTel() {
		return companyTel;
	}

	public void setCompanyTel(String companyTel) {
		this.companyTel = companyTel;
	}
	
	

}
