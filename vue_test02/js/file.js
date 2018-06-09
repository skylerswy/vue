$(function(){
    new Vue({
        el:"#itany",
        data:{
            uid:'',
            user:{
                //name:'tom'
            }
        },
        methods:{
            send(){
                axios({
                    methods:"get",
                    url:"user.json"
                }).then(function(response){
                    console.log(response.data);
                }).catch(function(response){
                    console.log("请求失败："+response.status+","+response.statusText);
                });
                //.then=success
            },
            sendGet(){
                axios.get('server.php',{
                    params:{
                        name:'tom',
                        age:18
                    }
                })
                .then(function(response){
                    console.log(response.data);
                }).catch(function(response){
                    console.log("请求失败："+response.status+","+response.statusText);
                });
            },
            sendPost(){
                axios.post('server.php','name:tom&age:18')
                .then(function(response){
                        console.log(response.data);
                    }).catch(function(response){
                        console.log("请求失败："+response.status+","+response.statusText);
                    });
            },
            getid(){
                axios.get(`https://api.github.com/users/${this.uid}`)
                .then(response => {
                    // console.log(response.data);
                    this.user=response.data;
                    //console.log(user.name);
                    //console.log(user.avatar_url);
                });

            },
            sendjsonp(){
                this.$http.jsonp('https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su',{
                    params:{
                        wd:'a'
                    },
                    jsonp:'cb' 
                    //百度使用的jsonp参数名为cb
                }).then(res => {
                    console.log(res.data.s);
                });
            }
        }

    });


    new Vue({
        el:"#itany2",
        data:{
            msg: 'aaa bbb ccc'
        },
        methods:{
            change(){
                this.msg = "do you know it"
            }
        },
        computed:{
            msg2:function(){
                return 'welcome to my home';
            },
            reversemsg:function(){
                return this.msg.split(" ").reverse().join(" ");
            }
        }
    });


});