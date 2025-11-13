document.addEventListener("DOMContentLoaded", function() {
  const servicesMenu = document.querySelector(".sub-menu-li .down-arrow-image");
  const submenu = document.querySelector(".sub-menu-li .submenu-ul");

  servicesMenu.addEventListener("click", function() {
      submenu.style.display = submenu.style.display === "block" ? "none" : "block";
      servicesMenu.classList.toggle("rotate"); // Toggle rotation
  });
});


gsap.registerPlugin(MotionPathPlugin)
gsap.registerPlugin(ScrollTrigger);

gsap.to(".marquee-div1", {
  backgroundPosition: "-=2000px",  // Adjust based on your image width
  duration: 30,  // How long the scroll should take
  ease: "none",
  repeat: -1  // Infinite loop
});

gsap.to(".marquee-div2", {
  backgroundPosition: "+=2000px",  // Adjust based on your image width
  duration: 30,  // How long the scroll should take
  ease: "none",
  repeat: -1  // Infinite loop
});


let zIndexState = 10; // Initial z-index state

let animation = gsap.to(".planet", {
  x: -700,                    // Move 700px to the left
  duration: 3,                // Animation duration (3 seconds)
  ease: "power1.inOut",        // Smooth easing
  repeat: -1,                  // Infinite loop
  yoyo: true,                  // Reverse direction after reaching the end
  onUpdate: function () {       // Monitor the position during the animation
    const planet = document.querySelector('.planet');
    const xPos = gsap.getProperty(planet, "x"); // Get current x position

    const tolerance = 5; // Allow a small range to account for minor offsets
    // When the element is close to the left end (-700px)
    if (xPos <= -700 + tolerance && zIndexState !== -1) {
      planet.style.zIndex = "-1"; // Reduce z-index (move behind)
      zIndexState = -1; // Update state
    }
    // When the element is close to the original position (0px)
    else if (xPos >= -100 - tolerance && zIndexState !== 10) {
      // console.log()
      planet.style.zIndex = "10"; // Increase z-index (move in front)
      zIndexState = 999999; // Update state
    }
  }
});

gsap.to(".planet2", {
  x: 610,                    // Move 700px to the left
  duration: 3,                // Animation duration (3 seconds)
  ease: "power1.inOut",        // Smooth easing
  repeat: -1,                  // Infinite loop
  yoyo: true,                  // Reverse direction after reaching the end
  onUpdate: function () {       // Monitor the position during the animation
    const planet = document.querySelector('.planet2');
    const xPos = gsap.getProperty(planet, "x"); // Get current x position
    const tolerance = 5; // Allow a small range to account for minor offsets
    // When the element is close to the left end (-700px)
    if (xPos <= 0 + tolerance && zIndexState !== -9) {
      planet.style.zIndex = "-1"; // Reduce z-index (move behind)
      zIndexState = -99; // Update state
    }
    // When the element is close to the original position (0px)
    else if (xPos >= 610 - tolerance && zIndexState !== 10) {
      planet.style.zIndex = "10"; // Increase z-index (move in front)
      zIndexState = 999999; // Update state
    }
  }
});


gsap.timeline({ repeat: -1, yoyo: true })
  .to(".element-24-3-img", {
    duration: 2,
    scale: 1.2, // Slight pulsing effect
    filter: "drop-shadow(0px 0px 40px orange)", // Glowing effect
    ease: "power1.inOut", // Smooth animation
    y: -5, // Move up slightly
    opacity: 0.8, // Slightly fade out
  })
  .to(".element-24-3-img", {
    duration: 1,
    scale: 1, // Return to original size
    filter: "drop-shadow(0px 0px 20px yellow)", // Adjust glow for dynamic effect
    ease: "power1.inOut",
    y: 0, // Return to original position
    opacity: 1, // Return to full opacity
  })
  .to(".element-24-3-img", {
    duration: 1,
    color: "cyan", // Change color dynamically (requires proper CSS setup)
    ease: "power1.inOut",
  });


