package com.jcelectronics.database.sesearch.controller;

import com.jcelectronics.database.sesearch.bean.Electronics;
import com.jcelectronics.database.sesearch.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
public class UserController {

    @Autowired
    UserService userService;

    @RequestMapping("getDataByName")
    @ResponseBody
    public List<Electronics> getAllUser(String name) {
        List<Electronics> umsName = userService.getDataByName(name);
        return umsName;
    }

    @RequestMapping("deleteDataByName")
    @ResponseBody
    public int deleteUser(String name) {
        int del = userService.deleteDataByName(name);
        return del;
    }

    @RequestMapping("index")
    @ResponseBody
    public String index() {
        return "helloUser";
    }
}
