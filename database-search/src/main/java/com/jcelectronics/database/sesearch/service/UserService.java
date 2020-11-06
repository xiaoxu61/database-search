package com.jcelectronics.database.sesearch.service;


import com.jcelectronics.database.sesearch.bean.Electronics;

import java.util.List;

public interface UserService {

    List<Electronics> getDataByName(String name);
    int deleteDataByName(String name);

    void addDataByName(String name);
}
