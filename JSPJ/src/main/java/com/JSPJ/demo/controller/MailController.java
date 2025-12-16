package com.JSPJ.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.JSPJ.demo.Service.MailService;
import com.JSPJ.demo.Vo.mailVo;

@RestController
@RequestMapping("/mail")
public class MailController {

    @Autowired
    private MailService mailService;

    @GetMapping("/send")
    public mailVo sendTestMail(String email) {
    	mailVo mailTO = new mailVo();

        mailTO.setAddress(email);
        mailTO.setTitle("밤둘레 님이 발송한 이메일입니다.");
        mailTO.setMessage("안녕하세요. 반가워요!");

        mailService.sendMail(mailTO);

        return mailTO;
    }
}