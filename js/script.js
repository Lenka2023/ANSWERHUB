

var uagent    = navigator.userAgent.toLowerCase();
var is_safari = ( (uagent.indexOf('safari') != -1) || (navigator.vendor == "Apple Computer, Inc.") );
var is_ie     = ( (uagent.indexOf('msie') != -1) && (!is_opera) && (!is_safari) && (!is_webtv) );
var is_ie4    = ( (is_ie) && (uagent.indexOf("msie 4.") != -1) );
var is_moz    = (navigator.product == 'Gecko');
var is_ns     = ( (uagent.indexOf('compatible') == -1) && (uagent.indexOf('mozilla') != -1) && (!is_opera) && (!is_webtv) && (!is_safari) );
var is_ns4    = ( (is_ns) && (parseInt(navigator.appVersion) == 4) );
var is_opera  = (uagent.indexOf('opera') != -1);  
var is_kon    = (uagent.indexOf('konqueror') != -1);
var is_webtv  = (uagent.indexOf('webtv') != -1);
var is_win    =  ( (uagent.indexOf("win") != -1) || (uagent.indexOf("16bit") !=- 1) );
var is_mac    = ( (uagent.indexOf("mac") != -1) || (navigator.vendor == "Apple Computer, Inc.") );
var ua_vers   = parseInt(navigator.appVersion);

