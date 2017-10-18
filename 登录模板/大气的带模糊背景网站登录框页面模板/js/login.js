//-----------------------------------------------------
// 登录页面  js
// author:      刘雪君Serena 
// version:     3.0
// time:        2015-12-16
//-----------------------------------------------------


/*************************** 通用ajax请求js *********************/
 //得到当前域
var  _Domain = document.domain;
var loginjsBool = true;
var isRegister;
var isLogin;
var _dataztime = new Date().getTime();
//cookie 读写、转码 
jQuery.cookie = function (name, value, options) {
    if (typeof value != 'undefined') {
        options = options || {};
        if (value === null) {
            value = '';
            options = $.extend({}, options);
            options.expires = -1;
        }
        var expires = '';
        if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
            var date;
            if (typeof options.expires == 'number') {
                date = new Date();
                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
            } else {
                date = options.expires;
            }
            expires = '; expires=' + date.toUTCString();
        }
        var path = options.path ? '; path=' + (options.path) : '';
        var domain = options.domain ? '; domain=' + (options.domain) : '';
        var secure = options.secure ? '; secure' : '';
        if (typeof options.encode == 'undefined') {
            options.encode = true;
            options.encodeFun = "encodeURIComponent";
        }
        if (options.encode) {
            if (options.encodeFun == "escape") {
                value = escape(value);
            } else if (options.encodeFun == "encodeURI") {
                value = encodeURI(value);
            } else if (options.encodeFun == "enUnicode") {
                value = escape(value).replace(/%/g, "\\").toLowerCase();
            } else {
                value = encodeURIComponent(value);
            }
        }
        document.cookie = [name, '=', value, expires, path, domain, secure].join('');
    } else {
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = cookie.substring(name.length + 1);
                   
                    cookieValue = decodeURIComponent(cookieValue);
                   
                    break;
                }
            }
        }
    }
    return cookieValue;
};
function jsonAjaxJsonp(type, url, param, success, error) {
    $.ajax({
        async: true,
        type: type,
        url: url,
        data: param,
        cache: false,
        dataType: "jsonp",
        crossDomain: true,//同域请求为false，跨域请求为true，如果你想强制跨域请求（如JSONP形式）同一域，设置crossDomain为true。这使得例如，服务器端重定向到另一个域
        jsonp: "callbackparam",
        jsonpCallback: "success_jsonpCallback",
        success: function (data) {
            //console.log(data);
            success(data);
        },
        error: function (data) {
            if (typeof data != "undefined" && typeof error != "undefined") {
                error(data);
            }
        }
    });
}

function success_jsonpCallback() {
    //alert('back');
}

/*************************** 通用ajax请求js *********************/

/**************请求数据查询数据是否存在******************/
//CheckAccount(obj, loginPhone, 1, "statusP", false);
function CheckAccount(obj, loginName, CheckType, bool) {
    var url = "/Ajax/ValidateUser";
    jsonAjaxJsonp("GET", url, "name=" + loginName, function (data) {
            switch (data.status) {
                case 1:
                   $(".Login_Uname").show();
                   $(".PhoneloginBtn").hide();
                   $(".PhoneRegBtn").show();
                    break;
                case -2:
                   $(".Login_Uname").hide();
                   $(".PhoneloginBtn").show();
                   $(".PhoneRegBtn").hide();
            }
    });
    return bool;
}
/*************************** 通用ajax请求js *********************/
function CheckYzm(obj, loginyzm, bool) {
    var url = "/Ajax/ValidateImgCode";
    jsonAjaxJsonp("GET", url, "code=" + loginyzm, function (data) {
            switch (data.status) {
                case -1:
                 $(obj).find(".errorloginyzm.error_info").html("<i></i>请您填写正确的验证码").show().addClass('TxtShadow').css("right","-240px");
                   break;
            }
    });
    return bool;
}
function CheckYzmPhone(obj, loginPhone,loginyzm, dataType) {
    var url = "/Ajax/ValidateImgCode";
    jsonAjaxJsonp("GET", url, "code=" + loginyzm, function (data) {
      if(data.status==-1){
        $(obj).find(".errorloginyzm.error_info").html("<i></i>请您填写正确的验证码").show().addClass('TxtShadow').css("right","-240px");
        changVCodePhone();
        return;
      }
      else if(data.status==1){
       var url1 = '/Ajax/SendMobileMsg';
        jsonAjaxJsonp("GET", url1, '&mobil=' + loginPhone+'&vCode='+loginyzm, function (data) {
            if (data.status == 1) {
                time(dataType);
            } 
        }, function (data) {
            $(obj).find(".errorloginPhone.error_info").html("<i></i>服务器繁忙").show().addClass('TxtShadow').css("right","-190px");
        });
        }
    });
}
//切换
$(document).on("click",".account_login",function(){
    $(this).hide();
    $(this).parent().find("h3").html("<span>手机登录</span>");
    $(this).parent().find(".error_info").hide();
    $(".phone_login").show();
    $(".loginAccunt_validate").hide();
    $(".loginPhone_validate").show();
     var myDate = new Date();
    $(this).parents().find("#vCodImgPhone").attr("src", "/Ajax/GetValidateCode?"+ myDate.toLocaleString()).click();

}); 
$(document).on("click",".phone_login",function(){
    $(this).hide();
    $(this).parent().find("h3").html("<span>登录</span>");
    $(this).parent().find(".error_info").hide();
    $(".account_login").show();
    $(".loginPhone_validate").hide();
    $(".loginAccunt_validate").show();
}); 
//验证用户名
$(document).on("focus",".input_item input[type='text']",function(){
      if ($(this).val() == $(this).attr("eg")) {
        $(this).val("");
    }
});
$(document).on("blur",".input_item input[type='text']",function(){
      if ($(this).val() == "") {
        $(this).val($(this).attr("eg"));
    }
});
//验证密码
$(document).on('focus','input.loginPwd',function(){
   $(this).parent().find(".password_upTxt").hide();
})
$(document).on("click", ".login_validate span.password_upTxt", function () {
        $(this).hide();
        $(this).parent().find(".loginPwd").focus();
    })

