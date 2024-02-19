//home text effect
const typeSpeedLight = 100; // Typing speed for light mode (in milliseconds)
const typeSpeedDark = 200; // Typing speed for dark mode (in milliseconds)
let typeSpeed = typeSpeedLight; // Initial typing speed

const text = "Developer, Designer"; // Text to be typed

let i = 0;
let typingInterval;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    typingInterval = setTimeout(typeWriter, typeSpeed);
  }
}

// Start typing effect when the page is loaded
window.onload = function() {
  typeWriter();
};

/*===== MENU SHOW =====*/
let apperancer = document.getElementById('appear');
let apearTaker = document.getElementById('nav-menu');
apperancer.addEventListener('click', () => {
  apperancer.classList.toggle('bi-x-square'); // Toggles the class for appearance change
  apearTaker.classList.toggle('show');// Toggles the class to show/hide the navigation menu
});

/*===== MENU SHOW1 =====*/
let light = document.getElementById('qorax');
let icons = document.querySelectorAll('#homeicon');
let navv = document.getElementById('nav-toggle');
let lnk = document.querySelectorAll('#nav');
lnk.forEach(o=>{
  o.addEventListener('click',()=>{
    apearTaker.classList.remove('show');
    apperancer.classList.remove('bi-x-square')
  })
})
/*html elements selections*/
let element = document.getElementById('head');
light.addEventListener('click', () => {
  light.classList.toggle('bi-moon-fill');
  if (light.classList.contains('bi-moon-fill')) {
    // Apply dark mode styles
    typeSpeed = typeSpeedDark;
    let logos = document.querySelectorAll('.service-icon');
    logos.forEach(hphza => {
      hphza.style.color = '#181818';
    });
    document.body.style.backgroundColor = '#181818';
    navv.style.color = '#181818';
    element.style.backgroundColor = '#181818';
    document.body.style.transition = 'background-color 1.6s ease, color 0.5s ease-in-out';
    document.body.style.color = '#fff'; /* Set the font color to white */
    icons.forEach(homeicon => {
      homeicon.style.color = '#fff';
    });
    let log = document.getElementById('logo');
    log.style.color = '#fff';
    let togles = document.querySelectorAll('.nav__toggle');
    togles.forEach(e => {
      e.style.color = '#fff';
    });
    let foot = document.getElementById('footer');
    foot.style.background = '#181818';
    let imageFill = document.getElementById('blob');
    imageFill.style.fill = '#fff';
    let skills = document.querySelectorAll('.skills__bar');
    skills.forEach(b => {
      b.style.backgroundColor = '#fff';
    });
    let titles = document.querySelectorAll('.section-title');
    titles.forEach(c => {
      c.style.color = '';
    });
    let container = document.querySelectorAll('.s-content');
    container.forEach(p => {
      p.style.backgroundColor = '#fff';
      p.style.color = '#181818';
    });
  } else {
    // Apply light mode styles
    typeSpeed = typeSpeedLight;
    let logos = document.querySelectorAll('.service-icon');
    logos.forEach(hphza => {
      hphza.style.color = '';
    });
    let container = document.querySelectorAll('.s-content');
    container.forEach(p => {
      p.style.backgroundColor = '';
      p.style.color = '';
    });
    let foot = document.getElementById('footer');
    foot.style.background = '';
    let skills = document.querySelectorAll('.skills__bar');
    skills.forEach(b => {
      b.style.backgroundColor = '';
    });
    let imageFill = document.getElementById('blob');
    imageFill.style.fill = '';
    document.body.style.backgroundColor = ''; // Set to default background color
    navv.style.color = ''; // Set to default color
    element.style.backgroundColor = ''; // Set to default background color of the element
    document.body.style.transition = 'background-color 1.6s ease, color 0.5s ease-in-out'; // Remove transition property
    document.body.style.color = ''; // Set to default font color
    icons.forEach(homeicon => {
      homeicon.style.color = ''; // Set to default color
    });
    let log = document.getElementById('logo');
    log.style.color = ''; // Sest to default color
    let togles = document.querySelectorAll('.nav__toggle');
    togles.forEach(e => {
      e.style.color = ''; // Set to default color
    });
  }
});

// Function to open the popup
function openPopup() {
  document.getElementById('popup').style.display = 'flex';
}

// Function to close the popup
function closePopup() {
  document.getElementById('popup').style.display = 'none';
}

// Function to handle form submission
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevents the default form submission behavior

  // Simulate sending data to the server (you can replace this with your actual AJAX request)
  sendDataToServer(function () {
      // Show the popup after data is sent
      openPopup();

      // Clear the form inputs
      document.getElementById('contact-form').reset();
  });
});

// Function to simulate sending data to the server
function sendDataToServer(callback) {
  // Simulate sending data to the server (replace this with your actual AJAX request logic)
  setTimeout(function () {
      // Assume the data is successfully sent after a timeout
      console.log('Data sent to server');
      callback(); // Call the callback function to open the popup
  }, 1000); // Simulated delay (1 second)
}

