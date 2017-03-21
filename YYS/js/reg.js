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