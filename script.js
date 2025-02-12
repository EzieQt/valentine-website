const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const messageDiv = document.getElementById('message');
const valentineImage = document.getElementById('valentineImage');

let yesCount = 0;
let noCount = 0;

// Function to handle the "No" button click
noButton.addEventListener('click', () => {
  noCount++;
  const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
  const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
  noButton.style.position = 'absolute';
  noButton.style.left = `${x}px`;
  noButton.style.top = `${y}px`;

  // Add playful messages
  if (noCount === 1) {
    messageDiv.innerHTML = 'Oh no, you clicked No! Try again! 😜';
  } else if (noCount === 2) {
    messageDiv.innerHTML = 'Haha, you can\'t escape! Click Yes! 😏';
  } else if (noCount === 3) {
    messageDiv.innerHTML = 'You\'re persistent, but I\'m more persistent! 😘';
  } else if (noCount === 4) {
    messageDiv.innerHTML = 'Okay, fine, I\'ll stop moving... but click Yes! 😊';
    noButton.style.position = 'static'; // Stop moving the button
  }

  // Change the image to something funny
  if (noCount % 2 === 0) {
    valentineImage.src = 'C:/Users/ACER/Downloads/ValentinesWeb/ValenFoto/funny-image1.jpg'; // Add a funny image
  } else {
    valentineImage.src = 'C:/Users/ACER/Downloads/ValentinesWeb/ValenFoto/Bred.png'; // Add another funny image
  }
});

// Function to handle the "Yes" button click
yesButton.addEventListener('click', () => {
  yesCount++;
  if (yesCount === 1) {
    messageDiv.innerHTML = 'Are you really, really sure you want to be with me? 🥺';
    valentineImage.src = 'C:/Users/ACER/Downloads/ValentinesWeb/ValenFoto/image1.jpg'; // Change to a cute image
  } else if (yesCount === 2) {
    messageDiv.innerHTML = 'Are you sure and okay to accept me, who is unworthy of you, to be your Valentine? 🥺';
    valentineImage.src = 'C:/Users/ACER/Downloads/ValentinesWeb/ValenFoto/image2.jpg'; // Change to another cute image
  } else if (yesCount === 3) {
    messageDiv.innerHTML = 'Yippy! I got a Valentine\'s date! 🥰';
    valentineImage.src = 'C:/Users/ACER/Downloads/ValentinesWeb/ValenFoto/image3.jpg'; // Change to a celebratory image
    yesButton.disabled = true;
    noButton.style.display = 'none';

    // Trigger confetti
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  }
});