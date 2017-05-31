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

/*function SomeVar(){
    textarea=document.getElementById("text");
    document.getElementById("text").focus();
    expressionText = getSelectiontextarea( document.getElementById("text") );
    
    document.getElementById("text").innerHTML = expressionText.replace(/\n/g, '<br>');
    
                expressionStart=(textarea.value).substring(0,textarea.selectionStart);
                expressionEnd=(textarea.value).substring(textarea.selectionEnd);
                expressionStart.innerHTML = expressionStart.replace(/\n/g, '<br>');
                expressionEnd.innerHTML = expressionEnd.replace(/\n/g, '<br>');
                }*/
				var resultStr=[];
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
					var smalliconIndexes = [];
					var square_listIndexes = [];
					var disc_listIndexes = [];
					var main_listIndexes = [];
					var none_listIndexes = [];
					var decimal_listIndexes = [];
					var UsedSelection = function(startPos, size){
			this.startPosition = startPos;
			this.size = size;
				  }
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
		var UsedSelection = function(startPos, size){
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
		var BoldSelection = function(BoldstartPos, size){
			this.startPosition = BoldstartPos;
			this.size = size;
				  }
				 
        var Small_titleSelection = function(startPos, size){
			this.startPosition = startPos;
			this.size = size;
				  }
		var CodeSelection = function(CodestartPos, size){
			this.startPosition = CodestartPos;
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
	    var resultstrCollection = new Array();
  			
	 
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
		}else
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
			 document.getElementById("text").innerHTML = expressionText.replace(/\n/g, '<br>');
        alert("makeListingStringHtml");
            var currentSymbolIndex = 0;
			var ListingresultStr =" ";
            var usedSymbols = 0;
            for (var i = 0; i < listingIndexes.length; i++){
                if (currentSymbolIndex<=listingIndexes[i].startPosition){
					ListingresultStr += sourceStr.substring(currentSymbolIndex,listingIndexes[i].startPosition);
					ListingresultStr =  '<span>'+ListingresultStr+'</span><br><span class="move_left "><span class="strong ">'+sourceStr.substring(listingIndexes[i].startPosition,listingIndexes[i].startPosition+listingIndexes[i].size)+'</span></span><span>'+sourceStr.substring(listingIndexes[i].startPosition+listingIndexes[i].size,sourceStr.length)+'</span>';
										

																		}
															}
			return ListingresultStr;
												}
           	
	  function makeLinkStringHtml(sourceStr){
		   textarea=document.getElementById("text");
		    var x=prompt("Enter a link","");
		    var expressionText =  document.getElementById("text").value;
			document.getElementById("text").innerHTML = expressionText.replace(/\n/g, '<br>');
        alert(" makeLinkStringHtml");
            var currentSymbolIndex = 0;
			var LinkresultStr =" ";
            var usedSymbols = 0;
            for (var i = 0; i < linkIndexes.length; i++){
                if (currentSymbolIndex<linkIndexes[i].startPosition){
					LinkresultStr += sourceStr.substring(currentSymbolIndex,linkIndexes[i].startPosition);
					LinkresultStr = '<span>'+ LinkresultStr+'</span><a  href="'+x+'">'+sourceStr.substring(linkIndexes[i].startPosition,linkIndexes[i].startPosition+linkIndexes[i].size)+'</a><span>'+sourceStr.substring(linkIndexes[i].startPosition+linkIndexes[i].size,sourceStr.length)+'</span>';
																	}	
														}
           			
            return LinkresultStr;
												}
           
function makeDownPage_titleStringHtml(sourceStr){
		   textarea=document.getElementById("text");
		    var expressionText =  document.getElementById("text").value;
			document.getElementById("text").innerHTML = expressionText.replace(/\n/g, '<br>');
        alert(" makeDownPage_titleStringHtml");
            var currentSymbolIndex = 0;
			var DownPage_titleresultStr =" ";
            var usedSymbols = 0;
            for (var i = 0; i < downpage_titleIndexes.length; i++){
                if (currentSymbolIndex<=downpage_titleIndexes[i].startPosition){
					DownPage_titleresultStr += sourceStr.substring(currentSymbolIndex,downpage_titleIndexes[i].startPosition);
					DownPage_titleresultStr = '<span>'+DownPage_titleresultStr+'</span><br><span class="move_left strong">'+sourceStr.substring(downpage_titleIndexes[i].startPosition,downpage_titleIndexes[i].startPosition+downpage_titleIndexes[i].size)+'</span><br><span>'+sourceStr.substring(downpage_titleIndexes[i].startPosition+downpage_titleIndexes[i].size,sourceStr.length)+'</span>';

																				}
																	}
           	return DownPage_titleresultStr;
													}
			function makeRed_titleStringHtml(sourceStr){
		   textarea=document.getElementById("text");
		    var expressionText =  document.getElementById("text").value;
			document.getElementById("text").innerHTML = expressionText.replace(/\n/g, '<br>');
        alert(" makeRed_titleStringHtml");
            var currentSymbolIndex = 0;
			var Red_titleresultStr =" ";
            var usedSymbols = 0;
            for (var i = 0; i < red_titleIndexes.length; i++){
                if (currentSymbolIndex<=red_titleIndexes[i].startPosition){
					Red_titleresultStr += sourceStr.substring(currentSymbolIndex,red_titleIndexes[i].startPosition);
					Red_titleresultStr = '<span>'+Red_titleresultStr+'</span><div class="title strong"><span>'+sourceStr.substring(red_titleIndexes[i].startPosition,red_titleIndexes[i].startPosition+red_titleIndexes[i].size)+'</span></div><span>'+sourceStr.substring(red_titleIndexes[i].startPosition+red_titleIndexes[i].size,sourceStr.length)+'</span>';
																		}
																}
           	return Red_titleresultStr;
														}
			
			function makeSmall_titleStringHtml(sourceStr){
		   textarea=document.getElementById("text");
		    var expressionText =  document.getElementById("text").value;
			document.getElementById("text").innerHTML = expressionText.replace(/\n/g, '<br>');
        alert(" makeSmall_titleStringHtml");
            var currentSymbolIndex = 0;
			var Small_titleresultStr =" ";
            var usedSymbols = 0;
            for (var i = 0; i < small_titleIndexes.length; i++){
                if (currentSymbolIndex<=small_titleIndexes[i].startPosition){
					Small_titleresultStr += sourceStr.substring(currentSymbolIndex,small_titleIndexes[i].startPosition);
					Small_titleresultStr = '<span>'+Small_titleresultStr+'</span><br><span class="move_left strong font_size">'+sourceStr.substring(small_titleIndexes[i].startPosition,small_titleIndexes[i].startPosition+small_titleIndexes[i].size)+'</span><span>'+sourceStr.substring(small_titleIndexes[i].startPosition+small_titleIndexes[i].size,sourceStr.length)+'</span>';
										

																			}																
																}
           	return Small_titleresultStr;
															}
			
			function makeFooterStringHtml(sourceStr){
		   textarea=document.getElementById("text");
		    var expressionText =  document.getElementById("text").value;
			document.getElementById("text").innerHTML = expressionText.replace(/\n/g, '<br>');
        alert(" makeFooterStringHtml");
            //var currentSymbolIndex = 0;
			var FooterresultStr =" ";
            //var usedSymbols = 0;
           // for (var i = 0; i < footerIndexes.length; i++){
               // if (currentSymbolIndex<=footerIndexes[i].startPosition){
               // resultStr += sourceStr.substring(currentSymbolIndex,footerIndexes[i].startPosition);
            FooterresultStr = /*'<span>'+ resultStr+'</span>*/'<div>'+
                '<div class="footer">'+
        '<span> DZone, Inc. | www.dzone.</span>'+
      '</div>'+
    '</div>'+  
  '</body>'+
'</html>';
                     
           	return  FooterresultStr;
														}
			
			 function makeDownStringHtml(sourceStr){
			var y=prompt("Enter a count of columns","");
		   textarea=document.getElementById("text");
		    var expressionText =  document.getElementById("text").value;
			document.getElementById("text").innerHTML = expressionText.replace(/\n/g, '<br>');
        alert(" makeDownStringHtml");
        var DownresultStr =" ";
           
           
					if(y==1){
var text=prompt("Enter text","");
              
            DownresultStr = '</div><div class="down_page float_right"><div class="align_left medium_padding align_top float_left>' +text+'</div></div>';
							}
					 else{
                    var table='<div class="down_page float_right">';
                var text=prompt("Enter text","");  
                table +=' <div class="align_left medium_padding align_top float_left">'+text+'</div>';
          for(var i = 0; i < y-1;i++){
          var txt=prompt("Enter txt","");
 table += '<div class="align_left medium_padding align_top float_right">'+txt+ '</div>';
  } 
   DownresultStr =table + '</div>';
							}
			return DownresultStr;
														}
			 var l=0;
			 var text=0;
			 var number=0;
			var arr=[];
			 function Square_List(x,y)
            {
				 var expressionText =  document.getElementById("text").value;
			document.getElementById("text").innerHTML = expressionText.replace(/\n/g, '<br>');
                var expression = getSelectiontextarea( document.getElementById("text") );
				  document.getElementById("text").innerHTML = expression.replace(/\n/g, '<br>');
                document.getElementById("text").focus();
				var selectionBegin = (textarea.selectionStart < textarea.selectionEnd) ? textarea.selectionStart : textarea.selectionEnd;
                var selectionEnd = (textarea.selectionEnd > textarea.selectionStart) ? textarea.selectionEnd : textarea.selectionStart;
                square_listIndexes.push(new UsedSelection(selectionBegin,selectionEnd-selectionBegin));
                AggregateSelection(square_listIndexes);
                for (var i = 0; i <square_listIndexes.length; i++){
                    var beginIndex =square_listIndexes[i].startPosition;
                    var endIndex =square_listIndexes[i].endPosition;
															}
					
					
					if(l!=null){
						l=prompt("Enter a count of row","");	
						number=l;
						console.log( 'l:' + l );
								}
					
					for(var i=0;i<number;i++){
						console.log( 'number:' +number );
						text=prompt("Enter a text for  <li>","");
						arr.push(text);
						console.log( 'arr:' +arr );
											}					
														
					var resultStr=makeString(expressionText,l,arr);

                document.getElementById("RESULTTEXT").innerText=resultStr;
                document.getElementById("RESULTHTML").innerHTML=resultStr;
                Make();
				
            }
			
			console.log( 'arr:' +arr );
										
			number=l;
			
				
			 function makeSquare_ListStringHtml(sourceStr){
				  var expressionText =  document.getElementById("text").value;
			document.getElementById("text").innerHTML = expressionText.replace(/\n/g, '<br>');
		   textarea=document.getElementById("text");
		   var expression = getSelectiontextarea( document.getElementById("text") );
		    document.getElementById("text").innerHTML = expression.replace(/\n/g, '<br>');
        alert(" makeSquare_ListStringHtml");
           var n=prompt("Enter a count of row","");
                 var square_list='<span class=" strong font_size">'+expression+'</span><ul class="square">';
for(var i=0;i<n;i++){
var text=prompt("Enter a text for  <li>","");
square_list+='<li>'+text+'</li>';
 
					}
			var Square_ListresultStr =" ";
                Square_ListresultStr = square_list + '</ul>';
                      	
           	return Square_ListresultStr;
															}
			           
			function makeNone_ListStringHtml(sourceStr){
				 var expressionText =  document.getElementById("text").value;
			document.getElementById("text").innerHTML = expressionText.replace(/\n/g, '<br>');
		   textarea=document.getElementById("text");
		    var expression = getSelectiontextarea( document.getElementById("text") );
			 document.getElementById("text").innerHTML = expression.replace(/\n/g, '<br>');
        alert(" makeNone_ListStringHtml");
          var n=prompt("Enter a count of row","");
                 var none_list='<span class=" strong font_size">'+expression+'</span><ul class="none_list">';
for(var i=0;i<n;i++){
        var text=prompt("Enter a text for  <li>","");
        none_list+='<li>'+text+'</li>';
 
					}
			var None_ListresultStr =" ";
                None_ListresultStr = none_list + '</ul>';
                      
			           	return None_ListresultStr;
														}
					
			 function makeDecimal_ListStringHtml(sourceStr){
				  var expressionText =  document.getElementById("text").value;
			document.getElementById("text").innerHTML = expressionText.replace(/\n/g, '<br>');
		   textarea=document.getElementById("text");
		     var expression = getSelectiontextarea( document.getElementById("text") );
        alert(" makeDecimal_ListStringHtml");
             var n=prompt("Enter a count of row","");
                 var decimal_list='<span class=" strong font_size">'+expression+'</span><ol class="decimal">';
for(var i=0;i<n;i++){
        var text=prompt("Enter a text for  <li>","");
         decimal_list+='<li>'+text+'</li>';
 
					}
			var Decimal_ListresultStr =" ";
                Decimal_ListresultStr = decimal_list + '</ol>';
                        	return Decimal_ListresultStr;
															}
	 function Disc_List(x,y)
            {
				 var expressionText =  document.getElementById("text").value;
			document.getElementById("text").innerHTML = expressionText.replace(/\n/g, '<br>');
                var expression = getSelectiontextarea( document.getElementById("text") );
                document.getElementById("text").innerHTML = expression.replace(/\n/g, '<br>');
                document.getElementById("text").focus();
               
                
					var selectionBegin = (textarea.selectionStart < textarea.selectionEnd) ? textarea.selectionStart : textarea.selectionEnd;
                var selectionEnd = (textarea.selectionEnd > textarea.selectionStart) ? textarea.selectionEnd : textarea.selectionStart;
                disc_listIndexes.push(new UsedSelection(selectionBegin,selectionEnd-selectionBegin));
                AggregateSelection(disc_listIndexes);
                for (var i = 0; i <disc_listIndexes.length; i++){
                    var beginIndex =disc_listIndexes[i].startPosition;
                    var endIndex =disc_listIndexes[i].endPosition;
															}
                 if(l!=null){
						l=prompt("Enter a count of row","");	
						number=l;
						console.log( 'l:' + l );
								}
					
					for(var i=0;i<number;i++){
						console.log( 'number:' +number );
						text=prompt("Enter a text for  <li>","");
						arr.push(text);
						console.log( 'arr:' +arr );
											}					
														
					var resultStr=makeString(expressionText,l,arr);

                document.getElementById("RESULTTEXT").innerText=resultStr;
                document.getElementById("RESULTHTML").innerHTML=resultStr;
                Make();
            }	
