const myBtn = document.querySelector('.my_btn');
myBtn.onmouseover = () => {
  myBtn.classList.add('my_btn-active');
  console.log('over');
}

myBtn.onmouseout = () => {
  myBtn.classList.remove('my_btn-active');
  console.log('out');
}

let links = document.querySelectorAll('.services');
// links.forEach((elem) => {
//   elem.setAttribute("href", "https://www.facebook.com/");
//   console.log(elem);
// })

links[0].setAttribute("href", "https://www.facebook.com/");
links[1].setAttribute("href", "https://www.youtube.com/");

console.log(links);