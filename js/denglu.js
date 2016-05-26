   
    function box(){
    //获取DIV为‘box’的盒子
    var oBox = document.getElementById("boxdiv");
    //获取元素自身的宽度
    var L1 = oBox.offsetWidth;
    //获取元素自身的高度
    var H1 = oBox.offsetHeight;
    //获取实际页面的left值。（页面宽度减去元素自身宽度/2）
    var Left1 = (document.documentElement.clientWidth-L1)/2;
    //获取实际页面的top值。（页面宽度减去元素自身高度/2）
    var top1 = (document.documentElement.clientHeight-H1)/2;
    oBox.style.left = Left1+'px';
    oBox.style.top = top1+'px';

    }
    //当浏览器页面发生改变时，DIV随着页面的改变居中。
    window.onresize = function(){
        box();
    } 
    function denglupanduan(){
    		var pwdtext = document.getElementById("pwd");
    		var newd = new Date().getTime();
    		var jiami = hex_sha1(pwdtext.value) + newd;
    		var mimayanzen = "ab43a7c9cb5b2380afc4ddf8b3e2583169b39a02"+newd;
    		 if (jiami == mimayanzen) {
    		 	alert("成功了");
    		 	localStorage.setItem("isDenglu","asdf");
    		 	window.location.href = "http://cshrimp.cc/about/";
    		 } else{
    		 	alert("失败了");
    		 }
    }
