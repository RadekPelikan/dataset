const boxes = document.getElementsByClassName("box");

const color = {
  red: 0,
  green: 0,
  blue: 0,
}

window.onload = () => {
  [...boxes].forEach((box) => box.onclick = handleClick);
};

const handleClick = (e) => {
  const box = e.target
  console.log({color})
  color[box.dataset.color] = (color[box.dataset.color] + 1) % 256;
  document.body.style.backgroundColor = `rgb(${color.red} ${color.green} ${color.blue})`
  box.innerText = color[box.dataset.color]
}
