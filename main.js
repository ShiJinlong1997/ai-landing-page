function initParallaxElems() {
  const parallaxElems = Array.from(document.querySelectorAll('.parallax'));
  addEventListener("pointermove", function(event) {
    const percentage = {
      x: event.clientX / innerWidth - 0.5,
      y: event.clientY / innerHeight - 0.5,
    };
  
    parallaxElems.forEach(function(elem) {
      const translate = {
        x: percentage.x * Number(elem.dataset.speed) * 20,
        y: percentage.y * Number(elem.dataset.speed) * 20,
      };
      elem.style.translate = `${translate.x}px ${translate.y}px`;
    });
  });
}

function initSigninPageBox() {
  const showButton = document.querySelector('#show-signin-button');
  const box = document.querySelector('.signin-page-box');
  const closeButton = document.querySelector('.signin-page-box .close');

  showButton.addEventListener('click', function() {
    box.classList.remove('close-signin');
    box.classList.add('open-signin');
  });

  closeButton.addEventListener('click', function() {
    box.classList.remove('open-signin');
    box.classList.add('close-signin');
  });
}

function main() {
  initParallaxElems();
  initSigninPageBox();
}

main();