$(document).on("blur", ".login_validate input.loginPwd", function () {
       
        if ($.trim($(this).attr("value")) == "")
             $(this).parent().find(".password_upTxt").show();
          
     })


// 短信验证码
$(document).on('focus','input.loginCode',function(){
    if ($(this).val() == $(this).attr("eg")) {
        $(this).val("");
    }
   $(this).parents().find(".Login_Uname").hide();
})
$(document).on('blur','input.loginCode',function(){
    if ($(this).val() == "") {
        $(this).val($(this).attr("eg"));
    }
    onblursRegCode(".loginCode");

})

//点击手机验证码
function onblursRegCode(obj){
    obj = $(obj).closest(".login_containter");
   $(obj).find(".error_info").hide();
    var $loginCode = $(".loginCode");
     var loginCode =$loginCode.val().replace(/\s+/g, "").replace($loginCode.attr("eg"), "");
    if (loginCode == "") {
        $(obj).find(".errorloginCode.error_info").html("<i></i>请输入短信验证码").show().addClass('TxtShadow').css("right","-215px");
            return false;
    }
    else {
        return true;
    }
}
/*******************用户登录*****************************/
var isAuto; //用于判断是否自动登录
var LOCK_LoginFormSubmit = false;//防止用户二次提交
function LoginFormSubmit(obj, callBackFun) {
    if (LOCK_LoginFormSubmit) {
        return false;
    }
    obj = $(obj).closest(".login_containter");
    var OK = true;
    if (!CheckLoginName(obj))
        OK = false;
    if (!OK)
        return false;
     LOCK_LoginFormSubmit = true;
    $(obj).find(".loginBtn").disabled = true;
    $(obj).find(".loginBtn").val("登录中...");
   var loginName = $(obj).find(".loginName").val();
   var loginPwd  = encodeURIComponent($(obj).find(".loginPwd").val());
    var $loginyzm = $("#loginyzm");
    var loginyzm =$loginyzm.val().replace(/\s+/g, "").replace($loginyzm.attr("eg"), "");
   // 判断是否自动登录
    if ($(obj).find(".login_validate .loginChk").hasClass("checked")) {
        isAuto = 1; //自动登录
    } else {
        isAuto = 2; //不自动登录 
    }
    var url = "/Ajax/LoginAjax";
    var $stObj = $(obj).find(".error_info");
    $stObj.hide();
     jsonAjaxJsonp("GET", url, "name=" + loginName + "&pwd=" + loginPwd + "&vCode="+loginyzm+"&ajaxType=2&Tb=1&NT=15&isA=" + isAuto, function (data) {
            LOCK_LoginFormSubmit = false;
            $(obj).find(".loginBtn").disabled = false;
            $(obj).find(".loginBtn").val("登录");
            //登录成功之后
             if (parseInt(data.status) > 0) {
                $.cookie("LoginName", loginName, { expires: 7, domain: _Domain, path: '/', encode: true, encodeFun: "enUnicode" });

                $(".yft_Popup.yft_Popup_Login").remove();
                $(".yft_Popup.yft_Popup_Register").remove();
                $("#LoginRegister").hide()
                $("#LoginOk").find("a").eq(0).text($.cookie("uname"))
                $("#LoginOk").show();

                //登录成功之后回调
                dataCommon.LoginType = data.loginType;
                dataCommon.SaveLogined(function() {
                    if (typeof callBackFun != "undefined" && callBackFun != "" && callBackFun != null) {
                        var fun = eval(callBackFun);
                        fun(data);
                        return;
                    }
                    //返回上一个页面的地址
                   location.href = decodeURIComponent($("#hid_loginRefurl").val());
                   // location.href = getQueryStringV(location.href, $("#hid_loginRefurl").val());
                    window.event.returnValue = false;
                });
             }
             else{
                 //var htmlState = "";
                switch (data.status) {
                    case -1:
                       $(obj).find(".errorloginName.error_info").html("<i></i>您输入的账号或密码不正确").show().addClass('TxtShadow').css("right","-265px");
                       $(obj).find(".errorloginName.error_info").parent().addClass('input_item_error');
                        break;
                    case -2:
                       $(obj).find(".errorloginName.error_info").html("<i></i>您输入的账号或密码不正确").show().addClass('TxtShadow').css("right","-265px");
                        $(obj).find(".errorloginName.error_info").parent().addClass('input_item_error');
                        break;
                    case -4:
                       $(obj).find(".errorloginName.error_info").html("<i></i>请输入账号").show().addClass('TxtShadow').css("right","-180px");
                        $(obj).find(".errorloginName.error_info").parent().addClass('input_item_error');
                        break;
                    case -5:
                       $(obj).find(".errorloginPwd.error_info").html("<i></i>请输入密码").show().addClass('TxtShadow').css("right","-180px");
                        $(obj).find(".errorloginPwd.error_info").parent().addClass('input_item_error');
                        break;
                    case -100:
                       $(obj).find(".errorloginName.error_info").html("<i></i>密码错误10次,请15分钟之后再试").show().addClass('TxtShadow').css("right","-299px");
                       $(obj).find(".errorloginName.error_info").parent().addClass('input_item_error');
                        break;
                    case -7:
                       if($.cookie("eTime")==3){
                        $(".input_item.input_item_yzm").show();
                        $(".input_item.input_item_yzm").find(".loginCapt").attr('src', '/Ajax/GetValidateCode?');
                        $(obj).find(".errorloginyzm.error_info").parent().removeClass('input_item_error');
                        break;
                       }
                       else{
                         $(obj).find(".errorloginyzm.error_info").html("<i></i>验证码不正确").show().addClass('TxtShadow').css("right","-190px");
                         $(obj).find(".errorloginyzm.error_info").parent().addClass('input_item_error');
                          break;
                       }
                   
                }
                // if ($stObj.html() != htmlState) {
                //     $stObj.html(htmlState).show();
                // }
             }

     }, function (data) {
        LOCK_LoginFormSubmit = false;
         $(obj).find(".loginBtn")[0].disabled = false;
         $(obj).find(".loginBtn").val("登录");
    });
    return false;
}
function CheckLoginName(obj) {

    $(obj).find(".error_info").hide();
    $(obj).find(".input_item").removeClass('input_item_error');
    if (typeof obj== "undefined") {
        var $loginname = $(".loginName");
        var loginname =$loginname.val().replace(/\s+/g, "").replace($loginname.attr("eg"), "");
        var $pwd = $(".loginPwd");
        var pwd = $pwd.val().replace(/\s+/g, "").replace($pwd.attr("eg"), "");
        var $yzm = $("#loginyzm");
          var yzm = $yzm.val().replace(/\s+/g, "").replace($yzm.attr("eg"), "");
        if($.cookie("eTime")==3){
         if(yzm==""){
            $(obj).find(".input_item.input_item_yzm").show();
            $(obj).find(".errorloginyzm.error_info").html("<i></i>请您填写验证码").show().addClass('TxtShadow').css("right","-205px");
            $(obj).find(".errorloginyzm.error_info").parent().addClass('input_item_error');
            $(obj).find("#vCodImg").attr('src', '/Ajax/GetValidateCode?');
             return false;
           }
        }
        if (loginname == ""&&pwd=="") {
           $(obj).find(".errorloginName.error_info").html("<i></i>请输入账号和密码").show().addClass('TxtShadow').css("right","-215px");
           $(obj).find(".errorloginName.error_info").parent().find("input.loginName").val("").focus();
           $(obj).find(".errorloginName.error_info").parent().addClass('input_item_error');
           
            return false;
        }
        else if (loginname == "") {
           $(obj).find(".errorloginName.error_info").html("<i></i>请输入账号").show().addClass('TxtShadow').css("right","-180px");
            $(obj).find(".errorloginName.error_info").parent().addClass('input_item_error');
            $(obj).find(".errorloginName.error_info").parent().find("input.loginName").val("").focus();
            return false;
        }
        else if (pwd == "") {
            $(obj).find(".errorloginPwd.error_info").html("<i></i>请输入密码").show().addClass('TxtShadow').css("right","-180px");
             $(obj).find(".errorloginPwd.error_info").parent().addClass('input_item_error');
            return false;
        } 
        else{
          $(obj).find(".input_item").removeClass('input_item_error');
          return true;
        }
       
      
    }
    else{
        var $loginname = $(".loginName");
        var loginname =$loginname.val().replace(/\s+/g, "").replace($loginname.attr("eg"), "");
        var $pwd = $(".loginPwd");
        var pwd = $pwd.val().replace(/\s+/g, "").replace($pwd.attr("eg"), "");
        var $yzm = $("#loginyzm");
        var yzm = $yzm.val().replace(/\s+/g, "").replace($yzm.attr("eg"), "");
        if($.cookie("eTime")==3){
         if(yzm==""){
            $(obj).find(".input_item.input_item_yzm").show();
            $(obj).find(".errorloginyzm.error_info").html("<i></i>请您填写验证码").show().addClass('TxtShadow').css("right","-205px");
            $(obj).find(".errorloginyzm.error_info").parent().addClass('input_item_error');
            $(obj).find("#vCodImg").attr('src', '/Ajax/GetValidateCode?');
             return false;
           }
        }
        if (loginname == ""&&pwd=="") {
           $(obj).find(".errorloginName.error_info").html("<i></i>请输入账号和密码").show().addClass('TxtShadow').css("right","-215px");
           $(obj).find(".errorloginName.error_info").parent().find("input.loginName").val("").focus();
           $(obj).find(".errorloginName.error_info").parent().addClass('input_item_error');
            return false;
        }
        else if (loginname == "") {
           $(obj).find(".errorloginName.error_info").html("<i></i>请输入账号").show().addClass('TxtShadow').css("right","-180px");
           $(obj).find(".errorloginName.error_info").parent().find("input.loginName").val("").focus();
           $(obj).find(".errorloginName.error_info").parent().addClass('input_item_error');
            return false;
        }
        else if (pwd == "") {
            $(obj).find(".errorloginPwd.error_info").html("<i></i>请输入密码").show().addClass('TxtShadow').css("right","-180px");
            $(obj).find(".errorloginPwd.error_info").parent().addClass('input_item_error');
            return false;
        } 
        else{
        return true;
          $(obj).find(".input_item").removeClass('input_item_error');
          
        }
    }
}
//自动登录 
$(document).on("click", ".loginChk", function () {
    $(this).toggleClass("checked");
});
$(document).on("click", ".autoTxt", function () {
    $(this).parent().find(".loginChk").toggleClass("checked");
});
//点击验证码
function onblursLoginYzm(obj) {
    obj = $(obj).closest(".login_containter");
   $(obj).find(".error_info").hide();
    var $loginyzm = $("#loginyzm");
    var loginyzm =$loginyzm.val().replace(/\s+/g, "").replace($loginyzm.attr("eg"), "");
    if (loginyzm == "") {
        $(obj).find(".errorloginyzm.error_info").html("<i></i>请输入短信验证码").show().addClass('TxtShadow').css("right","-215px");
            return false;
    }
    else {
        //后台验证账号是否存在
        $(obj).find(".input_item").removeClass('input_item_error');
        CheckYzm(obj,loginyzm,false);
        return true;
    }
}

