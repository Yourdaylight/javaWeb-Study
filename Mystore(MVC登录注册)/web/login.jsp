<%@ page import="com.mysql.cj.xdevapi.Session" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<meta http-equiv="Content-Type" content="text/html; charset=utf-8">

<%--用于跳转界面后正常显示--%>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<base href="<%=basePath%>">
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>登录</title>
    <link rel="shortcut icon" href="images/camera.ico">
    <link rel="stylesheet" href="css/login.css">
    <link rel="stylesheet" href="css/footer.css">
    <script type="text/javascript" src="js/regist.js"></script>
    <style>
        .error_info{
            color: #FF0000;
        }
    </style>
</head>
<body>
<!--头部-->
<div id="header">

    <!--头部中间信息-->
    <div class="h_center">
        <img src="images/logo.png" alt="">
        <p>欢迎来到未命名图库：请先登录！</p>
    </div>

</div>


<!--中部-->
<div id="login_body">
    <div class="login_b_center">
        <div class="login_bg">
            <h1>密码登录</h1>
            <form action="user/userlogin" id="login">
                
<!--                //用户名-->
                <div  class="username">
                    <span></span><input type="text" name="username">
                </div>
<!--                //密码-->
                <div  class="password">
                    <span></span><input type="password" name="password">
                </div>
<!--                //登录按钮-->
                <div class="login_btn">
                         <input type="submit" value="登录">
                    <td colspan="2" align="center"><button id="reset" value="重置" onclick="remove()">取消</button></td>
                </div>

                <div class="forgot_password">
                    <a href="">忘记密码</a>
                    <a href="regist.jsp">注册账号</a>
                    <a href="regist.jsp">帮助</a>
                </div>


            </form>

            <%--注册成功后--%>
<%--            <%--%>
<%--                if (((String) request.getAttribute("info")).equals("success")) { %>--%>
<%--            <script>--%>
<%--                alert("注册成功！");--%>
<%--            </script>--%>
<%--            <%}%>--%>
            <div class="error_info">
               <%=request.getAttribute("info")==null ? "" : "错误的用户名或密码"%>
            </div>
        </div>
    </div>
</div>

<!--尾部-->
<div id="footer">
    <div class="link">
        <a href="">关于我们</a>
        |
        <a href="">联系我们</a>
        |
        <a href="">商家入驻</a>
        |
        <a href="">友情链接</a>
        |
    </div>
    <div class="copyright">
        Copyright © 1999 - 2020 LZH. All Rights Reserved.
    </div>
</div>
</body>
</html>