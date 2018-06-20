<%@ page language="java" pageEncoding="UTF-8"%>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path;
%>
<html>
<title>用户登录</title>
<head>
    <meta name="viewport" content="width=device-width,initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
    <link href="//cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.css" rel="stylesheet">
    <link href="//cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap-theme.css" rel="stylesheet">
    <script src="//cdn.bootcss.com/jquery/3.1.1/jquery.min.js"></script>
    <script src="//cdn.bootcss.com/bootstrap/3.3.7/js/bootstrap.js"></script>
    <script src="//cdn.bootcss.com/vue/1.0.26/vue.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js"></script>
    <link href="//cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css" rel="stylesheet">

</head>
<body>
<div class="container" style="margin-top: 70px;">

        <div class="col-md-3">
            <div class="panel panel-primary">
                <div class="panel-heading">用户登录</div>
                <div class="panel-body">
                    <div id="userform">
                        <div class="form-group">
                            <label for="userName">用户名：</label>
                            <input v-model="userName" type="text" class="form-control" id="userName">
                        </div>
                        <div class="form-group">
                            <label for="password">密码：</label>
                            <input v-model="password" type="password" class="form-control" id="password"
                                   placeholder="Password">
                        </div>
                        <button type="submit" class="btn btn-default" v-on:click="toLogin">登录</button>
                    </div>
                </div>
            </div>
        </div>

    </div>

</div>

</div>

<script src="<%=basePath%>/static/js/user.js" type="text/javascript"></script>
</body>
</html>