/********手机验证登录*******/
//手机点击验证码
function onblursLoginYzmPhone(obj) {
    obj = $(obj).closest(".login_containter");
   $(obj).find(".error_info").hide();
    var $loginyzm = $("#loginyzmPhone");
    var loginyzm =$loginyzm.val().replace(/\s+/g, "").replace($loginyzm.attr("eg"), "");
    if (loginyzm == "") {
        $(obj).find(".errorloginyzm.error_info").html("<i></i>请输入短信验证码").show().addClass('TxtShadow').css("right","-215px");
            return false;
    }
    else {
        //后台验证账号是否存在
        $(obj).find(".input_item").removeClass('input_item_error');
        CheckYzm(obj,loginyzm,false);
        return true;
    }
}
//点击手机框
function onblursLoginPhone(obj) {
    obj = $(obj).closest(".login_containter");
   $(obj).find(".error_info").hide();
  
    var $loginPhone = $(".loginPhone");
     var loginPhone =$loginPhone.val().replace(/\s+/g, "").replace($loginPhone.attr("eg"), "");
    if (loginPhone == "") {
        $(obj).find(".errorloginPhone.error_info").html("<i></i>请输入手机号").show().addClass('TxtShadow').css("right","-190px");
        $(obj).find(".errorloginPhone.error_info").parent().addClass('input_item_error');
            return false;
    }
    else if (!(/^1(3|4|5|7|8)\d{9}$/.test(loginPhone))) {
        $(obj).find(".errorloginPhone.error_info").html("<i></i>请输入正确的11位手机号码").show().addClass('TxtShadow').css("right","-265px");
        $(obj).find(".errorloginPhone.error_info").parent().addClass('input_item_error');
        return false;
    }
    else {
        //后台验证账号是否存在
        $(obj).find(".input_item").removeClass('input_item_error');
        CheckAccount(obj, loginPhone,2, false);
        return true;
    }
}

