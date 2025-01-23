UnicornStudio.addScene({
    elementId: "ruzakiEffect", // id of the HTML element to render your scene in (the scene will use its dimensions)
    fps: 100, // frames per second (0-120) [optional]
    scale: 1, // rendering scale, use smaller values for performance boost (0.25-1) [optional]
    dpi: 1, // pixel ratio [optional]
    lazyLoad: true, // will not initialize the scene until it scrolls into view
    filePath: "./Assest/effect.json", // if youre hosting your own exported json code, point to it here (do not use both filePath and projectId, only one is required)
    interactivity: {
      // [optional]
      mouse: {
        disableMobile: true, // disable touch movement on mobile
      },
    },
  })
    .then((scene) => {
      // scene is ready
      // To remove a scene, you can use:
      // scene.destroy()
    })
    .catch((err) => {
      console.error(err);
    });


    var videoContainer = document.querySelector(".sectionTwo");
    var blob = document.querySelector("#blobVideo");

    videoContainer.addEventListener("mousemove", function(details){
    blob.style.transform = `translate(${details.clientX * 0.5}px, ${details.clientY * 0.3}px)`
    })






var videoContainer = document.querySelector(".sectionTwo");
var blob = document.querySelector("#blobVideo");

videoContainer.addEventListener("mousemove", function(details){
  blob.style.transform = `translate(${details.clientX * 0.5}px, ${details.clientY * 0.3}px)`
})


document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger)
 
  var part1 = gsap.timeline({
    scrollTrigger:{
      trigger: "#mainSecOne",
      start:"10% 100%",
      end:"100% 0%",
      scrub: true,
      // markers: true,
      duration: 1,
    }
  });
  
  part1.to("#headingOne",{
    backgroundColor: "#fd7024"
  }, 'a')
  .from("#mainSecOne h1, #mainSecOne p, #mainSecOne img",{
    opacity: 0,
    y: -850,
  }, 'a')
  .to("#mainSecOne h1, #mainSecOne p, #mainSecOne img",{
    opacity:0,
    y:850,
  })


  var part2 = gsap.timeline({
    scrollTrigger:{
      trigger: "#mainSecOne-2",
      start:"25% 100%",
      end:"100% 0%",
      scrub: true,
      // markers: true,
      duration: 1,
    }
  });
  part2.to("#headingOne-2",{
    backgroundColor: "#fd7024"
  }, 'b')
  .from("#mainSecOne-2 h1, #mainSecOne-2 p, #mainSecOne-2 img",{
    opacity: 0,
    y: -850,
  }, 'b')
  .to("#mainSecOne-2 h1, #mainSecOne-2 p, #mainSecOne-2 img",{
    opacity:0,
    y:850,
  })


  var part3 = gsap.timeline({
    scrollTrigger:{
      trigger: "#mainSecOne-3",
      start:"25% 100%",
      end:"90% 0%",
      scrub: true,
      // markers: true,
      duration: 1,
    }
  });
  part3.to("#headingOne-3",{
    backgroundColor: "#fd7024"
  }, 'c')
  .from("#mainSecOne-3 h1, #mainSecOne-3 p, #mainSecOne-3 img",{
    opacity: 0,
    y: -850,
  }, 'c')
  .to("#mainSecOne-3 h1, #mainSecOne-3 p, #mainSecOne-3 img",{
    opacity:0,
    y:850,
  })


  var part4 = gsap.timeline({
    scrollTrigger:{
      trigger: "#mainSecOne-4",
      start:"25% 100%",
      end:"90% 0%",
      scrub: true,
      // markers: true,
      duration: 1,
    }
  });
  part4.to("#headingOne-4",{
    backgroundColor: "#fd7024"
  }, 'c')
  .from("#mainSecOne-4 h1, #mainSecOne-4 p, #mainSecOne-4 img",{
    opacity: 0,
    y: -850,
  }, 'c')
  .to("#mainSecOne-4 h1, #mainSecOne-4 p, #mainSecOne-4 img",{
    opacity:0,
    y:850,
  })


 });

 