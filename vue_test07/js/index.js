$(function(){
    var vm = new Vue({//vm为根组件
        el:'#itany',
        data:{

        },

        components:{
            'my-hello':{//vm的子组件
                template:'#hello',
                data:function(){
                    return {
                        msg:'数组间数据传递',
                        name:'tom',
                        age:27,
                        user:{id:9527,username:'alice'},
                        sex:'',
                        height:''
                    }
                },
                methods:{
                    getData(sex,height){
                        this.sex = sex;
                        this.height = height;
                    }
                },
                components:{
                    'my-world':{//my-hello的子组件
                        data:function(){
                            return {
                                sex:'male',
                                height:180.5
                            }
                        },
                        template:'#world', 
                        // props:['message','name']   简单的字符串数组
                        props:{//也可以是对象，允许配置高级设置，如类型判断，数据校验，设置默认值
                            message:String,
                            name:{
                                type:String,
                                required:true//一定要有
                            },
                            age:{
                                type:Number,
                                default:18,//默认值
                                validator:function(value){  
                                    return value >= 0;

                                }
                            },
                            user:{
                                type:Object,
                                //数组的默认值要用return返回
                                default:function(){
                                    return {id:1111,username:'???'};
                                }
                            }
                        },
                        methods:{
                            send(){
                                //这里的this指的是当前子组件实例
                                this.$emit('e-world',this.sex,this.height);
                            }
                        },
                    }
                    
                    
                }
            }
        }
    });
});