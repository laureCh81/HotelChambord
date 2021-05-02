// JQUERY
$(function(){

if(window.innerWidth <= 480) {
        $("#header").removeClass("fixed-top");   
       }

    //Calendrier

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

    