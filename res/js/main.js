const boxes = document.getElementsByClassName("box");

window.onload = () => {
  [...boxes].forEach((box) => {
    box.onclick = () => {
      document.body.style.backgroundColor = box.dataset.color;
      box.innerText++;
    };
  });
};
