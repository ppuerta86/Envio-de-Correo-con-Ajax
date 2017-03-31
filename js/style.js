 $(document).ready(function() {
     
   

	      // Show or hide the sticky footer button
     //Barra de Progreso en Nosotros
     /***************CSS3**********************/
    var cssb = 0;
      var idItervalccs = setInterval(function(){
        // Aumento en 10 el progeso
        cssb ++;
        $('#css-progreso').css('width', cssb + '%');
       
      //Si llegó a 100 elimino el interval
        if(cssb == 90){
       clearInterval(idItervalccs);
      }
      },100);
     
     /******************HTML5**********************/
         var htmlb = 0;
      var idItervalhtml = setInterval(function(){
        // Aumento en 10 el progeso
        htmlb ++;
        $('#html-progreso').css('width', htmlb + '%');
       
      //Si llegó a 100 elimino el interval
        if(htmlb == 90){
       clearInterval(idItervalhtml);
      }
      },100);
          /******************js**********************/
         var jsb = 0;
      var idItervaljs = setInterval(function(){
        // Aumento en 10 el progeso
        jsb ++;
        $('#js-progreso').css('width', jsb + '%');
       
      //Si llegó a 100 elimino el interval
        if(htmlb == 55){
       clearInterval(idItervaljs);
      }
      },100);
     
              /******************php**********************/
         var phpb = 0;
      var idItervalphp = setInterval(function(){
        // Aumento en 10 el progeso
        phpb ++;
        $('#php-progreso').css('width', phpb + '%');
       
      //Si llegó a 100 elimino el interval
        if(phpb == 65){
       clearInterval(idItervalphp);
      }
      },100);
     
              /******************mysql**********************/
         var mysqlb = 0;
      var idItervalmysql = setInterval(function(){
        // Aumento en 10 el progeso
        mysqlb ++;
        $('#mysql-progreso').css('width', mysqlb + '%');
       
      //Si llegó a 100 elimino el interval
        if(mysqlb == 80){
       clearInterval(idItervalmysql);
      }
      },100);
     
                /******************wordpress**********************/
         var wordpressb = 0;
      var idItervalwordpress = setInterval(function(){
        // Aumento en 10 el progeso
        wordpressb ++;
        $('#wordpress-progreso').css('width', wordpressb + '%');
       
      //Si llegó a 100 elimino el interval
        if(wordpressb == 70){
       clearInterval(idItervalwordpress);
      }
      },100);
     
     
                 /******************photoshop**********************/
         var photoshopb = 0;
      var idItervalphotoshop = setInterval(function(){
        // Aumento en 10 el progeso
        photoshopb ++;
        $('#photoshop-progreso').css('width', photoshopb + '%');
       
      //Si llegó a 100 elimino el interval
        if(photoshopb == 100){
       clearInterval(idItervalphotoshop);
      }
      },100);
     
                      /******************ilustrator**********************/
         var ilustratorb = 0;
      var idItervalilustrator = setInterval(function(){
        // Aumento en 10 el progeso
        ilustratorb ++;
        $('#ilustrator-progreso').css('width', ilustratorb + '%');
       
      //Si llegó a 100 elimino el interval
        if(ilustratorb == 95){
       clearInterval(idItervalilustrator);
      }
      },100);
     
                          /******************after**********************/
         var afterb = 0;
      var idItervalafter = setInterval(function(){
        // Aumento en 10 el progeso
        afterb ++;
        $('#after-progreso').css('width', afterb + '%');
       
      //Si llegó a 100 elimino el interval
        if(afterb == 40){
       clearInterval(idItervalafter);
      }
      },100);
     
                           /******************indesing**********************/
         var indesingb = 0;
      var idItervalindesing = setInterval(function(){
        // Aumento en 10 el progeso
        indesingb ++;
        $('#indesing-progreso').css('width', indesingb + '%');
       
      //Si llegó a 100 elimino el interval
        if(indesingb == 95){
       clearInterval(idItervalindesing);
      }
      },100);
     
     
                                /******************corel**********************/
         var corelb = 0;
      var idItervalcorel = setInterval(function(){
        // Aumento en 10 el progeso
        corelb ++;
        $('#corel-progreso').css('width', corelb + '%');
       
      //Si llegó a 100 elimino el interval
        if(corelb == 100){
       clearInterval(idItervalcorel);
      }
      },100);
     //Barra de Progreso en Nosotros fin


	      $(window).scroll(function() {

	        if ($(this).scrollTop() > 100) {

	          $('.go-top').fadeIn(100);

	        } else {

	          $('.go-top').fadeOut(100);

	        }
              
              
              
              if ($(this).scrollTop() > 140) { 
              $(".menu").attr("id","menu");
	        } else {   	         
 $(".menu").removeAttr("id","menu");
	        }
              
              
              
               if ($(this).scrollTop() > 140) { 
              $(".titulo-necesitas-web").attr("id","titulo-necesitas-web");
               $(".parrafo-necesitas-web").attr("id","parrafo-necesitas-web");    
                   
	        } else {   	         
 $(".titulo-necesitas-web").removeAttr("id","titulo-necesitas-web");
                $(".parrafo-necesitas-web").removeAttr("id","parrafo-necesitas-web");
	        }
                if ($(this).scrollTop() > 290) { 
              $(".titulo-necesitas-web1").attr("id","titulo-necesitas-web");
               $(".parrafo-necesitas-web1").attr("id","parrafo-necesitas-web");    
                   
	        } else {   	         
 $(".titulo-necesitas-web1").removeAttr("id","titulo-necesitas-web");
                $(".parrafo-necesitas-web1").removeAttr("id","parrafo-necesitas-web");
	        }  
              
                if ($(this).scrollTop() > 560) { 
              $(".titulo-necesitas-web2").attr("id","titulo-necesitas-web");
               $(".parrafo-necesitas-web2").attr("id","parrafo-necesitas-web");    
                   
	        } else {   	         
 $(".titulo-necesitas-web2").removeAttr("id","titulo-necesitas-web");
                $(".parrafo-necesitas-web2").removeAttr("id","parrafo-necesitas-web");
	        }  
             
                         if ($(this).scrollTop() > 670) { 
              $(".titulo-necesitas-web3").attr("id","titulo-necesitas-web");
               $(".parrafo-necesitas-web3").attr("id","parrafo-necesitas-web");    
                   
	        } else {   	         
 $(".titulo-necesitas-web3").removeAttr("id","titulo-necesitas-web");
                $(".parrafo-necesitas-web3").removeAttr("id","parrafo-necesitas-web");
	        }  
              
                              if ($(this).scrollTop() > 840) { 
              $(".titulo-necesitas-web4").attr("id","titulo-necesitas-web");
               $(".parrafo-necesitas-web4").attr("id","parrafo-necesitas-web");    
                   
	        } else {   	         
 $(".titulo-necesitas-web4").removeAttr("id","titulo-necesitas-web");
                $(".parrafo-necesitas-web4").removeAttr("id","parrafo-necesitas-web");
	        }  
              
                                 if ($(this).scrollTop() > 960) { 
              $(".titulo-necesitas-web5").attr("id","titulo-necesitas-web");
               $(".parrafo-necesitas-web5").attr("id","parrafo-necesitas-web");    
                   
	        } else {   	         
 $(".titulo-necesitas-web5").removeAttr("id","titulo-necesitas-web");
                $(".parrafo-necesitas-web5").removeAttr("id","parrafo-necesitas-web");
	        }   
              
                                      if ($(this).scrollTop() > 1350) { 
              $(".oferta").attr("id","oferta");
               $(".oferta").attr("id","oferta");    
                   
	        } else {   	         
 $(".oferta").removeAttr("id","oferta");
                $(".oferta").removeAttr("id","oferta");
	        } 
              
	      });
     
     
      

	 

	      // Animate the scroll to top

	      $('.go-top').click(function(event) {

	        event.preventDefault();

	 

	        $('html, body').animate({scrollTop: 0}, 1000);

	      })
          
          

				

	    });