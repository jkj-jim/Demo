function checkName(){
	var name=document.getElementById("name").value;
	if(name.length<7){
		document.getElementById("showNameMsg").innerHTML="<div class='err_img'></div>"
	}else{
		document.getElementById("showNameMsg").innerHTML="<div class='suc'></div>"
	}
}
function checkPass(){
	var pass=document.getElementById("pwd").value;
	if(pass.length<6){
		document.getElementById("showPassMsg").innerHTML="<div class='err_img'></div>"
	}else{
		document.getElementById("showPassMsg").innerHTML="<div class='suc'></div>"
	}
}
function checkRePass(){
	var pass=document.getElementById("pwd").value;
	var repass=document.getElementById("repwd").value;
	if(pass!=repass){
		document.getElementById("showRePassMsg").innerHTML="<div class='err_img'></div>"
	}else{
		document.getElementById("showRePassMsg").innerHTML="<div class='suc'></div>"
	}
}
function checkTel(){
	var tel=document.getElementById("tel").value;
	if(tel.length!=11){
		document.getElementById("showTelMsg").innerHTML="<div class='err_img'></div>"
	}else{
		document.getElementById("showTelMsg").innerHTML="<div class='suc'></div>"
	}
}