/*	function makeDisc_ListStringHtml(sourceStr){
		textarea=document.getElementById("text");
		expressionText =( document.getElementById("text").value );
		document.getElementById("text").innerHTML = expressionText.replace(/\n/g, '<br>');
		alert(" makeDisc_ListStringHtml");
		var flag;
		var BoldresultStr =" ";
					for (var i = 0; i < sourceStr.length; i++){
			flag=false;
			for (var k = 0; k < boldIndexes.length; k++){
				
					
		expressionText =( document.getElementById("text").value );	 
		while((i>=boldIndexes[k].startPosition)&&(i<boldIndexes[k].startPosition+boldIndexes[k].size)){
				 flag=true;	
				 break;
																										}
															}	
							if(flag==true){
					BoldresultStr+= '<span class="strong">'+sourceStr[i]+'</span>';
													}
													else{
														BoldresultStr+='<span>'+sourceStr[i]+'</span>';
														}
															}
		return BoldresultStr;
												}*/		
function makeDisc_ListStringHtml(sourceStr){
		   textarea=document.getElementById("text");
		    var expressionText =  document.getElementById("text").value;
			document.getElementById("text").innerHTML = expressionText.replace(/\n/g, '<br>');
		   var expression = getSelectiontextarea( document.getElementById("text") );
		    document.getElementById("text").innerHTML = expression.replace(/\n/g, '<br>');
        alert(" makeDisc_ListStringHtml");
           var n=prompt("Enter a count of row","");
                 var disc_list='<span class=" strong font_size">'+expression+'</span><ol class="disc">';
for(var i=0;i<n;i++){
        var worlds = getSelectiontextarea( document.getElementById("text") );
        document.getElementById("text").innerHTML = worlds.replace(/\n/g, '<br>');
        var text=prompt("Enter a text for  <li>","");
        document.getElementById("text").focus();
         disc_list+='<li>'+text+'</li>';
                    }
			var Disc_ListresultStr =" ";
                Disc_ListresultStr = disc_list + '</ol>';
            
           	return Disc_ListresultStr;
											}	
	  
	function makeTableStringHtml(sourceStr){
		   textarea=document.getElementById("text");
		    var expressionText =  document.getElementById("text").value;
			document.getElementById("text").innerHTML = expressionText.replace(/\n/g, '<br>');
        alert(" makeTableStringHtml");
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
			var TableresultStr =" ";
            
            TableresultStr = table + '</tbody></table>';
                    
           	return TableresultStr;
												}
		/* function Smallicon()
            {
               
                textarea=document.getElementById("text");
                document.getElementById("text").focus();
				var expression = getSelectiontextarea( document.getElementById("text") );
				 document.getElementById("text").innerHTML = expression.replace(/\n/g, '<br>');
                 var x=prompt("Enter a name of image","");
                document.getElementById("RESULTHTML").innerText='<img src="img/'+x+'"alt="622">';
				 document.getElementById("RESULTTEXT").innerText='<img src="img/'+x+'"alt="622">';
                document.getElementById("RESULTTEXT").innerText='<br><img src="img/'+x+'"alt="622" class="textwrap smallicon">';
                document.getElementById("RESULTHTML").innerHTML='<br><img src="img/'+x+'"alt="622" class="textwrap smallicon">';
                document.getElementById("RESULTTEXT").innerText=expressionStart+'<br><img src="img/'+expression+'"alt="622" class="textwrap smallicon">'+expressionEnd;
                document.getElementById("RESULTHTML").innerHTML=expressionStart+'<br><img src="img/'+expression+'"alt="622" class="textwrap smallicon">'+expressionEnd;
                Make();
            }	*/	
			function makeSmalliconStringHtml(sourceStr){
		   textarea=document.getElementById("text");
		     var expressionText = getSelectiontextarea( document.getElementById("text") );
			 document.getElementById("text").innerHTML = expressionText.replace(/\n/g, '<br>');
        alert(" makeSmalliconStringHtml");
           var x=prompt("Enter a name of image","");
			var SmalliconresultStr =" ";
                SmalliconresultStr = '<br><img src="img/'+x+'"alt="622" class="textwrap smallicon">';
                     
           	return SmalliconresultStr;
														}
														
		/*function makeBoldStringHtml(sourceStr){
		   textarea=document.getElementById("text");
		    expressionText =( document.getElementById("text").value ); 
			 document.getElementById("text").innerHTML = expressionText.replace(/\n/g, '<br>');
        alert(" makeBoldStringHtml");
		   	var resultStr =" ";
           	for (var j = 0; j < sourceStr.length; j++){
				for (var i = 0; i < boldIndexes.length; i++){
					if(i==j){
					
                if (currentSymbolIndex<=boldIndexes[i].startPosition){
					resultStr += sourceStr.substring(currentSymbolIndex,boldIndexes[i].startPosition);
					resultStr = '<span>'+resultStr+'</span><span class="strong">'+sourceStr.substring(boldIndexes[i].startPosition,boldIndexes[i].startPosition+boldIndexes[i].size)+'</span><span>'+sourceStr.substring(boldIndexes[i].startPosition+boldIndexes[i].size,sourceStr.length)+'</span>';

																		}					
						}
			}
			for (var p = 0; p < captureIndexes.length; p++){											
           	if((j==p)&&(i!=j)){
              
                if (currentSymbolIndex<=captureIndexes[p].startPosition){
					resultStr += sourceStr.substring(currentSymbolIndex,captureIndexes[p].startPosition);
					resultStr ='<span>'+resultStr+'</span><br><span class="move_left "><span class="strong underline">'+sourceStr.substring(captureIndexes[p].startPosition,captureIndexes[p].startPosition+captureIndexes[p].size)+'</span><span><span>'+sourceStr.substring(captureIndexes[p].startPosition+captureIndexes[p].size,sourceStr.length)+'</span>';
																		}
					}
																}
			}
			
			return resultStr;
														}*/
		
	/*  function makeBoldStringHtml(sourceStr){
		   textarea=document.getElementById("text");
		    expressionText =( document.getElementById("text").value );
			 document.getElementById("text").innerHTML = expressionText.replace(/\n/g, '<br>');
        alert(" makeBoldStringHtml");
            var currentSymbolIndex = 0;
			var BoldresultStr =" ";
            var usedSymbols = 0;
            for (var i = 0; i < boldIndexes.length; i++){
				 expressionText =( document.getElementById("text").value );
                if (currentSymbolIndex<=boldIndexes[i].startPosition){
					BoldresultStr += sourceStr.substring(currentSymbolIndex,boldIndexes[i].startPosition);
					BoldresultStr = '<span>'+BoldresultStr+'</span><span class="strong">'+sourceStr.substring(boldIndexes[i].startPosition,boldIndexes[i].startPosition+boldIndexes[i].size)+'</span><span>'+sourceStr.substring(boldIndexes[i].startPosition+boldIndexes[i].size,sourceStr.length)+'</span>';
									
																	}
					//currentSymbolIndex=	sourceArray;											
														}
           	return BoldresultStr;
											}*/
											
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------											
					
					function getSymbolTypes(symbolIndex){
						//alert("getSymbolTypes")
						for (var k = 0; k < boldIndexes.length; k++){
								if((symbolIndex>=boldIndexes[k].startPosition)&&(symbolIndex<boldIndexes[k].startPosition+boldIndexes[k].size)){
									symbolIndex='Bold';
																			}
						}
								for (var c = 0; c < codeIndexes.length; c++){										
								if((symbolIndex>=codeIndexes[c].startPosition)&&(symbolIndex<codeIndexes[c].startPosition+codeIndexes[c].size)){
									symbolIndex='Code';
										}
								
										
						}
						for (var k = 0; k < txtIndexes.length; k++){
								if((symbolIndex>=txtIndexes[k].startPosition)&&(symbolIndex<txtIndexes[k].startPosition+txtIndexes[k].size)){
									symbolIndex='Text';
																			}
						}
						for (var k = 0; k < listingIndexes.length; k++){
								if((symbolIndex>=listingIndexes[k].startPosition)&&(symbolIndex<listingIndexes[k].startPosition+listingIndexes[k].size)){
									symbolIndex='Listing';
																			}
						}
						for (var k = 0; k < cbtIndexes.length; k++){
								if((symbolIndex>=cbtIndexes[k].startPosition)&&(symbolIndex<cbtIndexes[k].startPosition+cbtIndexes[k].size)){
									symbolIndex='CBT';
																			}
						}
						for (var k = 0; k < linkIndexes.length; k++){
								if((symbolIndex>=linkIndexes[k].startPosition)&&(symbolIndex<linkIndexes[k].startPosition+linkIndexes[k].size)){
									symbolIndex='Link';
																			}
						}
						for (var k = 0; k < main_titleIndexes.length; k++){
								if((symbolIndex>=main_titleIndexes[k].startPosition)&&(symbolIndex<main_titleIndexes[k].startPosition+main_titleIndexes[k].size)){
									symbolIndex='Main_title';
																			}
						}
						for (var k = 0; k < middle_titleIndexes.length; k++){
								if((symbolIndex>=middle_titleIndexes[k].startPosition)&&(symbolIndex<middle_titleIndexes[k].startPosition+middle_titleIndexes[k].size)){
									symbolIndex='Middle_title';
																			}
						}
						for (var k = 0; k < down_titleIndexes.length; k++){
								if((symbolIndex>=down_titleIndexes[k].startPosition)&&(downpage_titleymbolIndex<down_titleIndexes[k].startPosition+down_titleIndexes[k].size)){
									symbolIndex='Down_title';
																			}
						}
						for (var k = 0; k < downpage_titleIndexes.length; k++){
								if((symbolIndex>=downpage_titleIndexes[k].startPosition)&&(symbolIndex<downpage_titleIndexes[k].startPosition+downpage_titleIndexes[k].size)){
									symbolIndex='Downpage_title';
																			}
						}
						for (var k = 0; k < hot_tipIndexes.length; k++){
								if((symbolIndex>=hot_tipIndexes[k].startPosition)&&(symbolIndex<hot_tipIndexes[k].startPosition+hot_tipIndexes[k].size)){
									symbolIndex='Hot_tip';
																			}
						}
						for (var k = 0; k < red_titleIndexes.length; k++){
								if((symbolIndex>=red_titleIndexes[k].startPosition)&&(symbolIndex<red_titleIndexes[k].startPosition+red_titleIndexes[k].size)){
									symbolIndex='Red_title';
																			}
						}
						for (var k = 0; k < small_titleIndexes.length; k++){
								if((symbolIndex>=small_titleIndexes[k].startPosition)&&(symbolIndex<small_titleIndexes[k].startPosition+small_titleIndexes[k].size)){
									symbolIndex='Small_title';
																			}
						}
						for (var k = 0; k < captureIndexes.length; k++){
								if((symbolIndex>=captureIndexes[k].startPosition)&&(symbolIndex<captureIndexes[k].startPosition+captureIndexes[k].size)){
									symbolIndex='Capture';
																			}
						}
						for (var k = 0; k < smalliconIndexes.length; k++){
								if((symbolIndex>=smalliconIndexes[k].startPosition)&&(symbolIndex<smalliconIndexes[k].startPosition+smalliconIndexes[k].size)){
									symbolIndex='Smallicon';
																			}
						}
						for (var k = 0; k < square_listIndexes.length; k++){
								if((symbolIndex>=square_listIndexes[k].startPosition)&&(symbolIndex<square_listIndexes[k].startPosition+square_listIndexes[k].size)){
									symbolIndex='Square_List';
																			}
						}
						for (var k = 0; k < disc_listIndexes.length; k++){
								if((symbolIndex>=disc_listIndexes[k].startPosition)&&(symbolIndex<disc_listIndexes[k].startPosition+disc_listIndexes[k].size)){
									symbolIndex='Disc_List';
																			}
						}
						for (var k = 0; k <  main_listIndexes.length; k++){
								if((symbolIndex>= main_listIndexes[k].startPosition)&&(symbolIndex< main_listIndexes[k].startPosition+ main_listIndexes[k].size)){
									symbolIndex='Main_List';
																			}
						}
						for (var k = 0; k <  none_listIndexes.length; k++){
								if((symbolIndex>= none_listIndexes[k].startPosition)&&(symbolIndex< none_listIndexes[k].startPosition+ none_listIndexes[k].size)){
									symbolIndex='None_List';
																			}
						}
						for (var k = 0; k < decimal_listIndexes.length; k++){
								if((symbolIndex>=decimal_listIndexes[k].startPosition)&&(symbolIndex<decimal_listIndexes[k].startPosition+decimal_listIndexes[k].size)){
									symbolIndex='Decimal_List';
																			}
						}
						/*for (var k = 0; k < boldIndexes.length; k++){
								if((symbolIndex>=boldIndexes[k].startPosition)&&(symbolIndex<boldIndexes[k].startPosition+boldIndexes[k].size)){
									symbolIndex='Bold';
																			}
						}
						for (var k = 0; k < boldIndexes.length; k++){
								if((symbolIndex>=boldIndexes[k].startPosition)&&(symbolIndex<boldIndexes[k].startPosition+boldIndexes[k].size)){
									symbolIndex='Bold';
																			}
						}
						for (var k = 0; k < boldIndexes.length; k++){
								if((symbolIndex>=boldIndexes[k].startPosition)&&(symbolIndex<boldIndexes[k].startPosition+boldIndexes[k].size)){
									symbolIndex='Bold';
																			}
						}
						for (var k = 0; k < boldIndexes.length; k++){
								if((symbolIndex>=boldIndexes[k].startPosition)&&(symbolIndex<boldIndexes[k].startPosition+boldIndexes[k].size)){
									symbolIndex='Bold';
																			}
						}
						for (var k = 0; k < boldIndexes.length; k++){
								if((symbolIndex>=boldIndexes[k].startPosition)&&(symbolIndex<boldIndexes[k].startPosition+boldIndexes[k].size)){
									symbolIndex='Bold';
																			}
						}
						for (var k = 0; k < boldIndexes.length; k++){
								if((symbolIndex>=boldIndexes[k].startPosition)&&(symbolIndex<boldIndexes[k].startPosition+boldIndexes[k].size)){
									symbolIndex='Bold';
																			}
						}*/
						
						 /*if((symbolIndex!='Bold')&&(symbolIndex!='Code')){
											symbolIndex='Str';
																											}*/
	 console.log( 'symbolIndex:' +symbolIndex );					
return symbolIndex;
					}
