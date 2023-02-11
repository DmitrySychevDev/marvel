class Slider {
  constructor(slides, dots, startSlide) {
    this._slides = slides;
    this._dotsWrap = dots;
    switch (startSlide) {
      case 0:
        this._nearestSlides = {
          curentSlide: 0,
          prevSlide: slides.length - 1,
          nextSlide: 1,
        };
        break;
      case slides.length - 1:
        this._nearestSlides = {
          curentSlide: startSlide,
          prevSlide: startSlide - 1,
          nextSlide: 0,
        };
        break;

      default:
        this._nearestSlides = {
          curentSlide: startSlide,
          prevSlide: startSlide - 1,
          nextSlide: startSlide + 1,
        };
        break;
    }
    this._animationIsComplite = true;
    this._plaseSlides();
    this._createDots();
    this._userIsActive = true;
    this._startSlideShow();
  }

  _startSlideShow() {
    setInterval(() => {
      if (!this._userIsActive) {
        this.slideTransition("right")();
        this._userIsActive = false;
      }
      this._userIsActive = false;
    }, 5000);
  }

  _plaseSlides() {
    this._slides.forEach((slide, index) => {
      switch (index) {
        case this._nearestSlides.curentSlide:
          slide.style.display = "block";
          slide.style.left = "0%";
          break;
        case this._nearestSlides.nextSlide:
          slide.style.display = "block";
          slide.style.left = "110%";
          break;
        case this._nearestSlides.prevSlide:
          slide.style.display = "block";
          slide.style.left = "-110%";
          break;
        default:
          slide.style.display = "none";
      }
    });
  }

  _createDots = () => {
    for (let i = 0; i < this._slides.length; i++) {
      const dot = document.createElement("div");
      dot.classList.add("dots__dot");
      if (i === this._nearestSlides.curentSlide)
        dot.classList.add("dots__dot--active");
      this._dotsWrap.appendChild(dot);
    }
    this._dotsList = document.querySelectorAll(".dots__dot");
  };

  slideTransition = (direction) => {
    return () => {
      this._userIsActive = true;
      if (this._animationIsComplite) {
        this._animationIsComplite = false;
        let offset = 0;
        const interval = setInterval(() => {
          offset += 1.5;

          switch (direction) {
            case "right":
              this._slides[this._nearestSlides.curentSlide].style.left = `${
                0 - offset
              }%`;
              this._slides[this._nearestSlides.nextSlide].style.left = `${
                110 - offset
              }%`;
              break;
            case "left":
              this._slides[this._nearestSlides.curentSlide].style.left = `${
                0 + offset
              }%`;
              this._slides[this._nearestSlides.prevSlide].style.left = `${
                -110 + offset
              }%`;
              break;
          }

          if (offset >= 110) {
            clearInterval(interval);
            this._dotsList
              .item(this._nearestSlides.curentSlide)
              .classList.remove("dots__dot--active");
            let curent;
            switch (direction) {
              case "left":
                this._nearestSlides.nextSlide = this._nearestSlides.curentSlide;
                this._nearestSlides.curentSlide = this._nearestSlides.prevSlide;

                curent = this._nearestSlides.curentSlide;
                if (curent) {
                  this._nearestSlides.prevSlide = curent - 1;
                } else {
                  this._nearestSlides.prevSlide = this._slides.length - 1;
                }

                break;
              case "right":
                this._nearestSlides.prevSlide = this._nearestSlides.curentSlide;
                this._nearestSlides.curentSlide = this._nearestSlides.nextSlide;

                curent = this._nearestSlides.curentSlide;
                if (curent === this._slides.length - 1) {
                  this._nearestSlides.nextSlide = 0;
                } else {
                  this._nearestSlides.nextSlide = curent + 1;
                }
            }
            this._dotsList.item(curent).classList.add("dots__dot--active");
            this._animationIsComplite = true;
            this._plaseSlides();
            localStorage.setItem("slide", curent);
          }
        });
      }
    };
  };
}
const startSlide = localStorage.getItem("slide")
  ? +localStorage.getItem("slide")
  : 0;

const slides = document.querySelectorAll(".slider__slide");
const dots = document.querySelector(".slider__dots");
const sliderObj = new Slider(slides, dots, startSlide);

const leftBtn = document.querySelector("#left-btn");
const rightBtn = document.querySelector("#right-btn");

leftBtn.addEventListener("click", sliderObj.slideTransition("left"));
rightBtn.addEventListener("click", sliderObj.slideTransition("right"));

document.addEventListener("keydown", (e) => {
  switch (e.code) {
    case "ArrowRight":
      sliderObj.slideTransition("right")();
      break;
    case "ArrowLeft":
      sliderObj.slideTransition("left")();
      break;
    case "Space":
      sliderObj.slideTransition("right")();
  }
  console.log(e.code);
});
