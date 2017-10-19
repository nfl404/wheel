/*
 * 留言
 * <form id='#contact-form'>
 * <input type='text' id='name' name='name' placeholder='请输入您的姓名'  />
 * <input type='text' id='telephone' name='telephone' placeholder='请输入您的电话'  />
 * <input type='text' id='email' name='email' placeholder='请输入您的邮箱'  />
 * <input type='text' id='title' name='title' placeholder='请输入您的标题'  />
 * <textarea id='textarea' name='content' placeholder='请输入您的内容'></textarea>
 * <input type='text' id='verifyInput' name='verify' placeholder='请输入验证码'  />
 * <img src='' id='verify' /><a href='javascript:;' id='change' >看不清？换一张</a>
 * <input type='submit' value='提 交' id='message-submit' />
 * <input type='reset' value='重 置' id='reset' />
 * </form>
*/



$(function(){

    //恢复初始化
    $('#reset').click(function(){
        reset();
        changeImg();
    });

    function reset(){
        $('#contact-form').find('input').removeClass('validate-on');
        $('textarea[name="content"]').removeClass('validate-on');
        $('input[name="name"]').attr('placeholder','请输入您的姓名');
        $('input[name="telephone"]').attr('placeholder','请输入您的电话');
        $('input[name="email"]').attr('placeholder','请输入您的邮箱');
        $('input[name="title"]').attr('placeholder','请输入您的标题');
        $('textarea[name="content"]').attr('placeholder','请输入您的内容');
        $('input[name="verify"]').attr('placeholder','请输入验证码');
		changeImg();
    }

    //切换验证码
    $('#change').click(function(){
        changeImg();
    });

    $('#verify').click(function(){
        changeImg();
    });

    function changeImg(){
        var verifyimg = $("#verify").attr("src");
        if( verifyimg.indexOf('?')>0){
            $("#verify").attr("src", verifyimg+'&random='+Math.random());
        }else{
            $("#verify").attr("src", verifyimg.replace(/\?.*$/,'')+'?'+Math.random());
        }
    }

    $('textarea[name="content"]').focus(function () {
        $(this).attr('placeholder', '');
    });
    $('textarea[name="content"]').focusout(function(){
        $(this).attr('placeholder','请输入您的内容');
    });


    //发布
    document.getElementById('message-submit').onclick = function () {

        //验证
        temp_validate = 0;

        if ($.trim($('input[name="title"]').val()) == '') {
            $('input[name="title"]').val('');
            $('input[name="title"]').addClass('validate-on').attr('placeholder','标题不能为空');
            temp_validate = 1;
        } else {
            $('input[name="title"]').removeClass('validate-on');
        }

        if ($.trim($('input[name="name"]').val()) == '') {
            $('input[name="name"]').val('');
            $('input[name="name"]').addClass('validate-on').attr('placeholder','姓名不能为空');temp_validate = 1;
        } else {
            $('input[name="name"]').removeClass('validate-on');
        }

        var $telephone = $.trim($('input[name="telephone"]').val());
        var $reg = /^[0-9\-\+]{7,20}$/;

        if ($.trim($('input[name="telephone"]').val()) == '') {
            $('input[name="telephone"]').val('');
            $('input[name="telephone"]').addClass('validate-on').attr('placeholder','电话不能为空');temp_validate = 1;
        } else if(!$reg.test($telephone)){
            $('input[name="telephone"]').val('');
            $('input[name="telephone"]').addClass('validate-on').attr('placeholder','电话格式不正确');temp_validate = 1;
        }else {
            $('input[name="telephone"]').removeClass('validate-on');
        }



        var $email = $.trim($('input[name="email"]').val());
        var $reg = /^[\w\.]{1,}@\w+(\.\w+)?\.\w+$/;

        if ($.trim($('input[name="email"]').val()) == '') {
            $('input[name="email"]').val('');
            $('input[name="email"]').addClass('validate-on').attr('placeholder','邮箱不能为空');temp_validate = 1;
        }else if(!$reg.test($email)){
            $('input[name="email"]').val('');
            $('input[name="email"]').addClass('validate-on').attr('placeholder','邮箱格式不正确');temp_validate = 1;
        } else {
            $('input[name="email"]').removeClass('validate-on');
        }




        if ($.trim($('textarea[name="content"]').val()) == "") {
            $('textarea[name="content"]').val('');
            $('textarea[name="content"]').addClass('validate-on').attr('placeholder','内容不能为空');
            temp_validate = 1;
        } else {
            $('textarea[name="content"]').removeClass('validate-on');
        }

        if ($.trim($('input[name="verify"]').val()) == '') {
            $('input[name="verify"]').val('');
            $('input[name="verify"]').addClass('validate-on').attr('placeholder','验证码不能为空');temp_validate = 1;
        } else {
            $('input[name="verify"]').removeClass('validate-on');
        }


        if(temp_validate == 1){
            $('.validate-on:first').focus();
            return false;}


        $('.validate-on').eq(0).focus();

        $.ajax({
            type: "post",
            url: "/contact-add.html",
            data: $('#contact-form').serialize(),
            dataType: "json",
            success: function (response) {
                $('input[name="verify"]').val("");
                if (response.status == 1) {
                    if (typeof (_paq) != "undefined") {
                        _paq.push(['trackGoal', 1]);
                    }
                    //清空内容
                    $('input[name="name"]').val("");
                    $('input[name="telephone"]').val("");
                    $('input[name="email"]').val("");
                    $('input[name="title"]').val("");
                    $('textarea[name="content"]').val("");
                    $('input[name="verify"]').val("");
                    reset();
                    alert(response.info);
                    changeImg();
                } else {
                   // console.log(111);
                    $('input[name="verify"]').addClass('validate-on').attr('placeholder','验证码错误');
					$('.validate-on').eq(0).focus();
                    // alert(response.info);
                    changeImg();
                }
            }

        });

        return false;
    };
});


