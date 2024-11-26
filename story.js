document.getElementById('play-story').addEventListener('click', () => {
    const storyText = document.getElementById('story-text').textContent;
    const utterance = new SpeechSynthesisUtterance(storyText);
    utterance.rate = 1; // Adjust speed (1 is normal)
    utterance.pitch = 1; // Adjust pitch
    speechSynthesis.speak(utterance);
  });
  