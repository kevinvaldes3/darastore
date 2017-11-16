$(document).on("ready",main);

function main () {
	console.log("ESTOY EN MAIN slideshow");
$("body").append("<div id='previewSlideshow'><div id='imagen'><img src='' width='300' height='400'/><div id='descripcion'></div><div id='compra'>Para comprar llama</div><div id='cerrar'>Cerrar</div></div></div>");	
/*<a  href='tel:+573143991115' target='_blank' id='wa'  >Whatsapp</a*/
$("#slideshow img").on("click",abrirImagen);
console.log("ESTOY DESPUES DE abrirImagen");
$("#previewSlideshow #cerrar").on("click",cerrarImagen);
	
	
	
}

function abrirImagen () {
	console.log("ESTOY EN abrirImagen slideshow");
	$("#previewSlideshow").fadeIn();
	$("#previewSlideshow img").attr("src","img/img1.jpg");
	$("#previewSlideshow #descripcion").text("Prenda perfecta para los amantes de la moda, es decir, tu. $50.00");
	$("#previewSlideshow #compra").on("click",comprar);
 }

function cerrarImagen () {
	$("#previewSlideshow").fadeOut();
}

function comprar () {
	$("#previewSlideshow img").attr("src","img/numero.png");

}


