$(document)
  .ready(function() {
    $('.ui.sidebar')
      .sidebar('attach events', '.launch.button')
    ;
    $('.filter.menu .item')
      .tab({
        history: false,
    	context: '#menu-one'
    	})
    ;    
    $('.secondary.menu .item')
      .tab({
        history: false,
    	context: '#menu-two'
      	})
    ;    
	$('.ui.about.modal')
	  .modal()
	;




    var validationRules = {
        url: {
          identifier  : 'url',
          rules: [
            {
              type   : 'empty',
              prompt : 'Please enter any URL'
            },
            {
              type   : 'url',
              prompt : 'Please enter a valid URL'
            }
          ]
        }
      }
    ;

    $('.ui.dropdown')
      .dropdown({
        on: 'hover'
      })
    ;
    

    $('.ui.form')
      .form(validationRules, {
        inline: true,
        on: 'blur'
      })
    ;

    $('.ui.addnew.form')
      .form(validationRules, {
        inline: true,
        on: 'blur'
      })
    ;


    $('.masthead .information')
      .transition('scale in')
    ;

    $('.about').click(function(){
        $('.ui.about.modal')
  			.modal('show')
		;
    });




	$('.extract').load(function(){
	   var w =    $(this).width();
	   var h =    $(this).height();
	   if(w < 150)
	   		$(this).remove();	
	}).error(function (){
	   $(this).remove();//remove image if it fails to load// or what ever u want
	});





  })
;