// 手机登录
var LOCK_PhoneFormSubmit = false;
function LoginPhoneSubmit(obj, callBackFun) {
    if (LOCK_LoginFormSubmit) {
        return false;
    }
    obj = $(obj).closest(".login_containter");
    var OK = true;
    if (!CheckLoginPhone(obj))
        OK = false;
    if (!OK)
        return false;

    var loginPhone = $(obj).find(".loginPhone").val();
    var loginCode = $(obj).find(".loginCode").val();
 
    LOCK_PhoneFormSubmit=true;

    var $stObj = $(obj).find(".error_info");
    $stObj.hide();
     var url = "/Ajax/LoginAjax";
      jsonAjaxJsonp("POST", url, "name="+loginPhone+"&pwd="+loginCode+"&vCode=-1&ajaxType=2&Tb=2&isA=2&NT=15", function (data) {
        LOCK_PhoneFormSubmit = false;
        $(obj).find(".PhoneloginBtn")[0].disabled = false;
        $(obj).find(".PhoneloginBtn").val("登录");
     if (parseInt(data.status) > 0) {
         $.cookie("LoginName", loginPhone, { expires: 7, domain: _Domain, path: '/' });

                $(".yft_Popup.yft_Popup_Login").remove();
                $(".yft_Popup.yft_Popup_Register").remove();
                $("#LoginRegister").hide()
                $("#LoginOk").find("a").eq(0).text($.cookie("uname"))
                $("#LoginOk").show();

            //登录成功
            dataCommon.LoginType = 2;
            dataCommon.SaveLogined(function() {
                if (typeof callBackFun != "undefined" && callBackFun != "" && callBackFun != null) {
                    var fun = eval(callBackFun);
                    fun(data);
                    return;
                }
               location.href = decodeURIComponent($("#hid_loginRefurl").val());
              // location.href = getQueryStringV(location.href, $("#hid_loginRefurl").val());
                window.event.returnValue = false;
            });
        }
       else {
            switch (data.status) {
            case -1:
                $(obj).find(".errorloginPhone.error_info").html("<i></i>您输入的手机号或短信验证码不正确").show().addClass('TxtShadow').css("right","-315px"); //账号或密码不正确：您输入的账号或密码不正确
                break;
            case -4:
                $(obj).find(".errorloginPhone.error_info").html("<i></i>请输入手机号").show().addClass('TxtShadow').css("right","-190px");//账号为空：请输入登录账号
                break;
            case -5:
                $(obj).find(".errorloginCode.error_info").html("<i></i>请输入短信验证码").show().addClass('TxtShadow').css("right","-215px"); // 密码为空：请输入登录密码
                break;
             case -8:
                $(obj).find(".errorloginCode.error_info").html("<i></i>您输入的短信验证码不正确").show().addClass('TxtShadow').css("right","-265px"); //账号或密码不正确：您输入的账号或密码不正确
                break;
            case -7:
                   $(obj).find(".Login_Uname").show();
                   $(obj).find(".PhoneloginBtn").hide();
                   $(obj).find(".PhoneRegBtn").show();
            case -9:
             $(obj).find(".errorloginCode.error_info").html("<i></i>验证码已过期，请重新获取").show().addClass('TxtShadow').css("right","-265px");// 验证码错误10次：验证码已过期，请重新获取
                break;
            case -100:
                $(obj).find(".errorloginPhone.error_info").html("<i></i>密码错误10次,请15分钟之后再试").show().addClass('TxtShadow').css("right","-299px");
                break;
            }
        }
    }, function (data) {
        LOCK_PhoneFormSubmit = false;
        $(obj).find(".PhoneloginBtn")[0].disabled = false;
        $(obj).find(".PhoneloginBtn").val("登录");
    })
    return false;
}
// 手机注册
function RegPhoneSubmit(obj, callBackFun){
  
    obj = $(obj).closest(".login_containter");
    var OK = true;
    if (!CheckLoginPhone(obj))
        OK = false;
    if (!OK)
        return false;
     var loginPhone =$(".loginPhone").val()
     var loginCode = $(".loginCode").val();

      $(".PhoneRegBtn")[0].disabled = true;
    var $stObj = $(obj).find(".error_info");
    $stObj.hide();

    var url = "/Ajax/RegAjax";
    jsonAjaxJsonp("GET", url, "name=" + loginPhone +"&pwd=1&vCode=" + loginCode+"&proCode=1&ajaxType=1", function (data) {
    $(".PhoneRegBtn")[0].disabled = false;
     if (parseInt(data.status) > 0) {
         $.cookie("LoginName", loginPhone, { expires: 7, domain: _Domain, path: '/', encode: true, encodeFun: "enUnicode" });

               $(".yft_Popup.yft_Popup_Login").remove();
                $(".yft_Popup.yft_Popup_Register").remove();
                $("#LoginRegister").hide()
                $("#LoginOk").find("a").eq(0).text($.cookie("uname"))
                $("#LoginOk").show();
             //注册成功
            dataCommon.LoginType = data.loginType;
            dataCommon.SaveRegistred(function () {
                if (typeof callBackFun != "undefined") {
                    var fun = eval(callBackFun);
                    fun(data);
                    return;
                }
                //调用
              // var str1 = getQueryStringV(location.href, $("#hid_loginRefurl").val());
               window.location.href = decodeURIComponent($("#hid_loginRefurl").val());
               // location.href = getQueryStringV(location.href, $("#hid_loginRefurl").val());
               // decodeURIComponent($("#hid_loginRefurl").val());
                window.event.returnValue = false;
            });
     }
     else{
        switch (data.status) {
            case -9:
               $(obj).find(".errorloginPhone.error_info").html("<i></i>您输入的手机号或短信验证码不正确").show().addClass('TxtShadow').css("right","-315px");  //手机号或邮箱格式不正确：“请填写正确的手机/邮箱”
                break;
            case -15:
               $(obj).find(".errorloginCode.error_info").html("<i></i>您输入的短信验证码不正确").show().addClass('TxtShadow').css("right","-265px"); // 短信验证码不正确：您输入的短信验证码不正确
                break;
             case -20:
               $(obj).find(".errorloginCode.error_info").html("<i></i>您输入的短信验证码不正确").show().addClass('TxtShadow').css("right","-265px"); // 短信验证码不正确：您输入的短信验证码不正确
                break;

        }
     }
    });
    return false;
}
function CheckLoginPhone(obj) {
    $(obj).find(".error_info").hide();
     
    if (typeof obj== "undefined") {
        var $loginPhone = $(".loginPhone");
        var loginPhone =$loginPhone.val().replace(/\s+/g, "").replace($loginPhone.attr("eg"), "");
        var $loginCode = $(".loginCode");
        var loginCode = $loginCode.val().replace(/\s+/g, "").replace($loginCode.attr("eg"), "");

        if (loginPhone == ""&&loginCode == "") {
           $(obj).find(".errorloginPhone.error_info").html("<i></i>请输入手机号和短信验证码").show().addClass('TxtShadow').css("right","-262px");
           $(obj).find(".errorloginPhone.error_info").parent().addClass('input_item_error');

            return false;
        }
        else  if (loginPhone == "") {
           $(obj).find(".errorloginPhone.error_info").html("<i></i>请输入手机号").show().addClass('TxtShadow').css("right","-190px");
           $(obj).find(".errorloginPhone.error_info").parent().addClass('input_item_error');
            $(".loginPhone").focus();
            return false;
        }
        else if (!/^1(3|4|5|7|8)\d{9}$/.test(loginPhone)) {
            $(obj).find(".errorloginPhone.error_info").html("<i></i>请输入正确的11位手机号码").show().addClass('TxtShadow').css("right","-265px");
            $(obj).find(".errorloginPhone.error_info").parent().addClass('input_item_error');
             $(".loginPhone").focus();
        return false;
        } 
        else if (loginCode == "") {
            $(obj).find(".errorloginCode.error_info").html("<i></i>请输入短信验证码").show().addClass('TxtShadow').css("right","-215px");
            $(obj).find(".errorloginCode.error_info").parent().addClass('input_item_error');
            $(".loginCode").focus();
            return false;
        } 
        else{
             $(obj).find(".input_item").removeClass('input_item_error');
             return true;
        }
    }
    else{
        var $loginPhone = $(".loginPhone");
        var loginPhone =$loginPhone.val().replace(/\s+/g, "").replace($loginPhone.attr("eg"), "");
        var $loginCode = $(".loginCode");
        var loginCode = $loginCode.val().replace(/\s+/g, "").replace($loginCode.attr("eg"), "");

        if (loginPhone == ""&&loginCode == "") {
           $(obj).find(".errorloginPhone.error_info").html("<i></i>请输入手机号和短信验证码").show().addClass('TxtShadow').css("right","-262px");
           $(obj).find(".errorloginPhone.error_info").parent().addClass('input_item_error');
            return false;
        }
        else  if (loginPhone == "") {
           $(obj).find(".errorloginPhone.error_info").html("<i></i>请输入手机号").show().addClass('TxtShadow').css("right","-190px");

           $(obj).find(".errorloginPhone.error_info").parent().addClass('input_item_error');
           $(".loginPhone").focus();
            return false;
        }
        else if (!/^1(3|4|5|7|8)\d{9}$/.test(loginPhone)) {
            $(obj).find(".errorloginPhone.error_info").html("<i></i>请输入正确的11位手机号码").show().addClass('TxtShadow').css("right","-265px");
            $(obj).find(".errorloginPhone.error_info").parent().addClass('input_item_error');
            $(".loginPhone").focus();
            return false;
        } 
        else if (loginCode == "") {
            $(obj).find(".errorloginCode.error_info").html("<i></i>请输入短信验证码").show().addClass('TxtShadow').css("right","-215px");
            $(obj).find(".errorloginCode.error_info").parent().addClass('input_item_error');
           $(".loginCode").focus();
            return false;
        } 
        else{
            $(".errorloginPhone.error_info").parent().removeClass('input_item_error');
             return true;
        }
    }
}
// 短信验证码
function getYzm(obj, dataType) {
    obj = $(obj).closest(".login_containter");
   // setCookie("YZMErrorNum", "", new Date(), "/", _Domain);//清除验证码的COOKIE
     var $loginPhone = $(".loginPhone");
     var loginPhone =$loginPhone.val().replace(/\s+/g, "").replace($loginPhone.attr("eg"), "");
   $(obj).find(".error_info").hide();
    $(obj).parents().find(".Login_Uname").hide();
    if (loginPhone == "") {
        $(obj).find(".errorloginPhone.error_info").html("<i></i>请输入手机号").show().addClass('TxtShadow').css("right","-190px");
        $(obj).find(".errorloginPhone.error_info").parent().addClass('input_item_error');
        return;
    } else if (!/^1(3|4|5|7|8)\d{9}$/.test(loginPhone)) {
        $(obj).find(".errorloginPhone.error_info").html("<i></i>请输入正确的11位手机号码").show().addClass('TxtShadow').css("right","-265px");
        $(obj).find(".errorloginPhone.error_info").parent().addClass('input_item_error');
        return;
    } else {
        $(obj).find(".input_item").removeClass('input_item_error');
        $(obj).find(".error_info").hide();
    }
    var r = /^1(3|4|5|7|8)\d{9}$/;
    if (r.test(loginPhone)) {
       var $loginyzm = $("#loginyzmPhone");
        var loginyzm =$loginyzm.val().replace(/\s+/g, "").replace($loginyzm.attr("eg"), "");
        if (loginyzm == "") {
            $(obj).find(".errorloginyzm.error_info").html("<i></i>请您填写验证码").show().addClass('TxtShadow').css("right","-205px");
              return;
        }
    } else {
        //判断验证码为空
       var $loginCode = $(".loginCode");
        var loginCode = $loginCode.val().replace(/\s+/g, "").replace($loginCode.attr("eg"), "");
        if (loginCode == "") {
            $(obj).find(".errorloginPhone.error_info").html("<i></i>请输入短信验证码").show().addClass('TxtShadow').css("right","-265px");
        }

    }
    CheckYzmPhone(obj,loginPhone,loginyzm,dataType);
}

