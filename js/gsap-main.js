gsap.registerPlugin(ScrollTrigger);

var t1 = gsap.timeline({ paused: true });

t1.to(".one", 0.8, {
  y: 6,
  rotation: 45,
  ease: Expo.easeInOut
});
t1.to(".two", 0.8, {
  y: -6,
  rotation: -45,
  ease: Expo.easeInOut,
  delay: -0.8
});

// t1.to(".menu", .05, {
//     top: "0%",
//     ease: Expo.easeInOut,
//     delay: .002
// });
// t1.from(".menu ul li", 1.3, {x:"-200", opacity:"0", ease:"expo.out", stagger: 0.1});

// t1.reverse();
// $(document).on("click", ".home-menu", function() {
//     t1.reversed(!t1.reversed());
// });
// $(document).on("click", ".toggle-btn", function() {
//     t1.reversed(!t1.reversed());
// });


gsap.from(".logo-s1", 2, {
  delay: 1,
  opacity: 0,
  y: 100,
  ease: Expo.easeInOut
}, 0.2);




gsap.from(".brand-header div", 1.5, {
  delay: .1,
  opacity: 0,
  y: "20",
  ease: Expo.easeInOut
}, 0.08);



$(".home-menu").click(function () {
  $(".menu").addClass("showMenu").slideDown();
});
$(".toggle-btn").click(function () {
  $(".menu").slideUp();
});



