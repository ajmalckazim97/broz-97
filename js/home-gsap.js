gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".smooth-scroll"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".smooth-scroll", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".smooth-scroll").style.transform ? "transform" : "fixed"
});




gsap.utils.toArray('.animsec').forEach((animsec, i) => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: animsec,
      scroller: ".smooth-scroll",
      markers: false,
      start: 'top 80%',
      end: 'bottom 50%',
      toggleActions:"restart none none reverse",
      //scrub: .1,
      onScrubComplete: self => {
        if(self.progress === 1) {
          self.kill();
          tl.progress(1);
        }
      }
    }
  });
  tl.from(animsec.querySelectorAll('.hidetext'), {
    yPercent: 100, 
    // delay:.4,
    ease: 'power2',
    onComplete: function () {     // After completing the diagonal movement
      //locoScroll.update()
      //ScrollTrigger.refresh();
      console.log("keeerfsfscdadsf");
      
    }
  });
});


let sections = gsap.utils.toArray(".containers .panel");

gsap.to(sections, {
  xPercent: -99 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".side-scrolling-wrapper",
    scroller: ".smooth-scroll",
    pin: true,
    start: "top +=10px",
    markers: false,
    scrub: 1,
    snap: {
      snapTo: 1 / (sections.length - 1),
      duration: {min: 0.2, max: 0.3},
      delay: 0
    },
    // Base vertical scrolling on how wide the container is so it feels more natural.
    end: () => "+=" + (document.querySelector(".containers").offsetWidth / 9)
  }
});


let sections2 = gsap.utils.toArray(".containers3 .panel");

gsap.to(sections2, {
  xPercent: -100 * (sections2.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".side-scrolling-wrapper2",
    scroller: ".smooth-scroll",
    pin: true,
    start: "top +=10px",
    markers: false,
    scrub: 1,
    snap: {
      snapTo: 1 / (sections2.length - 1),
      duration: {min: 0.2, max:.5},
      delay: 0
    },
    // Base vertical scrolling on how wide the container is so it feels more natural.
    end: () => "+=" + (document.querySelector(".containers3").offsetWidth / 3),

  },
  onStart: function () { 
    console.log("Animation has started!");
    locoScroll.update();
    ScrollTrigger.refresh();
  }
});

// gsap.from(".about-block .bg",{
//   scrollTrigger:{
//       trigger:".about-block",
//       scroller: ".smooth-scroll",
//       start: 'top 40%',
//       markers: false,
//       end: 'bottom 50%',
//       toggleActions:"restart none none reverse",
//   },   
//   delay: .1,
//   scale:1.1,
//   // scrub: 1,
//   duration: 1.5, ease: "Expo.easeInOut", y: -70
// });


gsap.from(".pic-box2 img",{
  scrollTrigger:{
      trigger:".services-block",
      scroller: ".smooth-scroll",
      start: 'top 40%',
      markers: false,
      end: 'bottom 50%',
      toggleActions:"restart none none reverse",
  },   
  delay: .2,
  scale:1.3,
  // scrub: 1,
  duration: 2.5, ease: "Expo.easeInOut", y: 30
});



gsap.from(".pic-box1 img",{
  scrollTrigger:{
      trigger:".services-block",
      scroller: ".smooth-scroll",
      start: 'top 40%',
      markers: false,
      end: 'bottom 50%',
      toggleActions:"restart none none reverse",
  },   
  delay: .2,
  scale:1.3,
  // scrub: 1,
  duration: 2.5, ease: "Expo.easeInOut", y:30
});



gsap.from(".section-titles h6 span",{
  scrollTrigger:{
      trigger:".contact-block",
      scroller: ".smooth-scroll",
      start: 'top 40%',
      markers: false,
      end: 'bottom 50%',
      toggleActions:"restart none none reverse",
  },   
  delay: 1,
  opacity:0,
  scrub: 1,
  duration: 2.5, ease: "elastic.out(1, 0.3)", y: 20
});