// 验证码
var wait = 60;
function time(data) {
    if (wait == 0) {
        $(".login_sendCode input").removeClass("login_sendCode_to").removeAttr("disabled");
        if (typeof data == "undefined") {
            $(".login_sendCode input").val("获取短信验证码");
            $(".login_sendCode input").addClass('sendCodePhone');
              changVCodePhone();
        } else {
            $(".login_sendCode input").val("重新发送");
        }
        wait = 60;
    } else {
        if (wait >= 59) {
            $(".login_sendCode input").addClass('login_sendCode_to').attr("disabled", true);
        }
        if (typeof data == "undefined") {
            $(".login_sendCode input").val("重新发送" + wait);
            $(".login_sendCode input").removeClass('.sendCodePhone');
        } else {
           $(".login_sendCode input").val("重新发送" + wait);
           $(".login_sendCode input").removeClass('.sendCodePhone');
        }
        wait--;
        setTimeout(function () { time(data); }, 1000);
    }
}

$(document).on('click', '.login_sendCode input', function(event) {
     getYzm($(this))
});
// $(document).on('click', 'input.sendCodePhone', function(event) {
//      $("#vCodImgPhone").click();
// });

$(document).on("click",".phoneChk",function(){
    $(this).toggleClass('checked');
    var phoneChk = $(this).siblings("input:checkbox")[0];
     if (phoneChk.checked = !phoneChk.checked) {
            $('.PhoneloginBtn').removeAttr("disabled");
        }
        else {
            $('.PhoneloginBtn').attr("disabled", "true");

        }
});

