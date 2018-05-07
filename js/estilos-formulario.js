
		$( document ).ready(function() {

			// En esta parte cambias las propiedades del color
			var ColorFondo= "#e6252c"
			var ColorLetra ="white"
			var CambiarImagendeFondo = "url(img/fondo-formulario.jpg)"
			var CambiarImagendeFondoMobile = "url(img/logo-formulario-mobile.png)"

			var CambiarLogo ="url(img/logo-formulario.png)"

			//Propiedades del boton
			var ColorFondoBoton= "black"
			var ColorHoverFondoBoton= "white"
			var ColorTextoBoton ="white"
			var ColorTextoBotonHover ="black"


			colorear();

				function colorear(){
					
				  	$('.datos-formulario').css('background-color',ColorFondo);
					$('.boton').css('background-color',ColorFondoBoton);
					$('.boton').css('color',ColorTextoBoton);
				  	$('.datos-formulario').css('color',ColorLetra);
				  	$('.imagenmobile').css('background',CambiarImagendeFondoMobile);
					$('.imagenmobile').css('background-size','cover');
					$('.contenedor-formulario').css('background',CambiarImagendeFondo);
					$('.contenedor-formulario').css('background-size','cover');
					$('.logo').css('background-image',CambiarLogo);
					$('.logo').css('background-size','70%');
					$('.logo').css('background-position','center');
					$('.logo').css('background-repeat','no-repeat');

				  	$('.boton').hover(function(){
				  		$(this).css('background-color',ColorHoverFondoBoton);
				  		$(this).css('color',ColorTextoBotonHover);
						return false
				  	})

				  	$('.boton').mouseout(function(){
				  		$(this).css('background-color',ColorFondoBoton);
				  		$(this).css('color',ColorTextoBoton);
				  		return false
				  	})
				  }
	
				});