function getSelection( textarea )
{
    var selection = null;
    if ((ua_vers >= 4) && is_ie && is_win) {
        if (textarea.isTextEdit) {
            textarea.focus();
            var sel = document.selection;
            var rng = sel.createRange();
            rng.collapse;
            if((sel.type == "Text" || sel.type == "None") && rng != null)
                selection = rng.text;
        }
    } else if (typeof(textarea.selectionEnd) != "undefined" ) { 
        selection = (textarea.value).substring(textarea.selectionStart, textarea.selectionEnd);
    }
    return selection;
}
function Delete(){
var result=document.getElementById("result");
var RESULTTEXT = document.getElementById("RESULTTEXT");

var RESULTTEXT = getSelection(document.getElementById("RESULTTEXT"));
//RESULTTEXT.parentNode.removeChild(RESULTTEXT);
//$('#RESULTTEXT').remove();
//RESULTTEXT.remove();
//area.parentNode.removeChild(area);
//$('#area').remove();
//result.remove();
var RESULTHTML = getSelection(document.getElementById("RESULTHTML"));
RESULTHTML.remove();
}
function Text(){
	//var i=1;
	var expression = getSelection( document.getElementById("text") );
	document.getElementById("text").focus();
	document.getElementById("text").innerHTML = expression.replace(/\n/g, '<br>');
	var result=document.getElementById("result");
	
document.getElementById("RESULTTEXT").innerText='<br><span class="move_left">'+expression+'</span>';
document.getElementById("RESULTHTML").innerHTML='<br><span class="move_left">'+expression+'</span>';
document.getElementById("RESULTTEXT").id = "text_res";
document.getElementById("RESULTHTML").id = "html_res";
document.getElementById("result").innerHTML += '<p><span id="RESULTTEXT">qwe</span></p>';
document.getElementById("area").innerHTML += '<p><span id="RESULTHTML">qwe</span></p>';
document.getElementById("text").value='';
}

			function Link()
			{
				
				var Link_Title= getSelection( document.getElementById("text") );
				alert(Link_Title);
				document.getElementById("text").focus();
 				document.getElementById("text").innerHTML = Link_Title.replace(/\n/g, '<br>');
				var x=prompt("Enter a link","");
				document.getElementById("RESULTTEXT").innerText='<a  href="'+x+'">'+Link_Title+'</a>';
				document.getElementById("RESULTHTML").innerHTML='<a  href="'+x+'">'+Link_Title+'</a>';
				document.getElementById("RESULTTEXT").id = "text_res";
				document.getElementById("RESULTHTML").id = "html_res";
				document.getElementById("result").innerHTML += '<p><span id="RESULTTEXT">qwe</span></p>';
				document.getElementById("area").innerHTML += '<p><span id="RESULTHTML">qwe</span></p>';
				document.getElementById("text").value='';
			}
			function Image()
			{
				
				var Image_Title= getSelection( document.getElementById("text") );
				document.getElementById("text").focus();
 				document.getElementById("text").innerHTML = Image_Title.replace(/\n/g, '<br>');
				var x=prompt("Enter a name of image","");
				document.getElementById("RESULTTEXT").innerText='<img src="img/'+x+'"alt="622">';
				document.getElementById("RESULTHTML").innerHTML='<img src="img/'+x+'"alt="622">';
				document.getElementById("RESULTTEXT").innerText='<img src="img/'+Image_Title+'"alt="622">';
				document.getElementById("RESULTHTML").innerHTML='<img src="img/'+Image_Title+'"alt="622">';
				document.getElementById("RESULTTEXT").id = "text_res";
				document.getElementById("RESULTHTML").id = "html_res";
				document.getElementById("result").innerHTML += '<p><span id="RESULTTEXT">qwe</span></p>';
				document.getElementById("area").innerHTML += '<p><span id="RESULTHTML">qwe</span></p>';
				document.getElementById("text").value='';

			}
			function Bold()
			{
				
				var expression = getSelection( document.getElementById("text") );
 				document.getElementById("text").innerHTML = expression.replace(/\n/g, '<br>');
				document.getElementById("text").focus();
				document.getElementById("RESULTTEXT").innerText='<span class="strong">'+expression+'</span>';
				document.getElementById("RESULTHTML").innerHTML='<span class="strong">'+expression+'</span>';
				document.getElementById("RESULTTEXT").id = "text_res";
				document.getElementById("RESULTHTML").id = "html_res";
				document.getElementById("result").innerHTML += '<p><span id="RESULTTEXT">qwe</span></p>';
				document.getElementById("area").innerHTML += '<p><span id="RESULTHTML">qwe</span></p>';
				document.getElementById("text").value='';

			}
                  function Code()
			{
				
				var expression = getSelection( document.getElementById("text") );
 				document.getElementById("text").innerHTML = expression.replace(/\n/g, '<br>');
				document.getElementById("text").focus();
				document.getElementById("RESULTTEXT").innerText='<div class="commands"><pre>'+expression+'</pre></div>';
				document.getElementById("RESULTHTML").innerHTML='<div class="commands"><pre>'+expression+'</<pre></div>';
				document.getElementById("RESULTTEXT").id = "text_res";
				document.getElementById("RESULTHTML").id = "html_res";
				document.getElementById("result").innerHTML+= '<p><span id="RESULTTEXT">qwe</span></p>';
				document.getElementById("area").innerHTML+= '<p><span id="RESULTHTML">qwe</span></p>';
				document.getElementById("text").value='';

			}
			function Main_List()
			{
			
				var expression = getSelection( document.getElementById("text") );
 				document.getElementById("text").innerHTML = expression.replace(/\n/g, '<br>');
				document.getElementById("text").focus();
				var n=prompt("Enter a count of row","");
				 var main_list='<ul class="top_page_list"><span class=" strong font_size">'+expression+'</span>';
				 document.getElementById("text").value='';

for(var i=0;i<n;i++){
 main_list+='<li>'+text+'</li>';
 var text=prompt("Enter a text for  <li>","");
}
 document.getElementById("RESULTTEXT").innerText= main_list + '</ul>';
document.getElementById("RESULTHTML").innerHTML= main_list + '</ul>';
				document.getElementById("RESULTTEXT").id = "text_res";
				document.getElementById("RESULTHTML").id = "html_res";
				document.getElementById("result").innerHTML += '<p><span id="RESULTTEXT">qwe</span></p>';
				document.getElementById("area").innerHTML += '<p><span id="RESULTHTML">qwe</span></p>';
				document.getElementById("text").value='';


			}
			function Square_List()
			{
				
				var expression = getSelection( document.getElementById("text") );
 				document.getElementById("text").innerHTML = expression.replace(/\n/g, '<br>');
				document.getElementById("text").focus();
				var n=prompt("Enter a count of row","");
				 var square_list='<ul class="square"><span class=" strong font_size">'+expression+'</span>';

for(var i=0;i<n;i++){
 square_list+='<li>'+text+'</li>';
 var text=prompt("Enter a text for  <li>","");
}
 document.getElementById("RESULTTEXT").innerText= square_list + '</ul>';
document.getElementById("RESULTHTML").innerHTML= square_list + '</ul>';
				document.getElementById("RESULTTEXT").id = "text_res";
				document.getElementById("RESULTHTML").id = "html_res";
				document.getElementById("result").innerHTML += '<p><span id="RESULTTEXT">qwe</span></p>';
				document.getElementById("area").innerHTML += '<p><span id="RESULTHTML">qwe</span></p>';
				document.getElementById("text").value='';

			}
			function Decimal_List()
			{
				
				var expression = getSelection( document.getElementById("text") );
 				document.getElementById("text").innerHTML = expression.replace(/\n/g, '<br>');
				document.getElementById("text").focus
				var n=prompt("Enter a count of row","");
				 var decimal_list='<ol class="decimal"><span class=" strong font_size">'+expression+'</span>';

for(var i=0;i<n;i++){
 decimal_list+='<li>'+text+'</li>';
 var text=prompt("Enter a text for  <li>","");
}
 document.getElementById("RESULTTEXT").innerText= decimal_list + '</ol>';
document.getElementById("RESULTHTML").innerHTML= decimal_list + '</ol>';
				document.getElementById("RESULTTEXT").id = "text_res";
				document.getElementById("RESULTHTML").id = "html_res";
				document.getElementById("result").innerHTML += '<p><span id="RESULTTEXT">qwe</span></p>';
				document.getElementById("area").innerHTML += '<p><span id="RESULTHTML">qwe</span></p>';
				document.getElementById("text").value='';

			}
			function Disc_List()
			{
				
				var expression = getSelection( document.getElementById("text") );
 				document.getElementById("text").innerHTML = expression.replace(/\n/g, '<br>');
				document.getElementById("text").focus();
				var n=prompt("Enter a count of row","");
				 var disc_list='<ol class="disc"><span class=" strong font_size">'+expression+'</span>';

for(var i=0;i<n;i++){
 disc_list+='<li>'+text+'</li>';
 var text=prompt("Enter a text for  <li>","");
}
 document.getElementById("RESULTTEXT").innerText= disc_list + '</ol>';
document.getElementById("RESULTHTML").innerHTML= disc_list + '</ol>';
				document.getElementById("RESULTTEXT").id = "text_res";
				document.getElementById("RESULTHTML").id = "html_res";
				document.getElementById("result").innerHTML += '<p><span id="RESULTTEXT">qwe</span></p>';
				document.getElementById("area").innerHTML += '<p><span id="RESULTHTML">qwe</span></p>';
				document.getElementById("text").value='';

			}
			function Main_title()
			{
				
				var expression = getSelection( document.getElementById("text") );
 				document.getElementById("text").innerHTML = expression.replace(/\n/g, '<br>');
				document.getElementById("text").focus();

				document.getElementById("RESULTTEXT").innerText='<div class="main_title">'+expression+'</div>';
				document.getElementById("RESULTHTML").innerHTML='<div class="main_title">'+expression+'</div>';
				document.getElementById("RESULTTEXT").id = "text_res";
				document.getElementById("RESULTHTML").id = "html_res";
				document.getElementById("result").innerHTML += '<p><span id="RESULTTEXT">qwe</span></p>';
				document.getElementById("area").innerHTML += '<p><span id="RESULTHTML">qwe</span></p>';
				document.getElementById("text").value='';


			}
			function Middle_Title()
			{
				
				var expression = getSelection( document.getElementById("text") );
 				document.getElementById("text").innerHTML = expression.replace(/\n/g, '<br>');
				document.getElementById("text").focus();
				document.getElementById("RESULTTEXT").innerText='<div class="middle_title">'+expression+'</div>';
				document.getElementById("RESULTHTML").innerHTML='<div class="middle_title">'+expression+'</div>';
				document.getElementById("RESULTTEXT").id = "text_res";
				document.getElementById("RESULTHTML").id = "html_res";
				document.getElementById("result").innerHTML += '<p><span id="RESULTTEXT">qwe</span></p>';
				document.getElementById("area").innerHTML += '<p><span id="RESULTHTML">qwe</span></p>';
				document.getElementById("text").value='';

			}
			function Down_title()
			{
				
				var expression = getSelection( document.getElementById("text") );
 				document.getElementById("text").innerHTML = expression.replace(/\n/g, '<br>');
				document.getElementById("text").focus();
				document.getElementById("RESULTTEXT").innerText='<div class="down_title">'+expression+'</div>';
				document.getElementById("RESULTHTML").innerHTML='<div class="down_title">'+expression+'</div>';
				document.getElementById("RESULTTEXT").id = "text_res";
				document.getElementById("RESULTHTML").id = "html_res";
				document.getElementById("result").innerHTML += '<p><span id="RESULTTEXT">qwe</span></p>';
				document.getElementById("area").innerHTML += '<p><span id="RESULTHTML">qwe</span></p>';
				document.getElementById("text").value='';

			}
			function Red_title()
			{
				
				var expression = getSelection( document.getElementById("text") );
				document.getElementById("text").focus();
                        document.getElementById("text").innerHTML = expression.replace(/\n/g, '<br>');
				document.getElementById("RESULTTEXT").innerText='<div class="title strong"><span>'+expression+'</span></div>';
				document.getElementById("RESULTHTML").innerHTML='<div class="title strong"><span>'+expression+'</span></div>';
				document.getElementById("RESULTTEXT").id = "text_res";
				document.getElementById("RESULTHTML").id = "html_res";
				document.getElementById("result").innerHTML += '<p><span id="RESULTTEXT">qwe</span></p>';
				document.getElementById("area").innerHTML += '<p><span id="RESULTHTML">qwe</span></p>';
				document.getElementById("text").value='';document.getElementById("text").value='';

			}

			function Small_title()
			{
				
				var expression = getSelection( document.getElementById("text") );
 				document.getElementById("text").innerHTML = expression.replace(/\n/g, '<br>');
				document.getElementById("text").focus();
				document.getElementById("RESULTTEXT").innerText='<br><span class="move_left strong font_size">'+expression+'</span>';
				document.getElementById("RESULTHTML").innerHTML='<br><span class="move_left strong font_size">'+expression+'</span>';
				document.getElementById("RESULTTEXT").id = "text_res";
				document.getElementById("RESULTHTML").id = "html_res";
				document.getElementById("result").innerHTML += '<p><span id="RESULTTEXT">qwe</span></p>';
				document.getElementById("area").innerHTML += '<p><span id="RESULTHTML">qwe</span></p>';
				document.getElementById("text").value='';

			}
			function Capture()
			{
				
				var expression = getSelection( document.getElementById("text") );
 				document.getElementById("text").innerHTML = expression.replace(/\n/g, '<br>');
				document.getElementById("text").focus();
				var x=prompt("Enter title of capture","");
				document.getElementById("RESULTTEXT").innerText='<br><span class="move_left "><span class="strong underline">'+x+'</span>'+expression+'</span>';
				document.getElementById("RESULTHTML").innerHTML='<br><span class="move_left "><span class="strong underline">'+x+'</span>'+expression+'</span>';
				document.getElementById("RESULTTEXT").id = "text_res";
				document.getElementById("RESULTHTML").id = "html_res";
				document.getElementById("result").innerHTML += '<p><span id="RESULTTEXT">qwe</span></p>';
				document.getElementById("area").innerHTML += '<p><span id="RESULTHTML">qwe</span></p>';
				document.getElementById("text").value='';

			}
			function Listing()
			{
				
				var expression = getSelection( document.getElementById("text") );
 				document.getElementById("text").innerHTML = expression.replace(/\n/g, '<br>');
				document.getElementById("text").focus();
				var x=prompt("Enter title of capture","");
				document.getElementById("RESULTTEXT").innerText='<br><span class="move_left "><span class="strong ">'+x+'</span>'+expression+'</span>';
				document.getElementById("RESULTHTML").innerHTML='<br><span class="move_left "><span class="strong ">'+x+'</span>'+expression+'</span>';
				document.getElementById("RESULTTEXT").id = "text_res";
				document.getElementById("RESULTHTML").id = "html_res";
				document.getElementById("result").innerHTML += '<p><span id="RESULTTEXT">qwe</span></p>';
				document.getElementById("area").innerHTML += '<p><span id="RESULTHTML">qwe</span></p>';
				document.getElementById("text").value='';

			}
			function Smallicon()
			{
				
				var expression = getSelection( document.getElementById("text") );
 				document.getElementById("text").innerHTML = expression.replace(/\n/g, '<br>');
				document.getElementById("text").focus();
				var x=prompt("Enter a name of image","");
				document.getElementById("RESULTTEXT").innerText='<img src="img/'+x+'"alt="622">';
				document.getElementById("RESULTTEXT").innerText='<br><img src="img/'+x+'"alt="622" class="textwrap smallicon">';
				document.getElementById("RESULTHTML").innerHTML='<br><img src="img/'+x+'"alt="622" class="textwrap smallicon">';
				document.getElementById("RESULTTEXT").innerText='<br><img src="img/'+expression+'"alt="622" class="textwrap smallicon">';
				document.getElementById("RESULTHTML").innerHTML='<br><img src="img/'+expression+'"alt="622" class="textwrap smallicon">';
				document.getElementById("RESULTTEXT").id = "text_res";
				document.getElementById("RESULTHTML").id = "html_res";
				document.getElementById("result").innerHTML += '<p><span id="RESULTTEXT">qwe</span></p>';
				document.getElementById("area").innerHTML += '<p><span id="RESULTHTML">qwe</span></p>';
				document.getElementById("text").value='';


			}
            function Hot_Tip()
			{
				
				var expression = getSelection( document.getElementById("text") );
 				document.getElementById("text").innerHTML = expression.replace(/\n/g, '<br>');
				document.getElementById("text").focus();
				document.getElementById("RESULTTEXT").innerText='<div class="border">'+
          '<table class="elliptic">'+
            '<tbody>'+
              '<tr>'+
                '<td class="hotTipLeft">'+
                  '<h1>Hot<br>Tip</h1>'+
                '</td>'+
                '<td class="hotTipRight">'+
                  '<span>'+expression+'</span>'+
                '</td>'+
              '</tr>'+
            '</tbody>'+
          '</table>'+
          '<br class="cbt">'+
        '</div>';

			document.getElementById("RESULTHTML").innerHTML='<div class="border">'+
          '<table class="elliptic">'+
            '<tbody>'+
              '<tr>'+
                '<td class="hotTipLeft">'+
                  '<h1>Hot<br>Tip</h1>'+
                '</td>'+
                '<td class="hotTipRight">'+
                  '<span>'+expression+'</span>'+
                '</td>'+
              '</tr>'+
            '</tbody>'+
          '</table>'+
          '<br class="cbt">'+
        '</div>';
				document.getElementById("RESULTTEXT").id = "text_res";
				document.getElementById("RESULTHTML").id = "html_res";
				document.getElementById("result").innerHTML += '<p><span id="RESULTTEXT">qwe</span></p>';
				document.getElementById("area").innerHTML += '<p><span id="RESULTHTML">qwe</span></p>';
				document.getElementById("text").value='';
			}

            function Table()
			{
				
				var expression = getSelection( document.getElementById("text") );
				document.getElementById("text").innerHTML = expression.replace(/\n/g, '<br>');
				document.getElementById("text").focus();
				var x=prompt("Enter a count of row","");
var y=prompt("Enter a count of columns","");
var table='<table class="syntax_description"><tbody>';

for(var i = 0, text; i <= x;i++){
  table += '<tr>';
  if(i == 0){
	for(var j = 0; j < y; j++){
		text = prompt("Enter text", "");
		table += '<th>' + text + '</th>';
	}
  }
  else{
	for(var j = 0; j < y; j++){
		text = prompt("Enter text", "");
		table += '<td>' + text + '</td>';
	}
  }
  table += '</tr>';
}

document.getElementById("RESULTTEXT").innerText= table + '</tbody></table>';
document.getElementById("RESULTHTML").innerHTML= table + '</tbody></table>';
				document.getElementById("RESULTTEXT").id = "text_res";
				document.getElementById("RESULTHTML").id = "html_res";
				document.getElementById("result").innerHTML += '<p><span id="RESULTTEXT">qwe</span></p>';
				document.getElementById("area").innerHTML += '<p><span id="RESULTHTML">qwe</span></p>';
				document.getElementById("text").value='';
			}

			function CBT()
			{
			
				document.getElementById("RESULTTEXT").innerText='<br class="cbt">';
				document.getElementById("RESULTHTML").innerHTML='<br class="cbt">';
				document.getElementById("RESULTTEXT").id = "text_res";
				document.getElementById("RESULTHTML").id = "html_res";
				document.getElementById("result").innerHTML += '<p><span id="RESULTTEXT">qwe</span></p>';
				document.getElementById("area").innerHTML += '<p><span id="RESULTHTML">qwe</span></p>';
				document.getElementById("text").value='';
			}
			