package com.lzh.dao;

import com.lzh.vo.User;

import java.util.List;

public interface IUserDAO {
    public boolean add(User user);
    public User login(User user);

}
