const myBtn = document.querySelector('.my_btn');
myBtn.onmouseover = () => {
  myBtn.classList.add('my_btn-active');
  console.log('over');
}

myBtn.onmouseout = () => {
  myBtn.classList.remove('my_btn-active');
  console.log('out');
}