/***********************清除Cookie**********************/
//使用实例
//setCookie("username", "",new Date(),"/",_Domain);
//name:Cookie名称
//value:Cookie值
//expires:Cookie时间
//path:地址
//domain:域
function setCookie(name, value, expires, path, domain) {
    var curCookie = name + "=" + encodeURI(value) +
    ((expires) ? "; expires=" + expires.toGMTString() : "") +
    ((path) ? "; path=" + path : "") +
    ((domain) ? "; domain=" + domain : "")
    document.cookie = curCookie;
}
// 更换验证码
function changVCode() {
   
     $.cookie("Code_Expression", null, { path: "/", domain: _Domain });
    var myDate = new Date();
    //$("#vCodImg").attr("src", "/Ajax/GetValidateCode?" + myDate.getSeconds());
    $("#vCodImg").attr("src", loginUrl+"/Ajax/GetValidateCode?" + myDate.toLocaleString());
}
// 手机更换验证码
function changVCodePhone() {
     $.cookie("Code_Expression", null, { path: "/", domain: _Domain });
    var myDate = new Date();
    //$("#vCodImg").attr("src", "/Ajax/GetValidateCode?" + myDate.getSeconds());
    $("#vCodImgPhone").attr("src", loginUrl+"/Ajax/GetValidateCode?" + myDate.toLocaleString());
}
//url取值
function getQueryStringV(vhref, name) {
    // 如果链接没有参数，或者链接中不存在我们要获取的参数，直接返回空
    if (vhref.indexOf("?") == -1 || vhref.indexOf(name + '=') == -1) {
        return 'http://www.yifutu.com';
    }
    // 获取链接中参数部分
    var queryString = vhref.substring(vhref.indexOf("?") + 1);
    // 分离参数对 ?key=value&key2=value2
    var parameters = queryString.split("&");
    var pos, paraName, paraValue;
    for (var i = 0; i < parameters.length; i++) {
        // 获取等号位置
        pos = parameters[i].indexOf('=');
        if (pos == -1) {
            continue;
        }
        // 获取name 和 value
        paraName = parameters[i].substring(0, pos);
        paraValue = parameters[i].substring(pos + 1);
 
        if (paraName == name) {
            return unescape(paraValue.replace(/\+/g, " "));
        }
    }
    return '';
}


