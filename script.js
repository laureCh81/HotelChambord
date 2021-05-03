// JQUERY
$(function(){

if(window.innerWidth <= 480) {
        $("#header").removeClass("fixed-top");   
       }

    //Calendrier Avis

    $.datepicker.setDefaults(
        {
            altField: "#datepicker",
            closeText: 'Fermer',
            prevText: 'Précédent',
            nextText: 'Suivant',
            currentText: 'Aujourd\'hui',
            monthNames: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
            monthNamesShort: ['Janv.', 'Févr.', 'Mars', 'Avril', 'Mai', 'Juin', 'Juil.', 'Août', 'Sept.', 'Oct.', 'Nov.', 'Déc.'],
            dayNames: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
            dayNamesShort: ['Dim.', 'Lun.', 'Mar.', 'Mer.', 'Jeu.', 'Ven.', 'Sam.'],
            dayNamesMin: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
            weekHeader: 'Sem.',
            dateFormat: 'dd-mm-yy'
        }
    );

    $( function() {
        $( "#datepicker" ).datepicker();
      } );

    // Calendrier reservation

    $( function() {
		var dateFormat = "mm/dd/yy",
			from = $( "#from" )
				.datepicker({
					defaultDate: "+1w",
					changeMonth: true,
					numberOfMonths: 3
				})
				.on( "change", function() {
					to.datepicker( "option", "minDate", getDate( this ) );
				}),
			to = $( "#to" ).datepicker({
				defaultDate: "+1w",
				changeMonth: true,
				numberOfMonths: 3
			})
			.on( "change", function() {
				from.datepicker( "option", "maxDate", getDate( this ) );
			});

		function getDate( element ) {
			var date;
			try {
				date = $.datepicker.parseDate( dateFormat, element.value );
			} catch( error ) {
				date = null;
			}

			return date;
		}
	} );

// RESERVATION
let chambre = $('#bedroom');
let arrivee =$('#from');
let depart = $('#to');
let nbadulte = $('#adultes');    
let nbenfant = $('#enfants');    
let nbbb = $('#bb');  
let selecSpa = $('#selectSpa');
let nbspa = $('#nbspa')
let dateSpa= $('#datepicker')  
let ptidej=$('#ptidej')
let tableResto=$('#tableResto')

    $('#nextResa').on('click', function(){
    if(arrivee.val() != '' && depart.val()!='' && nbadulte.val()!='0' && chambre.val()!="noChambre"){        
            $('.suiteResa').addClass('hidden');
            $('.options').removeClass('hidden');       
            $('.suiteOptions').removeClass('hidden');
        }else{        
        window.alert('Vous devez choisir les dates de séjour, le nombre de personne ainsi que le type de chambre')
        }});

    

    $('.suiteOptions').on('click', function(){
        $('.suiteOptions').addClass('hidden');
        $('.resto').removeClass('hidden');        
        $('.validResa').removeClass('hidden');
    });

   

    $('.validResa').on('click', function(){  
        let nbadulteS = parseInt(nbadulte.val());
        let nbenfants = parseInt(nbenfant.val());
        let nbbbs = parseInt(nbbb.val());
        let nbpers = nbadulteS + nbenfants + nbbbs;
        $('#txtValidation').text(`Vous avez choisi une  ${chambre.val()} du  ${arrivee.val()} au ${depart.val()} pour ${nbpers} personne(s), `); 

        let ouiDej=$('#ouiDej');
        if(ptidej != ouiDej){
            $('#txtValidation2').text(`sans petit déjeuner.`);
        }else{
            $('#txtValidation2').text(`avec petit déjeuner.`);  
        }

        let tableOui=$('#tableOui')
        if(tableResto != tableOui){
            $('#txtValidation3').text(`Vous ne souhaitez pas réserver de table au restaurant Chambord.`);
        }else{
            $('#txtValidation3').text(` Vous prendrez le(s) diner(s) au restaurant Chambord.`);             
        }

        let choixSpa = $('#soins');
        if(selectSpa = choixSpa){
            $('#txtValidation4').text(`Vous ne souhaitez pas réserver de soin au spa.` )
        
        }else{
            $('#txtValidation4').text(`Vous avez également choisi un  ${selecSpa.val()} pour  ${nbspa.val()} personne(s) que vous souhaitez faire le ${dateSpa.val()}.`)
        }
       
    });

    $('#submitResa').on('click', function(){
        window.alert(`Ce site est factice, créé dans le cadre d'une formation Ifocop. La réservation ne sera pas prise en compte.`)
    });
    
    


});






// $(function(){
//     $(window).scroll(function () {
//         let headerHeight = $('#header').height();
//        if ($(this).scrollTop() >= headerHeight) { //
//         $('header').addClass("fixed-top"); 
//        } else {
//        $('header').removeClass("fixed-top");
//        }
//     });
//   });

//---- JS


//Check Forms
  
 let mailForm = document.querySelector('.mailForm');
 mailForm.addEventListener('blur', (e)=>{
    let validationMail = '';
    let regexMail = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;  
    if(!regexMail.test(e.target.value)){
        validationMail = 'Veuillez renseigner une adresse valide';
    }
    document.querySelector('.mailFalse').textContent = validationMail;
    });

    let surname = document.querySelector('.surname');  
    surname.addEventListener('blur', (e)=>{     
    let prenom = e.target.value;
    let validationPrenom = '';
    if(prenom.length < 1){
        validationPrenom = 'Indiquez votre prenom';
    }
    document.querySelector('.prenomFalse').textContent = validationPrenom;
});

    let nom = document.querySelector('.nom');
    nom.addEventListener('blur', (e)=>{     
        let valName = e.target.value;
        let validationName = '';
        if(valName.length < 1){
            validationName = 'Indiquez votre nom';
        }
        document.querySelector('.nameFalse').textContent = validationName;
    });

    let closeWin = document.querySelector('.closeWin');
    closeWin.addEventListener('click', (e)=>{     
        surname.value='';
        nom.value='';
        mailForm.value='';
    });

    