gsap.to(".element-24-1-img", {
  duration: 2,                // Duration to fade in
  opacity: 1,                 // Fade in to fully visible
  scale: 1.1,                 // Scale up a bit while fading in
  rotate: 5,                  // Slight rotation while fading in
  skewX: 5,                   // Slight skew on the X-axis
  ease: "power1.inOut",       // Smooth easing
  onComplete: () => {
    // Fade out after fade in is complete
    gsap.to(".element-24-1-img", {
      duration: 2,        // Duration to fade out
      opacity: 0.5,       // Fade out to semi-transparent
      scale: 1,           // Scale back to original size
      rotate: 0,          // Reset rotation
      skewX: 0,           // Reset skew
      ease: "power1.inOut",
      repeat: -1,         // Repeat indefinitely
      yoyo: true          // Yoyo for continuous fade in and out
    });
  }
});




// Set up GSAP matchMedia for responsive animations
gsap.matchMedia().add("(max-width: 450px)", () => {


  let zIndexState = 10; // Initial z-index state

  let animation = gsap.to(".planet", {
    x: -350,                    // Move 700px to the left
    duration: 3,                // Animation duration (3 seconds)
    ease: "power1.inOut",        // Smooth easing
    repeat: -1,                  // Infinite loop
    yoyo: true,                  // Reverse direction after reaching the end
    onUpdate: function () {       // Monitor the position during the animation
      const planet = document.querySelector('.planet');
      const xPos = gsap.getProperty(planet, "x"); // Get current x position

      const tolerance = 5; // Allow a small range to account for minor offsets
      // When the element is close to the left end (-700px)
      if (xPos <= -350 + tolerance && zIndexState !== -1) {
        planet.style.zIndex = "-1"; // Reduce z-index (move behind)
        zIndexState = -1; // Update state
      }
      // When the element is close to the original position (0px)
      else if (xPos >= -100 - tolerance && zIndexState !== 10) {
        // console.log()
        planet.style.zIndex = "10"; // Increase z-index (move in front)
        zIndexState = 999999; // Update state
      }
    }
  });

  gsap.to(".planet2", {
    x: 250,                    // Move 700px to the left
    duration: 3,                // Animation duration (3 seconds)
    ease: "power1.inOut",        // Smooth easing
    repeat: -1,                  // Infinite loop
    yoyo: true,                  // Reverse direction after reaching the end
    onUpdate: function () {       // Monitor the position during the animation
      const planet = document.querySelector('.planet2');
      const xPos = gsap.getProperty(planet, "x"); // Get current x position
      const tolerance = 5; // Allow a small range to account for minor offsets
      // When the element is close to the left end (-700px)
      if (xPos <= 0 + tolerance && zIndexState !== -9) {
        planet.style.zIndex = "-1"; // Reduce z-index (move behind)
        zIndexState = -99; // Update state
      }
      // When the element is close to the original position (0px)
      else if (xPos >= 250 - tolerance && zIndexState !== 10) {
        planet.style.zIndex = "10"; // Increase z-index (move in front)
        zIndexState = 999999; // Update state
      }
    }
  });

});



gsap.to(".img-rotate", {
  rotation: 360,       // Full rotation (360 degrees)
  duration: 30,         // Duration of each full rotation (5 seconds)
  ease: "none",        // No easing, makes it a smooth continuous motion
  repeat: -1,          // Infinite loop
});



gsap.to(".up-down", {
  x: 2,                     // Move 50px on the x-axis
  y: -10,                     // Move 50px on the y-axis
  duration: 1,               // Duration for each movement
  repeat: -1,                // Infinite loop
  yoyo: true,                // Reverse the motion to create back and forth movement
  ease: "power1.inOut"        // Smooth easing for the up and down motion
});



gsap.to(".down-up", {
  x: -2,                     // Move 50px on the x-axis
  y: 10,                     // Move 50px on the y-axis
  duration: 1,               // Duration for each movement
  repeat: -1,                // Infinite loop
  yoyo: true,                // Reverse the motion to create back and forth movement
  ease: "power1.inOut"        // Smooth easing for the up and down motion
});







