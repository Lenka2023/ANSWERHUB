//----------------------------------------------------------------------------------------------------------
   var textarea=document.getElementById("text");
    
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
    function getSelectiontextarea(textarea)
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
};
function SomeVar(){
    textarea=document.getElementById("text");
    document.getElementById("text").focus();
    expressionText = getSelectiontextarea( document.getElementById("text") );
    expressionHTML = getSelectiontextarea( document.getElementById("text") );
    document.getElementById("text").innerHTML = expressionText.replace(/\n/g, '<br>');
    document.getElementById("text").innerHTML = expressionHTML.replace(/\n/g, '<br>');
                expressionStart=(textarea.value).substring(0,textarea.selectionStart);
                expressionEnd=(textarea.value).substring(textarea.selectionEnd);
                expressionStart.innerHTML = expressionStart.replace(/\n/g, '<br>');
                expressionEnd.innerHTML = expressionEnd.replace(/\n/g, '<br>');
                }
				 var addelements = [];
                 var main_titleIndexes = [];
				  var middle_titleIndexes = [];
				 var linkIndexes = [];
				 var cbtIndexes = [];
				  var down_titleIndexes = [];
				  var red_titleIndexes = [];
				  var small_titleIndexes = [];
				  var hot_tipIndexes = [];
				  var boldIndexes = [];
				  var footerIndexes = [];
				   var downpage_titleIndexes = [];
				  var listingIndexes = [];
				  var txtIndexes = [];
				   var codeIndexes = [];
				    var captureIndexes = [];
                 var txt = function(startPos, size){
        this.startPosition = startPos;
        this.size = size;
        }
		var Main_titleSelection = function(startPos, size){
        this.startPosition = startPos;
        this.size =  size;
		}
		var Middle_TitleSelection = function(startPos, size){
        this.startPosition = startPos;
        this.size =  size;
		}
		var Down_titleSelection = function(startPos, size){
        this.startPosition = startPos;
        this.size =  size;
		}
		var TxtSelection = function(startPos, size){
        this.startPosition = startPos;
        this.size =  size;
		}
		var CBTSelection = function(startPos, size){
        this.startPosition = startPos;
        this.size = size;
				  }
				 var Red_titleSelection = function(startPos, size){
        this.startPosition = startPos;
        this.size = size;
				  }
				  var  LinkSelection = function(startPos, size){
        this.startPosition = startPos;
        this.size = size;
				  }
				  var DownPage_titleSelection = function(startPos, size){
        this.startPosition = startPos;
        this.size = size;
				  }
				   var Hot_TipSelection = function(startPos, size){
        this.startPosition = startPos;
        this.size = size;
				  }
				   var FooterSelection = function(startPos, size){
        this.startPosition = startPos;
        this.size = size;
				  }
				  var BoldSelection = function(startPos, size){
        this.startPosition = startPos;
        this.size = size;
				  }
                  var Small_titleSelection = function(startPos, size){
        this.startPosition = startPos;
        this.size = size;
				  }
		var CodeSelection = function(startPos, size){
        this.startPosition = startPos;
        this.size = size;
       }
	 
	  var  ListingSelection = function(startPos, size){
        this.startPosition = startPos;
        this.size = size;
       }
	  var CaptureSelection = function(startPos, size){
        this.startPosition = startPos;
        this.size = size;
       }
       var AggregateSelection = function(sourceArray){
        var indexesToRemove = new Set();
        for (var i = 0; i < sourceArray.length; i++){
        for (var j = 0; j < sourceArray.length; j++){
            if (i==j || Array.from(indexesToRemove).indexOf(i)>-1 || Array.from(indexesToRemove).indexOf(j)>-1 ) continue;
            var lastIndex1 = sourceArray[i].startPosition+sourceArray[i].size;
                var lastIndex2 = sourceArray[j].startPosition+sourceArray[j].size;
            if (sourceArray[i].startPosition>=sourceArray[j].startPosition && sourceArray[i].startPosition<=lastIndex2){
                sourceArray[i].startPosition = sourceArray[j].startPosition;
                var maxLastIndex = (lastIndex1 > lastIndex2) ? lastIndex1 : lastIndex2;
                sourceArray[i].size = maxLastIndex - sourceArray[i].startPosition;
                indexesToRemove.add(j);
            }
            if (sourceArray[i].startPosition>=sourceArray[j].startPosition && sourceArray[i].startPosition>=lastIndex2){
                sourceArray[i].size = lastIndex1 - sourceArray[i].startPosition;
                sourceArray[j].size = lastIndex2 - sourceArray[j].startPosition;
        }
        }
        }
    for (var i = sourceArray.length; i-- ; i >0 )
    if (Array.from(indexesToRemove).indexOf(i)>-1) {
        sourceArray.splice(i, 1);
      }
 
       
      }
	  function makeListingStringHtml(sourceStr){
		   textarea=document.getElementById("text");
		    var expressionText =  document.getElementById("text").value;
        alert("makeListingStringHtml");
            var currentSymbolIndex = 0;
			var resultStr =" ";
            var usedSymbols = 0;
            for (var i = 0; i < listingIndexes.length; i++){
                if (currentSymbolIndex<listingIndexes[i].startPosition){
                resultStr += sourceStr.substring(currentSymbolIndex,listingIndexes[i].startPosition);
            resultStr = '<span>'+ resultStr+'</span><br><span class="move_left "><span class="strong ">'+sourceStr.substring(listingIndexes[i].startPosition,listingIndexes[i].startPosition+listingIndexes[i].size)+'</span></span><span>'+sourceStr.substring(listingIndexes[i].startPosition+listingIndexes[i].size,sourceStr.length)+'</span>';
                      }
			}
			return resultStr;
            }
           	
	  function makeLinkStringHtml(sourceStr){
		   textarea=document.getElementById("text");
		    var x=prompt("Enter a link","");
		    var expressionText =  document.getElementById("text").value;
        alert(" makeLinkStringHtml");
            var currentSymbolIndex = 0;
			var resultStr =" ";
            var usedSymbols = 0;
            for (var i = 0; i < linkIndexes.length; i++){
                if (currentSymbolIndex<linkIndexes[i].startPosition){
                resultStr += sourceStr.substring(currentSymbolIndex,linkIndexes[i].startPosition);
            resultStr = '<span>'+ resultStr+'</span><a  href="'+x+'">'+sourceStr.substring(linkIndexes[i].startPosition,linkIndexes[i].startPosition+linkIndexes[i].size)+'</a><span>'+sourceStr.substring(linkIndexes[i].startPosition+linkIndexes[i].size,sourceStr.length)+'</span>';
                      }
			}
           			
            return resultStr;
            }
            function DownPage_title(){
   
    SomeVar();
    var result=document.getElementById("result");
   
document.getElementById("RESULTTEXT").innerText=expressionStart+'<br><span class="move_left strong">'+expressionText+'</span><br>'+expressionEnd;
document.getElementById("RESULTHTML").innerHTML=expressionStart+'<br><span class="move_left strong">'+expressionHTML+'</span><br>'+expressionEnd;
Make();
}
function makeDownPage_titleStringHtml(sourceStr){
		   textarea=document.getElementById("text");
		    var expressionText =  document.getElementById("text").value;
        alert(" makeDownPage_titleStringHtml");
            var currentSymbolIndex = 0;
			var resultStr =" ";
            var usedSymbols = 0;
            for (var i = 0; i < downpage_titleIndexes.length; i++){
                if (currentSymbolIndex<downpage_titleIndexes[i].startPosition){
                resultStr += sourceStr.substring(currentSymbolIndex,downpage_titleIndexes[i].startPosition);
            resultStr = '<span>'+ resultStr+'</span><br><span class="move_left strong">'+sourceStr.substring(downpage_titleIndexes[i].startPosition,downpage_titleIndexes[i].startPosition+downpage_titleIndexes[i].size)+'</span><br><span>'+sourceStr.substring(downpage_titleIndexes[i].startPosition+downpage_titleIndexes[i].size,sourceStr.length)+'</span>';
                      }
			}
           	return resultStr;
            }
			function makeRed_titleStringHtml(sourceStr){
		   textarea=document.getElementById("text");
		    var expressionText =  document.getElementById("text").value;
        alert(" makeRed_titleStringHtml");
            var currentSymbolIndex = 0;
			var resultStr =" ";
            var usedSymbols = 0;
            for (var i = 0; i < red_titleIndexes.length; i++){
                if (currentSymbolIndex<red_titleIndexes[i].startPosition){
                resultStr += sourceStr.substring(currentSymbolIndex,red_titleIndexes[i].startPosition);
            resultStr = '<span>'+ resultStr+'</span><div class="title strong"><span>'+sourceStr.substring(red_titleIndexes[i].startPosition,red_titleIndexes[i].startPosition+red_titleIndexes[i].size)+'</span></div><span>'+sourceStr.substring(red_titleIndexes[i].startPosition+red_titleIndexes[i].size,sourceStr.length)+'</span>';
                      }
			}
           	return resultStr;
            }
			function Small_title()
            {
               
                SomeVar();
                document.getElementById("RESULTTEXT").innerText=expressionStart+'<br><span class="move_left strong font_size">'+expressionText+'</span>'+expressionEnd;
                document.getElementById("RESULTHTML").innerHTML=expressionStart+'<br><span class="move_left strong font_size">'+expressionHTML+'</span>'+expressionEnd;
                Make();
            }
			function makeSmall_titleStringHtml(sourceStr){
		   textarea=document.getElementById("text");
		    var expressionText =  document.getElementById("text").value;
        alert(" makeSmall_titleStringHtml");
            var currentSymbolIndex = 0;
			var resultStr =" ";
            var usedSymbols = 0;
            for (var i = 0; i < small_titleIndexes.length; i++){
                if (currentSymbolIndex<small_titleIndexes[i].startPosition){
                resultStr += sourceStr.substring(currentSymbolIndex,small_titleIndexes[i].startPosition);
            resultStr = '<span>'+ resultStr+'</span><br><span class="move_left strong font_size">'+sourceStr.substring(small_titleIndexes[i].startPosition,small_titleIndexes[i].startPosition+small_titleIndexes[i].size)+'</span><span>'+sourceStr.substring(small_titleIndexes[i].startPosition+small_titleIndexes[i].size,sourceStr.length)+'</span>';
                      }
			}
           	return resultStr;
            }
			 function Footer()
            {
           
                document.getElementById("RESULTTEXT").innerText= '<div>'+
                '<div class="footer">'+
        '<span> DZone, Inc. | www.dzone.</span>'+
      '</div>'+
    '</div>'+  
  '</body>'+
'</html>';
                document.getElementById("RESULTHTML").innerHTML='</div>'+
 '<div class="footer">'+
        '<span> DZone, Inc. | www.dzone.</span>'+
      '</div>'+
    '</div>'+  
  '</body>'+
'</html>';
Make();
            }
			function makeFooterStringHtml(sourceStr){
		   textarea=document.getElementById("text");
		    var expressionText =  document.getElementById("text").value;
        alert(" makeFooterStringHtml");
            var currentSymbolIndex = 0;
			var resultStr =" ";
            var usedSymbols = 0;
            for (var i = 0; i < footerIndexes.length; i++){
                if (currentSymbolIndex<footerIndexes[i].startPosition){
                resultStr += sourceStr.substring(currentSymbolIndex,footerIndexes[i].startPosition);
            resultStr = '<span>'+ resultStr+'</span><div>'+
                '<div class="footer">'+
        '<span> DZone, Inc. | www.dzone.</span>'+
      '</div>'+
    '</div>'+  
  '</body>'+
'</html><span>'+sourceStr.substring(footerIndexes[i].startPosition+footerIndexes[i].size,sourceStr.length)+'</span>';
                      }
			}
           	return resultStr;
            }
	  function makeBoldStringHtml(sourceStr){
		   textarea=document.getElementById("text");
		    var expressionText =  document.getElementById("text").value;
        alert(" makeBoldStringHtml");
            var currentSymbolIndex = 0;
			var resultStr =" ";
            var usedSymbols = 0;
            for (var i = 0; i < boldIndexes.length; i++){
                if (currentSymbolIndex<boldIndexes[i].startPosition){
                resultStr += sourceStr.substring(currentSymbolIndex,boldIndexes[i].startPosition);
            resultStr = '<span>'+ resultStr+'</span><span class="strong">'+sourceStr.substring(boldIndexes[i].startPosition,boldIndexes[i].startPosition+boldIndexes[i].size)+'</span><span>'+sourceStr.substring(boldIndexes[i].startPosition+boldIndexes[i].size,sourceStr.length)+'</span>';
                      }
			}
           	return resultStr;
            }
			
			function makeHot_TipStringHtml(sourceStr){
		   textarea=document.getElementById("text");
		    var expressionText =  document.getElementById("text").value;
        alert(" makeHot_TipStringHtml");
            var currentSymbolIndex = 0;
			var resultStr =" ";
            var usedSymbols = 0;
            for (var i = 0; i < hot_tipIndexes.length; i++){
                if (currentSymbolIndex<hot_tipIndexes[i].startPosition){
                resultStr += sourceStr.substring(currentSymbolIndex,hot_tipIndexes[i].startPosition);
            resultStr = '<span>'+ resultStr+'</span><div class="border">'+
          '<table class="elliptic">'+
            '<tbody>'+
              '<tr>'+
                '<td class="hotTipLeft">'+
                  '<h1>Hot<br>Tip</h1>'+
                '</td>'+
                '<td class="hotTipRight">'+
                  '<span>'+sourceStr.substring(hot_tipIndexes[i].startPosition,hot_tipIndexes[i].startPosition+hot_tipIndexes[i].size)+'</span>'+
                '</td>'+
              '</tr>'+
            '</tbody>'+
          '</table>'+
          '<br class="cbt">'+
        '</div><span>'+sourceStr.substring(hot_tipIndexes[i].startPosition+hot_tipIndexes[i].size,sourceStr.length)+'</span>';
                      }
			}
           	return resultStr;
            }
			function Down_title()
            {
               
                SomeVar();
                document.getElementById("RESULTTEXT").innerText=expressionStart+'<div class="down_title">'+expressionText+'</div>'+expressionEnd;
                document.getElementById("RESULTHTML").innerHTML=expressionStart+'<div class="down_title">'+expressionHTML+'</div>'+expressionEnd;
                Make();
            }
			function makeDown_titleStringHtml(sourceStr){
		   textarea=document.getElementById("text");
		    var expressionText =  document.getElementById("text").value;
        alert(" makeDown_titleStringHtml");
            var currentSymbolIndex = 0;
			var resultStr =" ";
            var usedSymbols = 0;
            for (var i = 0; i < down_titleIndexes.length; i++){
                if (currentSymbolIndex<down_titleIndexes[i].startPosition){
                resultStr += sourceStr.substring(currentSymbolIndex,down_titleIndexes[i].startPosition);
            resultStr = '<span>'+ resultStr+'</span><div class="down_title">'+sourceStr.substring(down_titleIndexes[i].startPosition,down_titleIndexes[i].startPosition+down_titleIndexes[i].size)+'</div><span>'+sourceStr.substring(down_titleIndexes[i].startPosition+down_titleIndexes[i].size,sourceStr.length)+'</span>';
                      }
			}
           	return resultStr;
            }
			function makeMiddle_TitleStringHtml(sourceStr){
		   textarea=document.getElementById("text");
		    var expressionText =  document.getElementById("text").value;
        alert("makeMiddle_TitleStringHtml");
            var currentSymbolIndex = 0;
			var resultStr =" ";
            var usedSymbols = 0;
            for (var i = 0; i < middle_titleIndexes.length; i++){
                if (currentSymbolIndex<middle_titleIndexes[i].startPosition){
                resultStr += sourceStr.substring(currentSymbolIndex,middle_titleIndexes[i].startPosition);
            resultStr = '<span>'+ resultStr+'</span><span class="middle_title">'+sourceStr.substring(middle_titleIndexes[i].startPosition,middle_titleIndexes[i].startPosition+middle_titleIndexes[i].size)+'</span><span>'+sourceStr.substring(middle_titleIndexes[i].startPosition+middle_titleIndexes[i].size,sourceStr.length)+'</span>';
                      }
			}
           			
            return resultStr;
            }
			
			function makeMain_titleStringHtml(sourceStr){
		   textarea=document.getElementById("text");
		    var expressionText =  document.getElementById("text").value;
        alert("makeMain_titleStringHtml");
            var currentSymbolIndex = 0;
			var resultStr =" ";
            var usedSymbols = 0;
            for (var i = 0; i < main_titleIndexes.length; i++){
                if (currentSymbolIndex<main_titleIndexes[i].startPosition){
                resultStr += sourceStr.substring(currentSymbolIndex,main_titleIndexes[i].startPosition);
            resultStr = '<span>'+ resultStr+'</span><div class="main_title">'+sourceStr.substring(main_titleIndexes[i].startPosition,main_titleIndexes[i].startPosition+main_titleIndexes[i].size)+'</div><span>'+sourceStr.substring(main_titleIndexes[i].startPosition+main_titleIndexes[i].size,sourceStr.length)+'</span>';
                      }
			}
           			
            return resultStr;
            }
			function makeCBTStringHtml(sourceStr){
				alert(" makeCBTStringHtml");
		   textarea=document.getElementById("text");
		    var expressionText =  document.getElementById("text").value;
            var currentSymbolIndex = 0;
			var resultStr =" ";
            var usedSymbols = 0;
            for (var i = 0; i < cbtIndexes.length; i++){
                if (currentSymbolIndex<cbtIndexes[i].startPosition){
                resultStr += sourceStr.substring(currentSymbolIndex,cbtIndexes[i].startPosition);
            resultStr = '<span>'+ resultStr+'</span><br class="cbt">'+sourceStr.substring(cbtIndexes[i].startPosition,cbtIndexes[i].startPosition+cbtIndexes[i].size)+'<span>'+sourceStr.substring(cbtIndexes[i].startPosition+cbtIndexes[i].size,sourceStr.length)+'</span>';
                      }
			}
           			
            return resultStr;
            }
       function makeCodeStringHtml(sourceStr){
		   textarea=document.getElementById("text");
		    var expressionText =  document.getElementById("text").value;
        alert(" makeCodeStringHtml");
            var currentSymbolIndex = 0;
			var resultStr =" ";
            var usedSymbols = 0;
            for (var i = 0; i < codeIndexes.length; i++){
                if (currentSymbolIndex<codeIndexes[i].startPosition){
                resultStr += sourceStr.substring(currentSymbolIndex,codeIndexes[i].startPosition);
            resultStr = '<span>'+ resultStr+'</span><div class="commands"><pre>'+sourceStr.substring(codeIndexes[i].startPosition,codeIndexes[i].startPosition+codeIndexes[i].size)+'</pre></div><span>'+sourceStr.substring(codeIndexes[i].startPosition+codeIndexes[i].size,sourceStr.length)+'</span>';
                      }
			}
           	return resultStr;
            }
			function makeTxtStringHtml(sourceStr){
		   textarea=document.getElementById("text");
		    var expressionText =  document.getElementById("text").value;
        alert("makeTxtStringHtml");
            var currentSymbolIndex = 0;
			var resultStr =" ";
            var usedSymbols = 0;
            for (var i = 0; i < txtIndexes.length; i++){
                if (currentSymbolIndex<txtIndexes[i].startPosition){
                resultStr += sourceStr.substring(currentSymbolIndex,txtIndexes[i].startPosition);
            resultStr = '<span>'+ resultStr+'</span><br><span class="move_left">'+sourceStr.substring(txtIndexes[i].startPosition,txtIndexes[i].startPosition+txtIndexes[i].size)+'</span><span>'+sourceStr.substring(txtIndexes[i].startPosition+txtIndexes[i].size,sourceStr.length)+'</span>';
                     }
			}
           
			return resultStr;
            }
			function makeCaptureStringHtml(sourceStr){
		   textarea=document.getElementById("text");
		    var expressionText =  document.getElementById("text").value;
        alert("makeTxtStringHtml");
            var currentSymbolIndex = 0;
			var resultStr =" ";
            var usedSymbols = 0;
            for (var i = 0; i < captureIndexes.length; i++){
                if (currentSymbolIndex<captureIndexes[i].startPosition){
                resultStr += sourceStr.substring(currentSymbolIndex,captureIndexes[i].startPosition);
            resultStr = '<span>'+ resultStr+'</span><br><span class="move_left "><span class="strong underline">'+sourceStr.substring(captureIndexes[i].startPosition,captureIndexes[i].startPosition+captureIndexes[i].size)+'</span><span><span>'+sourceStr.substring(captureIndexes[i].startPosition+captureIndexes[i].size,sourceStr.length)+'</span>';
                     }
			}
           
			return resultStr;
            }
			
            function getElementsById(elementID){
    var elementCollection = new Array();
    var allElements = document.getElementsByTagName("*");
    for(i = 0; i < allElements.length; i++){
       if(allElements[i].id == elementID)
           elementCollection.push(allElements[i]);
   }
   return elementCollection;
};
function hide(obj) {
    obj.style.display = 'none';
}
function show(obj) {
    obj.style.display = 'initial';
}
function isHidden(obj) {
    return (obj.style.display == 'none')
}
     
            var html_res_array = getElementsById('RESULTHTML');
            var text_res_array = getElementsById('RESULTTEXT');
            function PurgeRedoSequence()
{
     html_res_array = getElementsById('RESULTHTML');
     text_res_array = getElementsById('RESULTTEXT');
   
    for (var i = 0; i < html_res_array.length; i++)
    {
        if (isHidden(html_res_array[i])) {
            html_res_array[i].parentNode.removeChild(html_res_array[i]);
            text_res_array[i].parentNode.removeChild(text_res_array[i]);
        }
    }
}
var historyIndexMax = 0;
var historyIndex = 0;
function operation(RESULTTEXT, RESULTTEXT) {
    //alert(" index == " + historyIndex + "; length == " + historyIndexMax);
    historyIndexMax = historyIndex + 1;
    historyIndex++;
    if (historyIndex > 0) {(document.getElementById('undo')).disabled ='';} else {(document.getElementById('undo')).disabled ='disabled';}
    if (historyIndex == historyIndexMax) {(document.getElementById('redo')).disabled ='disabled';} else {(document.getElementById('redo')).disabled ='';}
    if ((historyIndex ==0)&&(historyIndexMax==0)) {(document.getElementById('redo')).disabled ='disabled';(document.getElementById('undo')).disabled ='disabled';}
    //alert('Op done!');
};
            function Make(){
    PurgeRedoSequence();
operation(document.getElementById("RESULTHTML").innerHTML, document.getElementById("RESULTTEXT").innerHTML);
document.getElementById("RESULTTEXT").designMode='on';
document.getElementById("RESULTHTML").designMode='on';
document.getElementById("RESULTTEXT").contentEditable = true; void(0);
document.getElementById("RESULTHTML").contentEditable = true; void(0);
}

			function Code()
            {
               
            SomeVar();
            var textarea=document.getElementById("text");
            document.getElementById("text").focus();
            expressionText =  document.getElementById("text").value;
            expressionHTML = document.getElementById("text").value ;
           
               expressionStart=(textarea.value).substring(0,textarea.selectionStart);
                expressionEnd=(textarea.value).substring(textarea.selectionEnd);
                var selectionBegin = (textarea.selectionStart < textarea.selectionEnd) ? textarea.selectionStart : textarea.selectionEnd;
                var selectionEnd = (textarea.selectionEnd > textarea.selectionStart) ? textarea.selectionEnd : textarea.selectionStart;
                codeIndexes.push(new CodeSelection(selectionBegin,selectionEnd-selectionBegin));
                AggregateSelection(codeIndexes);
                for (var i = 0; i < codeIndexes.length; i++){
                    var beginIndex = codeIndexes[i].startPosition;
                    var endIndex = codeIndexes[i].endPosition;
                }
                codeIndexes.sort(function(a,b) {
                return a.startPosition - b.startPosition;
                });
                console.log('aggregated array:');
        for (var i =0; i < codeIndexes.length; i++){  
            console.log(codeIndexes[i].startPosition + " " + codeIndexes[i].size);
        }
                var resultStr = makeCodeStringHtml(expressionText);
               
                document.getElementById("RESULTTEXT").innerText=resultStr;
                document.getElementById("RESULTHTML").innerHTML=resultStr;
                Make();
                        }
						
           
			
			 function Listing()
            {
               
            SomeVar();
            var textarea=document.getElementById("text");
            document.getElementById("text").focus();
            expressionText =  document.getElementById("text").value;
            expressionHTML = document.getElementById("text").value ;
           
               expressionStart=(textarea.value).substring(0,textarea.selectionStart);
                expressionEnd=(textarea.value).substring(textarea.selectionEnd);
                var selectionBegin = (textarea.selectionStart < textarea.selectionEnd) ? textarea.selectionStart : textarea.selectionEnd;
                var selectionEnd = (textarea.selectionEnd > textarea.selectionStart) ? textarea.selectionEnd : textarea.selectionStart;
                listingIndexes.push(new ListingSelection(selectionBegin,selectionEnd-selectionBegin));
                AggregateSelection(listingIndexes);
                for (var i = 0; i < listingIndexes.length; i++){
                    var beginIndex = listingIndexes[i].startPosition;
                    var endIndex = listingIndexes[i].endPosition;
                }
                listingIndexes.sort(function(a,b) {
                return a.startPosition - b.startPosition;
                });
                console.log('aggregated array:');
        for (var i =0; i < listingIndexes.length; i++){  
            console.log(listingIndexes[i].startPosition + " " + listingIndexes[i].size);
        }
                var resultStr = makeListingStringHtml(expressionText);
               
                document.getElementById("RESULTTEXT").innerText=resultStr;
                document.getElementById("RESULTHTML").innerHTML=resultStr;
                Make();
                        }
			function Capture()
            {
               
            SomeVar();
            var textarea=document.getElementById("text");
            document.getElementById("text").focus();
            expressionText =  document.getElementById("text").value;
            expressionHTML = document.getElementById("text").value ;
           
               expressionStart=(textarea.value).substring(0,textarea.selectionStart);
                expressionEnd=(textarea.value).substring(textarea.selectionEnd);
                var selectionBegin = (textarea.selectionStart < textarea.selectionEnd) ? textarea.selectionStart : textarea.selectionEnd;
                var selectionEnd = (textarea.selectionEnd > textarea.selectionStart) ? textarea.selectionEnd : textarea.selectionStart;
                captureIndexes.push(new CaptureSelection(selectionBegin,selectionEnd-selectionBegin));
                AggregateSelection(captureIndexes);
                for (var i = 0; i < captureIndexes.length; i++){
                    var beginIndex = captureIndexes[i].startPosition;
                    var endIndex = captureIndexes[i].endPosition;
                }
                captureIndexes.sort(function(a,b) {
                return a.startPosition - b.startPosition;
                });
                console.log('aggregated array:');
        for (var i =0; i < captureIndexes.length; i++){  
            console.log(captureIndexes[i].startPosition + " " + captureIndexes[i].size);
        }
                var resultStr = makeCaptureStringHtml(expressionText);
               
                document.getElementById("RESULTTEXT").innerText=resultStr;
                document.getElementById("RESULTHTML").innerHTML=resultStr;
                Make();
                        }

	function CBT()
            {
             alert("CBT")  
            SomeVar();
            var textarea=document.getElementById("text");
            document.getElementById("text").focus();
            expressionText =  document.getElementById("text").value;
            expressionHTML = document.getElementById("text").value ;
           
               expressionStart=(textarea.value).substring(0,textarea.selectionStart);
                expressionEnd=(textarea.value).substring(textarea.selectionEnd);
                var selectionBegin = (textarea.selectionStart < textarea.selectionEnd) ? textarea.selectionStart : textarea.selectionEnd;
                var selectionEnd = (textarea.selectionEnd > textarea.selectionStart) ? textarea.selectionEnd : textarea.selectionStart;
                cbtIndexes.push(new CBTSelection(selectionBegin,selectionEnd-selectionBegin));
                AggregateSelection(cbtIndexes);
                for (var i = 0; i < cbtIndexes.length; i++){
                    var beginIndex = cbtIndexes[i].startPosition;
                    var endIndex = cbtIndexes[i].endPosition;
                }
                cbtIndexes.sort(function(a,b) {
                return a.startPosition - b.startPosition;
                });
                console.log('aggregated array:');
        for (var i =0; i < cbtIndexes.length; i++){  
            console.log(cbtIndexes[i].startPosition + " " + cbtIndexes[i].size);
        }
                var resultStr = makeCBTStringHtml(expressionText);
               
                document.getElementById("RESULTTEXT").innerText=resultStr;
                document.getElementById("RESULTHTML").innerHTML=resultStr;
                Make();
                        }	
	function Link()
            {
               
            SomeVar();
            var textarea=document.getElementById("text");
            document.getElementById("text").focus();
            expressionText =  document.getElementById("text").value;
            expressionHTML = document.getElementById("text").value ;
           
               expressionStart=(textarea.value).substring(0,textarea.selectionStart);
                expressionEnd=(textarea.value).substring(textarea.selectionEnd);
                var selectionBegin = (textarea.selectionStart < textarea.selectionEnd) ? textarea.selectionStart : textarea.selectionEnd;
                var selectionEnd = (textarea.selectionEnd > textarea.selectionStart) ? textarea.selectionEnd : textarea.selectionStart;
                linkIndexes.push(new LinkSelection(selectionBegin,selectionEnd-selectionBegin));
                AggregateSelection(linkIndexes);
                for (var i = 0; i < linkIndexes.length; i++){
                    var beginIndex = linkIndexes[i].startPosition;
                    var endIndex = linkIndexes[i].endPosition;
                }
                linkIndexes.sort(function(a,b) {
                return a.startPosition - b.startPosition;
                });
                console.log('aggregated array:');
        for (var i =0; i < linkIndexes.length; i++){  
            console.log(linkIndexes[i].startPosition + " " + linkIndexes[i].size);
        }
                var resultStr = makeLinkStringHtml(expressionText);
               
                document.getElementById("RESULTTEXT").innerText=resultStr;
                document.getElementById("RESULTHTML").innerHTML=resultStr;
                Make();
                        }					
 function  Main_title()
            {
               
            SomeVar();
            var textarea=document.getElementById("text");
            document.getElementById("text").focus();
            expressionText =  document.getElementById("text").value;
            expressionHTML = document.getElementById("text").value ;
           
               expressionStart=(textarea.value).substring(0,textarea.selectionStart);
                expressionEnd=(textarea.value).substring(textarea.selectionEnd);
                var selectionBegin = (textarea.selectionStart < textarea.selectionEnd) ? textarea.selectionStart : textarea.selectionEnd;
                var selectionEnd = (textarea.selectionEnd > textarea.selectionStart) ? textarea.selectionEnd : textarea.selectionStart;
                main_titleIndexes.push(new Main_titleSelection(selectionBegin,selectionEnd-selectionBegin));
                AggregateSelection(main_titleIndexes);
                for (var i = 0; i < main_titleIndexes.length; i++){
                    var beginIndex = main_titleIndexes[i].startPosition;
                    var endIndex = main_titleIndexes[i].endPosition;
                }
                main_titleIndexes.sort(function(a,b) {
                return a.startPosition - b.startPosition;
                });
                console.log('aggregated array:');
        for (var i =0; i < main_titleIndexes.length; i++){  
            console.log(main_titleIndexes[i].startPosition + " " + main_titleIndexes[i].size);
        }
                var resultStr = makeMain_titleStringHtml(expressionText);
               
                document.getElementById("RESULTTEXT").innerText=resultStr;
                document.getElementById("RESULTHTML").innerHTML=resultStr;
                Make();
                        }
