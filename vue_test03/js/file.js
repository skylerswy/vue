$(function(){
    new Vue({
        el:'#itany',
        data:{
            keyword:'',
            mydata:[],
            now:-1
        },
        methods:{
            getData(e){
                if(e.keyCode==38||e.keyCode==40) 
					return;
                this.$http.jsonp('https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su',{
                    params:{
                        wd:this.keyword
                    },
                    jsonp:'cb' 
                    //百度使用的jsonp参数名为cb
                }).then(res => {
                    console.log(res.data.s);
                    this.mydata = res.data.s;
                    
                });
            },
            changeDown(){
                this.now++;
				this.keyword=this.mydata[this.now];
                if(this.now==this.mydata.length){
                    this.now=-1;
                }
            },
            changeUp(){ 
                this.now--;
                this.keyword=this.mydata[this.now];
                if(this.now==-2){
                    this.now=this.mydata.length-1;
                }                

            }
        }
    });
});