document.addEventListener("DOMContentLoaded", function () {
  // Check the screen size and set the target section's selector accordingly
  const isMobileScreen = window.matchMedia("(max-width: 700px)").matches;
  const targetSectionSelector = isMobileScreen ? '.mobile-banner-section' : '.home-banner-section';
  const targetSection = document.querySelector(targetSectionSelector);
  // console.log('1st');
  // console.log(targetSection);
  if (!targetSection) {


    // console.log("Target section not found");
    return; // Exit if section is missing
  }


  // Set up the observer options
  const options = {
    root: null,           // Use the viewport as the root
    rootMargin: '200px',    // Trigger as soon as the section is in view
    threshold: 0        // Trigger when 50% of the section is visible
  };

  // Create an IntersectionObserver
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      // console.log('2ndf');

      if (entry.isIntersecting) {
        // console.log('Section is in view');
        observer.unobserve(entry.target); // Stop observing after triggering

        // Place your animation code here
        gsap.to(".first", { delay: .5, top: "-100%", ease: Expo.easeInOut });
        gsap.to(".second", { delay: .7, top: "-100%", ease: Expo.easeInOut });
        gsap.to(".third", { delay: .9, top: "-100%", ease: Expo.easeInOut });

        // Re-add your Owl Carousel setup here if needed

        $(document).ready(function () {

          if (window.matchMedia('(max-width: 767px)').matches) {
            $(".slider1").remove();
          }
          initialiseOwl();
          // $('#home_slider').owlCarousel({
          //   // animateOut: 'fadeIn',
          //   // animateIn: 'fadeOut',  
          //   loop: true,
          //   autoplay: true,
          //   autoplayTimeout: 10000,
          //   smartSpeed: 1000,
          //   nav: false,
          //   dots: true,
          //   items: 1
          // });

          $('#home_slider').on('changed.owl.carousel', function (event) {
            // Get the current slide index
            let currentIndex = event.item.index;
            console.log(currentIndex);

            // Check if we are on the second slide (index 1)
            if (currentIndex == 4) {
              gsap.killTweensOf(" .shooting, .moving-daigonal, .moving-daigonal-left");
              // Define the matchMedia for different screen sizes
              let mm = gsap.matchMedia();

              // Animation for screens wider than 700px
              mm.add("(min-width: 701px)", () => {
                let movingElement = gsap.set(".moving-element", {
                  // transform: "translate(-50%, -50%)",
                  opacity: 0.1,
                  scale: 0.5,
                });

                let movingElement2 = gsap.to(".moving-element", {
                  duration: 2.5,               // Duration of each semi-circular motion
                  ease: "power1.inOut",
                  opacity: 1,
                  scale: 1,
                  motionPath: "M 400 50 C 300 0 200 0 150 100 C 100 200 150 300 250 350 ",
                  onComplete: function () {
                    gsap.killTweensOf(".moving-element");
                    movingElement2.invalidate();
                    gsap.to(".moving-element", {
                      x: "100px",              // Slight shift to the left by 40px on x-axis
                      y: "280px",                  // Move upward 5px
                      duration: 2.5,            // Duration for each movement
                      repeat: -1,             // Infinite loop
                      yoyo: true,             // Reverse the motion to create up and down movement
                      ease: "power1.inOut"     // Smooth easing for the up and down motion
                    });
                  }
                });

                movingElement2.invalidate();
                movingElement2.restart();
                movingElement.progress(0);
              });

              // Animation for screens narrower than 700px
              // mm.add("(max-width: 700px)", () => {
                // gsap.killTweensOf(".moving-element"); // Stops any ongoing animation for .moving-element
                // let movinng2 = gsap.to(".moving-element", {
                //   x: 50,                     // Move 50px on the x-axis
                //   y: 50,                     // Move 50px on the y-axis
                //   duration: 2.5,               // Duration for each movement
                //   repeat: -1,                // Infinite loop
                //   yoyo: true,                // Reverse the motion to create back and forth movement
                //   ease: "power1.inOut"        // Smooth easing for the up and down motion
                // });

                // // Add a slight delay and reset to sync the animation on swipe back
                // movinng2.delay(0.1); // Small delay for smoother transition
                // movinng2.restart();  // Restart the animation each time this screen appears
                // movinng2.progress(0); // Reset progress to beginning
                // return () => gsap.killTweensOf(".moving-element");
              // });




              let shooting2 = gsap.set(".shooting", {
                scale: 0.1, // Set initial scale to 0.1
                transform: "translate(-50%, -50%)"

              });
              let shooting = gsap.to(".shooting", {
                duration: 3,               // Duration of diagonal motion
                ease: "power1.inOut",      // Smooth motion with ease
                x: '-70vw',                     // Move 50px on the x-axis
                y: "71vh",                     // Move 50px on the y-axis            // Duration for each movement
                repeat: 0,                // Infinite loop
                yoyo: false,                // Reverse the motion to create back and forth movement     // Smooth easing for the up and down motion
                scale: 1,                   // End scale at 1
                // onComplete: function () {  
                //   gsap.killTweensOf(".shooting");
                //   gsap.to(".shooting2", {
                //     x: 5,                     // Move 50px on the x-axis
                //     y: 5,                     // Move 50px on the y-axis
                //     duration: 3,               // Duration for each movement
                //     repeat: -1,                // Infinite loop
                //     yoyo: true,                // Reverse the motion to create back and forth movement
                //     ease: "power1.inOut"        // Smooth easing for the up and down motion
                //   });
                // }
              });

              mm.add("(min-width: 701px)", () => {
                // MotionPathHelper.create('.moving-daigonal')

                gsap.set(".moving-daigonal", {
                  scale: 0.1,
                  transform: "translate(-50%, -50%)"
                });
                let diagonalAnimation = gsap.to(".moving-daigonal", {
                  duration: 3,               // Duration of diagonal motion
                  ease: "power1.inOut",        // Smooth motion with ease
                  motionPath: "M 400 100 L 450 150 L 500 200 L 550 250 L 600 300 L 650 350 L 700 400  ",
                  scale: 1,
                  onComplete: function () {     // After completing the diagonal movement
                    gsap.to(".moving-daigonal", {
                      rotation: 360,       // Full rotation (360 degrees)
                      duration: 30,         // Duration of each full rotation (5 seconds)
                      ease: "none",        // No easing, makes it a smooth continuous motion
                      repeat: -1,          // Infinite loop
                    });
                  }
                });
                diagonalAnimation.invalidate();
                diagonalAnimation.restart();
              });

              mm.add("(max-width: 700px)", () => {
                gsap.killTweensOf(".moving-daigonal"); // Stops any ongoing animation for .moving-element
                gsap.to(".moving-daigonal", {
                  rotation: 360,       // Full rotation (360 degrees)
                  duration: 30,         // Duration of each full rotation (5 seconds)
                  ease: "none",        // No easing, makes it a smooth continuous motion
                  repeat: -1,          // Infinite loop
                });
              });

              mm.add("(min-width: 701px)", () => {

                gsap.set(".moving-daigonal-left", {
                  scale: 0.1, // Set initial scale to 0.1
                  transform: "translate(-50%, -50%)"

                });

                let screenWidth3 = window.innerWidth;
                let screenHeight3 = window.innerHeight;

                // console.log("screenWidth", screenWidth3);
                // console.log("screenHeight", screenHeight3);
                // MotionPathHelper.create('.moving-daigonal-left')

                let diagonalLeftAnimation = gsap.to(".moving-daigonal-left", {
                  duration: 3,               // Duration of diagonal motion
                  ease: "power1.inOut",      // Smooth motion with ease
                  motionPath: "M-352.22801,-750.035 C-350.62801,-754.224 -470.06101,-651.463 -489.82601,-639.035 -516.20101,-622.422 -638.41301,-546.83 -638.62401,-548.431  ",
                  scale: 1,                   // End scale at 1
                  onComplete: function () {     // After completing the diagonal movement
                    gsap.to(".moving-daigonal-left", {
                      rotation: 360,       // Full rotation (360 degrees)
                      duration: 30,         // Duration of each full rotation (5 seconds)
                      ease: "none",        // No easing, makes it a smooth continuous motion
                      repeat: -1,          // Infinite loop
                    });
                  }
                });
                diagonalLeftAnimation.invalidate();
                diagonalLeftAnimation.restart();
              });

              mm.add("(max-width: 700px)", () => {
                gsap.killTweensOf(".moving-daigonal-left"); // Stops any ongoing animation for .moving-element

                gsap.to(".moving-daigonal-left", {
                  rotation: 360,       // Full rotation (360 degrees)
                  duration: 30,         // Duration of each full rotation (5 seconds)
                  ease: "none",        // No easing, makes it a smooth continuous motion
                  repeat: -1,          // Infinite loop
                });
              })
            } 
            else if (currentIndex == 8) {
              // console.log("hhhhhhhhhhh")
              $('#home_slider').trigger('destroy.owl.carousel');
              initialiseOwl();
            }
          });

        });



      }
    });
  }, options);

  // Start observing the target section
  observer.observe(targetSection);
});



function initialiseOwl() {
  $('#home_slider').owlCarousel({
    // animateOut: 'fadeIn',
    // animateIn: 'fadeOut',  
    loop: true,
    autoplay: true,
    autoplayTimeout: 6000,
    smartSpeed: 1000,
    nav: false,
    dots: true,
    items: 1
  });
}
// console.clear();


gsap.matchMedia().add("(max-width: 650px)", () => {

  // gsap.killTweensOf(".moving-element"); // Stops any ongoing animation for .moving-element
  let movinng2 = gsap.to(".moving-element", {
    x: 50,                     // Move 50px on the x-axis
    y: 50,                     // Move 50px on the y-axis
    duration: 2.5,               // Duration for each movement
    repeat: -1,                // Infinite loop
    yoyo: true,                // Reverse the motion to create back and forth movement
    ease: "power1.inOut"        // Smooth easing for the up and down motion
  });

  // Add a slight delay and reset to sync the animation on swipe back
  movinng2.delay(0.1); // Small delay for smoother transition
  movinng2.restart();  // Restart the animation each time this screen appears
  movinng2.progress(0); // Reset progress to beginning
  // return () => gsap.killTweensOf(".moving-element");


});