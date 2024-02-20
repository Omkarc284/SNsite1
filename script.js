// document.onreadystatechange = function() {
//   if (document.readyState !== "complete") {
//       document.querySelector("body").style.visibility = "hidden";
//       document.querySelector(".loader").style.visibility = "visible";
//   } else {
//       document.querySelector(".loader").style.display = "none";
//       document.querySelector("body").style.visibility = "visible";
//   }
// };
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

gsap.registerPlugin(ScrollTrigger);
function loco(){
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
    scrollbarClass: 'scrollerClass'
    });
    const slider= document.querySelector('#about');

    $('#aboutlink').on('click', function() {
        locoScroll.scrollTo(slider)
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
    const slider1= document.querySelector('#portfolio');
    $('#portfoliolink').on('click', function() {
      locoScroll.scrollTo(slider1)
    });

    const slider3= document.querySelector('#main');

    $('#top').on('click', function() {
        locoScroll.scrollTo(slider3)
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });


    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
}

loco();

const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
    ./har/website.0000.webp
    ./har/website.0001.webp
    ./har/website.0002.webp
    ./har/website.0003.webp
    ./har/website.0004.webp
    ./har/website.0005.webp
    ./har/website.0006.webp
    ./har/website.0007.webp
    ./har/website.0008.webp
    ./har/website.0009.webp
    ./har/website.0010.webp
    ./har/website.0011.webp
    ./har/website.0012.webp
    ./har/website.0013.webp
    ./har/website.0014.webp
    ./har/website.0015.webp
    ./har/website.0016.webp
    ./har/website.0017.webp
    ./har/website.0018.webp
    ./har/website.0019.webp
    ./har/website.0020.webp
    ./har/website.0021.webp
    ./har/website.0022.webp
    ./har/website.0023.webp
    ./har/website.0024.webp
    ./har/website.0025.webp
    ./har/website.0026.webp
    ./har/website.0027.webp
    ./har/website.0028.webp
    ./har/website.0029.webp
    ./har/website.0030.webp
    ./har/website.0031.webp
    ./har/website.0032.webp
    ./har/website.0033.webp
    ./har/website.0034.webp
    ./har/website.0035.webp
    ./har/website.0036.webp
    ./har/website.0037.webp
    ./har/website.0038.webp
    ./har/website.0039.webp
    ./har/website.0040.webp
    ./har/website.0041.webp
    ./har/website.0042.webp
    ./har/website.0043.webp
    ./har/website.0044.webp
    ./har/website.0045.webp
    ./har/website.0046.webp
    ./har/website.0047.webp
    ./har/website.0048.webp
    ./har/website.0049.webp
    ./har/website.0050.webp
    ./har/website.0051.webp
    ./har/website.0052.webp
    ./har/website.0053.webp
    ./har/website.0054.webp
    ./har/website.0055.webp
    ./har/website.0056.webp
    ./har/website.0057.webp
    ./har/website.0058.webp
    ./har/website.0059.webp
    ./har/website.0060.webp
    ./har/website.0061.webp
    ./har/website.0062.webp
    ./har/website.0063.webp
    ./har/website.0064.webp
    ./har/website.0065.webp
    ./har/website.0066.webp
    ./har/website.0067.webp
    ./har/website.0068.webp
    ./har/website.0069.webp
    ./har/website.0070.webp
    ./har/website.0071.webp
    ./har/website.0072.webp
    ./har/website.0073.webp
    ./har/website.0074.webp
    ./har/website.0075.webp
    ./har/website.0076.webp
    ./har/website.0077.webp
    ./har/website.0078.webp
    ./har/website.0079.webp
    ./har/website.0080.webp
    ./har/website.0081.webp
    ./har/website.0082.webp
    ./har/website.0083.webp
    ./har/website.0084.webp
    ./har/website.0085.webp
    ./har/website.0086.webp
    ./har/website.0087.webp
    ./har/website.0088.webp
    ./har/website.0089.webp
    ./har/website.0090.webp
    ./har/website.0091.webp
    ./har/website.0092.webp
    ./har/website.0093.webp
    ./har/website.0094.webp
    ./har/website.0095.webp
    ./har/website.0096.webp
    ./har/website.0097.webp
    ./har/website.0098.webp
    ./har/website.0099.webp
    ./har/website.0100.webp
    ./har/website.0101.webp
    ./har/website.0102.webp
    ./har/website.0103.webp
    ./har/website.0104.webp
    ./har/website.0105.webp
    ./har/website.0106.webp
    ./har/website.0107.webp
    ./har/website.0108.webp
    ./har/website.0109.webp
    ./har/website.0110.webp
    ./har/website.0111.webp
    ./har/website.0112.webp
    ./har/website.0113.webp
    ./har/website.0114.webp
    ./har/website.0115.webp
    ./har/website.0116.webp
    ./har/website.0117.webp
    ./har/website.0118.webp
    ./har/website.0119.webp
    ./har/website.0120.webp
    ./har/website.0121.webp
    ./har/website.0122.webp
    ./har/website.0123.webp
    ./har/website.0124.webp
    ./har/website.0125.webp
    ./har/website.0126.webp
    ./har/website.0127.webp
    ./har/website.0128.webp
    ./har/website.0129.webp
    ./har/website.0130.webp
    ./har/website.0131.webp
    ./har/website.0132.webp
    ./har/website.0133.webp
    ./har/website.0134.webp
    ./har/website.0135.webp
    ./har/website.0136.webp
    ./har/website.0137.webp
    ./har/website.0138.webp
    ./har/website.0139.webp
    ./har/website.0140.webp
    ./har/website.0141.webp
    ./har/website.0142.webp
    ./har/website.0143.webp
    ./har/website.0144.webp
    ./har/website.0145.webp
    ./har/website.0146.webp
    ./har/website.0147.webp
    ./har/website.0148.webp
    ./har/website.0149.webp
    ./har/website.0150.webp
    ./har/website.0151.webp
    ./har/website.0152.webp
    ./har/website.0153.webp
    ./har/website.0154.webp
    ./har/website.0155.webp
    ./har/website.0156.webp
    ./har/website.0157.webp
    ./har/website.0158.webp
    ./har/website.0159.webp
    ./har/website.0160.webp
    ./har/website.0161.webp
    ./har/website.0162.webp
    ./har/website.0163.webp
    ./har/website.0164.webp
    ./har/website.0165.webp
    ./har/website.0166.webp
    ./har/website.0167.webp
    ./har/website.0168.webp
    ./har/website.0169.webp
    ./har/website.0170.webp
    ./har/website.0171.webp
    ./har/website.0172.webp
    ./har/website.0173.webp
    ./har/website.0174.webp
    ./har/website.0175.webp
    ./har/website.0176.webp
    ./har/website.0177.webp
    ./har/website.0178.webp
    ./har/website.0179.webp
    ./har/website.0180.webp
    ./har/website.0181.webp
    ./har/website.0182.webp
    ./har/website.0183.webp
    ./har/website.0184.webp
    ./har/website.0185.webp
    ./har/website.0186.webp
    ./har/website.0187.webp
    ./har/website.0188.webp
    ./har/website.0189.webp
    ./har/website.0190.webp
    ./har/website.0191.webp
    ./har/website.0192.webp
    ./har/website.0193.webp
    ./har/website.0194.webp
    ./har/website.0195.webp
    ./har/website.0196.webp
    ./har/website.0197.webp
    ./har/website.0198.webp
    ./har/website.0199.webp
    ./har/website.0200.webp
    ./har/website.0201.webp
    ./har/website.0202.webp
    ./har/website.0203.webp
    ./har/website.0204.webp
    ./har/website.0205.webp
    ./har/website.0206.webp
    ./har/website.0207.webp
    ./har/website.0208.webp
    ./har/website.0209.webp
    ./har/website.0210.webp
    ./har/website.0211.webp
    ./har/website.0212.webp
    ./har/website.0213.webp
    ./har/website.0214.webp
    ./har/website.0215.webp
    ./har/website.0216.webp
    ./har/website.0217.webp
    ./har/website.0218.webp
    ./har/website.0219.webp
    ./har/website.0220.webp
    ./har/website.0221.webp
    ./har/website.0222.webp
    ./har/website.0223.webp
    ./har/website.0224.webp
    ./har/website.0225.webp
    ./har/website.0226.webp
    ./har/website.0227.webp
    ./har/website.0228.webp
    ./har/website.0229.webp
    ./har/website.0230.webp
    ./har/website.0231.webp
    ./har/website.0232.webp
    ./har/website.0233.webp
    ./har/website.0234.webp
    ./har/website.0235.webp
    ./har/website.0236.webp
    ./har/website.0237.webp
    ./har/website.0238.webp
    ./har/website.0239.webp
    ./har/website.0240.webp
    ./har/website.0241.webp
    ./har/website.0242.webp
    ./har/website.0243.webp
    ./har/website.0244.webp
    ./har/website.0245.webp
    ./har/website.0246.webp
    ./har/website.0247.webp
    ./har/website.0248.webp
    ./har/website.0249.webp
    ./har/website.0250.webp
    ./har/website.0251.webp
    ./har/website.0252.webp
    ./har/website.0253.webp
    ./har/website.0254.webp
    ./har/website.0255.webp
    ./har/website.0256.webp
    ./har/website.0257.webp
    ./har/website.0258.webp
    ./har/website.0259.webp
    ./har/website.0260.webp
    ./har/website.0261.webp
    ./har/website.0262.webp
    ./har/website.0263.webp
    ./har/website.0264.webp
    ./har/website.0265.webp
    ./har/website.0266.webp
    ./har/website.0267.webp
    ./har/website.0268.webp
    ./har/website.0269.webp
    ./har/website.0270.webp
    ./har/website.0271.webp
    ./har/website.0272.webp
    ./har/website.0273.webp
    ./har/website.0274.webp
    ./har/website.0275.webp
    ./har/website.0276.webp
    ./har/website.0277.webp
    ./har/website.0278.webp
    ./har/website.0279.webp
    ./har/website.0280.webp
    ./har/website.0281.webp
    ./har/website.0282.webp
    ./har/website.0283.webp
    ./har/website.0284.webp
    ./har/website.0285.webp
    ./har/website.0286.webp
    ./har/website.0287.webp
    ./har/website.0288.webp
    ./har/website.0289.webp
    ./har/website.0290.webp
    ./har/website.0291.webp
    ./har/website.0292.webp
    ./har/website.0293.webp
    ./har/website.0294.webp
    ./har/website.0295.webp
    ./har/website.0296.webp
    ./har/website.0297.webp
    ./har/website.0298.webp
    ./har/website.0299.webp
    ./har/website.0300.webp
    ./har/website.0301.webp
    ./har/website.0302.webp
    ./har/website.0303.webp
    ./har/website.0304.webp
    ./har/website.0305.webp
    ./har/website.0306.webp
    ./har/website.0307.webp
    ./har/website.0308.webp
    ./har/website.0309.webp
    ./har/website.0310.webp
    ./har/website.0311.webp
    ./har/website.0312.webp
    ./har/website.0313.webp
    ./har/website.0314.webp
    ./har/website.0315.webp
    ./har/website.0316.webp
    ./har/website.0317.webp
    ./har/website.0318.webp
    ./har/website.0319.webp
    ./har/website.0320.webp
    ./har/website.0321.webp
    ./har/website.0322.webp
    ./har/website.0323.webp
    ./har/website.0324.webp
    ./har/website.0325.webp
    ./har/website.0326.webp
    ./har/website.0327.webp
    ./har/website.0328.webp
    ./har/website.0329.webp
    ./har/website.0330.webp
 `;
  return data.split("\n")[index];
}

const frameCount = 285;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}




gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 1,
    trigger: `canvas`,
    //   set start end according to preference
    start: `top top`,
    end: `600% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});
