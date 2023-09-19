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
    smooth: true
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
    ./har/website.0000.png
    ./har/website.0001.png
    ./har/website.0002.png
    ./har/website.0003.png
    ./har/website.0004.png
    ./har/website.0005.png
    ./har/website.0006.png
    ./har/website.0007.png
    ./har/website.0008.png
    ./har/website.0009.png
    ./har/website.0010.png
    ./har/website.0011.png
    ./har/website.0012.png
    ./har/website.0013.png
    ./har/website.0014.png
    ./har/website.0015.png
    ./har/website.0016.png
    ./har/website.0017.png
    ./har/website.0018.png
    ./har/website.0019.png
    ./har/website.0020.png
    ./har/website.0021.png
    ./har/website.0022.png
    ./har/website.0023.png
    ./har/website.0024.png
    ./har/website.0025.png
    ./har/website.0026.png
    ./har/website.0027.png
    ./har/website.0028.png
    ./har/website.0029.png
    ./har/website.0030.png
    ./har/website.0031.png
    ./har/website.0032.png
    ./har/website.0033.png
    ./har/website.0034.png
    ./har/website.0035.png
    ./har/website.0036.png
    ./har/website.0037.png
    ./har/website.0038.png
    ./har/website.0039.png
    ./har/website.0040.png
    ./har/website.0041.png
    ./har/website.0042.png
    ./har/website.0043.png
    ./har/website.0044.png
    ./har/website.0045.png
    ./har/website.0046.png
    ./har/website.0047.png
    ./har/website.0048.png
    ./har/website.0049.png
    ./har/website.0050.png
    ./har/website.0051.png
    ./har/website.0052.png
    ./har/website.0053.png
    ./har/website.0054.png
    ./har/website.0055.png
    ./har/website.0056.png
    ./har/website.0057.png
    ./har/website.0058.png
    ./har/website.0059.png
    ./har/website.0060.png
    ./har/website.0061.png
    ./har/website.0062.png
    ./har/website.0063.png
    ./har/website.0064.png
    ./har/website.0065.png
    ./har/website.0066.png
    ./har/website.0067.png
    ./har/website.0068.png
    ./har/website.0069.png
    ./har/website.0070.png
    ./har/website.0071.png
    ./har/website.0072.png
    ./har/website.0073.png
    ./har/website.0074.png
    ./har/website.0075.png
    ./har/website.0076.png
    ./har/website.0077.png
    ./har/website.0078.png
    ./har/website.0079.png
    ./har/website.0080.png
    ./har/website.0081.png
    ./har/website.0082.png
    ./har/website.0083.png
    ./har/website.0084.png
    ./har/website.0085.png
    ./har/website.0086.png
    ./har/website.0087.png
    ./har/website.0088.png
    ./har/website.0089.png
    ./har/website.0090.png
    ./har/website.0091.png
    ./har/website.0092.png
    ./har/website.0093.png
    ./har/website.0094.png
    ./har/website.0095.png
    ./har/website.0096.png
    ./har/website.0097.png
    ./har/website.0098.png
    ./har/website.0099.png
    ./har/website.0100.png
    ./har/website.0101.png
    ./har/website.0102.png
    ./har/website.0103.png
    ./har/website.0104.png
    ./har/website.0105.png
    ./har/website.0106.png
    ./har/website.0107.png
    ./har/website.0108.png
    ./har/website.0109.png
    ./har/website.0110.png
    ./har/website.0111.png
    ./har/website.0112.png
    ./har/website.0113.png
    ./har/website.0114.png
    ./har/website.0115.png
    ./har/website.0116.png
    ./har/website.0117.png
    ./har/website.0118.png
    ./har/website.0119.png
    ./har/website.0120.png
    ./har/website.0121.png
    ./har/website.0122.png
    ./har/website.0123.png
    ./har/website.0124.png
    ./har/website.0125.png
    ./har/website.0126.png
    ./har/website.0127.png
    ./har/website.0128.png
    ./har/website.0129.png
    ./har/website.0130.png
    ./har/website.0131.png
    ./har/website.0132.png
    ./har/website.0133.png
    ./har/website.0134.png
    ./har/website.0135.png
    ./har/website.0136.png
    ./har/website.0137.png
    ./har/website.0138.png
    ./har/website.0139.png
    ./har/website.0140.png
    ./har/website.0141.png
    ./har/website.0142.png
    ./har/website.0143.png
    ./har/website.0144.png
    ./har/website.0145.png
    ./har/website.0146.png
    ./har/website.0147.png
    ./har/website.0148.png
    ./har/website.0149.png
    ./har/website.0150.png
    ./har/website.0151.png
    ./har/website.0152.png
    ./har/website.0153.png
    ./har/website.0154.png
    ./har/website.0155.png
    ./har/website.0156.png
    ./har/website.0157.png
    ./har/website.0158.png
    ./har/website.0159.png
    ./har/website.0160.png
    ./har/website.0161.png
    ./har/website.0162.png
    ./har/website.0163.png
    ./har/website.0164.png
    ./har/website.0165.png
    ./har/website.0166.png
    ./har/website.0167.png
    ./har/website.0168.png
    ./har/website.0169.png
    ./har/website.0170.png
    ./har/website.0171.png
    ./har/website.0172.png
    ./har/website.0173.png
    ./har/website.0174.png
    ./har/website.0175.png
    ./har/website.0176.png
    ./har/website.0177.png
    ./har/website.0178.png
    ./har/website.0179.png
    ./har/website.0180.png
    ./har/website.0181.png
    ./har/website.0182.png
    ./har/website.0183.png
    ./har/website.0184.png
    ./har/website.0185.png
    ./har/website.0186.png
    ./har/website.0187.png
    ./har/website.0188.png
    ./har/website.0189.png
    ./har/website.0190.png
    ./har/website.0191.png
    ./har/website.0192.png
    ./har/website.0193.png
    ./har/website.0194.png
    ./har/website.0195.png
    ./har/website.0196.png
    ./har/website.0197.png
    ./har/website.0198.png
    ./har/website.0199.png
    ./har/website.0200.png
    ./har/website.0201.png
    ./har/website.0202.png
    ./har/website.0203.png
    ./har/website.0204.png
    ./har/website.0205.png
    ./har/website.0206.png
    ./har/website.0207.png
    ./har/website.0208.png
    ./har/website.0209.png
    ./har/website.0210.png
    ./har/website.0211.png
    ./har/website.0212.png
    ./har/website.0213.png
    ./har/website.0214.png
    ./har/website.0215.png
    ./har/website.0216.png
    ./har/website.0217.png
    ./har/website.0218.png
    ./har/website.0219.png
    ./har/website.0220.png
    ./har/website.0221.png
    ./har/website.0222.png
    ./har/website.0223.png
    ./har/website.0224.png
    ./har/website.0225.png
    ./har/website.0226.png
    ./har/website.0227.png
    ./har/website.0228.png
    ./har/website.0229.png
    ./har/website.0230.png
    ./har/website.0231.png
    ./har/website.0232.png
    ./har/website.0233.png
    ./har/website.0234.png
    ./har/website.0235.png
    ./har/website.0236.png
    ./har/website.0237.png
    ./har/website.0238.png
    ./har/website.0239.png
    ./har/website.0240.png
    ./har/website.0241.png
    ./har/website.0242.png
    ./har/website.0243.png
    ./har/website.0244.png
    ./har/website.0245.png
    ./har/website.0246.png
    ./har/website.0247.png
    ./har/website.0248.png
    ./har/website.0249.png
    ./har/website.0250.png
    ./har/website.0251.png
    ./har/website.0252.png
    ./har/website.0253.png
    ./har/website.0254.png
    ./har/website.0255.png
    ./har/website.0256.png
    ./har/website.0257.png
    ./har/website.0258.png
    ./har/website.0259.png
    ./har/website.0260.png
    ./har/website.0261.png
    ./har/website.0262.png
    ./har/website.0263.png
    ./har/website.0264.png
    ./har/website.0265.png
    ./har/website.0266.png
    ./har/website.0267.png
    ./har/website.0268.png
    ./har/website.0269.png
    ./har/website.0270.png
    ./har/website.0271.png
    ./har/website.0272.png
    ./har/website.0273.png
    ./har/website.0274.png
    ./har/website.0275.png
    ./har/website.0276.png
    ./har/website.0277.png
    ./har/website.0278.png
    ./har/website.0279.png
    ./har/website.0280.png
    ./har/website.0281.png
    ./har/website.0282.png
    ./har/website.0283.png
    ./har/website.0284.png
    ./har/website.0285.png
    ./har/website.0286.png
    ./har/website.0287.png
    ./har/website.0288.png
    ./har/website.0289.png
    ./har/website.0290.png
    ./har/website.0291.png
    ./har/website.0292.png
    ./har/website.0293.png
    ./har/website.0294.png
    ./har/website.0295.png
    ./har/website.0296.png
    ./har/website.0297.png
    ./har/website.0298.png
    ./har/website.0299.png
    ./har/website.0300.png
    ./har/website.0301.png
    ./har/website.0302.png
    ./har/website.0303.png
    ./har/website.0304.png
    ./har/website.0305.png
    ./har/website.0306.png
    ./har/website.0307.png
    ./har/website.0308.png
    ./har/website.0309.png
    ./har/website.0310.png
    ./har/website.0311.png
    ./har/website.0312.png
    ./har/website.0313.png
    ./har/website.0314.png
    ./har/website.0315.png
    ./har/website.0316.png
    ./har/website.0317.png
    ./har/website.0318.png
    ./har/website.0319.png
    ./har/website.0320.png
    ./har/website.0321.png
    ./har/website.0322.png
    ./har/website.0323.png
    ./har/website.0324.png
    ./har/website.0325.png
    ./har/website.0326.png
    ./har/website.0327.png
    ./har/website.0328.png
    ./har/website.0329.png
    ./har/website.0330.png
 `;
  return data.split("\n")[index];
}

const frameCount = 303;

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
      start: "65% bottom",
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
      start: "55% bottom",
      end: "55% top",
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