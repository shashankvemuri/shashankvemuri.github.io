$(function() {
    const d = new Date();
    const hours = d.getHours();
    const night = hours >= 19 || hours <= 7; // between 7pm and 7am
    const body = document.querySelector('body');
    const toggle = document.getElementById('toggle');
    const input = document.getElementById('switch');
  
    if (night) {
      input.checked = true;
      body.classList.add('night');
    }
  
    toggle.addEventListener('click', function() {
      const isChecked = input.checked;
      if (isChecked) {
        body.classList.remove('night');
      } else {
        body.classList.add('night');
      }
    });
  
    const introHeight = document.querySelector('.intro').offsetHeight;
    const topButton = document.getElementById('top-button');
    const $topButton = $('#top-button');
  
    window.addEventListener(
      'scroll',
      function() {
        if (window.scrollY > introHeight) {
          $topButton.fadeIn();
        } else {
          $topButton.fadeOut();
        }
      },
      false
    );
  
    topButton.addEventListener('click', function() {
      $('html, body').animate({ scrollTop: 0 }, 500);
    });
  
    const hand = document.querySelector('.emoji.wave-hand');
  
    function waveOnLoad() {
      hand.classList.add('wave');
      setTimeout(function() {
        hand.classList.remove('wave');
      }, 2000);
    }
  
    setTimeout(function() {
      waveOnLoad();
    }, 1000);
  
    hand.addEventListener('mouseover', function() {
      hand.classList.add('wave');
    });
  
    hand.addEventListener('mouseout', function() {
      hand.classList.remove('wave');
    });
  
    window.sr = ScrollReveal({
      reset: false,
      duration: 600,
      easing: 'cubic-bezier(.694,0,.335,1)',
      scale: 1,
      viewFactor: 0.3,
    });
  
    sr.reveal('.background');
    sr.reveal('.skills');
    sr.reveal('.experience', { viewFactor: 0.2 });
    sr.reveal('.featured-projects', { viewFactor: 0.1 });
    sr.reveal('.other-projects', { viewFactor: 0.05 });
  });
  
  document.addEventListener(
    "scroll",
    function() {
      var scrollTop =
        document.documentElement["scrollTop"] || document.body["scrollTop"];
      var scrollBottom =
        (document.documentElement["scrollHeight"] ||
          document.body["scrollHeight"]) - document.documentElement.clientHeight;
      scrollPercent = scrollTop / scrollBottom * 100 + "%";
      document
        .getElementById("_progress")
        .style.setProperty("--scroll", scrollPercent);
    },
    { passive: true }
  );
  
  const toggleButton = document.getElementsByID('toggle-button')[0]
  console.log(toggleButton);
  const navbarLinks = document.getElementsByClassName('navbar-links')[0]
  
  toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
  })
  
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }