package com.JSPJ.demo.ServiceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.JSPJ.demo.Mapper.businessMapper;
import com.JSPJ.demo.Service.MailService;
import com.JSPJ.demo.Service.businessService;
import com.JSPJ.demo.Vo.businessVo;
import com.JSPJ.demo.Vo.mailVo;

@Service("businessService")
public class businessServiceImpl implements businessService {

	@Autowired
	businessMapper businessMapper;
	
	@Autowired
    private MailService mailService;
	
	/**
	 * 등록현황 조회 
	 */
	@Override
	public List<businessVo> selectRegistInfoList(){
		
		List<businessVo> resultList = businessMapper.selectRegistInfoList();
		
		return resultList;
	}
	
	/**
	 * 상품등록
	 */
	@Override
	public String insProductRegist(businessVo businessVo) {
		String result = "fail";
		
		//등록된 건이 있는지 확인 
		int registCnt = businessMapper.selectRegistCnt(businessVo);
		
		String registNm = "상품등록";
		businessVo.setRegistNm(registNm);
		
		// 등록된 건이 없을시 등록 등록된건이 있을시 업데이틍
		if(registCnt == 0) {
			//상품등록
			int resultFg = businessMapper.insProductRegist(businessVo);
			
			if(resultFg == 1) {
				result = "success";
			}
		}else {
			//상품 업데이트
			int resultFg = businessMapper.updProductRegist(businessVo);
			
			if(resultFg == 1) {
				result = "success";
			}
		}
		
		
		
		//상품이 승인처리될시 담당자에게 메일 송부 
		if("success".equals(result) && "A".equals(businessVo.getState())) {
			if(businessVo.getManagerEmail() == null || businessVo.getManagerEmail().equals("")) {
				System.out.println("해당 담당자 메일주소 없음!!!!");
				
			}else {
				
				mailVo mailVo = new mailVo();
				
				mailVo.setAddress(businessVo.getManagerEmail());
				mailVo.setTitle("[상품 승인 요청] 신규 상품 등록 알림");
				
				StringBuilder sb = new StringBuilder();

				sb.append("안녕하세요.\n\n");
				sb.append("신규 상품이 등록되어 승인 요청드립니다.\n\n");

				sb.append("■ 상품 정보\n");
				sb.append(" - 업체명 : ").append(businessVo.getCompanyNm()).append("\n");
				sb.append(" - 상품명 : ").append(businessVo.getProductNm()).append("\n");

				sb.append("관리자 페이지에 접속하시어\n");
				sb.append("상품 승인 또는 반려 처리를 진행해 주시기 바랍니다.\n\n");

				sb.append("감사합니다.\n");
				sb.append("상품관리팀 드림.");

				mailVo.setMessage(sb.toString());
				
				mailService.sendMail(mailVo);
				
				
			}
		}else {
			System.out.println("메일 발송 없음");
		}
		
		return result;
	}
	
	/**
	 * 상품임시저장
	 */
	@Override
	public String insTempProductRegist(businessVo businessVo) {
		String result = "fail";
		
		//등록된 건이 있는지 확인 
		int registCnt = businessMapper.selectRegistCnt(businessVo);
		
		String registNm = "상품임시저장";
		businessVo.setRegistNm(registNm);
		
		if(registCnt == 0) {
			//상품 임시저장
			int resultFg = businessMapper.insTempProductRegist(businessVo);
			
			if(resultFg == 1) {
				result = "success";
			}
		}else {
			//상품 임시저장 업데이트
			int resultFg = businessMapper.updProductRegist(businessVo);
			
			if(resultFg == 1) {
				result = "success";
			}
		}
		
		return result;
	}
	
	/**
	 * 관리자 상품 승인 및 반려
	 */
	@Override
	public String updProductState(businessVo businessVo) {
		String result = "fail";
		
		//등록된 건이 있는지 확인 
		int registCnt = businessMapper.selectRegistCnt(businessVo);
		
		if(registCnt == 0) {
			System.out.println("등록된 상품 없음");
			return result;
		}
		
		//관리자 상품 승인 및 반려
		int resultFg = businessMapper.updProductState(businessVo);
		
		if(resultFg == 1) {
			result = "success";
		} 
		
		//상품이 승인처리될시 담당자에게 메일 송부 
		if("success".equals(result)) {
			if(businessVo.getManagerEmail() == null || businessVo.getManagerEmail().equals("")) {
				System.out.println("해당 담당자 메일주소 없음!!!!");
				
			}else {
				
				if("O".equals(businessVo.getState())){
					mailVo mailVo = new mailVo();
					
					mailVo.setAddress(businessVo.getManagerEmail());
					mailVo.setTitle("[상품 승인 안내] 신규 상품 승인 알림");
					
					StringBuilder sb = new StringBuilder();
					
					sb.append("안녕하세요.\n\n");
					sb.append("신규 상품이 승인되어 알림드립니다.\n\n");
					
					sb.append("■ 상품 정보\n");
					sb.append(" - 업체명 : ").append(businessVo.getCompanyNm()).append("\n");
					sb.append(" - 상품명 : ").append(businessVo.getProductNm()).append("\n");
					
					sb.append("페이지에 접속하시어\n");
					sb.append("상품 승인 상태를 확인하여 주시기 바랍니다.\n\n");
					
					sb.append("감사합니다.\n");
					
					mailVo.setMessage(sb.toString());
					
					mailService.sendMail(mailVo);
					
				}else if("X".equals(businessVo.getState())) {
					mailVo mailVo = new mailVo();
					
					mailVo.setAddress(businessVo.getManagerEmail());
					mailVo.setTitle("[상품 반려 안내] 신규 상품 반려 알림");
					
					StringBuilder sb = new StringBuilder();
					
					sb.append("안녕하세요.\n\n");
					sb.append("신규 상품이 반려되어 알림드립니다.\n\n");
					
					sb.append("■ 상품 정보\n");
					sb.append(" - 업체명 : ").append(businessVo.getCompanyNm()).append("\n");
					sb.append(" - 상품명 : ").append(businessVo.getProductNm()).append("\n");
					
					sb.append("페이지에 접속하시어\n");
					sb.append("상품 반려 상태를 확인하여 주시기 바랍니다.\n\n");
					
					sb.append("감사합니다.\n");
					
					mailVo.setMessage(sb.toString());
					
					mailService.sendMail(mailVo);
					
				}else {
					System.out.println("메일 발송 없음");
				}
				
				
			}
		}
			
		return result;
	}
	
	/**
	 * 최근 상품등록건 조회 
	 */
	@Override
	public businessVo selectRegProduct (String registId) {
		
		businessVo productRegVo = businessMapper.selectRegProduct(registId);
		
		return productRegVo;
	}
}
