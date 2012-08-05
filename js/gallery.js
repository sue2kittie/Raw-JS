//For the Firefox error I had earlier I had this line:
//var full_img= document.getElementById('full_image');
//I read that Firefox gives you Image ID undefined sometimes, so I just get rid off that line and it works :)


window.onload = function () {
var link=document.getElementById('gallery').getElementsByTagName('a'); //alert(link.item(i).getAttribute('href'));
var images=document.getElementById('gallery').getElementsByTagName('img'); //alert(images[1].getAttribute('src'));

for ( var i = 0; i < link.length; i ++ ) {
	//images or link.item
	link.item(i).onmouseover = function () {
		var url=this.getAttribute('href');	//alert(url);
		 document.getElementById('full_image').src=url;/*Victory Dance YAY*/
		}
	}
}

//Testing

//var link=document.getElementById('gallery').getElementsByTagName('a')[0];
//alert(link.getAttribute('href'));

//var link=document.getElementById('gallery').getElementsByTagName('img')[0];
//alert(link.getAttribute('src'));

//It doesn't work with Firefox but wokrs with Chrome and IE, I tried the following and still didn't work
//full_image.setAttribute("src",url);
//full_image.setAttribute("src","images/slider_cow.jpg");
// full_image.attr('src',url);


/*
Derek's solution:
$("gallery a").mouseover(function(){
	$("big_image").attr("src", $(this).attr("href"));
	});
*/
