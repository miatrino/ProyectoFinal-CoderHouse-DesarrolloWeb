window.addEventListener('load', function(){
	new Glider(document.querySelector('.carousel__lista1'), {
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: '.carousel__indicadores1',
		arrows: {
			prev: '.carousel__anterior1',
			next: '.carousel__siguiente1'
		},
		responsive: [
			{
			  // screens greater than >= 775px
			  breakpoint: 450,
			  settings: {
				// Set to `auto` and provide item width to adjust to viewport
				slidesToShow: 2,
				slidesToScroll: 2
			  }
			},{
			  // screens greater than >= 1024px
			  breakpoint: 800,
			  settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				
			  }
			}
		]
	});
});

window.addEventListener('load', function(){
	new Glider(document.querySelector('.carousel__lista2'), {
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: '.carousel__indicadores2',
		arrows: {
			prev: '.carousel__anterior2',
			next: '.carousel__siguiente2'
		},
		responsive: [
			{
			  // screens greater than >= 775px
			  breakpoint: 450,
			  settings: {
				// Set to `auto` and provide item width to adjust to viewport
				slidesToShow: 2,
				slidesToScroll: 2
			  }
			},{
			  // screens greater than >= 1024px
			  breakpoint: 800,
			  settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				
			  }
			}
		]
	});
});

window.addEventListener('load', function(){
	new Glider(document.querySelector('.carousel__lista3'), {
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: '.carousel__indicadores3',
		arrows: {
			prev: '.carousel__anterior3',
			next: '.carousel__siguiente3'
		},
		responsive: [
			{
			  // screens greater than >= 775px
			  breakpoint: 450,
			  settings: {
				// Set to `auto` and provide item width to adjust to viewport
				slidesToShow: 2,
				slidesToScroll: 2
			  }
			},{
			  // screens greater than >= 1024px
			  breakpoint: 800,
			  settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				
			  }
			}
		]
	});
});