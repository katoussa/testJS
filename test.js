var $prevBtn = $("#prevBtn");
var $nextBtn = $("#nextBtn");
var $pauseBtn = $("#pauseBtn");
var $slide = $(".slide");
var $body = $("body");


// Objet slider
var slider = {
  slideIndex : 1,
  autoSlide : null,

  // Méthode: initialise le slider
  init: function () {
    $pauseBtn.className = "pauseBtn";
    slider.makeslider();
    slider.onClickBtn();
    slider.eventClavier();

    // Démarrage du slider automatique
    slider.autoSlide = setInterval(function () {
      slider.slideIndex ++;
      slider.makeslider(slider.slideIndex);
    }, 5000);
  },

  // Méthode: affichage du slider
  makeslider: function  (n) {
    // Index = 1 s'il dépasse le nombre d'éléments du slider
    if (n > $slide.length) {
      slider.slideIndex = 1;
    }
    // index = dernier élément du slider si il dépasse le premier élément
    if (n < 1) {
      slider.slideIndex = $slide.length;
    }
    // N'affiche aucun élément du slider
    $slide.hide();
    // Affiche l'élément du slider voulu
    $slide.eq(slider.slideIndex - 1).fadeIn("slow");
  },

  // Méthode: changer de slide
  slideTo: function  (d) {
    // Arrête le slider auto
    //clearInterval//(slider.autoSlide);
    // Affiche le slide suivant
    if (d === 39) {
      slider.makeslider(slider.slideIndex + 1);
    }
    // Affiche le slide précédent
    if (d === 37) {
      slider.makeslider(slider.slideIndex - 1);
    }
    //Mettre Pause || Play
   /* if (d === 32) {
      console.log($pauseBtn.className);
      if($pauseBtn.className = "pauseBtn") {
        clearInterval(slider.autoSlide);
        $pauseBtn.className = "playBtn";
        console.log($pauseBtn.className);
      }
      if($pauseBtn.className = "playBtn"){
        slider.autoSlide();
        $pauseBtn.className = "pauseBtn";
        console.log($pauseBtn.className);
      };
      return false;
    };*/
  },


  // Méthode: contrôle du slider avec les boutons
  onClickBtn: function () {
    // Click on nextBtn
    $nextBtn.on("click", function () {
      sens = 39;
      slider.slideTo(sens);
    });
    // Click on prevBtn
    $prevBtn.on("click", function () {
      sens = 37;
      slider.slideTo(sens);
    });
    // Click on pause / play Btn
    /*$pauseBtn.on("click", function (){
      sens = 32;
      slider.slideTo(sens);
    });*/
  },

  // Méthode: contrôle du slider avec le clavier
  eventClavier: function () {
    $body.on("keyup", function (e) {
      sens = e.keyCode;
      slider.slideTo(sens);
    });
  }
};


slider.init();




/* Je voudrais faire :

var slider = (id, slide, prevBtn, nextBtn, timer) {
  this.dom : {
    $body : $("body"),
    this.id : $(id),
    this.slides : $(slide),
    this.prevBtn : $(prevBtn),
    this.nextBtn : $(nextBtn)
  },

  data : {
    this.slideIndex : 1,
    this.autoSlide : null,
    this.timer : timer
  },

  methods : {
  
    this.init: function(){
      this.slideIndex = 1;
      this.makeslider();
      this.slideTo();
      this.onClickBtn();
      this.eventClavier();
      this.autoSlide();
    },

    this.autoSlide : setInterval(function(){
      this.slideIndex ++;
      this.makeslider(this.slideIndex);
      }, this.timer);
    }

    this.makeslider: function(){
      if (n > this.slides.length) {
      this.slideIndex = 1;
    }
    if (n < 1) {
      this.slideIndex = this.slides.length;
    }
    // N'affiche aucun élément du slider
    this.slide.hide();
    // Affiche l'élément du slider voulu
    this.slide.eq(this.slideIndex - 1).fadeIn("slow");
    },

    this.slideTo: function(d){
      clearInterval(this.autoSlide);
    // Affiche le slide suivant
    if (d === 39) {
      this.makeslider(this.slideIndex += 1);
    }
    // Affiche le slide précédent
    if (d === 37) {
      this.makeslider(this.slideIndex -= 1);
    }
    },

    this.onClickBtn: function(){

    },

    this.eventClavier: function(){

    }
  }
};


  
//et appeler dans js/main.js

$(function(){
  slider.init();
});
*/

