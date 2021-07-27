// Avoid `console` errors in browsers that lack a console.
(function ($) { // use this function to make $ work with wordpress




  // getting rid of the SLEP char on Windows chrome

  $(document).ready(function () {


    $("body").children().each(function () {
      document.body.innerHTML = document.body.innerHTML.replace(/\u2028/g, ' ');
    });



    $("body").children().each(function () {
      $(this).html($(this).html().replace(/&#8232;/g, " "));
    });


  });





  // playing with intersection observer

  $(document).ready(function () {


    // const features = document.querySelector('.features');


    // let options = {
    //   threshold: 0.9,
    // }

    // let observer = new IntersectionObserver(appear, options);
    // let button = document.querySelector('section.features .row.link a');

    // function appear(entries){
    //   entries.forEach((entry) => {
    //     if(entry.isIntersecting){
    //       button.style.display = 'none';
    //     }
    //   })
    // }

    // observer.observe(features);

    const scrollLinks = document.querySelectorAll(".scrollLinks");
    const nav = document.querySelector('nav');


    scrollLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        // prevent default
        e.preventDefault();
        // navigate to specific spot
        const id = e.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);
        console.log(id);

        const navHeight = nav.getBoundingClientRect().height;
        let position = element.offsetTop;

        console.log(position);

        window.scrollTo({
          left: 0,
          top: position,
        })
      });

    });




  });









  // change plus to minus 

  // $(document).ready(function () {

  //   const panelheadings = document.querySelectorAll('.panel-heading');


  //       panelheadings.forEach((panel) => {
  //          panel.addEventListener('click', () => {

  //                   const icon = panel.querySelectorAll('i');
  //                   icon.forEach((item) => {
  //                        let iconClass = item.classList;
  //                        if(iconClass.contains('glyphicon-plus')){
  //                         iconClass.replace('glyphicon-plus', 'glyphicon-minus');
  //                        }else{
  //                         iconClass.replace('glyphicon-minus', 'glyphicon-plus');
  //                        }

  //                   });

  //           });
  //         })





  // });










  //  Navigation
  $(document).ready(function () {



    const burger = document.querySelector('.burger');
    const menuWrapper = document.querySelector('.menu-wrapper');
    const links = document.querySelector('.links');
    const navCenter = document.querySelector('.nav-center');


    burger.addEventListener('click', function () { // to target the event function DO NOT use arrow functions as THIS will not work!

      //console.log(this);
      burger.classList.toggle('cross');

      const menuWrapperHeight = menuWrapper.getBoundingClientRect().height; // which is 0
      const linksHeight = links.getBoundingClientRect().height; // set but hidden inside the menuwrapper



      if (menuWrapperHeight === 0) {
        menuWrapper.style.height = `${linksHeight}px`;
        navCenter.style.paddingBottom = '20px';
      } else {
        menuWrapper.style.height = 0;
        navCenter.style.paddingBottom = '0px';
      }


    })


  });






  // /* Small Navigation on Scroll Down */
  $(document).ready(function () {

    const nav = document.querySelector('.nav-center');

    window.addEventListener('scroll', function (e) {
      const scrollHeight = window.pageYOffset;
      const navHeight = nav.getBoundingClientRect().height;
      // console.log(navHeight);
      // console.log(scrollHeight);

      scrollHeight > navHeight ? nav.classList.add('small') : nav.classList.remove('small');

    })

  });






  // active navigation links */
  $(document).ready(function () {

    const navLinks = document.querySelectorAll('ul.links > li > a');
    const navWrapper = document.querySelector('ul.links');
    navWrapper.addEventListener('click', function (e) {

      // e.preventDefault();

      navLinks.forEach((link) => {
        link.classList.remove('active');

        if (link) {
          e.target.classList.add('active')
        } else {
          e.target.classList.remove('active')
        }
      })

    })

  });









  // back to top reveal
  $(document).ready(function () {

    const backbtn = document.querySelector('.backToTop');




    window.addEventListener('scroll', function () {
      const pagePosition = window.pageYOffset;

      if (pagePosition > 1200) {
        backbtn.style.transform = 'translateX(0)';
        backbtn.style.opacity = "1";
      } else {
        backbtn.style.transform = 'translateX(100%)';
        backbtn.style.opacity = "0";

      }
    })


  });










  /* ScrollMagic */


  // homepage hero pinning
  $(document).ready(function () {

    let intViewportWidth = window.innerWidth;
    //console.log(intViewportWidth);

    if (intViewportWidth <= 768) {
      function pinning(parent, child) {


        let controller = new ScrollMagic.Controller();


        const hero = document.querySelector(parent);
        const logo = document.querySelector(child);

        let heroScene = new ScrollMagic.Scene({

          triggerElement: hero,
          triggerHook: .02,
          duration: '15%'

        })



          .setPin(logo, { pushFollers: false })
          .addTo(controller);

      }

      let homehero = pinning('.hero', '.left-dots');



      // add all instances of pinning  to a function and call it as one block

      function allPinning() {
        homehero;

      }

      allPinning();
    }


  });









  // /* Footer Date */
  $(document).ready(function () {

    const footerYear = document.querySelector('span.date');

    let date = new Date();
    let year = date.getFullYear();
    footerYear.textContent = year;
    // console.log(footerYear)

  });







  /* PARALLAX */
  $(document).ready(function () {

    let intViewportWidth = window.innerWidth;
    //console.log(intViewportWidth);

    if (intViewportWidth <= 768) {

      initParallax = () => {

        // vars
        let ctaBlock = document.querySelector('section.features-ctaBlock');
        let featuresBlock = document.querySelector('section.features-ctaBlock');


        // parallax output
        $(ctaBlock).parallax("75%", 0.7);
        $(featuresBlock).parallax("75%", 0.7);

      }

      initParallax();
    }



  });






  // Intersection Observer tesgin
  $(document).ready(function () {










  })(jQuery); // Close DOM 

// Place any jQuery/helper plugins in here.












