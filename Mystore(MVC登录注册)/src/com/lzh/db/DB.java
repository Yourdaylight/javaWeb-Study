package com.lzh.db;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DB {
    private static Connection conn;

    public static Connection getConnection() {
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            conn = DriverManager.getConnection("jdbc:mysql://localhost/test?useSSL=FALSE&serverTimezone=UTC", "root", "123456");
        } catch (Exception e) {
            e.printStackTrace();
        }

        return conn;
    }
    public static void closeConnection(){
        if (conn!=null){
            try {
                conn.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }

        }
    }
}
