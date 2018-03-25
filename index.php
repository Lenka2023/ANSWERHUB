<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8" name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="css/style.css"type="text/css"/>
        <script type="text/javascript" src="js/jquery-1.12.2.min.js"></script>
        <script type="text/javascript" src="js/jquery.js"></script>
        <script type="text/javascript" src="js/script.js"></script>
        <!--[if lt IE 9]>
        <script>
            var e = ("article,aside,figcaption,figure,footer,header,hgroup,nav,section,time").split(',');
            for (var i = 0; i < e.length; i++) {
              document.createElement(e[i]);
            }
        </script>
        <![endif]-->
    </head>
    <body>
        <div class="page_cont one">
            <br class="cbt">
            <div class="edit_cont">
                <div class="middle">
                   
                                        <button onclick="Main_List()"> Main List</button>
                                        <button onclick="Square_List()">Square List</button>
                                        <button onclick="Decimal_List()">Decimal List</button>
                                        <button onclick="Disc_List()">Disc List</button>
                                        <button onclick="None_List()">None List</button>
                                        <button onclick="Red_title()"> Red title</button>
                                        <button onclick="Middle_Title()">Middle Title</button>
                                        <button onclick="Down_title()">Down title</button>
                                        <button onclick="DownPage_title()">DownPage title</button>
                                        <button onclick="Small_title()">Small title</button>
                                        <button onclick="Capture()">Capture</button>
                                        <button onclick="Hot_Tip()">Hot Tip</button>
                                        <button onclick="Code()">Code</button>
                                        <button onclick="Smallicon()">SmallIcon</button>
                                        <button onclick="Table()">Table</button>
                                        <button onclick="Link()">Link</button>
                                        <button onclick="Txt()">Text</button>
                                        <button onclick="CBT()">CBT</button>
                                        <button onclick="Image()">Image</button>
                                        <button onclick="Listing()">Listing</button>
                                        <button onclick="Bold()">Bold</button>
                                        <button onclick="Delete()">Delete</button>
                                        <button onclick="Top()">TopPage</button>
                                        <button onclick="Down()">DownPage</button>
                                        <button onclick="Redo()" id='redo' disabled>Redo</button>
                                        <button onclick="Undo()" id='undo' disabled>Undo</button>
                                        <p><textarea id="text"  name="text"></textarea></p>
                                    <div id="area" class="area">
                                    <span id="RESULTHTML" onkeypress="myFunction();" onclick="getCaretPosition()" onkeypress="ChangeSelection"></span>
                                   
                                    </div>
									
									<button onclick="Send_to_DB()"> Send_to_DB</button>
									<form action="#" method="POST">
	page:<input type="text" name="page" id="RESULSERVER"><br>
	<input type="submit">
	</form>
	<?php
$db=new mysqli('localhost','mysql','mysql',"Pages");
if(mysqli_connect_errno()){
	printf("Error connect to DB:%S\n",mysqli_error($db));
	exit();
	}
	if(!empty($_POST['page'])){print_r($_POST['page']);}
	if(isset($_POST['page'])&&!empty($_POST['page'])){
		$page=(string)$_POST['page'];
$query = "INSERT INTO Pages(text) VALUES ('$page')";
mysqli_query($db, $query);
	}
	$filename ='file.html';
$file=fopen($filename,"a");
if(!file){
	echo("Ошибка открытия файла");
}
fwrite($file, $page);
var_dump($file);
	
	fclose($file);
?>
                </div>
            </div>
        </div>
<div id="result">
        <span id="RESULTTEXT"></span>
        </div>
    <script>
   </script>  
    </body>
</html>