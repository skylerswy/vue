$(function () {
    var vm = new Vue({
        el:'#addnew',
        data:{
            users:[
                {name:'tom',age:'24',emile:'tom@123.com'},
                {name:'jack',age:'27',emile:'jack@123.com'}
            ],
            user:{},
            nowindex:-1
        },
        methods:{
            adduser(){
                // console.log("123");
                this.users.push(this.user);
                this.user={};
            },
            deluser(){
                this.nowindex=this.index;
                this.users.splice(this.nowindex,1);
            },
            delall(){
                this.users={};
            }
        }
    });
});