package com.jcelectronics.database.sesearch.service.impl;

import com.jcelectronics.database.sesearch.bean.Electronics;
import com.jcelectronics.database.sesearch.mapper.UserMapper;
import com.jcelectronics.database.sesearch.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tk.mybatis.mapper.entity.Example;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    UserMapper userMapper;

    @Override
    public List<Electronics> getDataByName(String name) {

        Example example = new Example(Electronics.class);
        example.createCriteria().andEqualTo("name",name);
        List<Electronics> umsName = userMapper.selectByExample(example);
        return umsName;

    }

    @Override
    public int deleteDataByName(String name) {

        Electronics umsName = new Electronics();
        umsName.setName(name);

        int i = userMapper.delete(umsName);
        return i;
    }

    @Override
    public void addDataByName(String name) {

    }
}
