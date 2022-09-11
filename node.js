console.log("HELLO WORLD");
console.error("this is error");
console.warn('warning');

const setBg = () => {
    const randomColor = Math.floor(Math.random()*8**8).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
    color.innerHTML = "#" + randomColor;
  }
  
  genNew.addEventListener("click", setBg);
  setBg();