function validateName() {
    if ($.trim($('#name').val()) == '') {
        $('#name').val('');
        $('#name').addClass('validate-on').attr('placeholder','姓名不能为空');
    } else {
        $('#name').removeClass('validate-on');
    }
};

function phone() {
    if ($.trim($('#telephone').val()) == '') {
        $('#telephone').val('');
        $('#telephone').addClass('validate-on').attr('placeholder','电话不能为空');
    } else {
        var $telephone = $.trim($('#telephone').val());
        var $reg = /^[0-9\-\+]{7,20}$/;
        if (!$reg.test($telephone)) {
            $('#telephone').val('');
            $('#telephone').addClass('validate-on').attr('placeholder','电话格式不正确');
        } else {
            $('#telephone').removeClass('validate-on');
        }
    }


}

function email() {
    if ($.trim($('#email').val()) == '') {
        $('#email').val('');
        $('#email').addClass('validate-on').attr('placeholder','邮箱不能为空');
    } else {
        var $email = $('#email').val();
        var $reg = /^[\w\.]{1,}@\w+(\.\w+)?\.\w+$/;
        if (!$reg.test($email)) {
            $('#email').val('');
            $('#email').addClass('validate-on').attr('placeholder','邮箱格式不正确');
        } else {
            $('#email').removeClass('validate-on');
        }
    }


}

function title() {
    if ($.trim($('#title').val()) == '') {
        $('#title').val('');
        $('#title').addClass('validate-on').attr('placeholder','标题不能为空');
    } else {
        $('#title').removeClass('validate-on');
    }
}

function textarea() {
    if ($.trim($('#textarea').val()) == '') {
        $('#textarea').val('');
        $('#textarea').addClass('validate-on').attr('placeholder','内容不能为空');
    } else {
        $('#textarea').removeClass('validate-on');
    }
}
function verifyInput() {
    if ($.trim($('#verifyInput').val()) == '') {
        $('#verifyInput ').val('');
        $('#verifyInput').addClass('validate-on').attr('placeholder','验证码不能为空');
    } else {
        $('#verifyInput').removeClass('validate-on');
    }
}
$('#name').on('blur', function () {
    validateName();

});

$('#telephone').on('blur', function () {
    phone();
});

$('#email').on('blur', function () {
    email();
});

$('#title').on('blur', function () {
    title();
});

$('#textarea').on('blur', function () {
    textarea();
});
$('#verifyInput').on('blur', function () {
    verifyInput();
});
