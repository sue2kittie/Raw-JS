// contac.html


document.getElementById("contact_form").onsubmit=function(){
	var error=0;//counter
	var er="";//error name
	var	flag_name=true;//flagging name
	var	flag_email=true;//flagging email
	var	flag_message=true;//flaging message
	
	//Using names instead of getElemenetByID
	
	/*Already defined inthe html no need for this: name=document.getElementById("name");
	email=document.getElementById("email");
	message=document.getElementById("message");*/

	

if (name.value==""){
	error=error+1;
	er="Name Field";
	flag_name=false;	
	document.getElementById("er_name").style.display="block";
	}
	if (flag_name==false){
		//alert(flag_name);
		//document.getElementById("er_name").style.display="block";
		}
	
if (email.value==""){
	error+1;
	er="Email Field";
	flag_email=false;
	document.getElementById("er_email").style.display="block";
	}
	if (flag_email==false){
		//document.getElementById("er_email").style.display="block";
		//alert(flag_email);
		}
		
if (message.value==""){
		error=error+1;
		er="Message Field";
		flag_message=false;
		document.getElementById("er_message").style.display="block";
	}
	if (flag_message==false){
		//document.getElementById("er_message").style.display="block";
		//alert(flag_message);
		}

if (error>0){
		document.getElementById("error_section").style.display="block";
		document.getElementById("error").innerHTML=error;
		return false;
		}	

}

	
	/*
document.getElementById("name").onblur=function(){
	if ((flag_name==true)||(document.getElementById("name").value=="")){
	document.getElementById("er_name").style.display="block";
		alert(flag_name);
	}	else {
		document.getElementById("er_name").style.display="none";
			alert(flag_name);
		}
	}	
*/	
	
/*checking all the fields
	var f = document.contact_form;
	
	for(var i = 0; i < f.elements.length; i++) {
		if (f.elements[i].value==""){
			error=error+1;
			}
		alert(error);
	}
	
	*/
	
	
	/*
	<script>

var f = document.getElementById('contact-form');
var error=0;

$('#contact-form #submit').click(function () {
	var name = $('input[name=name]');
	var email = $('input[name=email]');
	var website = $('input[name=url]');
	var message = $('textarea[name=message]');

	for(var i = 0; i < f.elements.length; i++) {
		if (f.elements[i].value==""){
			error=error+1;
			alert(error)
			} 
			
			if (name.val()=='') {
			name.addClass('hightlight');
			return false;
		} else name.removeClass('hightlight');
		 
		if (email.val()=='') {
			email.addClass('hightlight');
			return false;
		} else email.removeClass('hightlight');
		
		
		
		if (message.val()=='') {
			message.addClass('hightlight');
			return false;
		} else message.removeClass('hightlight');
			
			}
});
	
	*/
	
