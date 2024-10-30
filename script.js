const countersEl = document.querySelectorAll(".counter");

countersEl.forEach((counterEl) => {
  counterEl.innerText = 0;

  const updateCounter = () => {
    let currentNum = +counterEl.innerText;
    const dataCeil = +counterEl.getAttribute("data-ceil");
    const increment = dataCeil / 15;
    currentNum = Math.ceil(currentNum + increment);

    if (currentNum < dataCeil) {
      counterEl.innerHTML = currentNum;
      setTimeout(updateCounter, 50);
    } else {
      counterEl.innerHTML = dataCeil;
    }
  };
  updateCounter();
});
