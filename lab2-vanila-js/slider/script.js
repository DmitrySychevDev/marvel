class Slider {
  constructor(slides, dots) {
    this.slides = slides;
    this.dotsWrap = dots;
    this.nearestSlides = {
      curentSlide: 0,
      prevSlide: slides.length - 1,
      nextSlide: 1,
    };
    this.animationIsComplite = true;
    this._plaseSlides();
    this._createDots();
  }

  _plaseSlides() {
    this.slides.forEach((slide, index) => {
      switch (index) {
        case this.nearestSlides.curentSlide:
          slide.style.display = "block";
          slide.style.left = "10%";
          break;
        case this.nearestSlides.nextSlide:
          slide.style.display = "block";
          slide.style.left = "110%";
          break;
        case this.nearestSlides.prevSlide:
          slide.style.display = "block";
          slide.style.left = "-110%";
          break;
        default:
          slide.style.display = "none";
      }
    });
  }

  _createDots = () => {
    for (let i = 0; i < this.slides.length; i++) {
      const dot = document.createElement("div");
      dot.classList.add("dots__dot");
      if (!i) dot.classList.add("dots__dot--active");
      this.dotsWrap.appendChild(dot);
    }
    this.dotsList = document.querySelectorAll(".dots__dot");
  };

  slideTransition = (direction) => {
    return () => {
      if (this.animationIsComplite) {
        this.animationIsComplite = false;
        let offset = 0;
        const interval = setInterval(() => {
          offset += 1.5;

          switch (direction) {
            case "right":
              this.slides[this.nearestSlides.curentSlide].style.left = `${
                10 - offset
              }%`;
              this.slides[this.nearestSlides.nextSlide].style.left = `${
                110 - offset
              }%`;
              break;
            case "left":
              this.slides[this.nearestSlides.curentSlide].style.left = `${
                10 + offset
              }%`;
              this.slides[this.nearestSlides.prevSlide].style.left = `${
                -90 + offset
              }%`;
              break;
          }

          if (offset >= 100) {
            clearInterval(interval);
            this.dotsList
              .item(this.nearestSlides.curentSlide)
              .classList.remove("dots__dot--active");
            let curent;
            switch (direction) {
              case "left":
                this.nearestSlides.nextSlide = this.nearestSlides.curentSlide;
                this.nearestSlides.curentSlide = this.nearestSlides.prevSlide;

                curent = this.nearestSlides.curentSlide;
                if (curent) {
                  this.nearestSlides.prevSlide = curent - 1;
                } else {
                  this.nearestSlides.prevSlide = this.slides.length - 1;
                }

                break;
              case "right":
                this.nearestSlides.prevSlide = this.nearestSlides.curentSlide;
                this.nearestSlides.curentSlide = this.nearestSlides.nextSlide;

                curent = this.nearestSlides.curentSlide;
                if (curent === this.slides.length - 1) {
                  this.nearestSlides.nextSlide = 0;
                } else {
                  this.nearestSlides.nextSlide = curent + 1;
                }
            }
            this.dotsList.item(curent).classList.add("dots__dot--active");
            this.animationIsComplite = true;
            this._plaseSlides();
          }
        });
      }
    };
  };
}

const slides = document.querySelectorAll(".slider__slide");
const dots = document.querySelector(".slider__dots");
const sliderObj = new Slider(slides, dots);

const leftBtn = document.querySelector("#left-btn");
const rightBtn = document.querySelector("#right-btn");

leftBtn.addEventListener("click", sliderObj.slideTransition("left"));
rightBtn.addEventListener("click", sliderObj.slideTransition("right"));