//   $.fn.parallax = function (resistance, mouse) {
//     $el = $(this);
//     TweenLite.to($el, 0.2, {
//         x: -((mouse.clientX - window.innerWidth / 2) / resistance),
//         y: -((mouse.clientY - window.innerHeight / 2) / resistance)
//     });
// };


// $(document).ready(function () {
// $(document).mousemove(function (e) {
//   if ($(window).width() > 1023) {
//       $(".mouse-move").parallax(-30, e);


//   }
// });
// });


// owl carousal section of home page


$(document).ready(function () {



  $('#testimonial_slider').owlCarousel({
    loop: true,
    autoplay: false,
    smartSpeed: 1000,
    nav: true,
    navText: ["<img src='2021img/arrow-left.png'>", "<img src='2021img/arrow-right.png'>"],
    dots: true,
    items: 4,
    responsive: {
      0: {
        items: 1,
        margin: 40,
        nav: true,
      },
      767: {
        items: 3,
        margin: 30,
        nav: false
      },
      1200: {
        items: 3,
        margin: 40,
        nav: true,
        loop: false
      }
    }
  })

  $('#client_slide').owlCarousel({
    loop: true,
    autoplay: true, // Enable autoplay
    autoplayTimeout: 3000,
    smartSpeed: 1000,
    items: 4,
    dots: false,
    responsive: {
      0: {
        items: 1,
        margin: 40,
        nav: true
      },
      767: {
        items: 3,
        margin: 30,
        nav: false
      },
      1200: {
        items: 3,
        margin: 40,
        nav: true,
        loop: false
      }
    }
  })

  $('#ourclients').owlCarousel({
    loop: true,
    autoplay: true, // Enable autoplay
    autoplayTimeout: 3000,
    smartSpeed: 1000,
    items: 1
  })

  $('#casestudy_slider').owlCarousel({
    loop: true,
    autoplay: 2500,
    smartSpeed: 1000,
    nav: true,
    navText: ["<img src='2021img/arrow-left.png'>", "<img src='2021img/arrow-right.png'>"],
    dots: true,
    items: 1
  })

  $('#product-slider').owlCarousel({
    loop: true,
    autoplay: false,
    autoplayTimeout: 5000,
    nav: false,
    dots: true,
    items: 1
  })

});


// console.clear();

// owl carousal section of home page ends



// about section animation



