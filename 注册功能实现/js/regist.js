
var code = document.getElementsByClassName('code')[0];
var aEle = document.getElementsByTagName("a")[0];
var userInput = document.getElementById("checkcode");
var confirm = document.getElementsByClassName("btn_sub")[0];
var str1 = "";
// conactStr();//初始化验证码
window.onload = function () {
    //给表单绑定onclick事件
    conactStr();//初始化验证码
    document.getElementById("btn_sub").onclick = function () {
        if (checkUsername() && checkPassword() &&checkRePassword()&&checkEmail() && checkRename() && checkTelphone()&&checkCode()){
            alert("注册成功！");
            return true
        }
    };

    //绑定初始化验证码事件
    aEle.onclick=function () {
        aEle.onclick = function () {
            str1="";
            code.innerHTML="";
            conactStr();
        };
    }

    //给用户名和密码框、Email、姓名、手机号分别绑定离焦事件
    document.getElementById("username").onblur = checkUsername;
    document.getElementById("password").onblur = checkPassword;
    document.getElementById("repassword").onblur = checkRePassword;

    document.getElementById("Email").onblur = checkEmail;
    document.getElementById("rename").onblur = checkRename;
    document.getElementById("Telphone").onblur = checkTelphone;
    // document.getElementById("checkcode").onblur = checkCode;
}


//校验用户名
function checkUsername() {
    //获取用户名的值
    var username = document.getElementById("username").value;

    //定义正则表达式
    var reg_username = /^([a-zA-Z0-9_-])/;
    //判断值是否符合正则表达式的规则
    var flag = reg_username.test(username);

    //提示信息
    var s_username = document.getElementById("s_username");

    if (flag) {
        //提示绿色对勾
        s_username.innerHTML = "<img src='images/gou.png' width='35' height='25'>";
    } else {
        //提示红色错误信息
        s_username.innerHTML = "用户名格式有误！";
    }
    return flag;
}

//校验密码
function checkPassword(){
    //1.获取密码的值
    var password = document.getElementById("password").value;
    //2.定义正则表达式
    var reg_password = /^\w{6,12}$/;
    //3.判断值是否符合正则的规则
    var flag = reg_password.test(password);
    //4.提示信息
    var s_password = document.getElementById("s_password");

    if(flag){
        //提示绿色对勾
        s_password.innerHTML = "<img width='35' height='25' src='images/gou.png'/>";
    }else{
        //提示红色错误信息
        s_password.innerHTML = "密码格式有误";
    }
    return flag;
}

//校验确认密码
function checkRePassword(){
    //1.获取密码的值
    var password = document.getElementById("password").value;
    var repassword = document.getElementById("repassword").value;



    if(repassword===password && repassword!=""){
        //提示绿色对勾
        s_repassword.innerHTML = "<img width='35' height='25' src='images/gou.png'/>";
        return true
    }else{
        //提示红色错误信息
        s_repassword.innerHTML = "两次密码输入不一致！";
        return false
    }

}
//校验Email
function checkEmail(){
    //1.获取Email的值
    var email = document.getElementById("Email").value;
    //2.定义正则表达式
    var reg_email = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;
    //3.判断值是否符合正则的规则
    var flag = reg_email.test(email);
    //4.提示信息
    var s_email = document.getElementById("s_email");

    if(flag){
        //提示绿色对勾
        s_email.innerHTML = "<img width='35' height='25' src='images/gou.png'/>";
    }else{
        //提示红色错误信息
        s_email.innerHTML = "Email格式有误";
    }
    return flag;
}
//校验真实姓名
function checkRename(){
    //1.获取真实姓名的值
    var rename = document.getElementById("rename").value;
    //2.定义正则表达式
    var reg_rename = /^[\u4e00-\u9fa5]{2,4}$/;
    //3.判断值是否符合正则的规则
    var flag = reg_rename.test(rename);
    //4.提示信息
    var s_rename = document.getElementById("s_rename");

    if(flag){
        //提示绿色对勾
        s_rename.innerHTML = "<img width='35' height='25' src='images/gou.png'/>";
    }else{
        //提示红色错误信息
        s_rename.innerHTML = "真实姓名输入有误";
    }
    return flag;
}
//校验手机号
function checkTelphone(){
    //1.获取手机号的值
    var telphone = document.getElementById("Telphone").value;
    //2.定义正则表达式
    var reg_telphone = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
    //3.判断值是否符合正则的规则
    var flag = reg_telphone.test(telphone);
    //4.提示信息
    var s_telphone = document.getElementById("s_telphone");

    if(flag){
        //提示绿色对勾
        s_telphone.innerHTML = "<img width='35' height='25' src='images/gou.png'/>";
    }else{
        //提示红色错误信息
        s_telphone.innerHTML = "手机号输入有误";
    }
    return flag;
}

//检验验证码
function checkCode() {
    var userContent = userInput.value;
    console.log(str1.toLowerCase());
    console.log(userContent.toLowerCase());
    if(userContent.toLowerCase()==str1.toLowerCase()){
        userInput.value="";
        return true
    }
    else{
        alert("验证码输入错误！");
        code.innerHTML="";
        str1="";
        conactStr();
        userInput.value="";
        return false
    }
}
//生成随机二维码
function conactStr() {
    var str = "";
    var angle;
    var fontSize = "";
    var marginNum="";
    for (var i = 0; i < 4; i++) {

        for(var j=0;j<6;j++){
            //生成随机颜色
            var pro = Math.random();
            if(pro<0.5){
                str += String.fromCharCode(Math.floor(Math.random() * 6) + 97)
            }else {
                str += Math.floor(Math.random()*10)
            }
        }
        //生成随机角度
        angle = Math.random()<0.5?-Math.random()*20-25:Math.random()*20+25;
        fontSize = Math.floor(Math.random()*10)+15+"px";
        marginNum=2+"px";
        str="#"+str;
        var spanEle = document.createElement("span");
        var probability = Math.random();
        if (probability <= 0.33) {
            spanEle.innerHTML =  newChar("num")
        } else if (probability > 0.33 && probability <= 0.66) {
            spanEle.innerHTML =  newChar("smallChar")
        } else {
            spanEle.innerHTML =  newChar("bigChar")
        }
        spanEle.style.color=str;
        spanEle.style.transform="rotate("+angle+"deg)";
        // spanEle.style.margin="5px";
        spanEle.style.fontSize=fontSize;
        spanEle.style.margin=marginNum+" "+(parseInt(marginNum)+3)+"px 0";
        code.appendChild(spanEle);
        str="";
    }

}

function newChar(flag) {
    var charEle = "";
    if (flag == "num") {
        charEle = String(Math.floor(Math.random() * 10));
    } else if (flag == "smallChar") {
        charEle = String.fromCharCode(Math.floor(Math.random() * 26) + 97)
    } else if (flag == "bigChar") {
        charEle = String.fromCharCode(Math.floor(Math.random() * 26) + 97).toUpperCase()
    }
    str1+=charEle;
    return charEle;
}