gsap.from(".s-shapeL",{
  scrollTrigger:{
      trigger:".parrallax-block",
      scroller: ".smooth-scroll",
      start: 'top 40%',
      markers: false,
      end: 'bottom 50%',
      toggleActions:"restart none none reverse",
  },   
  delay: 1,
  opacity:0,
  scale: 1.4,
  scrub: 1,
  duration: 2.5, ease: "power2.out", 
  onStart: function() {
    console.log("777777777")
    locoScroll.update()
    ScrollTrigger.refresh();
  }
});


gsap.from(".s-shapeR",{
  scrollTrigger:{
      trigger:".parrallax-block",
      scroller: ".smooth-scroll",
      start: 'top 40%',
      markers: false,
      end: 'bottom 50%',
      toggleActions:"restart none none reverse",
  },   
  delay: 1.2,
  opacity:0,
  scale: 1.4,
  y: 100,
  scrub: 1,
  duration: 2.5, ease: "power2.out", 
});


gsap.from(".list-services li",{
  scrollTrigger:{
      trigger:".parrallax-block",
      scroller: ".smooth-scroll",
      start: 'top 40%',
      markers: false,
      end: 'bottom 50%',
      toggleActions:"restart none none reverse",
  },   
  delay: 1.4,
  opacity:0,
  y:40,
  stagger:0.3,
  scrub: 1,
  duration: 2.5, ease: "power2.out", 
});



gsap.from(".saiha-caps",{
    scrollTrigger:{
        trigger:".saiha-caps",
        scroller: ".smooth-scroll",
        start: 'top 60%',
        markers: false,
        end: 'bottom 10%',
        toggleActions:"restart none none reverse",
    },   
    delay: 1,
    opacity:0,
    scrub: 1,
    duration: 2.5, ease: "elastic.out(1, 0.3)", y: -70,
    onStart: function() {
      locoScroll.update();
    }
});



gsap.from(".pic-box1",{
  scrollTrigger:{
      trigger:".services-block",
      scroller: ".smooth-scroll",
      start: 'top 40%',
      markers: false,
      end: 'bottom 50%',
      toggleActions:"restart none none reverse",
  },
  
  delay: 1,
  opacity:0,
  scrub: 1,
  duration: 2.5, ease: "back", x: -70
});


gsap.from(".pic-box2",{
  scrollTrigger:{
      trigger:".services-block",
      scroller: ".smooth-scroll",
      start: 'top 40%',
      markers: false,
      end: 'bottom 50%',
      toggleActions:"restart none none reverse",
  },
  
  delay: 1.2,
  opacity:0,
  scrub: 1,
  duration:1.5, ease: "back", x: 40
});


gsap.from(".num-counts h2 span",{
  scrollTrigger:{
      trigger:".count-block",
      scroller: ".smooth-scroll",
      start: 'top 70%',
      markers: false,
      end: 'bottom 50%',
      //toggleActions:"restart none none none",
  },   
  delay: .1,
  scale:.2,
  x:-20,
  opacity:0,
  stagger: {
    amount: .5, 
    //from: "center",
  },
  duration: .3,
  ease: "back.out(1.7)", 
  onComplete: function () {     // After completing the diagonal movement
    // console.log("keeerfsfscdadsfgopu");
    
  }
});

gsap.from(".num-counts h2 span",{
  scrollTrigger:{
      trigger:".count-block",
      scroller: ".smooth-scroll",
      start: 'top 70%',
      markers: false,
      end: 'bottom 50%',
      toggleActions:"none none none none",
  },   
  delay: .1,
  scale:.2,
  x:-20,
  opacity:0,
  stagger: {
    amount: .5, 
    //from:"center",
  },
  duration: .3,
  ease: "back.out(1.7)", 
});



