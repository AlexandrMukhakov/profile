"use strict"

//slider

const prevArrow = document.querySelector('.offer_slider_prev'),
    nextArrow = document.querySelector(".offer_slide_next"),
    slideFild = document.querySelector(".offer_slide_inner"),
    slideWraper = document.querySelector(".offer_slider-wrapper"),
    slide = document.querySelectorAll(".offer_slide"),
    slider = document.querySelector(".offer_slider"),
    total = document.querySelector("#total"),
    current = document.querySelector("#current"),
    width = window.getComputedStyle(slideWraper).width;


    let index = 1;
    let offset = 0;

    if (slide.length < 10) {
        total.textContent = `0${slide.length}`;
        current.textContent = `0${index}`;
    } else {
        total.textContent = slide.length;
        current.textContent = index;
    }

    slider.style.position = "relative";
    const dots = [];
    let indicators = document.createElement("li");
    indicators.classList.add("carousel-indicators");
    slider.append(indicators);

    for (let i = 0; i < slide.length; i++) {
        const dot = document.createElement("li");
        dot.classList.add("dot");
        dot.setAttribute("data-slide-to", i + 1);
        indicators.append(dot);
        if (i === 0) {
            dot.style.opacity = 1;
        }
        dots.push(dot);

    }


    slideFild.style.width = 100 * slide.length + "%";
    slideFild.style.display = "flex";
    slideFild.style.transition = "0.5s all";
    slideWraper.style.overflow = "hidden";

    slide.forEach(item => {
        item.width = width;
    });

    slider.style.position = `relative`;

    function plusZero(cur) {
        if (slide.length < 10) {
            cur.textContent = `0${index}`;
        } else {
            cur.textContent = index;
        }
    }

    nextArrow.addEventListener("click", (e) => {

        if (offset == (+width.replace(/\D/g, '') * (slide.length - 1))) {
            offset = 0;
        } else {
            offset += +width.replace(/\D/g, '');
        }
        slideFild.style.transform = `translateX(-${offset}px)`;
        
        if (index == slide.length) {
            index = 1
        } else {
            index++;
        }
        plusZero(current);

        dots.forEach(item => {
            item.style.opacity = `0.5`;
        })
        dots[index - 1].style.opacity = 1;

    });

prevArrow.addEventListener("click", (e) => {
    if (offset == 0) {
        offset = (+width.replace(/\D/g, '') * (slide.length - 1));
    } else {
        offset -= +width.replace(/\D/g, '');
    }
    slideFild.style.transform = `translateX(-${offset}px)`;

    if (index == 1) {
        index = slide.length;
    } else {
        index--;
    }

    plusZero(current);

    dots.forEach(item => {
        item.style.opacity = `0.5`;
    })
    dots[index - 1].style.opacity = 1;
});

dots.forEach(item => {
    item.addEventListener("click", (e) => {
        const slideTo = e.target.getAttribute("data-slide-to");

        index = slideTo;

        offset = (+width.replace(/\D/g, '') * (slideTo - 1));
        slideFild.style.transform = `translateX(-${offset}px)`;


        plusZero(current);
        dots.forEach(item => {
            item.style.opacity = `0.5`;
        })
        dots[index - 1].style.opacity = 1;
    });
})


  
//game

const btnStart = document.querySelector('#iphone'),
      btnStop = document.querySelector('#macbook'),
      images = document.querySelectorAll('.sharik');

      let img1, img2, img3, img4, img5, img6, img7, img8;
 
    class createAnimate {
        constructor(element, img, duration) {
            this.element = element;
            this.img = img;
            this.duration = duration;
        }
        start() {
            btnStart.addEventListener("click", () => {
                if (!this.element) {
                    this.element = this.img.animate([
                        {transform: `translateX(0)`},
                        {transform: `translateX(3600%)`},
                        {transform: `translateX(0px)`},
                        {transform: `translateX(0)`}
            
                    ],
                        {
                            duration: this.duration,
                            iterations: Infinity
                        }
                    );
                } 
            });
            return this.pause(), this.stop();
        }
        pause() {
            this.img.addEventListener("click", () => {
                if (this.element.playState === "paused") {
                    this.element.play();
                } else {
                    this.element.pause();
                }
            });
        }
        stop() {
            btnStop.addEventListener("click", () => {
                this.element.cancel();
                this.element = null;
            });
        }
    }

    new createAnimate(img1, images[0], 15000).start();
    new createAnimate(img2, images[1], 35000).start();
    new createAnimate(img3, images[2], 21000).start();
    new createAnimate(img4, images[3], 12000).start();
    new createAnimate(img5, images[4], 29000).start();
    new createAnimate(img6, images[5], 25000).start();
    new createAnimate(img7, images[6], 15000).start();
    new createAnimate(img8, images[7], 24000).start();
