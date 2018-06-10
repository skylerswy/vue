$(function(){
    var temp = new Vue;//创建一个空的vue实例

    var A = {
        template:'#a',
        data:function(){
            return {
                name:'tom'
            }
        },
        methods:{
            send(){
                temp.$emit('data-a',this.name);
            }
        }
    }
    var B = {
        template:'#b',
        data:function(){
            return {
                age:20
            }
        },
        mounted(){
            //拿不到
            temp.$emit('data-b',this.age);
        }
    }
    var C = {
        template:'#c',
        data:function(){
            return {
               name:'',
               age:0
            }
        },
        mounted(){
            temp.$on('data-a',name => {
                this.name = name;
            });//用来监听事件

            temp.$on('data-b',age => {
                this.age = age;
            });
        }
    }
    new Vue({
        el:'#itany',
        components:{
            'my-a':A,
            'my-b':B,
            'my-c':C
        }
    });
});