/*******************************快捷登录**********************************/
    var commonappDialog, commonbindDialog, loginUrl,indexUrl;

    /***************切换到一幅图************************/
    if (document.domain.indexOf('gaitu.com') >= 0) {
        document.domain = 'gaitu.com';
        var serviceurl = "http://service.yifutu.com/";
        loginUrl = "http://login.yifutu.com/"; 
        indexUrl = "http://www.yifutu.com/"; 
       // loginUrl = "http://tuleiqq.gaitu.com/";
    } else if (document.domain.indexOf('yifutu.cn') >= 0 && location.href.indexOf("test.") >= 0) {
        document.domain = 'yifutu.cn';
        loginUrl = "http://test.login.yifutu.cn/";
        var serviceurl = "http://service.yifutu.cn/";
        indexUrl = "http://test.www.yifutu.cn/"; 
    } else if (document.domain.indexOf('yifutu.cn') >= 0) {
        document.domain = 'yifutu.cn';
        var serviceurl = "http://service.yifutu.cn/";
        loginUrl = "http://login.yifutu.cn/";
        indexUrl = "http://www.yifutu.cn/";
    }else if (document.domain.indexOf('yifutu.com') >= 0) {
        document.domain = 'yifutu.com';
        var serviceurl = "http://service.yifutu.cn/";
        loginUrl = "http://login.yifutu.com/";
        indexUrl = "http://www.yifutu.com/";
    } 
     else {
        document.domain = '61.136.198.221';
        var serviceurl = "http://service.yifutu.cn/";
    }


    //QQ快捷登录
    //以下为按钮点击事件的逻辑。注意这里要重新打开窗口
    //否则后面跳转到QQ登录，授权页面时会直接缩小当前浏览器的窗口，而不是打开新窗口
    function openQQ() {
        var A = window.open(loginUrl + "app/qq/LoginToQQ.aspx", "TencentLogin", "width=510,height=400,menubar=0,scrollbars=0, status=1,titlebar=0,toolbar=0,location=1");
    }

    //支付宝快捷登录
    function openAliPay() {
        var A = window.open(loginUrl + "app/alipay/Logintoali.aspx", "AliPayLogin", "width=960,height=600,menubar=0,scrollbars=0, titlebar=0,toolbar=0,location=1");
    }

    //微博快捷登录
    function openWeiBo() {
        var A = window.open(loginUrl + "app/weibo/logintoweibo.aspx", "WeiBoLogin", "width=640,height=450,menubar=0,scrollbars=0, status=1,titlebar=0,toolbar=0,location=1");
    }

    function openWeiXin() {
        var A = window.open(loginUrl + "app/weixin/NewLogin2Weixin.aspx", "WeiXinLogin", "width=640,height=450,menubar=0,scrollbars=0, status=1,titlebar=0,toolbar=0,location=1");
        // var A = window.open("https://open.weixin.qq.com/connect/qrconnect?appid=wx2d31f65267d0fcb6&redirect_uri=http%3a%2f%2fwww.webus.cn&response_type=code&scope=snsapi_login&state=awen#wechat_redirect");
    }

    /*********快捷登录返回的方法***********/
    function closeappLogin(bindstat, logid, openid) {
        //登陆失败
        if (bindstat == 0) {
            alert("登录失败,请重新尝试。");
        }
            //第一次绑定跳转到绑定页面
        //else if (bindstat == 1) {
        //    location.href = loginUrl + "/AccountsBound.aspx?iT=1&QL=" + logid;
        //    window.event.returnValue = false;
        //}
            //登陆成功
        else if (bindstat == 2) {
            if ($("#hid_loginRefurl").length == 1) {
                location.href = $("#hid_loginRefurl").val();
                window.event.returnValue = false;
                return;
            }
        }
        else if (bindstat == 3) {
            //alert("对不起,该帐号已经绑定过其它用户,请重新绑定。");
            window.open("http://i.yifutu.com/Space/Page/PersInfoManager/AccountBoound_Empty.aspx", "_self");
        }
    }