gsap.fromTo(".about-block-img-1", 
{
    y: -300,               // Start 100px above the initial position
    opacity: 0,            // Start invisible
}, 
{
    y: 0,                  // End at original position
    opacity: 1,            // Fade in to full visibility
    duration: 1.5,         // Duration of the animation
    ease: "bounce.out",    // Bounce effect
    scrollTrigger: {
    trigger: ".about-block", // Trigger animation when the section enters
    start: "bottom 80%",      // Start when the section reaches 80% of the viewport height
    // end: "bottom 10%",
    scroller: ".smooth-scroll",
    toggleActions: "play none none none", // Play once when triggered
    },
    onComplete: function () {
      gsap.timeline({ repeat: -1, yoyo: true })
      .to(".about-block-img-1", {
        duration: 1,
        scale: 1.04, // Slight pulsing effect
        // filter: "drop-shadow(0px 0px 40px orange)", // Glowing effect
        ease: "power1.inOut", // Smooth animation
        y: -5, // Move up slightly
        opacity: 0.8, // Slightly fade out
      })
      .to(".about-block-img-1", {
        duration: 1,
        scale: 1, // Return to original size
        // filter: "drop-shadow(0px 0px 20px yellow)", // Adjust glow for dynamic effect
        ease: "power1.inOut",
        y: 0, // Return to original position
        opacity: 1, // Return to full opacity
      })       
    }
  }
);

  gsap.matchMedia().add("(min-width: 768px)", () => {
    gsap.to(".about-block-img-7", {
      y: -30, // Move 20px up
      duration: 2, // Animation duration of 1 second
      ease: "power1.inOut", // Smooth easing
      repeat: -1, // Infinite repeat
      yoyo: true // Go back to original position
    });
  })

  gsap.matchMedia().add("(max-width: 768px)", () => {
    gsap.to(".about-block-img-7", {
      y: -20, // Move 20px up
      duration: 2, // Animation duration of 1 second
      ease: "power1.inOut", // Smooth easing
      repeat: -1, // Infinite repeat
      yoyo: true // Go back to original position
    });
  })




  



    gsap.matchMedia().add("(min-width: 1600px)", () => {
      gsap.to(".about-block-img-6", {
    x: 810,
    y: -440,                    // Move 700px to the left
    duration: 4,                // Animation duration (3 seconds)
    ease: "power1.inOut",        // Smooth easing
    repeat: -1,                  // Infinite loop
    yoyo: true,                  // Reverse direction after reaching the end
    onUpdate: function () {       // Monitor the position during the animation
      const aboutBlockImg6 = document.querySelector('.about-block-img-6');
      const xPos = gsap.getProperty(aboutBlockImg6, "x"); // Get current x position
      const tolerance = 5; // Allow a small range to account for minor offsets
      // When the element is close to the left end (-700px)

      if (xPos <= 0 + tolerance && zIndexState !== -9) {
        aboutBlockImg6.style.zIndex = "-1"; // Reduce z-index (move behind)
        zIndexState = -99; // Update state
      }
      // When the element is close to the original position (0px)
      else if (xPos >= 810 - tolerance && zIndexState !== 10) {
        aboutBlockImg6.style.zIndex = "10"; // Increase z-index (move in front)
        zIndexState = 999999; // Update state
      }
    }
    });
    })

    gsap.matchMedia().add("(max-width: 1600px)", () => {
      gsap.to(".about-block-img-6", {
    x: 720,
    y: -360,                    // Move 700px to the left
    duration: 4,                // Animation duration (3 seconds)
    ease: "power1.inOut",        // Smooth easing
    repeat: -1,                  // Infinite loop
    yoyo: true,                  // Reverse direction after reaching the end
    onUpdate: function () {       // Monitor the position during the animation
      const aboutBlockImg6 = document.querySelector('.about-block-img-6');
      const xPos = gsap.getProperty(aboutBlockImg6, "x"); // Get current x position
      const tolerance = 5; // Allow a small range to account for minor offsets
      // When the element is close to the left end (-700px)

      if (xPos <= 0 + tolerance && zIndexState !== -9) {
        aboutBlockImg6.style.zIndex = "-1"; // Reduce z-index (move behind)
        zIndexState = -99; // Update state
      }
      // When the element is close to the original position (0px)
      else if (xPos >= 720 - tolerance && zIndexState !== 10) {
        aboutBlockImg6.style.zIndex = "10"; // Increase z-index (move in front)
        zIndexState = 999999; // Update state
      }
    }
    });
    })

    gsap.matchMedia().add("(max-width: 1400px)", () => {
      gsap.to(".about-block-img-6", {
    x: 630,
    y: -340,                    // Move 700px to the left
    duration: 4,                // Animation duration (3 seconds)
    ease: "power1.inOut",        // Smooth easing
    repeat: -1,                  // Infinite loop
    yoyo: true,                  // Reverse direction after reaching the end
    onUpdate: function () {       // Monitor the position during the animation
      const aboutBlockImg6 = document.querySelector('.about-block-img-6');
      const xPos = gsap.getProperty(aboutBlockImg6, "x"); // Get current x position
      const tolerance = 5; // Allow a small range to account for minor offsets
      // When the element is close to the left end (-700px)

      if (xPos <= 0 + tolerance && zIndexState !== -9) {
        aboutBlockImg6.style.zIndex = "-1"; // Reduce z-index (move behind)
        zIndexState = -99; // Update state
      }
      // When the element is close to the original position (0px)
      else if (xPos >= 630 - tolerance && zIndexState !== 10) {
        aboutBlockImg6.style.zIndex = "10"; // Increase z-index (move in front)
        zIndexState = 999999; // Update state
      }
    }
    });
    })

    gsap.matchMedia().add("(max-width: 1150px)", () => {
      gsap.to(".about-block-img-6", {
    x: 540,
    y: -300,                    // Move 700px to the left
    duration: 4,                // Animation duration (3 seconds)
    ease: "power1.inOut",        // Smooth easing
    repeat: -1,                  // Infinite loop
    yoyo: true,                  // Reverse direction after reaching the end
    onUpdate: function () {       // Monitor the position during the animation
      const aboutBlockImg6 = document.querySelector('.about-block-img-6');
      const xPos = gsap.getProperty(aboutBlockImg6, "x"); // Get current x position
      const tolerance = 5; // Allow a small range to account for minor offsets
      // When the element is close to the left end (-700px)

      if (xPos <= 0 + tolerance && zIndexState !== -9) {
        aboutBlockImg6.style.zIndex = "-1"; // Reduce z-index (move behind)
        zIndexState = -99; // Update state
      }
      // When the element is close to the original position (0px)
      else if (xPos >= 540 - tolerance && zIndexState !== 10) {
        aboutBlockImg6.style.zIndex = "10"; // Increase z-index (move in front)
        zIndexState = 999999; // Update state
      }
    }
    });
    })

    gsap.matchMedia().add("(max-width: 991px)", () => {
      gsap.to(".about-block-img-6", {
    x: 440,
    y: -300,                    // Move 700px to the left
    duration: 4,                // Animation duration (3 seconds)
    ease: "power1.inOut",        // Smooth easing
    repeat: -1,                  // Infinite loop
    yoyo: true,                  // Reverse direction after reaching the end
    onUpdate: function () {       // Monitor the position during the animation
      const aboutBlockImg6 = document.querySelector('.about-block-img-6');
      const xPos = gsap.getProperty(aboutBlockImg6, "x"); // Get current x position
      const tolerance = 5; // Allow a small range to account for minor offsets
      // When the element is close to the left end (-700px)

      if (xPos <= 0 + tolerance && zIndexState !== -9) {
        aboutBlockImg6.style.zIndex = "-1"; // Reduce z-index (move behind)
        zIndexState = -99; // Update state
      }
      // When the element is close to the original position (0px)
      else if (xPos >= 440 - tolerance && zIndexState !== 10) {
        aboutBlockImg6.style.zIndex = "10"; // Increase z-index (move in front)
        zIndexState = 999999; // Update state
      }
    }
    });
    })

    gsap.matchMedia().add("(max-width: 768px)", () => {
    gsap.to(".about-block-img-6-mob", {
    x: 620,
    y: -300,                    // Move 700px to the left
    duration: 4,                // Animation duration (3 seconds)
    ease: "power1.inOut",        // Smooth easing
    repeat: -1,                  // Infinite loop
    yoyo: true,                  // Reverse direction after reaching the end
    onUpdate: function () {       // Monitor the position during the animation
      const aboutBlockImg6 = document.querySelector('.about-block-img-6-mob');
      const xPos = gsap.getProperty(aboutBlockImg6, "x"); // Get current x position
      const tolerance = 5; // Allow a small range to account for minor offsets
      // When the element is close to the left end (-700px)

      if (xPos <= 0 + tolerance && zIndexState !== 2) {
        aboutBlockImg6.style.zIndex = "2"; // Reduce z-index (move behind)
        zIndexState = 2; // Update state
        console.log('22222222222222', zIndexState);
        console.log('33333333333333333000000000000000000', xPos);
      }
      // When the element is close to the original position (0px)
      else if (xPos >= 620 - tolerance && zIndexState !== 18) {
        console.log('000000000000000000', xPos);
        aboutBlockImg6.style.zIndex = "18"; // Increase z-index (move in front)
        zIndexState = 18; // Update state
        console.log('1111111111111111111', zIndexState);
      }
    }
    });
    })

    gsap.matchMedia().add("(max-width: 630px)", () => {
      gsap.to(".about-block-img-6-mob", {
    x: 550,
    y: -300,                    // Move 700px to the left
    duration: 4,                // Animation duration (3 seconds)
    ease: "power1.inOut",        // Smooth easing
    repeat: -1,                  // Infinite loop
    yoyo: true,                  // Reverse direction after reaching the end
    onUpdate: function () {       // Monitor the position during the animation
      const aboutBlockImg6 = document.querySelector('.about-block-img-6-mob');
      const xPos = gsap.getProperty(aboutBlockImg6, "x"); // Get current x position
      const tolerance = 5; // Allow a small range to account for minor offsets
      // When the element is close to the left end (-700px)

      if (xPos <= 0 + tolerance && zIndexState !== 2) {
        aboutBlockImg6.style.zIndex = "2"; // Reduce z-index (move behind)
        zIndexState = 2; // Update state
      }
      // When the element is close to the original position (0px)
      else if (xPos >= 550 - tolerance && zIndexState !== 18) {
        aboutBlockImg6.style.zIndex = "18"; // Increase z-index (move in front)
        zIndexState = 18; // Update state
      }
    }
    });
    })

    gsap.matchMedia().add("(max-width: 580px)", () => {
      gsap.to(".about-block-img-6-mob", {
    x: 500,
    y: -280,                    // Move 700px to the left
    duration: 4,                // Animation duration (3 seconds)
    ease: "power1.inOut",        // Smooth easing
    repeat: -1,                  // Infinite loop
    yoyo: true,                  // Reverse direction after reaching the end
    onUpdate: function () {       // Monitor the position during the animation
      const aboutBlockImg6 = document.querySelector('.about-block-img-6-mob');
      const xPos = gsap.getProperty(aboutBlockImg6, "x"); // Get current x position
      const tolerance = 5; // Allow a small range to account for minor offsets
      // When the element is close to the left end (-700px)

      if (xPos <= 0 + tolerance && zIndexState !== 2) {
        aboutBlockImg6.style.zIndex = "2"; // Reduce z-index (move behind)
        zIndexState = 2; // Update state
      }
      // When the element is close to the original position (0px)
      else if (xPos >= 500 - tolerance && zIndexState !== 18) {
        aboutBlockImg6.style.zIndex = "18"; // Increase z-index (move in front)
        zIndexState = 18; // Update state
      }
    }
    });
    })

    gsap.matchMedia().add("(max-width: 530px)", () => {
    gsap.to(".about-block-img-6-mob", {
    x: 460,
    y: -240,                    // Move 700px to the left
    duration: 4,                // Animation duration (3 seconds)
    ease: "power1.inOut",        // Smooth easing
    repeat: -1,                  // Infinite loop
    yoyo: true,                  // Reverse direction after reaching the end
    onUpdate: function () {       // Monitor the position during the animation
      const aboutBlockImg6 = document.querySelector('.about-block-img-6-mob');
      const xPos = gsap.getProperty(aboutBlockImg6, "x"); // Get current x position
      const tolerance = 5; // Allow a small range to account for minor offsets
      // When the element is close to the left end (-700px)

      if (xPos <= 0 + tolerance && zIndexState !== 2) {
        aboutBlockImg6.style.zIndex = "2"; // Reduce z-index (move behind)
        zIndexState = 2; // Update state
      }
      // When the element is close to the original position (0px)
      else if (xPos >= 460 - tolerance && zIndexState !== 18) {
        aboutBlockImg6.style.zIndex = "18"; // Increase z-index (move in front)
        zIndexState = 18; // Update state
      }
    }
    });
    })

    gsap.matchMedia().add("(max-width: 490px)", () => {
      gsap.to(".about-block-img-6-mob", {
    x: 410,
    y: -240,                    // Move 700px to the left
    duration: 4,                // Animation duration (3 seconds)
    ease: "power1.inOut",        // Smooth easing
    repeat: -1,                  // Infinite loop
    yoyo: true,                  // Reverse direction after reaching the end
    onUpdate: function () {       // Monitor the position during the animation
      const aboutBlockImg6 = document.querySelector('.about-block-img-6-mob');
      const xPos = gsap.getProperty(aboutBlockImg6, "x"); // Get current x position
      const tolerance = 5; // Allow a small range to account for minor offsets
      // When the element is close to the left end (-700px)

      if (xPos <= 0 + tolerance && zIndexState !== 2) {
        aboutBlockImg6.style.zIndex = "2"; // Reduce z-index (move behind)
        zIndexState = 2; // Update state
      }
      // When the element is close to the original position (0px)
      else if (xPos >= 410 - tolerance && zIndexState !== 18) {
        aboutBlockImg6.style.zIndex = "18"; // Increase z-index (move in front)
        zIndexState = 18; // Update state
      }
    }
    });
    })

    gsap.matchMedia().add("(max-width: 450px)", () => {
      gsap.to(".about-block-img-6-mob", {
    x: 390,
    y: -230,                    // Move 700px to the left
    duration: 4,                // Animation duration (3 seconds)
    ease: "power1.inOut",        // Smooth easing
    repeat: -1,                  // Infinite loop
    yoyo: true,                  // Reverse direction after reaching the end
    onUpdate: function () {       // Monitor the position during the animation
      const aboutBlockImg6 = document.querySelector('.about-block-img-6-mob');
      const xPos = gsap.getProperty(aboutBlockImg6, "x"); // Get current x position
      const tolerance = 5; // Allow a small range to account for minor offsets
      // When the element is close to the left end (-700px)

      if (xPos <= 0 + tolerance && zIndexState !== 2) {
        aboutBlockImg6.style.zIndex = "2"; // Reduce z-index (move behind)
        zIndexState = 2; // Update state
      }
      // When the element is close to the original position (0px)
      else if (xPos >= 390 - tolerance && zIndexState !== 18) {
        aboutBlockImg6.style.zIndex = "18"; // Increase z-index (move in front)
        zIndexState = 18; // Update state
      }
    }
    });
    })

    gsap.matchMedia().add("(max-width: 400px)", () => {
      gsap.to(".about-block-img-6-mob", {
    x: 340,
    y: -190,                    // Move 700px to the left
    duration: 4,                // Animation duration (3 seconds)
    ease: "power1.inOut",        // Smooth easing
    repeat: -1,                  // Infinite loop
    yoyo: true,                  // Reverse direction after reaching the end
    onUpdate: function () {       // Monitor the position during the animation
      const aboutBlockImg6 = document.querySelector('.about-block-img-6-mob');
      const xPos = gsap.getProperty(aboutBlockImg6, "x"); // Get current x position
      const tolerance = 5; // Allow a small range to account for minor offsets
      // When the element is close to the left end (-700px)

      if (xPos <= 0 + tolerance && zIndexState !== 2) {
        aboutBlockImg6.style.zIndex = "2"; // Reduce z-index (move behind)
        zIndexState = 2; // Update state
      }
      // When the element is close to the original position (0px)
      else if (xPos >= 340 - tolerance && zIndexState !== 18) {
        aboutBlockImg6.style.zIndex = "18"; // Increase z-index (move in front)
        zIndexState = 18; // Update state
      }
    }
    });
    })

    gsap.matchMedia().add("(max-width: 350px)", () => {
      gsap.to(".about-block-img-6-mob", {
    x: 290,
    y: -180,                    // Move 700px to the left
    duration: 4,                // Animation duration (3 seconds)
    ease: "power1.inOut",        // Smooth easing
    repeat: -1,                  // Infinite loop
    yoyo: true,                  // Reverse direction after reaching the end
    onUpdate: function () {       // Monitor the position during the animation
      const aboutBlockImg6 = document.querySelector('.about-block-img-6-mob');
      const xPos = gsap.getProperty(aboutBlockImg6, "x"); // Get current x position
      const tolerance = 5; // Allow a small range to account for minor offsets
      // When the element is close to the left end (-700px)

      if (xPos <= 0 + tolerance && zIndexState !== 2) {
        aboutBlockImg6.style.zIndex = "2"; // Reduce z-index (move behind)
        zIndexState = 2; // Update state
      }
      // When the element is close to the original position (0px)
      else if (xPos >= 320 - tolerance && zIndexState !== 18) {
        aboutBlockImg6.style.zIndex = "18"; // Increase z-index (move in front)
        zIndexState = 18; // Update state
      }
    }
    });
    })

  

 

