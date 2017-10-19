<?php

if(isset($_POST['asunto']) && !empty($_POST['asunto']) && 
	isset($_POST['mensaje']) && !empty($_POST['mensaje']))
{

	$destino = "kevinvaldes3@gmail.com";
	$desde   = "From:" . "Codigophp";
	$asunto  = $_POST['asunto'];
	$mensaje = $_POST['mensaje'];
	mail($destino, $asunto, $mensaje,$desde);

	  echo "Correo enviado...";
}
else{

     echo "Problema al Enviar";
}
?>