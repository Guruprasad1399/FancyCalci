// select all the buttons
const buttons = document.querySelectorAll('button');
// select the <input type="text" class="display" disabled> element
const display = document.querySelector('.display');

// add eventListener to each button
buttons.forEach(function (button) {
  button.addEventListener('click', calculate);
});

// calculate function
function calculate(event) {
  // current clicked buttons value
  const clickedButtonValue = event.target.value;

  if (clickedButtonValue === '=') {
    // check if the display is not empty then only do the calculation
    if (display.value !== '') {
      // calculate and show the answer to display
      display.value = eval(display.value);
    }
  } else if (clickedButtonValue === 'C') {
    // clear everything on display
    display.value = '';
  }
  else if (clickedButtonValue === 'x') {
    if (display.value !== '') {

      let a = display.value;
      // console.log(a);
      let b = Array.from(a);
      let c = [];
      for (let i = 0; i < b.length - 1; i++) {
        c.push(b[i]);
      }
      let d = c.join("");
      display.value = d;
    }
    else {
      alert('Dont do this');
    }
  }
  else if (clickedButtonValue === 'square') {
    display.value = display.value * display.value;
  }
  else if (clickedButtonValue === 'cube') {
    display.value = display.value * display.value * display.value;
  }
  else if (clickedButtonValue === 'sqrt') {
    display.value = Math.sqrt(display.value);
  }
  else if (clickedButtonValue === 'help') {
    let a = prompt('What do you need help with?');
    if (a !== '') {
      alert('In this calculator you will be able to perform simple arithmetic calculations and this calculator is still under development');
    }
  }
  else if (clickedButtonValue === 'test') {
    alert(typeof (display.value));
  }
  else {
    // otherwise concatenate it to the display
    display.value += clickedButtonValue;
  }
}