gsap.matchMedia().add("(max-width: 768px)", () => {
  gsap.to(".about-block-img-2", { 
    x: 5,
    y: -7, 
    rotation: 5,
    repeat: -1, 
    yoyo: true, 
    duration: 2, 
    ease: "sine.inOut"
  });
})

gsap.matchMedia().add("(min-width: 768px)", () => {
  gsap.to(".about-block-img-2", { 
    x: 5,
    y: -20, 
    rotation: 5,
    repeat: -1, 
    yoyo: true, 
    duration: 2, 
    ease: "sine.inOut"
  });
})


gsap.matchMedia().add("(max-width: 1650px)", () => {
  gsap.to(".about-block-img-8", {
    x: 40, // Slide 200px to the right
    duration: 2, // Duration of 2 seconds
    ease: "sine.inOut", // Smooth easing
    repeat: -1, // Infinite repeat
    yoyo: true, // Return to original position
  });
})

gsap.matchMedia().add("(min-width: 1651px)", () => {
  gsap.to(".about-block-img-8", {
    x: 90, // Slide 200px to the right
    duration: 2, // Duration of 2 seconds
    ease: "sine.inOut", // Smooth easing
    repeat: -1, // Infinite repeat
    yoyo: true, // Return to original position
  });
})

gsap.matchMedia().add("(max-width: 768px)", () => {
  gsap.to(".about-block-img-8", {
    x: 170, // Slide 200px to the right
    duration: 2, // Duration of 2 seconds
    ease: "sine.inOut", // Smooth easing
    repeat: -1, // Infinite repeat
    yoyo: true, // Return to original position
  });
})