function getUrlParam(name){  
    //构造一个含有目标参数的正则表达式对象  
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");  
    //匹配目标参数  
    var r = window.location.search.substr(1).match(reg);  
    //返回参数值  
    if (r!=null) return unescape(r[2]);  
    return null;  
}  

$(document).ready(function(){
// 
//初始获取COOKIE
    if ($.cookie("LoginName") != null) {
        LoginName = unescape($.cookie("LoginName").replace(/\\/g, "%"));
    }
   // LoginPhone = $.cookie("LoginPhone");
    //在当前的文本框赋值
    if (typeof LoginName != "undefined") {
        $("input[name='username']").val(LoginName);
    }
    // if (typeof LoginPhone != "undefined") {
    //     $(".loginPhone").val(LoginPhone);
    // }
     if ($.cookie("uid") != null) {
     // location.href="http://www.yifutu.com";  
        location.href=indexUrl;
      
    }
   
    // 用户输入三次用户密码错误时出现
    if ($.cookie("eTime") == null||$.cookie("eTime") == undefined) {
        $(".input_item.input_item_yzm").hide();
    }
    else{
       $(".input_item.input_item_yzm").show();
    } 
     if($.cookie("eTime") == 3)
    {
        $(".input_item.input_item_yzm").show();
         $(".input_item.input_item_yzm").find(".loginCapt").attr('src', '/Ajax/GetValidateCode?').click();
    }

       // $("#hid_loginRefurl").val(location.href);
       if(getUrlParam('returnurl')!=null){
        var returnURL = getUrlParam('returnurl');
        if (returnURL.lastIndexOf("http://login.yifutu.com/") == returnURL.length - 1) {
            returnURL = returnURL.substring(0, returnURL.lastIndexOf("http://login.yifutu.com/"));
        }
        $("#hid_loginRefurl").val(returnURL);    
}
$(document).on("click",".login_change a",function(){
    if(returnURL!=undefined){
        $(this).attr('href', LoginUrl+'LoginReg/Reg?returnurl='+$("#hid_loginRefurl").val());
    }
    else{
        $(this).attr('href', LoginUrl+'LoginReg/Reg');
    }
    
});





});

 // //页面关闭
 //    $(window).bind('beforeunload', function () {
 //        dataCommon.SaveLoginOut();
 //    });
/***************回车提交*******************/
function KeyDownFunction(fun, obj) {
    LOCK_LoginFormSubmit = false;
    LOCK_PhoneFormSubmit = false;
    var event = arguments.callee.caller.arguments[0] || window.event; //消除浏览器差异  
    if (event.keyCode == 13) {
        fun(obj);
    }
}
/***************回车提交 END*******************/
$(document).on('keydown', 'input.loginName', function() {
  KeyDownFunction(LoginFormSubmit,$(this));
});
$(document).on('keydown', 'input.loginPwd', function() {
  KeyDownFunction(LoginFormSubmit,$(this));
});
$(document).on('keydown', 'input.loginyzm', function() {
  KeyDownFunction(LoginFormSubmit,$(this));
});
console.log("\u002f\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u000d\u000a\u0020\u002a\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u002a\u0009\u0009\u000d\u000a\u0020\u002a\u0020\u0009\u0009\u0009\u0009\u0009\u0009\u0020\u0020\u0020\u0020\u0020\u0020\u4ee3\u7801\u5e93\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u002a\u000d\u000a\u0020\u002a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0077\u0077\u0077\u002e\u0064\u006d\u0061\u006b\u0075\u002e\u0063\u006f\u006d\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u002a\u000d\u000a\u0020\u002a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0009\u0009\u0020\u0020\u52aa\u529b\u521b\u5efa\u5b8c\u5584\u3001\u6301\u7eed\u66f4\u65b0\u63d2\u4ef6\u4ee5\u53ca\u6a21\u677f\u0009\u0009\u0009\u002a\u000d\u000a\u0020\u002a\u0020\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u002a\u000d\u000a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002f");