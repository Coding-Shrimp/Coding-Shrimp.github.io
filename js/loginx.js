//判断是否登录
function isDenglu(){
	var isdeng = localStorage.getItem("isDenglu");
	if (isdeng) {
		
	} else{
		window.location.href = "login.html";
	}
}