gsap.matchMedia().add("(max-width: 600px)", () => {
  gsap.to(".about-block-img-8", {
    x: 140, // Slide 200px to the right
    duration: 2, // Duration of 2 seconds
    ease: "sine.inOut", // Smooth easing
    repeat: -1, // Infinite repeat
    yoyo: true, // Return to original position
  });
})

gsap.matchMedia().add("(max-width: 500px)", () => {
  gsap.to(".about-block-img-8", {
    x: 110, // Slide 200px to the right
    duration: 2, // Duration of 2 seconds
    ease: "sine.inOut", // Smooth easing
    repeat: -1, // Infinite repeat
    yoyo: true, // Return to original position
  });
})

gsap.matchMedia().add("(min-width: 768px)", () => {
  gsap.to(".about-block-img-5", {
    scale: 1.05, // Scale up by 10%
    duration: 1, // Duration of each pulse
    repeat: -1, // Infinite repeat
    yoyo: true, // Alternate back to the original size
    ease: "power1.inOut", // Smooth easing
  });
})

gsap.matchMedia().add("(max-width: 768px)", () => {
  gsap.to(".about-block-img-5", {
    scale: 1.08, // Scale up by 10%
    duration: 1, // Duration of each pulse
    repeat: -1, // Infinite repeat
    yoyo: true, // Alternate back to the original size
    ease: "power1.inOut", // Smooth easing
  });
})




















// gsap.matchMedia().add("(max-width: 768px)", () => {
//   gsap.to(".about-position-tv-mob", {
//     width: "75%", // More width expansion
//     scale: 1.05, // Subtle zoom
//     duration: 2.5,
//     repeat: -1,
//     yoyo: true,
//     ease: "power1.inOut",
//     transformOrigin: "right center", // Animation starts from left side
//     overwrite: "auto" // Prevents animation conflicts
//   });
// });











  







