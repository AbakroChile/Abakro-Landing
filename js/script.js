
window.onload = function () {

  var slider1 = new Slider({
    images: '.slider img',
    btnPrev: '.slider .buttons .prev',
    btnNext: '.slider .buttons .next',
    auto: false
  });
}

function Slider(obj) {

  this.images = document.querySelectorAll(obj.images);
  this.auto = obj.auto;
  this.btnPrev = obj.btnPrev;
  this.btnNext = obj.btnNext;
  this.rate = obj.rate || 1000;

  var i = 0;
  var slider = this;

  this.prev = function () {
    slider.images[i].classList.remove('shown');
    i--;

    if (i < 0) {
      i = slider.images.length - 1;
    }

    slider.images[i].classList.add('shown');
  }

  this.next = function () {
    slider.images[i].classList.remove('shown');
    i++;

    if (i >= slider.images.length) {
      i = 0;
    }

    slider.images[i].classList.add('shown');
  }

  document.querySelector(slider.btnPrev).onclick = slider.prev;
  document.querySelector(slider.btnNext).onclick = slider.next;

  if (slider.auto) {
    setInterval(slider.next, slider.rate);
  }
};
