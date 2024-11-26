document.getElementById('play-audio').addEventListener('click', () => {
    const utterance = new SpeechSynthesisUtterance("Once upon a time in a magical world...");
    speechSynthesis.speak(utterance);
  });
  