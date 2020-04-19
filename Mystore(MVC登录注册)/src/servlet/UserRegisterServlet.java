package servlet;

import com.lzh.dao.IUserDAO;
import com.lzh.dao.UserDAOimpl;
import com.lzh.vo.User;
import com.mysql.cj.xdevapi.Session;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet("/user/userregister")
public class UserRegisterServlet extends HttpServlet {//注册
    private static final long serialVersionUID = 1L;

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        this.doPost(request, response);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        request.setCharacterEncoding("UTF-8");
        response.setContentType("text/html;charset=UTF-8");

        User user=new User();
        //获取login.jsp页面提交的账号和密码
        String username=request.getParameter("username");
        String password=request.getParameter("password");


        //获取register.jsp页面提交的账号和密码设置到实体类User中
        user.setUsername(username);
        user.setPassword(password);


        //引入数据交互层
        IUserDAO dao=new UserDAOimpl();
        boolean flag=dao.add(user);
        if(flag){
            request.setAttribute("info", "success");
            request.getRequestDispatcher("/login.jsp").forward(request, response);
        }else{
            request.setAttribute("info", "fail");
            request.getRequestDispatcher("/regist.jsp").forward(request, response);
        }
    }
}
