function main() {
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

main();
