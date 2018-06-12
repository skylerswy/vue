$(function(){
    //1.定义组件
    var Home = {
        template:'<h3>我是主页</h3>'
    }
    var User = {
        template:'#user'
    }
    var Login = {
        template:'<h4>用户登录。。。。。。。获取属性：{{$route.query}},{{$route.path}}</h4>'
    }
    var Regist = {
        template:'<h4>用户注册。。。。。。获取参数：{{$route.params}},{{$route.path}}</h4>'
    }


    //2.配置路由
    const routes = [
        {
            path:'/home',component:Home
        },
        {
            path:'/user',component:User,
            children:[
                {
                    path:'login',component:Login
                },
                {
                    path:'regist/:username/:password',component:Regist
                }
            ]
        },
        {
            path:'*',redirect:'/home' //若找不到的重定向
        }
    ]

    //3.创建路由实例
    const router = new VueRouter({
        routes, //简写 routes=routes
        linkActiveClass:'active'
    });

    //4.创建根实例，且将路由挂载到vue上
    new Vue({
        el:'#itany',
        router, //注入路由，router=router
        methods:{
            push(){
                alert('456123');
                router.push({path:'home'}); //添加路由，切换路由s
            },
            replace(){
                router.replace({path:'user'}); //替换路由，没有历史记录
            }
        }
    });
});