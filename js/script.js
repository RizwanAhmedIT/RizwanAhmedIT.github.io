// Show style Scroll top on scroll

document.addEventListener("DOMContentLoaded", ()=>{
  document.querySelector(".scroller").style.display = "none";
})
window.addEventListener("scroll", () => {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 30) {
    document.querySelector(".scroller").style.display = "block";
  }
  else {
    document.querySelector(".scroller").style.display = "none";
  }
})
// Type Writer Effect
class TypeWriter {
  constructor(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }

  type() {
    // Current index of word
    const current = this.wordIndex % this.words.length;
    // Get full text of current word
    const fullTxt = this.words[current];

    // Check if deleting
    if (this.isDeleting) {
      // Remove char
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      // Add char
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    // Insert txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    // Initial Type Speed
    let typeSpeed = 200;

    if (this.isDeleting) {
      typeSpeed /= 2;
    }

    // If word is complete
    if (!this.isDeleting && this.txt === fullTxt) {
      // Make pause at end
      typeSpeed = this.wait;
      // Set delete to true
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      // Move to next word
      this.wordIndex++;
      // Pause before start typing
      typeSpeed = 200;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}


// Init On DOM Load
document.addEventListener('DOMContentLoaded', ()=>{
  const txtElement = document.querySelector('.txt-type');
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait');
  // Init TypeWriter
  new TypeWriter(txtElement, words, wait);
})

document.addEventListener('DOMContentLoaded', () => {
  const txtElement = document.querySelector('.txt-type_2');
  const words = JSON.parse(txtElement.getAttribute('data-words_2'));
  const wait = txtElement.getAttribute('data-wait_2');
  // Init TypeWriter Function
  new TypeWriter(txtElement, words, wait);
})

// current Age Calculator

const date = new Date();
let Current_year = date.getFullYear();
let birth_year = 2001;

let Current_Age = Current_year - birth_year ;

document.getElementById('Current_Age').innerHTML = Current_Age ;

 // progress bar 
 const load = () => {
    const progress_in = document.querySelector('.progress-in');
    const percent = document.querySelector('.skill-percent');
    var i=0;
    var x=100;
    
    progress_in.style.width = "0%";

      if (progress_in.style.width === '0%'){
        setInterval(speed,20);
        
        let speed =()=>{
          
        }
      }
 };