gsap.from(".titles1", 3, {
    delay: 1,
    opacity:0,
    y: 30,
    ease: Expo.easeInOut
});
gsap.from(".titles2", 3, {
    delay: 1.2,
    opacity:0,
    y: 35,
    ease: Expo.easeInOut
});


// gsap.from(".clients-block ul li",{
//   scrollTrigger:{
//       trigger:".clients-block",
//       scroller: ".smooth-scroll",
//       start:"top 100%",
//       end:"bottom 50%",
//       scrub:true,
//       toggleActions:"restart none none none",
//   },   
//   delay: .3,
//   opacity: 0,
//   duration: 2.5, 
//   x:120,
//   scale:.5,
//   stagger: 0.5,

// });


 // CURSOR
var cursor = $(".cursor"),
follower = $(".cursor-follower");
follower2 = $(".cursor-follower2");

var posX = 0,
    posY = 0;

var mouseX = 0,
    mouseY = 0;

gsap.to({}, 0.016, {
  repeat: -1,
  onRepeat: function() {
    posX += (mouseX - posX) / 9;
    posY += (mouseY - posY) / 9;

    gsap.set(follower, {
        css: {
        left: posX - 8,
        top: posY - 8
        }
    });
    gsap.set(follower2, {
      css: {
      left: posX - 8,
      top: posY - 8
      }
  });

    gsap.set(cursor, {
        css: {
        left: mouseX,
        top: mouseY
        }
    });
  }
});

$(document).on("mousemove", function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
});
// yellow circle
$(".grid-div").on("mouseenter", function() {
    cursor.addClass("active");
    follower.addClass("active");
});
$(".grid-div").on("mouseleave", function() {
    cursor.removeClass("active");
    follower.removeClass("active");
});

// yellow circle
$(".blog-cursor").on("mouseenter", function() {
  cursor.addClass("active");
  follower2.addClass("active");
});
$(".blog-cursor").on("mouseleave", function() {
  cursor.removeClass("active");
  follower2.removeClass("active");
});


const bounceDivs = document.querySelectorAll('.bounce-div'); // Select all elements with the class 'bounce-div'

bounceDivs.forEach(bounceDiv => {
    let bounceAnimation;

    bounceDiv.addEventListener('mouseenter', () => {
        // Create a looping bounce animation
        bounceAnimation = gsap.to(bounceDiv, {
            y: -20, // Move up by 20px
            duration: 1,
            ease: "ease",
            repeat: -1, // Infinite loop
            yoyo: true // Reverse the animation
        });
    });

    bounceDiv.addEventListener('mouseleave', () => {
        // Kill the animation on mouse leave
        if (bounceAnimation) {
            bounceAnimation.kill(); // Stop the animation
            gsap.to(bounceDiv, { y: 0 }); // Ensure it returns to original position
        }
    });
});
//   });



ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

// Social media icons color change for slider1
const homeSlider = document.getElementById('home_slider');
const socialLinks = document.querySelector('.h-socialnavs .social-links');

if (homeSlider) {
  // Use Owl Carousel event for slide changes
  $(homeSlider).on('changed.owl.carousel', function (event) {
  console.log("Slide changed to index:", event.item.index);
    // Check if slider1 is active (index 2 since it's the third slide)
    if (event.item.index === 5) {
      socialLinks.classList.remove('white-logo');
      socialLinks.classList.add('black-logo');
    } else {
      socialLinks.classList.remove('black-logo');
      socialLinks.classList.add('white-logo');
    }
  });
}



// // Assuming locomotiveScroll is your instance
// window.addEventListener('load', () => {
//   // Wait for animations to fully load (adjust timing if needed)
//   setTimeout(() => {
//     //locoScroll.update() // or locomotiveScroll.refresh()
//   }, 500); // Delay can be adjusted based on animation duration
// });

      
// window.locomotiveScroll = new LocomotiveScroll({
//   el: document.querySelector("[data-scroll-container]"),
//   smooth: true
// });

// console.clear();