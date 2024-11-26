// Welcome Message
document.addEventListener('DOMContentLoaded', () => {
    const heroText = document.querySelector('#hero p');
    const messages = [
      "Dive into stories that teach and inspire!",
      "Ready to spark your imagination?",
      "Let's create learning adventures together!"
    ];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    heroText.textContent = randomMessage;
  });
  
  // Let's GO! Button Interaction
  document.getElementById('lets-go').addEventListener('click', () => {
    // Scroll smoothly to the Stories section
    document.getElementById('stories').scrollIntoView({ behavior: 'smooth' });
  });
  