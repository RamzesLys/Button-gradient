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

links[0].setAttribute("href", "http://ipsum.in.ua/services/elektrifikatsiya/");
links[1].setAttribute("href", "http://ipsum.in.ua/services/sistemy-bezopasnosti/");
links[2].setAttribute("href", "http://ipsum.in.ua/services/sistemy-kontrolya-dostupa/");
links[3].setAttribute("href", "http://ipsum.in.ua/services/video-nablyudenie/");
links[4].setAttribute("href", "http://ipsum.in.ua/services/domofony/");
links[5].setAttribute("href", "http://ipsum.in.ua/services/internet-i-wi-fi/");
links[6].setAttribute("href", "http://ipsum.in.ua/services/tv/");
links[7].setAttribute("href", "http://ipsum.in.ua/services/umnyj-dom/");

console.log(links);