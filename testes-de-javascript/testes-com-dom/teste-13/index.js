function buttonSelect(n) {
  let c;
  let buttonIndex = n;
  for (c = 0; c < 2; c++) {
    document.getElementsByClassName('button')[c].style.background = 'rgba(0, 0, 0, 0.65)';
  }

  document.getElementsByClassName('button')[buttonIndex-1].style.background = 'rgba(0, 0, 0, 0.75)';

}