// gsap.to(window,{
//   duration: 2,
//   scrollTo: `#page1`,

// })

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio ) / 2;
  var centerShift_y = (canvas.height - img.height * ratio ) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y ,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({

  trigger: "canvas",
  pin: true,
  // markers:true,
  scroller: `#main`,
//   set start end according to preference
  start: `top top`,
  end: `600% top`,
});



document.querySelectorAll(".first").forEach((section) => {
  const q = gsap.utils.selector(section);
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: "center center",
      end: "center top",
      pin: true,
      //markers: true,
      scrub: true,
      scroller: '#main'
    }
  });

  tl.to(q("div"), {
    opacity: 0
  });
});
document.querySelectorAll(".second").forEach((section) => {
  const q = gsap.utils.selector(section);
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: "80% bottom",
      end: "80% top",
      pin: true,
      //markers: true,
      scrub: true,
      scroller: '#main'
    }
  });
  tl.from(q("div"), {
    opacity: 0
  });
  tl.add(()=>{}, "+=0.6");
  tl.to(q("div"), {
    opacity: 0
  });
});
document.querySelectorAll(".third").forEach((section) => {
  const q = gsap.utils.selector(section);
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: "75% bottom",
      end: "65% top",
      pin: true,
      //markers: true,
      scrub: true,
      scroller: '#main'
    }
  });
  tl.from(q("div"), {
    opacity: 0
  });
  tl.add(()=>{}, "+=0.6");
  tl.to(q("div"), {
    opacity: 0
  });
});
document.querySelectorAll(".fourth").forEach((section) => {
  const q = gsap.utils.selector(section);
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: "75% bottom",
      end: "65% top",
      pin: true,
      //markers: true,
      scrub: true,
      scroller: '#main'
    }
  });
  tl.from(q("div"), {
    opacity: 0
  });
  tl.add(()=>{}, "+=0.6");
  tl.to(q("div"), {
    opacity: 0
  });
});