let audioPlayed = false;

document.body.addEventListener('click', () => {
  if (!audioPlayed) {
    const audio = document.getElementById('background-audio');
    audio.play();
    audioPlayed = true;
  }
});

const trail = [];
const trailCount = 10;

function createTrail(x, y) {
  const dot = document.createElement('div');
  dot.classList.add('mouse-trail');
  dot.style.left = `${x - 5}px`;
  dot.style.top = `${y - 5}px`;
  document.body.appendChild(dot);

  trail.push(dot);

  setTimeout(() => {
    dot.remove();
    trail.shift();
  }, 300);
}

document.addEventListener('mousemove', (e) => {
  createTrail(e.clientX, e.clientY);
});
