package com.JSPJ.demo.Vo;

import java.io.Serializable;

public class businessVo implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 7808864891797502602L;

	private String registId;
	
	private String registNm;
	
	private String companyNm;
	
	private String managerNm;
	
	private String productNm;
	
	private String productCnt;
	
	private String price;
	
	private String state;
	
	private String productCategory;
	
	private String productDesc;
	
	private String createAt;

	
	
	public String getProductCategory() {
		return productCategory;
	}

	public void setProductCategory(String productCategory) {
		this.productCategory = productCategory;
	}

	public String getProductDesc() {
		return productDesc;
	}

	public void setProductDesc(String productDesc) {
		this.productDesc = productDesc;
	}

	public String getRegistId() {
		return registId;
	}

	public void setRegistId(String registId) {
		this.registId = registId;
	}
	
	public String getRegistNm() {
		return registNm;
	}

	public void setRegistNm(String registNm) {
		this.registNm = registNm;
	}

	public String getCompanyNm() {
		return companyNm;
	}

	public void setCompanyNm(String companyNm) {
		this.companyNm = companyNm;
	}

	public String getManagerNm() {
		return managerNm;
	}

	public void setManagerNm(String managerNm) {
		this.managerNm = managerNm;
	}

	public String getProductNm() {
		return productNm;
	}

	public void setProductNm(String productNm) {
		this.productNm = productNm;
	}

	public String getProductCnt() {
		return productCnt;
	}

	public void setProductCnt(String productCnt) {
		this.productCnt = productCnt;
	}

	public String getPrice() {
		return price;
	}

	public void setPrice(String price) {
		this.price = price;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getCreateAt() {
		return createAt;
	}

	public void setCreateAt(String createAt) {
		this.createAt = createAt;
	}

	
}
