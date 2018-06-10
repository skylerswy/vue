$(function(){
    // 全局组件
    Vue.component('my-world',{
        template:'<h3>{{msg}}</h3>',
        data:function(){
            return {
                msg:'全局组件hello world'
            }
        }
    });

    new Vue({
        el:'#itany',
        data:{
            flag:'my-active'
        },
        //局部组件
        components:{
            'my-hello':{
                template:'<h5>局部组件{{age}}</h5>',
                data:function(){
                    return{
                        age:25
                    }
                }
            },
            'my-test':{
                template:'#wbs',
                data:function(){
                    return{
                        msg:'引用模板',
                        arr:['alice','tom','jack']
                    }
                }
            },
            'my-active':{
                template:'<p>动态组件a:{{x}}</p>',
                data:function(){
                    return {
                        x:Math.random()
                    }
                }
            },
            'my-active2':{
                template:'<p>动态组件b:{{y}}</p>',
                data:function(){
                    return {
                        y:Math.random()
                    }
                }
            }
        }
    });
});