//-----------------------------------------------------------------------------------------------------------------
function makeSmalliconStringHtml(sourceStr){
		   textarea=document.getElementById("text");
		     var expressionText = getSelectiontextarea( document.getElementById("text") );
			 document.getElementById("text").innerHTML = expressionText.replace(/\n/g, '<br>');
        alert(" makeSmalliconStringHtml");
           var x=prompt("Enter a name of image","");
			var SmalliconresultStr =" ";
                SmalliconresultStr = '<br><img src="img/'+x+'"alt="622" class="textwrap smallicon">';
                     
           	return SmalliconresultStr;
														}
var resultstr=[];
	var stack=[];
	function makeString(sourceStr,x,y){
		x=x;
		y=y;
		textarea=document.getElementById("text");
		 var expressionText =  document.getElementById("text").value;
			document.getElementById("text").innerHTML = expressionText.replace(/\n/g, '<br>');
			resultstr.pop();
		for (var i = 0; i < sourceStr.length; i++){														
				 
				switch(getSymbolTypes(i)){
					 case 'Bold':
						if ((stack.length == 0) || ((stack.length !== 0)&&(top!== 'Bold'))){
							if(i==0){
							resultStr ='<span class="strong">'+ sourceStr[i];
									} else{
								resultStr +='<span class="strong">'+ sourceStr[i];
											}
							 stack.push( 'Bold');
							  console.log( 'resultStr:' + resultStr );	
																		}
								
							resultStr = closeTag(resultStr,stack[stack.length-1]);															
																				
					  break;
					  case 'Code':
						if ((stack.length == 0) || ((stack.length !== 0)&&(top !== 'Code'))){
							if(i==0){
							resultStr='<div class="commands"><pre>'+sourceStr[i];
									} else{
								resultStr+='<div class="commands"><pre>'+sourceStr[i];
											}
						  
						  stack.push('Code');
						 console.log( 'resultStr:' + resultStr );	
																		}
					  	 
						resultStr = closeTag(resultStr,stack[stack.length-1]);															
																				
							
					 break;
					  case 'Text':
						if ((stack.length == 0) || ((stack.length !== 0)&&(top!== 'Text'))){
							if(i==0){
							resultStr ='</span><br><span class="move_left">'+ sourceStr[i];
									} else{
								resultStr +='</span><br><span class="move_left">'+ sourceStr[i];
											}
							
							 stack.push( 'Text');
							  console.log( 'resultStr:' + resultStr );	
																		}
								
							resultStr = closeTag(resultStr,stack[stack.length-1]);															
																				
					  break;
					  case 'Listing':
						if ((stack.length == 0) || ((stack.length !== 0)&&(top!== 'Listing'))){
							if(i==0){
							resultStr ='</span><br><span class="move_left "><span class="strong ">'+ sourceStr[i];
									} else{
								resultStr +='</span><br><span class="move_left "><span class="strong ">'+ sourceStr[i];
											}
							
							 stack.push( 'Listing');
							  console.log( 'resultStr:' + resultStr );	
																		}
								
							resultStr = closeTag(resultStr,stack[stack.length-1]);															
																				
					  break;
					  case 'CBT':
						if ((stack.length == 0) || ((stack.length !== 0)&&(top!=='CBT'))){
							if(i==0){
							resultStr ='<span class="strong">'+ sourceStr[i]
									} else{
								resultStr +='<span class="strong">'+ sourceStr[i]
											}
							;
							 stack.push('CBT');
							  console.log( 'resultStr:' + resultStr );	
																		}
								
							resultStr = closeTag(resultStr,stack[stack.length-1]);															
																				
					  break;
					  case 'Link':
						if ((stack.length == 0) || ((stack.length !== 0)&&(top!=='Link'))){
							var x=prompt("Enter a link","");
							if(i==0){
							resultStr ='</span><a  href="'+x+'">'+ sourceStr[i];
									} else{
								resultStr +='</span><a  href="'+x+'">'+ sourceStr[i];
											}
							
							
							 stack.push('Link');
							  console.log( 'resultStr:' + resultStr );	
																		}
								
							resultStr = closeTag(resultStr,stack[stack.length-1]);															
																				
					  break;
					  case 'Main_title':
						if ((stack.length == 0) || ((stack.length !== 0)&&(top!== 'Main_title'))){
							if(i==0){
							resultStr ='</span><div class="main_title">'+ sourceStr[i];
									} else{
								resultStr +='</span><div class="main_title">'+ sourceStr[i];
											}
							
							 stack.push('Main_title');
							  console.log( 'resultStr:' + resultStr );	
																		}
								
							resultStr = closeTag(resultStr,stack[stack.length-1]);															
																				
					  break;
					  case 'Middle_title':
						if ((stack.length == 0) || ((stack.length !== 0)&&(top!=='Middle_title'))){
							if(i==0){
							resultStr ='</span><span class="middle_title">'+ sourceStr[i];
									} else{
								resultStr +='</span><span class="middle_title">'+ sourceStr[i];
											}
							
							 stack.push('Middle_title');
							  console.log( 'resultStr:' + resultStr );	
																		}
								
							resultStr = closeTag(resultStr,stack[stack.length-1]);															
																				
					  break;
					  case 'Down_title':
						if ((stack.length == 0) || ((stack.length !== 0)&&(top!=='Down_title'))){
							if(i==0){
							resultStr ='<span class="strong">'+ sourceStr[i];
									} else{
								resultStr +='<span class="strong">'+ sourceStr[i];
											}
							resultStr ='</span><div class="down_title">'+ sourceStr[i];
							 stack.push('Down_title');
							  console.log( 'resultStr:' + resultStr );	
																		}
								
							resultStr = closeTag(resultStr,stack[stack.length-1]);															
																				
					  break;
					  case 'Downpage_title':
						if ((stack.length == 0) || ((stack.length !== 0)&&(top!=='Downpage_title'))){
							if(i==0){
							resultStr ='</span><br><span class="move_left strong">'+ sourceStr[i];
									} else{
								resultStr +='</span><br><span class="move_left strong">'+ sourceStr[i];
											}
							
							 stack.push('Downpage_title');
							  console.log( 'resultStr:' + resultStr );	
																		}
								
							resultStr = closeTag(resultStr,stack[stack.length-1]);															
																				
					  break;
					  case 'Hot_tip':
						if ((stack.length == 0) || ((stack.length !== 0)&&(top!=='Hot_tip'))){
							if(i==0){
							resultStr ='</span><div class="border">'+
					  '<table class="elliptic">'+
						'<tbody>'+
						  '<tr>'+
							'<td class="hotTipLeft">'+
							  '<h1>Hot<br>Tip</h1>'+
							'</td>'+
							'<td class="hotTipRight">'+
							  '<span>'+ sourceStr[i];
									} else{
								resultStr +='</span><div class="border">'+
					  '<table class="elliptic">'+
						'<tbody>'+
						  '<tr>'+
							'<td class="hotTipLeft">'+
							  '<h1>Hot<br>Tip</h1>'+
							'</td>'+
							'<td class="hotTipRight">'+
							  '<span>'+ sourceStr[i];
											}
								 stack.push('Hot_tip');
							  console.log( 'resultStr:' + resultStr );	
																		}
								
							resultStr = closeTag(resultStr,stack[stack.length-1]);															
																				
					  break;
					 
					 case 'Red_title':
						if ((stack.length == 0) || ((stack.length !== 0)&&(top!=='Red_title'))){
							if(i==0){
							resultStr ='</span><div class="title strong"><span>'+ sourceStr[i];
									} else{
								resultStr +='</span><div class="title strong"><span>'+ sourceStr[i];
											}
							 stack.push('Red_title');
							  console.log( 'resultStr:' + resultStr );	
																		}
								
							resultStr = closeTag(resultStr,stack[stack.length-1]);															
																				
					  break;
					  
					 case 'Small_title':
						if ((stack.length == 0) || ((stack.length !== 0)&&(top!=='Small_title'))){
							if(i==0){
							resultStr ='</span><br><span class="move_left strong font_size">'+ sourceStr[i];
									} else{
								resultStr +='</span><br><span class="move_left strong font_size">'+ sourceStr[i];
											}
							 stack.push('Small_title');
							  console.log( 'resultStr:' + resultStr );	
																		}
								
							resultStr = closeTag(resultStr,stack[stack.length-1]);															
																				
					  break;
					  
					 case 'Capture':
						if ((stack.length == 0) || ((stack.length !== 0)&&(top!=='Capture'))){
							if(i==0){
							resultStr ='</span><br><span class="move_left "><span class="strong underline">'+ sourceStr[i];
									} else{
								resultStr +='</span><br><span class="move_left "><span class="strong underline">'+ sourceStr[i];
											}
							 stack.push('Capture');
							  console.log( 'resultStr:' + resultStr );	
																		}
								
							resultStr = closeTag(resultStr,stack[stack.length-1]);															
																				
					  break;
					  
					 case 'Smallicon':
					 
						if ((stack.length == 0) || ((stack.length !== 0)&&(top!== 'Smallicon'))){
							alert("Enter a name of image");
           
							if(i==0){
							resultStr ='<br><img src="img/'+sourceStr[i];
									} else{
								resultStr +='<br><img src="img/'+sourceStr[i];
											}
							
							 stack.push( 'Smallicon');
							  console.log( 'resultStr:' + resultStr );	
																		}
								
							resultStr = closeTag(resultStr,stack[stack.length-1]);															
																				
					  break;
					  
					 case 'Square_List':
						if ((stack.length == 0) || ((stack.length !== 0)&&(top!=='Square_List'))){
							
                 
				 if(i==0){
							resultStr='<span class=" strong font_size">'+ sourceStr[i];
									} else{
								resultStr+='<span class=" strong font_size">'+ sourceStr[i];
											}
							stack.push('Square_List');
							  console.log( 'resultStr:' + resultStr );	
																		}
								
							resultStr = closeTag(resultStr,stack[stack.length-1],x,y);															
																				
					  break;
					  
					 case 'Disc_List':
						if ((stack.length == 0) || ((stack.length !== 0)&&(top!=='Disc_List'))){
							
                 
				 if(i==0){
							resultStr='<span class=" strong font_size">'+ sourceStr[i];
									} else{
								resultStr+='<span class=" strong font_size">'+ sourceStr[i];
											}
							stack.push('Disc_List');
							  console.log( 'resultStr:' + resultStr );	
																		}
								
							resultStr = closeTag(resultStr,stack[stack.length-1],x,y);															
																				
					  break;
					  case 'Main_List':
						if ((stack.length == 0) || ((stack.length !== 0)&&(top!=='Main_List'))){
							
                 
				 if(i==0){
							resultStr='<span class=" strong font_size">'+ sourceStr[i];
									} else{
								resultStr+='<span class=" strong font_size">'+ sourceStr[i];
											}
							stack.push('Main_List');
							  console.log( 'resultStr:' + resultStr );	
																		}
								
							resultStr = closeTag(resultStr,stack[stack.length-1],x,y);															
																				
					  break;
					  case 'None_List':
						if ((stack.length == 0) || ((stack.length !== 0)&&(top!=='None_List'))){
							
                 
				 if(i==0){
							resultStr='<span class=" strong font_size">'+ sourceStr[i];
									} else{
								resultStr+='<span class=" strong font_size">'+ sourceStr[i];
											}
							stack.push('None_List');
							  console.log( 'resultStr:' + resultStr );	
																		}
								
							resultStr = closeTag(resultStr,stack[stack.length-1],x,y);															
																				
					  break;
					  case 'Decimal_List':
						if ((stack.length == 0) || ((stack.length !== 0)&&(top!=='Decimal_List'))){
							
                 
				 if(i==0){
							resultStr='<span class=" strong font_size">'+ sourceStr[i];
									} else{
								resultStr+='<span class=" strong font_size">'+ sourceStr[i];
											}
							stack.push('Decimal_List');
							  console.log( 'resultStr:' + resultStr );	
																		}
								
							resultStr = closeTag(resultStr,stack[stack.length-1],x,y);															
																				
					  break;
					  
						
					 default:
					  resultStr +=sourceStr[i];
					  console.log( 'resultStr:' + resultStr );
					 
											}
													}
						
					resultstr.push(resultStr);
					resultStr=resultstr[resultstr.length-1];
					console.log( 'resultStr:' + resultStr );
				return resultStr;
																
								}
								
			function closeTag(resultStr,top, m,g){
				 console.log( 'm:' + m );
				console.log( 'g:' + g );
			textarea=document.getElementById("text");
		  expressionText =  document.getElementById("text").value ;		
		//var top=stack[stack.length-1];
				console.log( 'top:' +top );
		k=i+1;
		n=getSymbolTypes(k);
		 console.log( 'n:' + n );

				if(k>resultStr.length){
					n='noSymbolTypes';
										}
				if((top=='Bold')&&((n!='Bold')||(k==boldIndexes.length))){
					resultStr +='</span>';
					 console.log( 'resultStr:' + resultStr );
					stack.pop();
				console.log( 'top:' +top );
				
				} else 	if((top=='Bold')&&(n=='Bold')){
		resultStr +=resultStr[k];
		console.log( 'resultStr:' + resultStr );

														}	
														
			
		
		if((top=='Code')&&((n!='Code')||(k==codeIndexes.length))){
			resultStr+='</pre></div>';
			console.log( 'resultStr:' + resultStr );
					  stack.pop();
																	 
		}else if((top=='Code')&&(n=='Code')){
		resultStr +=resultStr[k];
		console.log( 'resultStr:' + resultStr );
				}
				if((top=='Text')&&((n!='Text')||(k==txtIndexes.length))){
					resultStr +='</span>';
					 console.log( 'resultStr:' + resultStr );
					stack.pop();
				console.log( 'top:' +top );
				
				} else 	if((top=='Text')&&(n=='Text')){
		resultStr +=resultStr[k];
		console.log( 'resultStr:' + resultStr );

														}
				if((top=='Listing')&&((n!='Listing')||(k==listingIndexes.length))){
					resultStr +='</span></span>';
					 console.log( 'resultStr:' + resultStr );
					stack.pop();
				console.log( 'top:' +top );
				
				} else 	if((top=='Listing')&&(n=='Listing')){
		resultStr +=resultStr[k];
		console.log( 'resultStr:' + resultStr );

														}
				if((top=='Link')&&((n!='Link')||(k==linkIndexes.length))){
					resultStr +='</a><span>';
					 console.log( 'resultStr:' + resultStr );
					stack.pop();
				console.log( 'top:' +top );
				
				} else 	if((top=='Link')&&(n=='Link')){
		resultStr +=resultStr[k];
		console.log( 'resultStr:' + resultStr );

														}
				if((top=='Main_title')&&((n!='Main_title')||(k==main_titleIndexes.length))){
					resultStr +='</div>';
					 console.log( 'resultStr:' + resultStr );
					stack.pop();
				console.log( 'top:' +top );
				
				} else 	if((top=='Main_title')&&(n=='Main_title')){
		resultStr +=resultStr[k];
		console.log( 'resultStr:' + resultStr );

														}
				if((top=='Middle_title')&&((n!='Middle_title')||(k==middle_titleIndexes.length))){
					resultStr +='</span>';
					 console.log( 'resultStr:' + resultStr );
					stack.pop();
				console.log( 'top:' +top );
				
				} else 	if((top=='Middle_title')&&(n=='Middle_title')){
		resultStr +=resultStr[k];
		console.log( 'resultStr:' + resultStr );

														}
				if((top=='Down_title')&&((n!='Down_title')||(k==down_titleIndexes.length))){
					resultStr +='</div>';
					 console.log( 'resultStr:' + resultStr );
					stack.pop();
				console.log( 'top:' +top );
				
				} else 	if((top=='Down_title')&&(n=='Down_title')){
		resultStr +=resultStr[k];
		console.log( 'resultStr:' + resultStr );

														}
				if((top=='Downpage_title')&&((n!='Downpage_title')||(k==downpage_titleIndexes.length))){
					resultStr +='</span><br>';
					 console.log( 'resultStr:' + resultStr );
					stack.pop();
				console.log( 'top:' +top );
				
				} else 	if((top=='Downpage_title')&&(n=='Downpage_title')){
		resultStr +=resultStr[k];
		console.log( 'resultStr:' + resultStr );

														}
				if((top=='Hot_tip')&&((n!='Hot_tip')||(k==hot_tipIndexes.length))){
					resultStr +='</span>'+
							'</td>'+
						  '</tr>'+
						'</tbody>'+
					  '</table>'+
					  '<br class="cbt">'+
					'</div>';
					 console.log( 'resultStr:' + resultStr );
					stack.pop();
				console.log( 'top:' +top );
				
				} else 	if((top=='Hot_tip')&&(n=='Hot_tip')){
		resultStr +=resultStr[k];
		console.log( 'resultStr:' + resultStr );

														}
				if((top=='Red_title')&&((n!='Red_title')||(k==red_titleIndexess.length))){
					resultStr +='</span></div>';
					 console.log( 'resultStr:' + resultStr );
					stack.pop();
				console.log( 'top:' +top );
				
				} else 	if((top=='Red_title')&&(n=='Red_title')){
		resultStr +=resultStr[k];
		console.log( 'resultStr:' + resultStr );

														}
				if((top=='Small_title')&&((n!='Small_title')||(k==small_titleIndexes.length))){
					resultStr +='</span>';
					 console.log( 'resultStr:' + resultStr );
					stack.pop();
				console.log( 'top:' +top );
				
				} else 	if((top=='Small_title')&&(n=='Small_title')){
		resultStr +=resultStr[k];
		console.log( 'resultStr:' + resultStr );

														}
				if((top=='Capture')&&((n!='Capture')||(k==captureIndexes.length))){
					resultStr +='</span></span>';
					 console.log( 'resultStr:' + resultStr );
					stack.pop();
				console.log( 'top:' +top );
				
				} else 	if((top=='Capture')&&(n=='Capture')){
		resultStr +=resultStr[k];
		console.log( 'resultStr:' + resultStr );

														}
				if((top=='Smallicon')&&((n!='Smallicon')||(k==smalliconIndexes.length))){
					resultStr +='"alt="622" class="textwrap smallicon">';
					 console.log( 'resultStr:' + resultStr );
					stack.pop();
				console.log( 'top:' +top );
				
				} else 	if((top=='Smallicon')&&(n=='Smallicon')){
		resultStr +=resultStr[k];
		console.log( 'resultStr:' + resultStr );

														}
				if((top=='Square_List')&&((n!='Square_List')||(k==square_listIndexes.length))){
					resultStr +='</span><ul class="square">';
					
for(var i=0;i<m;i++){
	 console.log( 'm:' + m );
resultStr+='<li>'+g[i]+'</li>';
console.log( 'g[i]:' + g[i] );
 					}
					if(m==undefined){
					for(var i=0;i<number;i++){
	resultStr+='<li>'+arr[i]+'</li>';
console.log( 'arr[i]:' +arr[i] );
 					}
									}
			resultStr+='</ul>';
					 console.log( 'resultStr:' + resultStr );
					stack.pop();
				console.log( 'top:' +top );
				
				} else 	if((top=='Square_List')&&(n=='Square_List')){
		resultStr +=resultStr[k];
		console.log( 'resultStr:' + resultStr );

														}
				if((top=='Disc_List')&&((n!='Disc_List')||(k==disc_listIndexes.length))){
					resultStr +='</span><ol class="disc">';
					for(var i=0;i<m;i++){
	 console.log( 'm:' + m );
resultStr+='<li>'+g[i]+'</li>';
console.log( 'g[i]:' + g[i] );
 					}
					if(m==undefined){
					for(var i=0;i<number;i++){
	resultStr+='<li>'+arr[i]+'</li>';
console.log( 'arr[i]:' +arr[i] );
 					}
									}
               resultStr += '</ol>';
					 console.log( 'resultStr:' + resultStr );
					stack.pop();
				console.log( 'top:' +top );
				
				} else 	if((top=='Disc_List')&&(n=='Disc_List')){
		resultStr +=resultStr[k];
		console.log( 'resultStr:' + resultStr );

														}
				if((top=='Main_List')&&((n!='Main_List')||(k== main_listIndexes.length))){
					resultStr +='</span><ul class="top_page_list">';
                    for(var i=0;i<m;i++){
	 console.log( 'm:' + m );
resultStr+='<li>'+g[i]+'</li>';
console.log( 'g[i]:' + g[i] );
 					}
					if(m==undefined){
					for(var i=0;i<number;i++){
	resultStr+='<li>'+arr[i]+'</li>';
console.log( 'arr[i]:' +arr[i] );
 					}
									}
            resultStr+='</ul>';
             	
					 console.log( 'resultStr:' + resultStr );
					stack.pop();
				console.log( 'top:' +top );
				
				} else 	if((top=='Main_List')&&(n=='Main_List')){
		resultStr +=resultStr[k];
		console.log( 'resultStr:' + resultStr );

														}
				if((top=='None_List')&&((n!='None_List')||(k== none_listIndexes.length))){
					resultStr +='</span><ul class="none_list">';
					for(var i=0;i<m;i++){
	 console.log( 'm:' + m );
resultStr+='<li>'+g[i]+'</li>';
console.log( 'g[i]:' + g[i] );
 					}
					if(m==undefined){
					for(var i=0;i<number;i++){
	resultStr+='<li>'+arr[i]+'</li>';
console.log( 'arr[i]:' +arr[i] );
 					}
									}
			resultStr+= '</ul>';
					 console.log( 'resultStr:' + resultStr );
					stack.pop();
				console.log( 'top:' +top );
				
				} else 	if((top=='None_List')&&(n=='None_List')){
		resultStr +=resultStr[k];
		console.log( 'resultStr:' + resultStr );

														}
					if((top=='Decimal_List')&&((n!='Decimal_List')||(k==decimal_listIndexes.length))){
					resultStr +='</span><ol class="decimal">';
					for(var i=0;i<m;i++){
	 console.log( 'm:' + m );
resultStr+='<li>'+g[i]+'</li>';
console.log( 'g[i]:' + g[i] );
 					}
					if(m==undefined){
					for(var i=0;i<number;i++){
	resultStr+='<li>'+arr[i]+'</li>';
console.log( 'arr[i]:' +arr[i] );
 					}
									}
			resultStr+='</ol>';
					 console.log( 'resultStr:' + resultStr );
					stack.pop();
				console.log( 'top:' +top );
				
				} else 	if((top=='Decimal_List')&&(n=='Decimal_List')){
		resultStr +=resultStr[k];
		console.log( 'resultStr:' + resultStr );

														}
														
													
	return 	resultStr;								
		}
				 
	//----------------------------------------------------------------------------------------------------------------------------------------------------------------
				 