function Middle_Title()
            {
               
            SomeVar();
            var textarea=document.getElementById("text");
            document.getElementById("text").focus();
            expressionText =  document.getElementById("text").value;
            expressionHTML = document.getElementById("text").value ;
           
               expressionStart=(textarea.value).substring(0,textarea.selectionStart);
                expressionEnd=(textarea.value).substring(textarea.selectionEnd);
                var selectionBegin = (textarea.selectionStart < textarea.selectionEnd) ? textarea.selectionStart : textarea.selectionEnd;
                var selectionEnd = (textarea.selectionEnd > textarea.selectionStart) ? textarea.selectionEnd : textarea.selectionStart;
                middle_titleIndexes.push(new Middle_TitleSelection(selectionBegin,selectionEnd-selectionBegin));
                AggregateSelection(middle_titleIndexes );
                for (var i = 0; i < middle_titleIndexes.length; i++){
                    var beginIndex = middle_titleIndexes[i].startPosition;
                    var endIndex = middle_titleIndexes[i].endPosition;
                }
                middle_titleIndexes.sort(function(a,b) {
                return a.startPosition - b.startPosition;
                });
                console.log('aggregated array:');
        for (var i =0; i < middle_titleIndexes.length; i++){  
            console.log(middle_titleIndexes[i].startPosition + " " + middle_titleIndexes[i].size);
        }
                var resultStr = makeMiddle_TitleStringHtml(expressionText);
               
                document.getElementById("RESULTTEXT").innerText=resultStr;
                document.getElementById("RESULTHTML").innerHTML=resultStr;
                Make();
                        }
		function Down_title()
            {
               
            SomeVar();
            var textarea=document.getElementById("text");
            document.getElementById("text").focus();
            expressionText =  document.getElementById("text").value;
            expressionHTML = document.getElementById("text").value ;
           
               expressionStart=(textarea.value).substring(0,textarea.selectionStart);
                expressionEnd=(textarea.value).substring(textarea.selectionEnd);
                var selectionBegin = (textarea.selectionStart < textarea.selectionEnd) ? textarea.selectionStart : textarea.selectionEnd;
                var selectionEnd = (textarea.selectionEnd > textarea.selectionStart) ? textarea.selectionEnd : textarea.selectionStart;
                down_titleIndexes.push(new Down_titleSelection(selectionBegin,selectionEnd-selectionBegin));
                AggregateSelection(down_titleIndexes);
                for (var i = 0; i < down_titleIndexes.length; i++){
                    var beginIndex = down_titleIndexes[i].startPosition;
                    var endIndex = down_titleIndexes[i].endPosition;
                }
                down_titleIndexes.sort(function(a,b) {
                return a.startPosition - b.startPosition;
                });
                console.log('aggregated array:');
        for (var i =0; i < down_titleIndexes.length; i++){  
            console.log(down_titleIndexes[i].startPosition + " " + down_titleIndexes[i].size);
        }
                var resultStr = makeDown_titleStringHtml(expressionText);
               
                document.getElementById("RESULTTEXT").innerText=resultStr;
                document.getElementById("RESULTHTML").innerHTML=resultStr;
                Make();
                        }
						function Red_title()
            {
               
            SomeVar();
            var textarea=document.getElementById("text");
            document.getElementById("text").focus();
            expressionText =  document.getElementById("text").value;
            expressionHTML = document.getElementById("text").value ;
           
               expressionStart=(textarea.value).substring(0,textarea.selectionStart);
                expressionEnd=(textarea.value).substring(textarea.selectionEnd);
                var selectionBegin = (textarea.selectionStart < textarea.selectionEnd) ? textarea.selectionStart : textarea.selectionEnd;
                var selectionEnd = (textarea.selectionEnd > textarea.selectionStart) ? textarea.selectionEnd : textarea.selectionStart;
                red_titleIndexes.push(new Red_titleSelection(selectionBegin,selectionEnd-selectionBegin));
                AggregateSelection(red_titleIndexes);
                for (var i = 0; i < red_titleIndexes.length; i++){
                    var beginIndex = red_titleIndexes[i].startPosition;
                    var endIndex = red_titleIndexes[i].endPosition;
                }
                red_titleIndexes.sort(function(a,b) {
                return a.startPosition - b.startPosition;
                });
                console.log('aggregated array:');
        for (var i =0; i < red_titleIndexes.length; i++){  
            console.log(red_titleIndexes[i].startPosition + " " + red_titleIndexes[i].size);
        }
                var resultStr = makeRed_titleStringHtml(expressionText);
               
                document.getElementById("RESULTTEXT").innerText=resultStr;
                document.getElementById("RESULTHTML").innerHTML=resultStr;
                Make();
                        }
						function Small_title()
            {
               
            SomeVar();
            var textarea=document.getElementById("text");
            document.getElementById("text").focus();
            expressionText =  document.getElementById("text").value;
            expressionHTML = document.getElementById("text").value ;
           
               expressionStart=(textarea.value).substring(0,textarea.selectionStart);
                expressionEnd=(textarea.value).substring(textarea.selectionEnd);
                var selectionBegin = (textarea.selectionStart < textarea.selectionEnd) ? textarea.selectionStart : textarea.selectionEnd;
                var selectionEnd = (textarea.selectionEnd > textarea.selectionStart) ? textarea.selectionEnd : textarea.selectionStart;
                small_titleIndexes.push(new Small_titleSelection(selectionBegin,selectionEnd-selectionBegin));
                AggregateSelection(small_titleIndexes);
                for (var i = 0; i < small_titleIndexes.length; i++){
                    var beginIndex = small_titleIndexes[i].startPosition;
                    var endIndex = small_titleIndexes[i].endPosition;
                }
                small_titleIndexes.sort(function(a,b) {
                return a.startPosition - b.startPosition;
                });
                console.log('aggregated array:');
        for (var i =0; i < small_titleIndexes.length; i++){  
            console.log(small_titleIndexes[i].startPosition + " " + small_titleIndexes[i].size);
        }
                var resultStr = makeSmall_titleStringHtml(expressionText);
               
                document.getElementById("RESULTTEXT").innerText=resultStr;
                document.getElementById("RESULTHTML").innerHTML=resultStr;
                Make();
                        }
						function Hot_Tip()
            {
               
            SomeVar();
            var textarea=document.getElementById("text");
            document.getElementById("text").focus();
            expressionText =  document.getElementById("text").value;
            expressionHTML = document.getElementById("text").value ;
           
               expressionStart=(textarea.value).substring(0,textarea.selectionStart);
                expressionEnd=(textarea.value).substring(textarea.selectionEnd);
                var selectionBegin = (textarea.selectionStart < textarea.selectionEnd) ? textarea.selectionStart : textarea.selectionEnd;
                var selectionEnd = (textarea.selectionEnd > textarea.selectionStart) ? textarea.selectionEnd : textarea.selectionStart;
                hot_tipIndexes.push(new Hot_TipSelection(selectionBegin,selectionEnd-selectionBegin));
                AggregateSelection(hot_tipIndexes);
                for (var i = 0; i < hot_tipIndexes.length; i++){
                    var beginIndex = hot_tipIndexes[i].startPosition;
                    var endIndex = hot_tipIndexes[i].endPosition;
                }
                hot_tipIndexes.sort(function(a,b) {
                return a.startPosition - b.startPosition;
                });
                console.log('aggregated array:');
        for (var i =0; i < hot_tipIndexes.length; i++){  
            console.log(hot_tipIndexes[i].startPosition + " " + hot_tipIndexes[i].size);
        }
                var resultStr = makeHot_TipStringHtml(expressionText);
               
                document.getElementById("RESULTTEXT").innerText=resultStr;
                document.getElementById("RESULTHTML").innerHTML=resultStr;
                Make();
                        }
						function Footer()
            {
               
            SomeVar();
            var textarea=document.getElementById("text");
            document.getElementById("text").focus();
            expressionText =  document.getElementById("text").value;
            expressionHTML = document.getElementById("text").value ;
           
               expressionStart=(textarea.value).substring(0,textarea.selectionStart);
                expressionEnd=(textarea.value).substring(textarea.selectionEnd);
                var selectionBegin = (textarea.selectionStart < textarea.selectionEnd) ? textarea.selectionStart : textarea.selectionEnd;
                var selectionEnd = (textarea.selectionEnd > textarea.selectionStart) ? textarea.selectionEnd : textarea.selectionStart;
                footerIndexes.push(new FooterSelection(selectionBegin,selectionEnd-selectionBegin));
                AggregateSelection(footerIndexes);
                for (var i = 0; i < footerIndexes.length; i++){
                    var beginIndex = footerIndexes[i].startPosition;
                    var endIndex = footerIndexes[i].endPosition;
                }
                footerIndexes.sort(function(a,b) {
                return a.startPosition - b.startPosition;
                });
                console.log('aggregated array:');
        for (var i =0; i < footerIndexes.length; i++){  
            console.log(footerIndexes[i].startPosition + " " + footerIndexes[i].size);
        }
                var resultStr = makeFooterStringHtml(expressionText);
               
                document.getElementById("RESULTTEXT").innerText=resultStr;
                document.getElementById("RESULTHTML").innerHTML=resultStr;
                Make();
                        }
			function Bold()
            {
               
            SomeVar();
            var textarea=document.getElementById("text");
            document.getElementById("text").focus();
            expressionText =  document.getElementById("text").value;
            expressionHTML = document.getElementById("text").value ;
           
               expressionStart=(textarea.value).substring(0,textarea.selectionStart);
                expressionEnd=(textarea.value).substring(textarea.selectionEnd);
                var selectionBegin = (textarea.selectionStart < textarea.selectionEnd) ? textarea.selectionStart : textarea.selectionEnd;
                var selectionEnd = (textarea.selectionEnd > textarea.selectionStart) ? textarea.selectionEnd : textarea.selectionStart;
                boldIndexes.push(new BoldSelection(selectionBegin,selectionEnd-selectionBegin));
                AggregateSelection(boldIndexes);
                for (var i = 0; i < boldIndexes.length; i++){
                    var beginIndex = boldIndexes[i].startPosition;
                    var endIndex = boldIndexes[i].endPosition;
                }
                boldIndexes.sort(function(a,b) {
                return a.startPosition - b.startPosition;
                });
                console.log('aggregated array:');
        for (var i =0; i < boldIndexes.length; i++){  
            console.log(boldIndexes[i].startPosition + " " + boldIndexes[i].size);
        }
                var resultStr = makeBoldStringHtml(expressionText);
               
                document.getElementById("RESULTTEXT").innerText=resultStr;
                document.getElementById("RESULTHTML").innerHTML=resultStr;
                Make();
                        }
			function DownPage_title()
            {
               
            SomeVar();
            var textarea=document.getElementById("text");
            document.getElementById("text").focus();
            expressionText =  document.getElementById("text").value;
            expressionHTML = document.getElementById("text").value ;
           
               expressionStart=(textarea.value).substring(0,textarea.selectionStart);
                expressionEnd=(textarea.value).substring(textarea.selectionEnd);
                var selectionBegin = (textarea.selectionStart < textarea.selectionEnd) ? textarea.selectionStart : textarea.selectionEnd;
                var selectionEnd = (textarea.selectionEnd > textarea.selectionStart) ? textarea.selectionEnd : textarea.selectionStart;
                downpage_titleIndexes.push(new DownPage_titleSelection(selectionBegin,selectionEnd-selectionBegin));
                AggregateSelection(downpage_titleIndexes);
                for (var i = 0; i < downpage_titleIndexes.length; i++){
                    var beginIndex = downpage_titleIndexes[i].startPosition;
                    var endIndex = downpage_titleIndexes[i].endPosition;
                }
                downpage_titleIndexes.sort(function(a,b) {
                return a.startPosition - b.startPosition;
                });
                console.log('aggregated array:');
        for (var i =0; i < downpage_titleIndexes.length; i++){  
            console.log(downpage_titleIndexes[i].startPosition + " " + downpage_titleIndexes[i].size);
        }
                var resultStr = makeDownPage_titleStringHtml(expressionText);
               
                document.getElementById("RESULTTEXT").innerText=resultStr;
                document.getElementById("RESULTHTML").innerHTML=resultStr;
                Make();
                        }
						function Txt(){
 alert("Txt");
  SomeVar();
            var textarea=document.getElementById("text");
            document.getElementById("text").focus();
            expressionText =  document.getElementById("text").value;
            expressionHTML = document.getElementById("text").value ;
           
               expressionStart=(textarea.value).substring(0,textarea.selectionStart);
                expressionEnd=(textarea.value).substring(textarea.selectionEnd);
                var selectionBegin = (textarea.selectionStart < textarea.selectionEnd) ? textarea.selectionStart : textarea.selectionEnd;
                var selectionEnd = (textarea.selectionEnd > textarea.selectionStart) ? textarea.selectionEnd : textarea.selectionStart;
                txtIndexes.push(new TxtSelection(selectionBegin,selectionEnd-selectionBegin));
                AggregateSelection(txtIndexes);
                for (var i = 0; i < txtIndexes.length; i++){
                    var beginIndex = txtIndexes[i].startPosition;
                    var endIndex = txtIndexes[i].endPosition;
                }
                txtIndexes.sort(function(a,b) {
                return a.startPosition - b.startPosition;
                });
                console.log('aggregated array:');
        for (var i =0; i < txtIndexes.length; i++){  
            console.log(txtIndexes[i].startPosition + " " + txtIndexes[i].size);
        }
                var resultStr = makeTxtStringHtml(expressionText);
               
                document.getElementById("RESULTTEXT").innerText=resultStr;
                document.getElementById("RESULTHTML").innerHTML=resultStr;
                Make();
 }

    function myFunction() {
   var x = document.getElementById("RESULTTEXT");
    var y=document.getElementById("RESULTHTML");
   x.innerHTML=y.innerHTML;
                        }  
    $( document ).ready(function() {
    
    
         function ChangeSelection(sourceStr){
                            alert("ChangeSelection");
 
                 selectiontxt = (textarea.value).substring(textarea.selectionStart, textarea.selectionEnd);
               expressionText =( document.getElementById("text").value );
for(var i = 0;i < addelements.length; i++){
            document.onkeypress = function(e) {
    if((e.keyCode == 65)||(e.keyCode == 66)||(e.keyCode == 67)||(e.keyCode == 68)||(e.keyCode == 69)||(e.keyCode == 70)||(e.keyCode == 71)||(e.keyCode == 72)||(e.keyCode == 73)||(e.keyCode == 74)||(e.keyCode == 75)||(e.keyCode == 76)||(e.keyCode == 77)||(e.keyCode == 78)||(e.keyCode == 79)||(e.keyCode == 80)||(e.keyCode == 81)||(e.keyCode == 82)||(e.keyCode == 83)||(e.keyCode == 84)||(e.keyCode == 85)||(e.keyCode == 86)||(e.keyCode == 87)||(e.keyCode == 88)||(e.keyCode == 89)||(e.keyCode == 90)||(e.keyCode == 48)||(e.keyCode == 49)||(e.keyCode == 50)||(e.keyCode == 51)||(e.keyCode == 52)||(e.keyCode == 53)||(e.keyCode == 54)||(e.keyCode == 55)||(e.keyCode == 56)||(e.keyCode == 57)){  
i++;
   
    sourceStr.length=sourceStr.length-selectiontxt.length+addelements.length;
 // event.type ?????? ???? keypress
 
    }
    if((e.keyCode == 8)||(e.keyCode == 46)){
        i++;
    sourceStr.length=sourceStr.length-selectiontxt.length-addelements.length;
            }
           
            }
}
 resultStr=makeTxtStringHtml(expressionText);
 console.log('resultTxtStr:'+makeTxtStringHtml(expressionText)); 
resultStr = makeBoldStringHtml(expressionText);
 console.log('resultStr:'+makeBoldStringHtml(expressionText));   
                }  
	
				
    function caretPos(textarea)
{
      textarea=document.getElementById("text");
        var pos = 0;
    // IE Support
    if (document.selection)
    {
       textarea.focus ();
        var Sel = document.selection.createRange();
        var SelLength = document.selection.createRange().text.length;
        Sel.moveStart ('character', -textarea.value.length);
        pos = Sel.text.length - SelLength-1;
    }
    // Firefox support
    else if (textarea.selectionStart || textarea.selectionStart == '0')
        pos = textarea.selectionStart-1;
 
    return pos;
 
}
   
  
   $('#text').keyup(function onkeypressFunction(){
         alert("onkeypressFunction");
		 expressionText =( document.getElementById("text").value );
         var pos=caretPos(expressionText);
                            
            for (var i = 0;i < txtIndexes.length; i++){
                 if(typeof txtIndexes[i] != "undefined"){
                    var startPos = txtIndexes[i].startPosition;
                    var size = txtIndexes[i].size;
                  
                     if(pos<=startPos){
        startPos=startPos+1;
		       }
       else
       if((pos>startPos)&&(pos<startPosTxt+size)){
       size += 1;
                   }
       txtIndexes[i].startPosition = startPos;
       txtIndexes[i].size = size;
	               }
				   resultStr=makeTxtStringHtml(expressionText)
				   console.log('resultStr:'+makeTxtStringHtml(expressionText)); 
			document.getElementById("RESULTTEXT").innerText=resultStr;
document.getElementById("RESULTHTML").innerHTML=resultStr;	   
            }
			console.log('Txt indexes:'+JSON.stringify(listingIndexes));   
 
    for (var n = 0;n < listingIndexes.length; n++){
                 if(typeof listingIndexes[n] != "undefined"){
                    var startPos = listingIndexes[n].startPosition;
                    var size = listingIndexes[n].size;
                  
                     if(pos<=startPos){
        startPos=startPos+1;
		       }
       else
       if((pos>startPos)&&(pos<startPos+size)){
       size += 1;
                 }
       listingIndexes[n].startPosition = startPos;
       listingIndexes[n].size = size;
	               }
			resultStr = makeListingStringHtml(expressionText);
	   document.getElementById("RESULTTEXT").innerText=resultStr;
document.getElementById("RESULTHTML").innerHTML=resultStr;
	    console.log('resultStr:'+makeListingStringHtml(expressionText));
			            }
             console.log('Listing indexes:'+JSON.stringify(listingIndexes));   
 for (var m = 0;m < cbtIndexes.length; m++){
                 if(typeof cbtIndexes[m] != "undefined"){
                    var startPos = cbtIndexes[m].startPosition;
                    var size = cbtIndexes[m].size;
                  
                     if(pos<=startPos){
        startPos=startPos+1;
		       }
       else
       if((pos>startPos)&&(pos<startPos+size)){
       size += 1;
                 }
       cbtIndexes[m].startPosition = startPos;
       cbtIndexes[m].size = size;
	               }
			resultStr = makeCBTStringHtml(expressionText);
	   document.getElementById("RESULTTEXT").innerText=resultStr;
document.getElementById("RESULTHTML").innerHTML=resultStr;
	    console.log('resultStr:'+makeCBTStringHtml(expressionText));
			            }
             console.log('CBT indexes:'+JSON.stringify(cbtIndexes));
			  for (var s = 0;s < linkIndexes.length; s++){
                 if(typeof linkIndexes[s] != "undefined"){
                    var startPos = linkIndexes[s].startPosition;
                    var size = linkIndexes[s].size;
                  
                     if(pos<=startPos){
        startPos=startPos+1;
		       }
       else
       if((pos>startPos)&&(pos<startPos+size)){
       size += 1;
                 }
       linkIndexes[s].startPosition = startPos;
       linkIndexes[s].size = size;
	               }
			resultStr = makeLinkStringHtml(expressionText);
	   document.getElementById("RESULTTEXT").innerText=resultStr;
document.getElementById("RESULTHTML").innerHTML=resultStr;
	    console.log('resultStr:'+makeLinkStringHtml(expressionText));
			            }
             console.log('Link indexes:'+JSON.stringify(linkIndexes));
   for (var p = 0;p < main_titleIndexes.length; p++){
                 if(typeof main_titleIndexes[p] != "undefined"){
                    var startPos = main_titleIndexes[p].startPosition;
                    var size = main_titleIndexes[p].size;
                  
                     if(pos<=startPos){
        startPos=startPos+1;
		       }
       else
       if((pos>startPos)&&(pos<startPos+size)){
       size += 1;
                 }
       main_titleIndexes[p].startPosition = startPos;
       main_titleIndexes[p].size = size;
	               }
			resultStr = makeMain_titleStringHtml(expressionText);
	   document.getElementById("RESULTTEXT").innerText=resultStr;
document.getElementById("RESULTHTML").innerHTML=resultStr;
	    console.log('resultStr:'+makeMain_titleStringHtml(expressionText));
			            }
             console.log(' Main_title indexes:'+JSON.stringify(main_titleIndexes));
			  for (var d = 0;d < middle_titleIndexes.length; d++){
                 if(typeof middle_titleIndexes[d] != "undefined"){
                    var startPos = middle_titleIndexes[d].startPosition;
                    var size = middle_titleIndexes[d].size;
                  
                     if(pos<=startPos){
        startPos=startPos+1;
		       }
       else
       if((pos>startPos)&&(pos<startPos+size)){
       size += 1;
                 }
       middle_titleIndexes[d].startPosition = startPos;
       middle_titleIndexes[d].size = size;
	               }
			resultStr = makeMiddle_TitleStringHtml(expressionText);
	   document.getElementById("RESULTTEXT").innerText=resultStr;
document.getElementById("RESULTHTML").innerHTML=resultStr;
	    console.log('resultStr:'+makeMiddle_TitleStringHtml(expressionText));
			            }
             console.log('Middle_Title indexes:'+JSON.stringify(middle_titleIndexes ));
for (var h = 0;h < down_titleIndexes.length; h++){
                 if(typeof down_titleIndexes[h] != "undefined"){
                    var startPos = down_titleIndexes[h].startPosition;
                    var size = down_titleIndexes[h].size;
                  
                     if(pos<=startPos){
        startPos=startPos+1;
		       }
       else
       if((pos>startPos)&&(pos<startPos+size)){
       size += 1;
                 }
       down_titleIndexes[h].startPosition = startPos;
       down_titleIndexes[h].size = size;
	               }
			resultStr = makeDown_titleStringHtml(expressionText);
	   document.getElementById("RESULTTEXT").innerText=resultStr;
document.getElementById("RESULTHTML").innerHTML=resultStr;
	    console.log('resultStr:'+makeDown_titleStringHtml(expressionText));
			            }
             console.log('Down_title indexes:'+JSON.stringify(down_titleIndexes));  
 for (var g = 0;g < downpage_titleIndexes.length; g++){
                 if(typeof downpage_titleIndexes[g] != "undefined"){
                    var startPos = downpage_titleIndexes[g].startPosition;
                    var size = downpage_titleIndexes[g].size;
                  
                     if(pos<=startPos){
        startPos=startPos+1;
		       }
       else
       if((pos>startPos)&&(pos<startPos+size)){
       size += 1;
                 }
       downpage_titleIndexes[g].startPosition = startPos;
       downpage_titleIndexes[g].size = size;
	               }
			resultStr = makeDownPage_titleStringHtml(expressionText);
	   document.getElementById("RESULTTEXT").innerText=resultStr;
document.getElementById("RESULTHTML").innerHTML=resultStr;
	    console.log('resultStr:'+makeDownPage_titleStringHtml(expressionText));
			            }
             console.log('DownPage_title indexes:'+JSON.stringify(downpage_titleIndexes));
			 for (var t = 0;t < footerIndexes.length; t++){
                 if(typeof footerIndexes[t] != "undefined"){
                    var startPos = footerIndexes[t].startPosition;
                    var size = footerIndexes[t].size;
                  
                     if(pos<=startPos){
        startPos=startPos+1;
		       }
       else
       if((pos>startPos)&&(pos<startPos+size)){
       size += 1;
                 }
       footerIndexes[t].startPosition = startPos;
       footerIndexes[t].size = size;
	               }
			resultStr = makeFooterStringHtml(expressionText);
	   document.getElementById("RESULTTEXT").innerText=resultStr;
document.getElementById("RESULTHTML").innerHTML=resultStr;
	    console.log('resultStr:'+makeFooterStringHtml(expressionText));
			            }
             console.log('Footer indexes:'+JSON.stringify(footerIndexes));
			 for (var x = 0;x < hot_tipIndexes.length; x++){
                 if(typeof hot_tipIndexes[x] != "undefined"){
                    var startPos = hot_tipIndexes[x].startPosition;
                    var size = hot_tipIndexes[x].size;
                  
                     if(pos<=startPos){
        startPos=startPos+1;
		       }
       else
       if((pos>startPos)&&(pos<startPos+size)){
       size += 1;
                 }
       hot_tipIndexes[x].startPosition = startPos;
       hot_tipIndexes[x].size = size;
	               }
			resultStr = makeHot_TipStringHtml(expressionText);
	   document.getElementById("RESULTTEXT").innerText=resultStr;
document.getElementById("RESULTHTML").innerHTML=resultStr;
	    console.log('resultStr:'+makeHot_TipStringHtml(expressionText));
			            }
             console.log('Hot_Tip indexes:'+JSON.stringify(hot_tipIndexes));
 for (var r = 0;r < red_titleIndexes.length; r++){
                 if(typeof red_titleIndexes[r] != "undefined"){
                    var startPos = red_titleIndexes[r].startPosition;
                    var size = red_titleIndexes[r].size;
                  
                     if(pos<=startPos){
        startPos=startPos+1;
		       }
       else
       if((pos>startPos)&&(pos<startPos+size)){
       size += 1;
                 }
       red_titleIndexes[r].startPosition = startPos;
       red_titleIndexes[r].size = size;
	               }
			resultStr = makeRed_titleStringHtml(expressionText);
	   document.getElementById("RESULTTEXT").innerText=resultStr;
document.getElementById("RESULTHTML").innerHTML=resultStr;
	    console.log('resultStr:'+makeRed_titleStringHtml(expressionText));
			            }
             console.log('Red_title indexes:'+JSON.stringify(red_titleIndexes));
 for (var f = 0;f < small_titleIndexes.length; f++){
                 if(typeof small_titleIndexes[f] != "undefined"){
                    var startPos = small_titleIndexes[f].startPosition;
                    var size = small_titleIndexes[f].size;
                  
                     if(pos<=startPos){
        startPos=startPos+1;
		       }
       else
       if((pos>startPos)&&(pos<startPos+size)){
       size += 1;
                 }
       small_titleIndexes[f].startPosition = startPos;
       small_titleIndexes[f].size = size;
	               }
			resultStr = makeSmall_titleStringHtml(expressionText);
	   document.getElementById("RESULTTEXT").innerText=resultStr;
document.getElementById("RESULTHTML").innerHTML=resultStr;
	    console.log('resultStr:'+makeSmall_titleStringHtml(expressionText));
			            }
             console.log('Small_title indexes:'+JSON.stringify(small_titleIndexes));
 for (var j = 0;j < boldIndexes.length; j++){
                 if(typeof boldIndexes[j] != "undefined"){
                    var startPos = boldIndexes[j].startPosition;
                    var size = boldIndexes[j].size;
                  
                     if(pos<=startPos){
        startPos=startPos+1;
		       }
       else
       if((pos>startPos)&&(pos<startPos+size)){
       size += 1;
                 }
       boldIndexes[j].startPosition = startPos;
       boldIndexes[j].size = size;
	               }
			resultStr = makeBoldStringHtml(expressionText);
	   document.getElementById("RESULTTEXT").innerText=resultStr;
document.getElementById("RESULTHTML").innerHTML=resultStr;
	    console.log('resultStr:'+makeBoldStringHtml(expressionText));
			            }
             console.log('Bold indexes:'+JSON.stringify(boldIndexes));
 for (var k = 0;k < codeIndexes.length; k++){
                 if(typeof codeIndexes[k] != "undefined"){
                    var startPos = codeIndexes[k].startPosition;
                    var size = codeIndexes[k].size;
                  
                     if(pos<=startPos){
        startPos=startPos+1;
		       }
       else
       if((pos>startPos)&&(pos<startPos+size)){
       size += 1;
                 }
       codeIndexes[k].startPosition = startPos;
       codeIndexes[k].size = size;
	               }
			resultStr = makeCodeStringHtml(expressionText);
	   document.getElementById("RESULTTEXT").innerText=resultStr;
document.getElementById("RESULTHTML").innerHTML=resultStr;
	    console.log('resultStr:'+makeCodeStringHtml(expressionText));
			            }
             console.log('Code indexes:'+JSON.stringify(codeIndexes));
			 for (var l = 0;l < captureIndexes.length; l++){
                 if(typeof captureIndexes[l] != "undefined"){
                    var startPos = captureIndexes[l].startPosition;
                    var size = captureIndexes[l].size;
                  
                     if(pos<=startPos){
        startPos=startPos+1;
		       }
       else
       if((pos>startPos)&&(pos<startPos+size)){
       size += 1;
                 }
       captureIndexes[l].startPosition = startPos;
       captureIndexes[l].size = size;
	               }
			resultStr = makeCaptureStringHtml(expressionText);
	   document.getElementById("RESULTTEXT").innerText=resultStr;
document.getElementById("RESULTHTML").innerHTML=resultStr;
	    console.log('resultStr:'+makeCaptureStringHtml(expressionText));
			            }
             console.log('Capture indexes:'+JSON.stringify(captureIndexes));
  
                                                                              });  
       
    Object.prototype.swap = function(a,b) { var tmp = this[a]; this[a] = this[b]; this[b] = tmp; }
   

      var SelectionPosition = function(startPos,endPos){
        this.startPosition = startPos;
        this.endPosition = endPos;
             }   
     
     
 
function Top(){
var top_page_list=prompt("Enter top_page_list","");
PurgeRedoSequence();
textarea=document.getElementById("text");
    document.getElementById("text").focus();
    var main_title=prompt("Enter main_title","");
var down_title=prompt("Enter down_title","");
    var result=document.getElementById("result");
var x=prompt("is middle_title exist?(yes or no)","");
if(x=="yes"){
var middle_title=prompt("Enter middle_title","");
         
document.getElementById("RESULTTEXT").innerText='<!DOCTYPE html>'+
'<html>'+
  '<head>'+
    '<meta charset="UTF-8" name="viewport" content="width=device-width, initial-scale=1.0">'+
    '<link rel="stylesheet" href="css/style.css"type="text/css"/ '+
    '</head>'+
  '<body>'+
    '<div class="page_cont one">'+
      '<br class="cbt">'+
      '<div class="content">'+
'<div class="float_left">'+top_page_list+'</div>'+
'<div class="main_title float_right">'+
'<span class="title_font">'+main_title+'</span>'+
'<span class="middle_title">'+middle_title+'</span>'+
'</div>'+
            '<div>'+
              '<div class="down_title ">'+
                '<span class="strong">'+down_title+'</span>'+
              '</div>'+
            '</div>';
            document.getElementById("RESULTHTML").innerHTML='<!DOCTYPE html>'+
'<html>'+
  '<head>'+
    '<meta charset="UTF-8" name="viewport" content="width=device-width, initial-scale=1.0">'+
    '<link rel="stylesheet" href="css/style.css"type="text/css"/ '+
    '</head>'+
  '<body>'+
    '<div class="page_cont one">'+
      '<br class="cbt">'+
      '<div class="content">'+
'<div class="float_left">'+top_page_list+'</div>'+
'<div class="main_title float_right">'+
'<span class="title_font">'+main_title+'</span>'+
'<span class="middle_title">'+middle_title+'</span>'+
'</div>'+
            '<div>'+
              '<div class="down_title ">'+
                '<span class="strong">'+down_title+'</span>'+
              '</div>'+
            '</div>';
           
            }
            else{
            document.getElementById("RESULTTEXT").innerText='<!DOCTYPE html>'+
'<html>'+
  '<head>'+
    '<meta charset="UTF-8" name="viewport" content="width=device-width, initial-scale=1.0">'+
    '<link rel="stylesheet" href="css/style.css"type="text/css"/ '+
    '</head>'+
  '<body>'+
    '<div class="page_cont one">'+
      '<br class="cbt">'+
      '<div class="content">'+
'<div class="float_left">'+top_page_list+'</div>'+
'<div class="main_title float_right">'+
'<span class="title_font">'+main_title+'</span>'+
'</div>'+
            '<div>'+
              '<div class="down_title ">'+
                '<span class="strong">'+down_title+'</span>'+
              '</div>'+
            '</div>';
    document.getElementById("RESULTHTML").innerHTML='<!DOCTYPE html>'+
'<html>'+
  '<head>'+
    '<meta charset="UTF-8" name="viewport" content="width=device-width, initial-scale=1.0">'+
    '<link rel="stylesheet" href="css/style.css"type="text/css"/> '+
    '</head>'+
  '<body>'+
    '<div class="page_cont one">'+
      '<br class="cbt">'+
      '<div class="content">'+
      '<div>'+
'<div class="float_left">'+top_page_list+'</div>'+
'<div class="main_title float_right">'+
'<span class="title_font">'+main_title+'</span>'+
'</div>'+
            '<div>'+
              '<div class="down_title ">'+
                '<span class="strong">'+down_title+'</span>'+
              '</div>'+
            '</div></div> <br class="cbt">';}      
                Make();
   
            }
function Down(){
PurgeRedoSequence();
    document.getElementById("text").focus();
    //var x=prompt("Enter a count of row","");
var y=prompt("Enter a count of columns","");
    var result=document.getElementById("result");
   
if(y==1){
var text=prompt("Enter text","");
document.getElementById("RESULTTEXT").innerText='</div><div class="down_page float_right"><div class="align_left medium_padding align_top float_left>' +text+'</div></div>';
document.getElementById("RESULTHTML").innerHTML='</div><div class="down_page float_right"><div class="align_left medium_padding align_top float_left>' +text+'</div></div>';
                Make();
                }
                    else{
                    var table='<div class="down_page float_right">';
                var text=prompt("Enter text","");  
                table +=' <div class="align_left medium_padding align_top float_left">'+text+'</div>';
          for(var i = 0; i < y-1;i++){
          var txt=prompt("Enter txt","");
 table += '<div class="align_left medium_padding align_top float_right">'+txt+ '</div>';
  }
  document.getElementById("RESULTTEXT").innerText= table + '</div>';
  document.getElementById("RESULTHTML").innerHTML = table + '</div>';
       
                Make();
                            }
            }
//----------------------------------------------------------------------------------------------------
 
 
function Reundo() {
    var html_res_array = getElementsById('RESULTHTML');
    var text_res_array = getElementsById('RESULTTEXT');
   
    for (var i = 0; i < html_res_array.length; i++)
    {
        if (i < historyIndex) {
            show(html_res_array[i]);
            show(text_res_array[i]);
        }
        else
        {
            hide(html_res_array[i]);
            hide(text_res_array[i]);
        }
    }
   
    //document.getElementById('html_res').innerHTML = history_Area[historyIndex];
    //document.getElementById('text_res').innerHTML = history_Result[historyIndex];
};
 
     
//undo.addEventListener('click', Undo () );
//redo.addEventListener('click', Redo() );
function Redo() {
   if (historyIndex < historyIndexMax)
    {
        historyIndex++; Reundo(); redo.disabled ='';
    }
    if (historyIndex == historyIndexMax)
    {
        redo.disabled ='disabled';
    }
    if (historyIndex > 0) { undo.disabled = ''; }
};
function Undo(){
    if (historyIndex > 0)
    {
        historyIndex--; Reundo(); undo.disabled ='';
    }
    if (historyIndex == 0)
    {
        undo.disabled ='disabled';
    }
    if (historyIndex < historyIndexMax) { redo.disabled=''; }
};
//--------------------------------------------------------------------------------------------------------------------------------
function Delete(){
PurgeRedoSequence();
document.getElementById("RESULTTEXT").innerHTML = '';
document.getElementById("RESULTHTML").innerHTML = '';
document.getElementById("RESULTTEXT").id = "RESULTTEXT";
document.getElementById("RESULTHTML").id = "RESULTHTML";
operation(document.getElementById("RESULTHTML").innerHTML, document.getElementById("RESULTTEXT").innerHTML);
}
                       

           
            function Image()
            {
                textarea=document.getElementById("text");
                var Image_Title= getSelectiontextarea( document.getElementById("text") );
                document.getElementById("text").focus();
                expressionStart=(textarea.value).substring(0,textarea.selectionStart);
                expressionEnd=(textarea.value).substring(textarea.selectionEnd);
                expressionStart.innerHTML = expressionStart.replace(/\n/g, '<br>');
                expressionEnd.innerHTML = expressionEnd.replace(/\n/g, '<br>');
               
                document.getElementById("text").innerHTML = Image_Title.replace(/\n/g, '<br>');
                var x=prompt("Enter a name of image","");
                PurgeRedoSequence();
                document.getElementById("RESULTTEXT").innerText='<img src="img/'+x+'"alt="622">';
                document.getElementById("RESULTHTML").innerHTML='<img src="img/'+x+'"alt="622">';
                document.getElementById("RESULTTEXT").innerText=expressionStart+'<img src="img/'+Image_Title+'"alt="622">'+expressionEnd;
                document.getElementById("RESULTHTML").innerHTML=expressionStart+'<img src="img/'+Image_Title+'"alt="622">'+expressionEnd;
                Make();
            }
           
   
var undo = document.getElementById('undo');
var redo = document.getElementById('redo');
 
 
            addelements=function getChar(event) {
  if (event.which == null) { // IE
    if (event.keyCode < 32) return null; // ????. ??????
    return String.fromCharCode(event.keyCode)
  }
 
  if (event.which != 0 && event.charCode != 0) { // ??? ????? IE
    if (event.which < 32) return null; // ????. ??????
    return String.fromCharCode(event.which); // ?????????
  }
 
  return null; // ????. ??????
}
               
  textarea=document.getElementById("text");
 var expressionText = getSelectiontextarea( document.getElementById("text") );
    var expressionHTML = getSelectiontextarea( document.getElementById("text") );
    var expressionStart=(textarea.value).substring(0,textarea.selectionStart).value;
    var expressionEnd=(textarea.value).substring(textarea.selectionEnd).value;
    var expressionText = getSelectiontextarea( document.getElementById("text") );
    var expressionHTML = getSelectiontextarea( document.getElementById("text") );
   
             textarea.oninput=function(){
   textarea=document.getElementById("text");
   //var resultstrCollection = new Array();
  // var resultTxtStr = makeTxtStringHtml(expressionText);
   // var resultStr = makeRed_titleStringHtml(expressionText);
    /*for(i = 0; i < resultStr.length; i++){
                 resultstrCollection.push(resultStr[i]);
   }*/
      document.getElementById("text").innerHTML = (textarea.value).replace(/\n/g, '<br>');
       document.getElementById('RESULTHTML').innerHTML =textarea.value;
                                  };
                             
     
           
                 
            function Main_List()
            {
                var expression = getSelectiontextarea( document.getElementById("text") );
                document.getElementById("text").innerHTML = expression.replace(/\n/g, '<br>');
                document.getElementById("text").focus();
                var n=prompt("Enter a count of row","");
                 var main_list='<span class=" strong font_size">'+expression+'</span><ul class="top_page_list">';
                 document.getElementById("text").value='';
for(var i=0;i<n;i++){
var text=prompt("Enter a text for  <li>","");
 main_list+='<li>'+text+'</li>';
 
}
 document.getElementById("RESULTTEXT").innerText= main_list + '</ul>';
document.getElementById("RESULTHTML").innerHTML= main_list + '</ul>';
                Make();
            }
            function Square_List()
            {
                var expression = getSelectiontextarea( document.getElementById("text") );
                document.getElementById("text").innerHTML = expression.replace(/\n/g, '<br>');
                document.getElementById("text").focus();
                var n=prompt("Enter a count of row","");
                 var square_list='<span class=" strong font_size">'+expression+'</span><ul class="square">';
for(var i=0;i<n;i++){
var text=prompt("Enter a text for  <li>","");
 square_list+='<li>'+text+'</li>';
 
}
 document.getElementById("RESULTTEXT").innerText= square_list + '</ul>';
document.getElementById("RESULTHTML").innerHTML= square_list + '</ul>';
                Make();
            }
            function None_List()
            {
                var expression = getSelectiontextarea( document.getElementById("text") );
                document.getElementById("text").innerHTML = expression.replace(/\n/g, '<br>');
                document.getElementById("text").focus();
                var n=prompt("Enter a count of row","");
                 var none_list='<span class=" strong font_size">'+expression+'</span><ul class="none_list">';
for(var i=0;i<n;i++){
        var text=prompt("Enter a text for  <li>","");
        none_list+='<li>'+text+'</li>';
 
}
 document.getElementById("RESULTTEXT").innerText= none_list + '</ul>';
document.getElementById("RESULTHTML").innerHTML= none_list + '</ul>';
                Make();
            }
            function Decimal_List()
            {
                var expression = getSelectiontextarea( document.getElementById("text") );
                document.getElementById("text").innerHTML = expression.replace(/\n/g, '<br>');
                document.getElementById("text").focus
                var n=prompt("Enter a count of row","");
                 var decimal_list='<span class=" strong font_size">'+expression+'</span><ol class="decimal">';
for(var i=0;i<n;i++){
        var text=prompt("Enter a text for  <li>","");
         decimal_list+='<li>'+text+'</li>';
 
}
 document.getElementById("RESULTTEXT").innerText= decimal_list + '</ol>';
document.getElementById("RESULTHTML").innerHTML= decimal_list + '</ol>';
                Make();
            }
            function Disc_List()
            {
                var expression = getSelectiontextarea( document.getElementById("text") );
                document.getElementById("text").innerHTML = expression.replace(/\n/g, '<br>');
                document.getElementById("text").focus();
                var n=prompt("Enter a count of row","");
                 var disc_list='<span class=" strong font_size">'+expression+'</span><ol class="disc">';
for(var i=0;i<n;i++){
        var worlds = getSelectiontextarea( document.getElementById("text") );
        document.getElementById("text").innerHTML = worlds.replace(/\n/g, '<br>');
        var text=prompt("Enter a text for  <li>","");
        document.getElementById("text").focus();
         disc_list+='<li>'+text+'</li>';
                    }
                 document.getElementById("RESULTTEXT").innerText= disc_list + '</ol>';
                document.getElementById("RESULTHTML").innerHTML= disc_list + '</ol>';
                Make();
            }
             
            function Smallicon()
            {
               
                textarea=document.getElementById("text");
                document.getElementById("text").focus();
                SomeVar();
                var x=prompt("Enter a name of image","");
                document.getElementById("RESULTTEXT").innerText='<img src="img/'+x+'"alt="622">';
                document.getElementById("RESULTTEXT").innerText='<br><img src="img/'+x+'"alt="622" class="textwrap smallicon">';
                document.getElementById("RESULTHTML").innerHTML='<br><img src="img/'+x+'"alt="622" class="textwrap smallicon">';
                document.getElementById("RESULTTEXT").innerText=expressionStart+'<br><img src="img/'+expressionText+'"alt="622" class="textwrap smallicon">'+expressionEnd;
                document.getElementById("RESULTHTML").innerHTML=expressionStart+'<br><img src="img/'+expressionHTML+'"alt="622" class="textwrap smallicon">'+expressionEnd;
                Make();
            }
           
            function Table()
            {
               
                var expression = getSelectiontextarea( document.getElementById("text") );
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
                Make();
            }
           
           
           
    });