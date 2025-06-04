document.addEventListener('DOMContentLoaded', () => {
  const player = document.querySelector("#player");
  const speedup = document.querySelector("#speedup");
  const speeddown = document.querySelector("#speeddown");
  const volumeup = document.querySelector("#volumeup");
  const volumedown = document.querySelector("#volumedown");
  const mute = document.querySelector("#mute");
  const openfile = document.querySelector("#openfile");
  const speedValue = document.querySelector("#speed-value");
  const volumeValue = document.querySelector("#volume-value");
  const currentTimeDisplay = document.querySelector("#current-time");
  const durationDisplay = document.querySelector("#duration");
  const playerOverlay = document.querySelector("#player-overlay");

  // Initialize player settings
  player.volume = 1.0;
  player.playbackRate = 1.0;
  updateDisplayValues();

  // Speed controls
  speedup.addEventListener("click", () => {
    player.playbackRate = parseFloat((player.playbackRate + 0.1).toFixed(1));
    updateDisplayValues();
  });

  speeddown.addEventListener("click", () => {
    player.playbackRate = parseFloat(Math.max(0.1, player.playbackRate - 0.1).toFixed(1));
    updateDisplayValues();
  });

  // Volume controls
  volumeup.addEventListener("click", () => {
    player.volume = parseFloat(Math.min(1, player.volume + 0.1).toFixed(1));
    updateDisplayValues();
  });

  volumedown.addEventListener("click", () => {
    player.volume = parseFloat(Math.max(0, player.volume - 0.1).toFixed(1));
    updateDisplayValues();
  });

  mute.addEventListener("click", () => {
    player.muted = !player.muted;
    mute.innerHTML = player.muted 
      ? '<i class="fas fa-volume-mute"></i> Unmute' 
      : '<i class="fas fa-volume-mute"></i> Mute';
    updateDisplayValues();
  });

  // File handling - CORRECTED VERSION
  openfile.addEventListener("change", function (event) {
    const file = event.target.files[0];
    if (file) {
      // Check if the file is a video or audio
      if (!file.type.match('video.*') && !file.type.match('audio.*')) {
        alert('Please select a valid video or audio file');
        return;
      }

      const url = URL.createObjectURL(file);
      player.src = url;
      player.load();

      player.onloadedmetadata = function() {
        console.log("Video metadata loaded successfully");
        updateDisplayValues();
        playerOverlay.style.display = 'none';
        player.play().catch(error => {
          console.error("Playback failed:", error);
          playerOverlay.querySelector('p').textContent = 'Click the play button to start playback';
          playerOverlay.style.display = 'flex';
        });
      };

      player.onerror = function() {
        console.error("Error loading video");
        playerOverlay.querySelector('p').textContent = 'Error loading media file';
        playerOverlay.style.display = 'flex';
      };
    }
  });

  // Time updates
  player.addEventListener('timeupdate', () => {
    currentTimeDisplay.textContent = formatTime(player.currentTime);
    if (!isNaN(player.duration)) {
      durationDisplay.textContent = formatTime(player.duration);
    }
  });

  // Format time as HH:MM:SS
  function formatTime(seconds) {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = Math.floor(seconds % 60);
    return [h, m, s].map(v => v < 10 ? "0" + v : v).join(':');
  }

  // Update all display values
  function updateDisplayValues() {
    speedValue.textContent = player.playbackRate;
    volumeValue.textContent = Math.round(player.volume * 100);
  }

  // Keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT') return;
    
    switch(e.key) {
      case ' ':
        player.paused ? player.play() : player.pause();
        e.preventDefault();
        break;
      case 'ArrowUp':
        player.volume = parseFloat(Math.min(1, player.volume + 0.1).toFixed(1));
        updateDisplayValues();
        break;
      case 'ArrowDown':
        player.volume = parseFloat(Math.max(0, player.volume - 0.1).toFixed(1));
        updateDisplayValues();
        break;
      case 'ArrowRight':
        player.currentTime += 5;
        break;
      case 'ArrowLeft':
        player.currentTime -= 5;
        break;
      case 'm':
        player.muted = !player.muted;
        updateDisplayValues();
        break;
    }
  });
});
