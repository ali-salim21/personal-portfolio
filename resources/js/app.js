const heart = document.querySelector('.heart');

//generate random hex numbers
const random = () => Math.floor(Math.random() * 1000000);
console.log(random());
//change the color of the heart in the footer
heart.style.color = '#' + random();