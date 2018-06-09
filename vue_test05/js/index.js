$(function(){
    new Vue({
        el: "#itany",
        data: {
            flag: false
        },
        methods: {
            beforeEnter(){
                // alert('动画进入之前');
            },
            enter(){
                // alert('动画进入');
            },
            afterEnter(el){
                // alert('动画进入之后');
                el.style.background='blue';
            },
            beforeLeave(){
                // alert('动画即将之前');
            },
            leave(){
                // alert('动画离开');
            },
            afterLeave(el){
                // alert('动画离开之后');
                el.style.background='red';
            }
        }
    });

    new Vue({
        el: "#itany2",
        data: {
            flag: false,
            arr:['tom','jack','alice','sum','marry'],
            name: ''
        },
        methods:{

        },
        computed: {
            arr2:function(){
                var temp = [];
                this.arr.forEach(val => {
                    if(val.includes(this.name))
                    temp.push(val);
                });
                return temp;
            }
        }
    });
});