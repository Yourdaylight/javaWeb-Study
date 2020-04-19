package servlet;

import com.lzh.dao.IUserDAO;
import com.lzh.dao.UserDAOimpl;
import com.lzh.vo.User;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet("/user/userlogin")
public class UserLoginServlet extends HttpServlet {
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
            //获取index.jsp页面提交的账号和密码
            String username=request.getParameter("username");
            String password=request.getParameter("password");
            //测试数据
//            System.out.println(username+" "+password);
            //获取login.jsp页面提交的账号和密码设置到实体类User中
            user.setUsername(username);
            user.setPassword(password);
            //引入数据交互层
            IUserDAO dao=new UserDAOimpl();
            User us=dao.login(user);
            //测试返回的值
            System.out.println(us);
            if(us!=null){
                request.setAttribute("info", "success");
                request.getRequestDispatcher("/index.jsp").forward(request, response);
            }else{
                request.setAttribute("info", "错误的用户名或密码");
                request.getRequestDispatcher("/login.jsp").forward(request, response);
            }

        }



    }

