package com.lzh.dao;

import com.lzh.db.DB;
import com.lzh.vo.User;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class UserDAOimpl implements IUserDAO{
    //public Connection conn=null;
    public UserDAOimpl(){
        //conn= DB.getConnection();
        System.out.println("Connect！");
    }
    //登陆
    @Override
    public User login(User user) {
        Connection conn=null;
        PreparedStatement pstmt=null;
        ResultSet rs=null;

        try {
            conn=DB.getConnection();
            String sql="select * from user where uname=? and upassword=?";
            pstmt=conn.prepareStatement(sql);
            pstmt.setString(1,user.getUsername());
            pstmt.setString(2,user.getPassword());
            rs=pstmt.executeQuery();
            User users=null;
            if (rs.next()){
                users=new User();
                users.setId(rs.getInt("uid"));
                users.setUsername(rs.getString("uname"));
                users.setPassword(rs.getString("upassword"));
                System.out.println(user.getPassword()+":"+user.getUsername());
                return user;
            }else {
                return null;
            }
        } catch (Exception e) {
            e.printStackTrace();
            System.out.println("error！login fail");
        }
        return null;
    }
    //注册
    @Override
    public boolean add(User user) {
        Connection conn=null;
        PreparedStatement pstmt=null;
        boolean flag=false;
        String sql="insert into user(uname,upassword) values(?,?)";

        try {
            conn= DB.getConnection();
            pstmt=conn.prepareStatement(sql);
            pstmt.setString(1,user.getUsername());
            pstmt.setString(2,user.getPassword());
            flag=pstmt.executeUpdate()>0?true:false;
        } catch (Exception e) {
            e.printStackTrace();
        }finally {
            if(pstmt!=null){
                try {
                    pstmt.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }
        }

        //DB.closeConnection();
        return flag;
    }

}
