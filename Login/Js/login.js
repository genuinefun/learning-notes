var Login = {
    Init: null
};
Login.Init = function (parameter) {

    var Quick2Static = $("#Quick2Static"),
        Static2Quick = $("#Static2Quick"),
        StaticLogin = true;

    StaticLogin = parameter.StaticLogin;
    if (StaticLogin) {
        Show_Static();
    }
    else {
        Show_Quick();
    }

    function Show_Quick() {
        $("#login-wrap .hd").show();
        $("#login-wrap .hd .quick").hide();
        $("#login-wrap #QuickLogin").show();
        $("#login-wrap .hd .login-tip2").show();
    }

    function Hide_Quick() {
        $("#login-wrap .hd").show();
        $("#login-wrap .hd .quick").show();
        $("#login-wrap #QuickLogin").hide();
        $("#login-wrap .hd .login-tip2").hide();
    }

    function Show_Static() {
        $("#login-wrap .hd").show();
        $("#login-wrap .hd .static").hide();
        $("#login-wrap #InputLogin").show();
        $("#login-wrap .hd .login-tip").show();
    }

    function Hide_Static() {
        $("#login-wrap .hd").show();
        $("#login-wrap .hd .static").show();
        $("#login-wrap #InputLogin").hide();
        $("#login-wrap .hd .login-tip").hide();
    }

    Static2Quick.on('click', function (event) {
        $(this).hide();

        //console.log("快速登录");

        Show_Quick();
        Hide_Static();

        Quick2Static.show();
        Static2Quick.hide();
    });
    Quick2Static.on('click', function (event) {
        $(this).hide();

        //console.log("密码登录");

        Show_Static();
        Hide_Quick();

        Static2Quick.show();
        Quick2Static.hide();
    });

};