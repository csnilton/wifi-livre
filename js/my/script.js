$(document).ready(function(){

	var tamanhoContainer = $('.container-height #validacao').height();
	var tamanhoGeral = $('.container-height').height();


	$('.container-height #validacao').css({
		"margin-top": ((tamanhoGeral / 2) - (tamanhoContainer / 2)) + "px",
	});


	$('#modal .modal-dialog .modal-body').css({
		"height": (0.644444444 * tamanhoGeral) + "px",
	});


	var tamanhoBodyModal = $('#modal .modal-dialog .modal-body').height(); 
	var bottomBodyModal = $('#modal .modal-dialog .modal-body').offset().top + tamanhoBodyModal;

	alert(tamanhoBodyModal);

	$('#modal .modal-dialog .modal-body').scroll(function(){

		if($(this).scrollTop() > bottomBodyModal) $('#modal .modal-dialog .modal-footer #concordo').removeClass('disabled');
	});
	
});