$(function(){
    Vue.directive('drag',function(el){
        el.onmousedown = function(e){
            console.log(e);
            var X = e.clientX - el.offsetLeft;
            var Y = e.clientY - el.offsetTop;

            document.onmousemove = function(e){
                var l = e.clientX - X;
                var t = e.clientY - Y;
                el.style.left = l + 'px';
                el.style.top = t + 'px';
            }

            document.onmouseup=function(e){
                document.onmousemove=null;
                document.onmouseup=null;
            }
        }
    });

    var vm = new Vue({
        el:'#itany',
        data:{

        },
        methods:{

        }

    });

});