function makeMain_ListStringHtml(sourceStr){
	PurgeRedoSequence();
 var expressionText =  document.getElementById("text").value;
			document.getElementById("text").innerHTML = expressionText.replace(/\n/g, '<br>');
		   textarea=document.getElementById("text");
		   var expression = getSelectiontextarea( document.getElementById("text") );
		    document.getElementById("text").innerHTML = expression.replace(/\n/g, '<br>');
        alert(" makeMain_ListStringHtml");
           var n=prompt("Enter a count of row","");
                 var main_list='<span class=" strong font_size">'+expression+'</span><ul class="top_page_list">';
                 document.getElementById("text").value='';
for(var i=0;i<n;i++){
		var text=prompt("Enter a text for  <li>","");
		 main_list+='<li>'+text+'</li>';
					}
			var Main_ListresultStr =" ";
            Main_ListresultStr = main_list + '</ul>';
             	return Main_ListresultStr;
											}
			function makeTopStringHtml(sourceStr){
				 document.getElementById("text").focus();
		   textarea=document.getElementById("text");
		   var TopresultStr='';
		    var expressionText =  document.getElementById("text").value;
			document.getElementById("text").innerHTML = expressionText.replace(/\n/g, '<br>');
        alert(" makeTopStringHtml");
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
								  TopresultStr = '<!DOCTYPE html>'+
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
		 TopresultStr ='<!DOCTYPE html>'+
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
				'</div></div> <br class="cbt">';
    }
			
           	return TopresultStr;
										}
			function makeHot_TipStringHtml(sourceStr){
		   textarea=document.getElementById("text");
		    var expressionText =  document.getElementById("text").value;
			document.getElementById("text").innerHTML = expressionText.replace(/\n/g, '<br>');
        alert(" makeHot_TipStringHtml");
            var currentSymbolIndex = 0;
			var Hot_TipresultStr =" ";
            var usedSymbols = 0;
            for (var i = 0; i < hot_tipIndexes.length; i++){
                if (currentSymbolIndex<=hot_tipIndexes[i].startPosition){
						Hot_TipresultStr += sourceStr.substring(currentSymbolIndex,hot_tipIndexes[i].startPosition);
						Hot_TipresultStr = '<span>'+Hot_TipresultStr+'</span><div class="border">'+
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
           	return Hot_TipresultStr;
															}
			
			function makeDown_titleStringHtml(sourceStr){
		   textarea=document.getElementById("text");
		    var expressionText =  document.getElementById("text").value;
			document.getElementById("text").innerHTML = expressionText.replace(/\n/g, '<br>');
        alert(" makeDown_titleStringHtml");
            var currentSymbolIndex = 0;
			var Down_titleresultStr =" ";
            var usedSymbols = 0;
            for (var i = 0; i < down_titleIndexes.length; i++){
                if (currentSymbolIndex<=down_titleIndexes[i].startPosition){
						Down_titleresultStr += sourceStr.substring(currentSymbolIndex,down_titleIndexes[i].startPosition);
						Down_titleresultStr =  '<span>'+Down_titleresultStr+'</span><div class="down_title">'+sourceStr.substring(down_titleIndexes[i].startPosition,down_titleIndexes[i].startPosition+down_titleIndexes[i].size)+'</div><span>'+sourceStr.substring(down_titleIndexes[i].startPosition+down_titleIndexes[i].size,sourceStr.length)+'</span>';
																			}
																}
           	return Down_titleresultStr;
															}
			function makeMiddle_TitleStringHtml(sourceStr){
		   textarea=document.getElementById("text");
		    var expressionText =  document.getElementById("text").value;
			document.getElementById("text").innerHTML = expressionText.replace(/\n/g, '<br>');
        alert("makeMiddle_TitleStringHtml");
            var currentSymbolIndex = 0;
			var Middle_TitleresultStr =" ";
            var usedSymbols = 0;
            for (var i = 0; i < middle_titleIndexes.length; i++){
                if (currentSymbolIndex<=middle_titleIndexes[i].startPosition){
					Middle_TitleresultStr += sourceStr.substring(currentSymbolIndex,middle_titleIndexes[i].startPosition);
					Middle_TitleresultStr = '<span>'+Middle_TitleresultStr+'</span><span class="middle_title">'+sourceStr.substring(middle_titleIndexes[i].startPosition,middle_titleIndexes[i].startPosition+middle_titleIndexes[i].size)+'</span><span>'+sourceStr.substring(middle_titleIndexes[i].startPosition+middle_titleIndexes[i].size,sourceStr.length)+'</span>';
																			}
																}
           			
            return Middle_TitleresultStr;
																}
			
			function makeMain_titleStringHtml(sourceStr){
		   textarea=document.getElementById("text");
		    var expressionText =  document.getElementById("text").value;    
			document.getElementById("text").innerHTML = expressionText.replace(/\n/g, '<br>');

        alert("makeMain_titleStringHtml");
            var currentSymbolIndex = 0;
			var Main_titleresultStr =" ";
            var usedSymbols = 0;
            for (var i = 0; i < main_titleIndexes.length; i++){
                if (currentSymbolIndex<main_titleIndexes[i].startPosition){
					Main_titleresultStr += sourceStr.substring(currentSymbolIndex,main_titleIndexes[i].startPosition);
					Main_titleresultStr = '<span>'+Main_titleresultStr+'</span><div class="main_title">'+sourceStr.substring(main_titleIndexes[i].startPosition,main_titleIndexes[i].startPosition+main_titleIndexes[i].size)+'</div><span>'+sourceStr.substring(main_titleIndexes[i].startPosition+main_titleIndexes[i].size,sourceStr.length)+'</span>';
																			}
																}
           			
            return Main_titleresultStr;
															}
			function makeCBTStringHtml(sourceStr){
				alert(" makeCBTStringHtml");
		   textarea=document.getElementById("text");
		    var expressionText=  document.getElementById("text").value; 
            document.getElementById("text").innerHTML = expressionText.replace(/\n/g, '<br>');
            var currentSymbolIndex = 0;
			var CBTresultStr =" ";
            var usedSymbols = 0;
            CBTresultStr = '</span><br class="cbt">';

            return CBTresultStr;
													}

			/*function makeTxtStringHtml(sourceStr){
		   textarea=document.getElementById("text");
		    var expressionText =  document.getElementById("text").value;
			document.getElementById("text").innerHTML = expressionText.replace(/\n/g, '<br>');
        alert("makeTxtStringHtml");
            var currentSymbolIndex = 0;
			var TxtresultStr =" ";
            var usedSymbols = 0;
            for (var i = 0; i < txtIndexes.length; i++){
                if (currentSymbolIndex<=txtIndexes[i].startPosition){
					TxtresultStr += sourceStr.substring(currentSymbolIndex,txtIndexes[i].startPosition);
					TxtresultStr = '<span>'+TxtresultStr+'</span><br><span class="move_left">'+sourceStr.substring(txtIndexes[i].startPosition,txtIndexes[i].startPosition+txtIndexes[i].size)+'</span><span>'+sourceStr.substring(txtIndexes[i].startPosition+txtIndexes[i].size,sourceStr.length)+'</span>';
																	}
														}
           
			return TxtresultStr;
													}*/
			function makeImageStringHtml(sourceStr){
		   textarea=document.getElementById("text");
		     var expressionText = getSelectiontextarea( document.getElementById("text") );
			 document.getElementById("text").innerHTML = expressionText.replace(/\n/g, '<br>');
        alert(" makeImageStringHtml");
           var x=prompt("Enter a name of image","");
			var ImageresultStr =" ";
                ImageresultStr = '<br><img src="img/'+x+'"alt="622">';
                     
           	return ImageresultStr;
														}
			function makeCaptureStringHtml(sourceStr){
		   textarea=document.getElementById("text");
		    var expressionText =  (document.getElementById("text")).value;
			            document.getElementById("text").innerHTML = expressionText.replace(/\n/g, '<br>');
        alert("makeCaptureStringHtml");
            var currentSymbolIndex = 0;
			var CaptureresultStr =" ";
            var usedSymbols = 0;
            for (var i = 0; i < captureIndexes.length; i++){
                if (currentSymbolIndex<=captureIndexes[i].startPosition){
					CaptureresultStr += sourceStr.substring(currentSymbolIndex,captureIndexes[i].startPosition);
					CaptureresultStr ='<span>'+CaptureresultStr+'</span><br><span class="move_left "><span class="strong underline">'+sourceStr.substring(captureIndexes[i].startPosition,captureIndexes[i].startPosition+captureIndexes[i].size)+'</span><span><span>'+sourceStr.substring(captureIndexes[i].startPosition+captureIndexes[i].size,sourceStr.length)+'</span>';
																		}
															}
           
			return CaptureresultStr;
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
             
             textarea=document.getElementById("text");
            document.getElementById("text").focus();
            expressionText =  document.getElementById("text").value;
             document.getElementById("text").innerHTML = expressionText.replace(/\n/g, '<br>');
                var selectionBegin = (textarea.selectionStart < textarea.selectionEnd) ? textarea.selectionStart : textarea.selectionEnd;
                var selectionEnd = (textarea.selectionEnd > textarea.selectionStart) ? textarea.selectionEnd : textarea.selectionStart;
                codeIndexes.push(new UsedSelection(selectionBegin,selectionEnd-selectionBegin));
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
               
			var resultStr=makeString(expressionText);

                document.getElementById("RESULTTEXT").innerText=resultStr;
                document.getElementById("RESULTHTML").innerHTML=resultStr;
                Make();
			}
			
			 function Listing()
            {
            var textarea=document.getElementById("text");
            document.getElementById("text").focus();
            expressionText =  document.getElementById("text").value;
              document.getElementById("text").innerHTML = expressionText.replace(/\n/g, '<br>');
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
                
			var resultStr=makeString(expressionText);

                document.getElementById("RESULTTEXT").innerText=resultStr;
                document.getElementById("RESULTHTML").innerHTML=resultStr;
                Make();
			}
			function Capture()
            {
            
            var textarea=document.getElementById("text");
            document.getElementById("text").focus();
			expressionText =( document.getElementById("text").value ); 
            //expressionText =  document.getElementById("text").value;
           document.getElementById("text").innerHTML = expressionText.replace(/\n/g, '<br>');
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
               
			var resultStr=makeString(expressionText);

                document.getElementById("RESULTTEXT").innerText=resultStr;
                document.getElementById("RESULTHTML").innerHTML=resultStr;
                Make();
			}

			function CBT()
            {
             alert("CBT");  
            
            var textarea=document.getElementById("text");
            document.getElementById("text").focus();
            expressionText =  document.getElementById("text").value;
            document.getElementById("text").innerHTML = expressionText.replace(/\n/g, '<br>');
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
               var resultStr=makeString(expressionText);

                document.getElementById("RESULTTEXT").innerText=resultStr;
                document.getElementById("RESULTHTML").innerHTML=resultStr;
                Make();
			}	
			function Link()
            {
             var textarea=document.getElementById("text");
            document.getElementById("text").focus();
            expressionText =  document.getElementById("text").value;
             document.getElementById("text").innerHTML = expressionText.replace(/\n/g, '<br>');
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
             var resultStr=makeString(expressionText);

                document.getElementById("RESULTTEXT").innerText=resultStr;
                document.getElementById("RESULTHTML").innerHTML=resultStr;
                Make();
			}					
			 function  Main_title()
						{
						
						var textarea=document.getElementById("text");
						document.getElementById("text").focus();
						expressionText =  document.getElementById("text").value;
						 document.getElementById("text").innerHTML = expressionText.replace(/\n/g, '<br>');
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
							 var resultStr=makeString(expressionText);

							document.getElementById("RESULTTEXT").innerText=resultStr;
							document.getElementById("RESULTHTML").innerHTML=resultStr;
							Make();
						}
			function Middle_Title()
            {
            
            var textarea=document.getElementById("text");
            document.getElementById("text").focus();
            expressionText =  document.getElementById("text").value;
             document.getElementById("text").innerHTML = expressionText.replace(/\n/g, '<br>');
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
                  var resultStr=makeString(expressionText);

                document.getElementById("RESULTTEXT").innerText=resultStr;
                document.getElementById("RESULTHTML").innerHTML=resultStr;
                Make();
			}
			function Down_title()
            {
            
            var textarea=document.getElementById("text");
            document.getElementById("text").focus();
            expressionText =  document.getElementById("text").value;
             document.getElementById("text").innerHTML = expressionText.replace(/\n/g, '<br>');
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
                  var resultStr=makeString(expressionText);

                document.getElementById("RESULTTEXT").innerText=resultStr;
                document.getElementById("RESULTHTML").innerHTML=resultStr;
                Make();
			}
			function Red_title()
			{

var textarea=document.getElementById("text");
document.getElementById("text").focus();
expressionText =  document.getElementById("text").value;
 document.getElementById("text").innerHTML = expressionText.replace(/\n/g, '<br>');
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
	  var resultStr=makeString(expressionText);

	document.getElementById("RESULTTEXT").innerText=resultStr;
	document.getElementById("RESULTHTML").innerHTML=resultStr;
	Make();t.getElementById("RESULTHTML").innerHTML=Red_titleresultStr/*Hot_TipresultStr+BoldresultStr+CoderesultStr+ListingresultStr+LinkresultStr+DownPage_titleresultStr+Red_titleresultStr+Small_titleresultStr+Down_titleresultStr+Middle_TitleresultStr+Main_titleresultStr+TxtresultStr+CaptureresultStr/*+CBTresultStr+FooterresultStr+DownresultStr+None_ListresultStr+Decimal_ListresultStr+Disc_ListresultStr+TableresultStr+SmalliconresultStr+Main_ListresultStr+Square_ListresultStr+ImageresultStr*/;
	Make();
}
			function Small_title()
			{
 
var textarea=document.getElementById("text");
document.getElementById("text").focus();
expressionText =  document.getElementById("text").value;
 document.getElementById("text").innerHTML = expressionText.replace(/\n/g, '<br>');
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
	  var resultStr=makeString(expressionText);

	document.getElementById("RESULTTEXT").innerText=resultStr;
	document.getElementById("RESULTHTML").innerHTML=resultStr;
	Make();
}
			function Hot_Tip()
			{
 
var textarea=document.getElementById("text");
document.getElementById("text").focus();
expressionText =  document.getElementById("text").value;
 document.getElementById("text").innerHTML = expressionText.replace(/\n/g, '<br>');
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
	 var resultStr=makeString(expressionText);

	document.getElementById("RESULTTEXT").innerText=resultStr;
	document.getElementById("RESULTHTML").innerHTML=resultStr;
	Make();
}
			function Footer()
			{

var textarea=document.getElementById("text");
document.getElementById("text").focus();
expressionText =  document.getElementById("text").value;
 document.getElementById("text").innerHTML = expressionText.replace(/\n/g, '<br>');
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
	var resultStr=makeString(expressionText);

	document.getElementById("RESULTTEXT").innerText=resultStr;
	document.getElementById("RESULTHTML").innerHTML=resultStr;
	Make();
}
			function Down()
			{
            
            var textarea=document.getElementById("text");
            document.getElementById("text").focus();
            expressionText =  document.getElementById("text").value;
             document.getElementById("text").innerHTML = expressionText.replace(/\n/g, '<br>');
                /*var selectionBegin = (textarea.selectionStart < textarea.selectionEnd) ? textarea.selectionStart : textarea.selectionEnd;
                var selectionEnd = (textarea.selectionEnd > textarea.selectionStart) ? textarea.selectionEnd : textarea.selectionStart;*/
               var resultStr=makeString(expressionText);

                document.getElementById("RESULTTEXT").innerText=resultStr;
                document.getElementById("RESULTHTML").innerHTML=resultStr;
                Make();
			}
			function Top()
            {
            
            var textarea=document.getElementById("text");
            document.getElementById("text").focus();
            expressionText =  document.getElementById("text").value;
             document.getElementById("text").innerHTML = expressionText.replace(/\n/g, '<br>');
                var selectionBegin = (textarea.selectionStart < textarea.selectionEnd) ? textarea.selectionStart : textarea.selectionEnd;
                var selectionEnd = (textarea.selectionEnd > textarea.selectionStart) ? textarea.selectionEnd : textarea.selectionStart;
                var resultStr=makeString(expressionText);

                document.getElementById("RESULTTEXT").innerText=resultStr;
                document.getElementById("RESULTHTML").innerHTML=resultStr;
                Make();
			}	
			function Main_List(x,y)
            {
             
            var textarea=document.getElementById("text");
            document.getElementById("text").focus();
            expressionText =  document.getElementById("text").value;
             document.getElementById("text").innerHTML = expressionText.replace(/\n/g, '<br>');
               var selectionBegin = (textarea.selectionStart < textarea.selectionEnd) ? textarea.selectionStart : textarea.selectionEnd;
                var selectionEnd = (textarea.selectionEnd > textarea.selectionStart) ? textarea.selectionEnd : textarea.selectionStart;
                 main_listIndexes.push(new UsedSelection(selectionBegin,selectionEnd-selectionBegin));
                AggregateSelection( main_listIndexes);
                for (var i = 0; i < main_listIndexes.length; i++){
                    var beginIndex = main_listIndexes[i].startPosition;
                    var endIndex = main_listIndexes[i].endPosition;
															}
               
                if(l!=null){
						l=prompt("Enter a count of row","");	
						number=l;
						console.log( 'l:' + l );
								}
					
					for(var i=0;i<number;i++){
						console.log( 'number:' +number );
						text=prompt("Enter a text for  <li>","");
						arr.push(text);
						console.log( 'arr:' +arr );
											}					
														
					var resultStr=makeString(expressionText,l,arr);

                document.getElementById("RESULTTEXT").innerText=resultStr;
                document.getElementById("RESULTHTML").innerHTML=resultStr;
                Make();
			}	
		
			function None_List(x,y)
            {
              var expressionText =  document.getElementById("text").value;
			document.getElementById("text").innerHTML = expressionText.replace(/\n/g, '<br>');
            var textarea=document.getElementById("text");
            document.getElementById("text").focus();
            var expression = getSelectiontextarea( document.getElementById("text") );
			document.getElementById("text").innerHTML = expression.replace(/\n/g, '<br>');
            var selectionBegin = (textarea.selectionStart < textarea.selectionEnd) ? textarea.selectionStart : textarea.selectionEnd;
                var selectionEnd = (textarea.selectionEnd > textarea.selectionStart) ? textarea.selectionEnd : textarea.selectionStart;
                 none_listIndexes.push(new UsedSelection(selectionBegin,selectionEnd-selectionBegin));
                AggregateSelection( none_listIndexes);
                for (var i = 0; i < none_listIndexes.length; i++){
                    var beginIndex = none_listIndexes[i].startPosition;
                    var endIndex = none_listIndexes[i].endPosition;
															}
                if(l!=null){
						l=prompt("Enter a count of row","");	
						number=l;
						console.log( 'l:' + l );
								}
					
					for(var i=0;i<number;i++){
						console.log( 'number:' +number );
						text=prompt("Enter a text for  <li>","");
						arr.push(text);
						console.log( 'arr:' +arr );
											}					
														
					var resultStr=makeString(expressionText,l,arr);

                document.getElementById("RESULTTEXT").innerText=resultStr;
                document.getElementById("RESULTHTML").innerHTML=resultStr;
                Make();;
			}
			function Decimal_List(x,y)
            {
              var expressionText =  document.getElementById("text").value;
			document.getElementById("text").innerHTML = expressionText.replace(/\n/g, '<br>');
            var textarea=document.getElementById("text");
            document.getElementById("text").focus();
            var expression = getSelectiontextarea( document.getElementById("text") );
            document.getElementById("text").innerHTML = expression.replace(/\n/g, '<br>');
               var selectionBegin = (textarea.selectionStart < textarea.selectionEnd) ? textarea.selectionStart : textarea.selectionEnd;
                var selectionEnd = (textarea.selectionEnd > textarea.selectionStart) ? textarea.selectionEnd : textarea.selectionStart;
                 decimal_listIndexes.push(new UsedSelection(selectionBegin,selectionEnd-selectionBegin));
                AggregateSelection( decimal_listIndexes);
                for (var i = 0; i < decimal_listIndexes.length; i++){
                    var beginIndex = decimal_listIndexes[i].startPosition;
                    var endIndex = decimal_listIndexes[i].endPosition;
															}
               if(l!=null){
						l=prompt("Enter a count of row","");	
						number=l;
						console.log( 'l:' + l );
								}
					
					for(var i=0;i<number;i++){
						console.log( 'number:' +number );
						text=prompt("Enter a text for  <li>","");
						arr.push(text);
						console.log( 'arr:' +arr );
											}					
														
					var resultStr=makeString(expressionText,l,arr);

                document.getElementById("RESULTTEXT").innerText=resultStr;
                document.getElementById("RESULTHTML").innerHTML=resultStr;
                Make();
			}	
	
			function Table()
            {
            
            var textarea=document.getElementById("text");
            document.getElementById("text").focus();
             expressionText =  document.getElementById("text").value;
            document.getElementById("text").innerHTML = expressionText.replace(/\n/g, '<br>');
                var selectionBegin = (textarea.selectionStart < textarea.selectionEnd) ? textarea.selectionStart : textarea.selectionEnd;
                var selectionEnd = (textarea.selectionEnd > textarea.selectionStart) ? textarea.selectionEnd : textarea.selectionStart;
               var resultStr=makeString(expressionText);

                document.getElementById("RESULTTEXT").innerText=resultStr;
                document.getElementById("RESULTHTML").innerHTML=resultStr;
                Make();
			}
			function Smallicon()
            {
            
            var textarea=document.getElementById("text");
            document.getElementById("text").focus();
            var expressionText = getSelectiontextarea( document.getElementById("text") );
			 document.getElementById("text").innerHTML = expressionText.replace(/\n/g, '<br>');
            
                var selectionBegin = (textarea.selectionStart < textarea.selectionEnd) ? textarea.selectionStart : textarea.selectionEnd;
                var selectionEnd = (textarea.selectionEnd > textarea.selectionStart) ? textarea.selectionEnd : textarea.selectionStart;
                 var resultStr=makeString(expressionText);

                document.getElementById("RESULTTEXT").innerText=resultStr;
                document.getElementById("RESULTHTML").innerHTML=resultStr;
                Make();
			}  
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
function Delete(){
PurgeRedoSequence();
document.getElementById("RESULTTEXT").innerHTML = '';
document.getElementById("RESULTHTML").innerHTML = '';
document.getElementById("RESULTTEXT").id = "RESULTTEXT";
document.getElementById("RESULTHTML").id = "RESULTHTML";
operation(document.getElementById("RESULTHTML").innerHTML, document.getElementById("RESULTTEXT").innerHTML);
					}
 
var undo = document.getElementById('undo');
var redo = document.getElementById('redo');
 
function Redo() {
undo = document.getElementById('undo');
redo = document.getElementById('redo');
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
undo = document.getElementById('undo');
redo = document.getElementById('redo');
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
			function Bold()
            {
             
             textarea=document.getElementById("text");
            document.getElementById("text").focus();
			expressionText =( document.getElementById("text").value ); 
             //expressionText =  document.getElementById("text").value;
            document.getElementById("text").innerHTML = expressionText.replace(/\n/g, '<br>');
                var selectionBegin = (textarea.selectionStart < textarea.selectionEnd) ? textarea.selectionStart : textarea.selectionEnd;
                var selectionEnd = (textarea.selectionEnd > textarea.selectionStart) ? textarea.selectionEnd : textarea.selectionStart;
                boldIndexes.push(new UsedSelection(selectionBegin,selectionEnd-selectionBegin));
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
			 var resultStr=makeString(expressionText);

                document.getElementById("RESULTTEXT").innerText=resultStr;
                document.getElementById("RESULTHTML").innerHTML=resultStr;
                Make();
			}
			function Image()
            {
            
            var textarea=document.getElementById("text");
            document.getElementById("text").focus();
            var expressionText = getSelectiontextarea( document.getElementById("text") );
			 document.getElementById("text").innerHTML = expressionText.replace(/\n/g, '<br>');
            
                var selectionBegin = (textarea.selectionStart < textarea.selectionEnd) ? textarea.selectionStart : textarea.selectionEnd;
                var selectionEnd = (textarea.selectionEnd > textarea.selectionStart) ? textarea.selectionEnd : textarea.selectionStart;
                 var ImageresultStr = makeImageStringHtml(expressionText);							
			/*var Square_ListresultStr = makeSquare_ListStringHtml(expressionText);
			var CaptureresultStr = makeCaptureStringHtml(expressionText);
			var TxtresultStr = makeTxtStringHtml(expressionText);
			var CBTresultStr = makeCBTStringHtml(expressionText);
			var Main_titleresultStr = makeMain_titleStringHtml(expressionText);
			var Middle_TitleresultStr = makeMiddle_TitleStringHtml(expressionText);									
			var Down_titleresultStr = makeDown_titleStringHtml(expressionText);
			var Hot_TipresultStr = makeHot_TipStringHtml(expressionText);
			var Main_ListresultStr = makeMain_ListStringHtml(expressionText);
			var SmalliconresultStr = makeSmalliconStringHtml(expressionText);
			var TableresultStr = makeTableStringHtml(expressionText);
			var Disc_ListresultStr = makeDisc_ListStringHtml(expressionText);										
			var Decimal_ListresultStr = makeDecimal_ListStringHtml(expressionText);
			var None_ListresultStr = makeNone_ListStringHtml(expressionText);
			var DownresultStr = makeDownStringHtml(expressionText);
			var FooterresultStr = makeFooterStringHtml(expressionText);
			var Small_titleresultStr = makeSmall_titleStringHtml(expressionText);	
			var Red_titleresultStr = makeRed_titleStringHtml(expressionText);										
			var DownPage_titleresultStr = makeDownPage_titleStringHtml(expressionText);								
			var LinkresultStr = makeLinkStringHtml(expressionText);
			var ListingresultStr = makeListingStringHtml(expressionText);										
			var BoldresultStr = makeBoldStringHtml(expressionText);
			var CoderesultStr=makeString(expressionText);*/
                document.getElementById("RESULTTEXT").innerText=/*BoldresultStr+CoderesultStr+ListingresultStr+LinkresultStr+DownPage_titleresultStr+Red_titleresultStr+Small_titleresultStr+FooterresultStr+DownresultStr+None_ListresultStr+Decimal_ListresultStr+Disc_ListresultStr+TableresultStr+SmalliconresultStr+Main_ListresultStr+Hot_TipresultStr+Down_titleresultStr+Middle_TitleresultStr+Main_titleresultStr+CBTresultStr+TxtresultStr+CaptureresultStr+Square_ListresultStr+*/ImageresultStr;
                document.getElementById("RESULTHTML").innerHTML=/*BoldresultStr+CoderesultStr+ListingresultStr+LinkresultStr+DownPage_titleresultStr+Red_titleresultStr+Small_titleresultStr+FooterresultStr+DownresultStr+None_ListresultStr+Decimal_ListresultStr+Disc_ListresultStr+TableresultStr+SmalliconresultStr+Main_ListresultStr+Hot_TipresultStr+Down_titleresultStr+Middle_TitleresultStr+Main_titleresultStr+CBTresultStr+TxtresultStr+CaptureresultStr+Square_ListresultStr+*/ImageresultStr;

                Make();
			}  
			function DownPage_title()
            {
             
            var textarea=document.getElementById("text");
            document.getElementById("text").focus();
            expressionText =  document.getElementById("text").value;
            document.getElementById("text").innerHTML = expressionText.replace(/\n/g, '<br>');
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
                   var resultStr=makeString(expressionText);

                document.getElementById("RESULTTEXT").innerText=resultStr;
                document.getElementById("RESULTHTML").innerHTML=resultStr;
                Make();
			}
			function Txt()
			{
			alert("Txt");
			
            var textarea=document.getElementById("text");
            document.getElementById("text").focus();
            expressionText =  document.getElementById("text").value;
             document.getElementById("text").innerHTML = expressionText.replace(/\n/g, '<br>');
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
                 var resultStr=makeString(expressionText);

                document.getElementById("RESULTTEXT").innerText=resultStr;
                document.getElementById("RESULTHTML").innerHTML=resultStr;
                Make();
 }

    function myFunction() {
   var x = document.getElementById("RESULTTEXT");
    var y=document.getElementById("RESULTHTML");
   x.innerHTML=y.innerHTML;
                        }  
						/*var AggregateSelection = function(sourceArray){
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
	 
		   
												}*/
    $( document ).ready(function() {
    					
 //  11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111 
 
        function ChangeSelection(sourceStr){
                            alert("ChangeSelection");
 
                 selectiontxt = (textarea.value).substring(textarea.selectionStart, textarea.selectionEnd);
               expressionText =( document.getElementById("text").value );
			    document.getElementById("text").innerHTML = expressionText.replace(/\n/g, '<br>');
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
 resultStr=makeString(expressionText);
 console.log('resultStr:'+makeString(expressionText)); 
resultStr = makeString(expressionText);
 console.log('resultStr:'+makeString(expressionText));   
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
   
  
   $('#text').keyup(function onkeypressFunction()
   {
         //alert("onkeypressFunction");
		 expressionText =( document.getElementById("text").value );
		  document.getElementById("text").innerHTML = expressionText.replace(/\n/g, '<br>');
         var pos=caretPos(expressionText);
                            
            for (var i = 0;i < txtIndexes.length; i++){
                 if(typeof txtIndexes[i] != "undefined"){
                    var startPos = txtIndexes[i].startPosition;
                    var size = txtIndexes[i].size;
                  
                     if(pos<=startPos){
						startPos=startPos+1;
										}
       else
			if((pos>startPos)&&(pos<startPos+size)){
				size += 1;
														}
       txtIndexes[i].startPosition = startPos;
       txtIndexes[i].size = size;
																}
				   resultStr=makeString(expressionText)
				   console.log('resultStr:'+makeString(expressionText)); 
			document.getElementById("RESULTTEXT").innerText=resultStr;
document.getElementById("RESULTHTML").innerHTML=resultStr;	   
															}
			console.log('Txt indexes:'+JSON.stringify(txtIndexes));   
 
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
			resultStr = makeString(expressionText);
	   document.getElementById("RESULTTEXT").innerText=resultStr;
document.getElementById("RESULTHTML").innerHTML=resultStr;
	    console.log('resultStr:'+makeString(expressionText));
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
			resultStr = makeString(expressionText);
	   document.getElementById("RESULTTEXT").innerText=resultStr;
document.getElementById("RESULTHTML").innerHTML=resultStr;
	    console.log('resultStr:'+makeString(expressionText));
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
			resultStr = makeString(expressionText);
	   document.getElementById("RESULTTEXT").innerText=resultStr;
document.getElementById("RESULTHTML").innerHTML=resultStr;
	    console.log('resultStr:'+makeString(expressionText));
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
			resultStr = makeString(expressionText);
	   document.getElementById("RESULTTEXT").innerText=resultStr;
document.getElementById("RESULTHTML").innerHTML=resultStr;
	    console.log('resultStr:'+makeString(expressionText));
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
			resultStr = makeString(expressionText);
	   document.getElementById("RESULTTEXT").innerText=resultStr;
document.getElementById("RESULTHTML").innerHTML=resultStr;
	    console.log('resultStr:'+makeString(expressionText));
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
			resultStr = makeString(expressionText);
	   document.getElementById("RESULTTEXT").innerText=resultStr;
document.getElementById("RESULTHTML").innerHTML=resultStr;
	    console.log('resultStr:'+makeString(expressionText));
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
			resultStr = makeString(expressionText);
	   document.getElementById("RESULTTEXT").innerText=resultStr;
document.getElementById("RESULTHTML").innerHTML=resultStr;
	    console.log('resultStr:'+makeString(expressionText));
			            }
             console.log('DownPage_title indexes:'+JSON.stringify(downpage_titleIndexes));
			 /*for (var t = 0;t < footerIndexes.length; t++){
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
             console.log('Footer indexes:'+JSON.stringify(footerIndexes));*/
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
			resultStr = makeString(expressionText);
	   document.getElementById("RESULTTEXT").innerText=resultStr;
document.getElementById("RESULTHTML").innerHTML=resultStr;
	    console.log('resultStr:'+makeString(expressionText));
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
			resultStr = makeString(expressionText);
	   document.getElementById("RESULTTEXT").innerText=resultStr;
document.getElementById("RESULTHTML").innerHTML=resultStr;
	    console.log('resultStr:'+makeString(expressionText));
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
			resultStr = makeString(expressionText);
	   document.getElementById("RESULTTEXT").innerText=resultStr;
document.getElementById("RESULTHTML").innerHTML=resultStr;
	    console.log('resultStr:'+makeString(expressionText));
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
       boldIndexes[j].startPosition =startPos;
       boldIndexes[j].size = size;
															}
			resultStr = makeString(expressionText);
	   document.getElementById("RESULTTEXT").innerText=resultStr;
document.getElementById("RESULTHTML").innerHTML=resultStr;
	    console.log('resultStr:'+makeString(expressionText));
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
			CoderesultStr = makeString(expressionText);
			resultStr = makeString(expressionText);
			if(codeIndexes.startPosition>boldIndexes.startPosition){
	   document.getElementById("RESULTTEXT").innerText=CoderesultStr+resultStr;
document.getElementById("RESULTHTML").innerHTML=CoderesultStr+resultStr;
	    console.log('resultStr:'+makeString(expressionText));
			}
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
			resultStr = makeString(expressionText);
	   document.getElementById("RESULTTEXT").innerText=resultStr;
document.getElementById("RESULTHTML").innerHTML=resultStr;
	    console.log('resultStr:'+makeString(expressionText));
																}
             console.log('Capture indexes:'+JSON.stringify(captureIndexes));
			for (var i = 0;i < square_listIndexes.length; i++){
                 if(typeof square_listIndexes[i] != "undefined"){
                    var startPos = square_listIndexes[i].startPosition;
                    var size = square_listIndexes[i].size;
                  
                     if(pos<=startPos){
						startPos=startPos+1;
										}
       else
			if((pos>startPos)&&(pos<startPos+size)){
				size += 1;
														}
       square_listIndexes[i].startPosition = startPos;
       square_listIndexes[i].size = size;
																}
				   resultStr=makeString(expressionText)
				   console.log('resultStr:'+makeString(expressionText)); 
			document.getElementById("RESULTTEXT").innerText=resultStr;
document.getElementById("RESULTHTML").innerHTML=resultStr;	   
															}
			console.log('square_indexes:'+JSON.stringify(square_listIndexes));  
			for(var i = 0;i < disc_listIndexes.length; i++){
                 if(typeof disc_listIndexes[i] != "undefined"){
                    var startPos = disc_listIndexes[i].startPosition;
                    var size = disc_listIndexes[i].size;
                  
                     if(pos<=startPos){
						startPos=startPos+1;
										}
       else
			if((pos>startPos)&&(pos<startPos+size)){
				size += 1;
														}
       disc_listIndexes[i].startPosition = startPos;
       disc_listIndexes[i].size = size;
																}
				   resultStr=makeString(expressionText)
				   console.log('resultStr:'+makeString(expressionText)); 
			document.getElementById("RESULTTEXT").innerText=resultStr;
document.getElementById("RESULTHTML").innerHTML=resultStr;	   
															}
			console.log('disc_listindexes:'+JSON.stringify(disc_listIndexes));  
			for(var i = 0;i <  main_listIndexes.length; i++){
                 if(typeof  main_listIndexes[i] != "undefined"){
                    var startPos =  main_listIndexes[i].startPosition;
                    var size =  main_listIndexes[i].size;
                  
                     if(pos<=startPos){
						startPos=startPos+1;
										}
       else
			if((pos>startPos)&&(pos<startPos+size)){
				size += 1;
														}
        main_listIndexes[i].startPosition = startPos;
        main_listIndexes[i].size = size;
																}
				   resultStr=makeString(expressionText)
				   console.log('resultStr:'+makeString(expressionText)); 
			document.getElementById("RESULTTEXT").innerText=resultStr;
document.getElementById("RESULTHTML").innerHTML=resultStr;	   
															}
			console.log('main_listindexes:'+JSON.stringify( main_listIndexes));  
			for(var i = 0;i <  none_listIndexes.length; i++){
                 if(typeof  none_listIndexes[i] != "undefined"){
                    var startPos =  none_listIndexes[i].startPosition;
                    var size =  none_listIndexes[i].size;
                  
                     if(pos<=startPos){
						startPos=startPos+1;
										}
       else
			if((pos>startPos)&&(pos<startPos+size)){
				size += 1;
														}
        none_listIndexes[i].startPosition = startPos;
        none_listIndexes[i].size = size;
																}
				   resultStr=makeString(expressionText)
				   console.log('resultStr:'+makeString(expressionText)); 
			document.getElementById("RESULTTEXT").innerText=resultStr;
document.getElementById("RESULTHTML").innerHTML=resultStr;	   
															}
			console.log('none_listindexes:'+JSON.stringify( none_listIndexes));  
			for(var i = 0;i < decimal_listIndexes.length; i++){
                 if(typeof decimal_listIndexes[i] != "undefined"){
                    var startPos = decimal_listIndexes[i].startPosition;
                    var size = decimal_listIndexes[i].size;
                  
                     if(pos<=startPos){
						startPos=startPos+1;
										}
       else
			if((pos>startPos)&&(pos<startPos+size)){
				size += 1;
														}
       decimal_listIndexes[i].startPosition = startPos;
       decimal_listIndexes[i].size = size;
																}
				   resultStr=makeString(expressionText)
				   console.log('resultStr:'+makeString(expressionText)); 
			document.getElementById("RESULTTEXT").innerText=resultStr;
document.getElementById("RESULTHTML").innerHTML=resultStr;	   
															}
			console.log('decimal_listindexes:'+JSON.stringify(decimal_listIndexes));  
  
  });  
       
    Object.prototype.swap = function(a,b) { var tmp = this[a]; this[a] = this[b]; this[b] = tmp; }
   

      var SelectionPosition = function(startPos,endPos){
        this.startPosition = startPos;
        this.endPosition = endPos;
														}   
     
     
 

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 
 


 
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
                             
       
    });