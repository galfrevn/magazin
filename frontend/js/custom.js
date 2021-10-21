// Archivo customizado de Javascript.
// Contiene animaciones Jquery e inicializacion de funciones importantes.

jQuery(document).ready(function ($) {
  "user strict";

  // Declaracion de Variables
  var hamburger = $(".hamburger_container");
  var menu = $(".hamburger_menu");
  var menuActive = false;
  var hamburgerClose = $(".hamburger_close");
  var fsOverlay = $(".fs_menu_overlay");

  // Inicializacion de Funciones
  initNav();   // Barra de Navegacion
  initMenu();  // Menu responsivo

  // Esperar 600ms antes de iniciar estas Funciones
  setTimeout(function() {
    initIsotopeFiltering();   // Filtro de clases
    initTimer();              // Cuentas hacia atras
    initSlider();             // Deslizador de productos
    initFAQ();                // Toggles en About Screen
    hideLoader();
  }, 600);

  // Barra de Navegacion
  function initNav() {    
    document.addEventListener("scroll", function() {
      var header = document.querySelector(".navbar");
      var back = document.querySelector(".main_nav_container");
      header.classList.toggle("sticky", window.scrollY > 0);
      back.classList.toggle("sticky", window.scrollY > 0);
    });
  }

  // Menu Responsivo
  function initMenu() {
    if (hamburger.length) {
      hamburger.on("click", function () {
        if (!menuActive) {
          openMenu();
        }
      });
    }
    if (fsOverlay.length) {
      fsOverlay.on("click", function () {
        if (menuActive) {
          closeMenu();
        }
      });
    }
    if (hamburgerClose.length) {
      hamburgerClose.on("click", function () {
        if (menuActive) {
          closeMenu();
        }
      });
    }
    if ($(".menu_item").length) {
      var items = document.getElementsByClassName("menu_item");
      var i;
      for (i = 0; i < items.length; i++) {
        items[i].addEventListener("click", () =>{
          closeMenu();
        })
        if (items[i].classList.contains("has-children")) {
          items[i].onclick = function () {
            this.classList.toggle("active");
            var panel = this.children[1];
            if (panel.style.maxHeight) {
              panel.style.maxHeight = null;
            } else {
              panel.style.maxHeight = panel.scrollHeight + "px";
            }
          };
        }
      }
    }
  }
  function openMenu() {
    menu.addClass("active");
    fsOverlay.css("pointer-events", "auto");
    menuActive = true;
  }
  function closeMenu() {
    menu.removeClass("active");
    fsOverlay.css("pointer-events", "none");
    menuActive = false;
  }

  // Filtros de Clases (Filtro ISOTOPE)
  function initIsotopeFiltering() {

    if ($(".grid_sorting_button").length) {
      $(".grid_sorting_button").click(function () {
        $(".grid_sorting_button.active").removeClass("active");
        $(this).addClass("active");
        var selector = $(this).attr("data-filter");
        $(".product-grid").isotope({
          filter: selector,
          animationOptions: {
            duration: 750,
            easing: "linear",
            queue: false,
          },
        });
        return false;
      });
    }
    $(document).ready( function(){ 
      var fBtn = $(".fst")
      var btn = $(".scnd");
      btn.click();
      fBtn.click();
    });
  }

  // Cuentas hacia atras (Timers)
  function initTimer() {
    if ($(".timer").length) {
      var target_date = new Date("Oct 31, 2021").getTime();
      var target_date2 = new Date("Oct 30 2021").getTime();

      // var date = new Date();
      // date.setDate(date.getDate() + 3);
      // var target_date = date.getTime();

      var days, hours, minutes, seconds;
      var d = $("#day");
      var h = $("#hour");
      var m = $("#minute");
      var s = $("#second");

      var days2, hours2, minutes2, seconds2;
      var d2 = $("#day2");
      var h2 = $("#hour2");
      var m2 = $("#minute2");
      var s2 = $("#second2");

      setInterval(function () {
        var current_date = new Date().getTime();
        var seconds_left = (target_date - current_date) / 1000;

        var current_date2 = new Date().getTime();
        var seconds_left2 = (target_date2 - current_date2) / 1000;

        days = parseInt(seconds_left / 86400);
        seconds_left = seconds_left % 86400;

        hours = parseInt(seconds_left / 3600);
        seconds_left = seconds_left % 3600;

        minutes = parseInt(seconds_left / 60);
        seconds = parseInt(seconds_left % 60);

        days2 = parseInt(seconds_left2 / 86400);
        seconds_left2 = seconds_left2 % 86400;

        hours2 = parseInt(seconds_left2 / 3600);
        seconds_left2 = seconds_left2 % 3600;

        minutes2 = parseInt(seconds_left2 / 60);
        seconds2 = parseInt(seconds_left2 % 60);

        d.text(days);
        h.text(hours);
        m.text(minutes);
        s.text(seconds);

        d2.text(days2);
        h2.text(hours2);
        m2.text(minutes2);
        s2.text(seconds2);
      }, 1000);
    }
  }

  // Slider de Productos
  function initSlider() {
    if ($(".product_slider").length) {
      var slider1 = $(".product_slider");
      slider1.owlCarousel({
        dots: false,
        navigation: false,
        autoplay: true,
        loop: true,
        responsive: {
          0: { items: 1 },
          480: { items: 2 },
          768: { items: 3 },
          991: { items: 4 },
          1280: { items: 5 },
          1440: { items: 5 },
        },
      });
      if ($(".product_slider_nav_left").length) {
        $(".product_slider_nav_left").on("click", function () {
          slider1.trigger("prev.owl.carousel");
        });
      }
      if ($(".product_slider_nav_right").length) {
        $(".product_slider_nav_right").on("click", function () {
          slider1.trigger("next.owl.carousel");
        });
      }
    }
  }

  // Tarjetas de Preguntas Frecuentes
  function initFAQ() {
    let toggles = document.getElementsByClassName('toggle');
    let contentDiv = document.getElementsByClassName('faq-content');
    let icons = document.getElementsByClassName('icon');    

    for (let i = 0; i < toggles.length; i++) {
      toggles[i].addEventListener('click', () => {
        if (parseInt(contentDiv[i].style.height) != contentDiv[i].scrollHeight) {
          contentDiv[i].style.height = contentDiv[i].scrollHeight + "px";
          toggles[i].style.color = "#fe4c50";
          icons[i].classList.remove("fa-plus");
          icons[i].classList.add("fa-minus");
          icons[i].style.color = "#fe4c50";
        } else {
          contentDiv[i].style.height = "0px";
          toggles[i].style.color = "#111130";
          icons[i].classList.remove("fa-minus");
          icons[i].classList.add("fa-plus");
          icons[i].style.color = "#111130";
        };
      });
    };
  };

  function hideLoader() {
    setTimeout(function() {
      if(window.location.hash == "#/productlist"){
        let loader = document.getElementById('waitOver');
        loader.classList.add('hidden');
      }
    }, 400);
  }

  // onHasChange, recarga las funciones cuando se cambia de Direccion Web (Hash)
  window.onhashchange = function() {

    setTimeout(function() {
      initMenu();
      initIsotopeFiltering();
      initTimer();
      initSlider();
      initFAQ();
      hideLoader();              
    }, 600);
 
    hamburger = $(".hamburger_container");
    menu = $(".hamburger_menu");
    menuActive = false;
    hamburgerClose = $(".hamburger_close");
    fsOverlay = $(".fs_menu_overlay");

    if(window.scrollY > 0) {
      var header = document.querySelector(".navbar");
      var back = document.querySelector(".main_nav_container");
      header.classList.add("sticky")
      back.classList.add("sticky")
    }
  }

});
