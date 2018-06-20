
new Vue({
    el: '#user_tb',
    data: {
        userList: []
    },
    ready:function(){
        var self = this;
        $.ajax({
            url: '/ExamSys/rest/user/',
            method: 'GET',
            statusCode:{
                404: function () {
                    alert("您还没有创建用户");
                }
            },
            success: function (data) {
                self.userList = data;
            }
        });
    },
    methods:{
        deleteUser:function(id){
            $.ajax({
                url: '/ExamSys/rest/user/'+id,
                method: 'DELETE',
                statusCode:{
                    404: function () {
                        alert("用户不存在");
                    }
                },
                success: function (result) {
                    alert("删除成功");
                    location.reload();
                }
            });

        }
    }
});

new Vue({
    el:"#userForm",
    data:{
        "id":"",
        "userName":"zhangsan",
        "password":"123456"
    },
    methods:{
        toLogin:function () {
            var param = {"id":this.id, "userName":this.userName,"password":this.password};
            console.log(param);
            $.ajax({
                url: '/ExamSys/rest/user/login',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                dataType:"json",
                data:JSON.stringify(param),
                success: function (result) {
                    if(result.errorCode != 0){
                        toastr.error('I do not think that word means what you think it means.', 'Inconceivable!');
                        alert(result.errorMessage);
                    }else {
                        location.href= 'welcome';
                    }

                },
                error: function (error) {
                    alert(JSON.stringify(error));
                }
            });
        },
        addUser:function(){
            var param = {"id":this.id, "userName":this.userName,"password":this.userName};
            console.log(param);
            $.ajax({
                url: '/ExamSys/rest/user/',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                dataType:"json",
                data:JSON.stringify(param),
                statusCode:{
                    409: function () {
                        alert("新增失败，用户名重复");
                    }
                },
                success: function (result) {
                    alert("新增成功");
                    location.reload();

                },
                error: function (error) {
                    alert(JSON.stringify(error));
                }
            });
        }
    }
});