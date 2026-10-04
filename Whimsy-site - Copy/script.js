(() => {
  const tracks = Array.isArray(window.MUSIC_TRACKS) ? window.MUSIC_TRACKS : [];
  const audio = document.getElementById('audio-player');
  const list = document.getElementById('track-list');
  const playButton = document.getElementById('play-button');
  const seekBar = document.getElementById('seek-bar');
  const volumeBar = document.getElementById('volume-bar');
  const muteButton = document.getElementById('mute-button');
  const nowTitle = document.getElementById('now-title');
  const nowArtist = document.getElementById('now-artist');
  const coverTitle = document.getElementById('cover-title');
  const emptyMessage = document.getElementById('empty-message');
  let currentIndex = -1;

  document.getElementById('year').textContent = new Date().getFullYear();
  audio.volume = Number(volumeBar.value);

  const formatTime = (seconds) => {
    if (!Number.isFinite(seconds) || seconds < 0) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
  };

  function renderTracks() {
    list.innerHTML = '';
    emptyMessage.hidden = tracks.length > 0;
    tracks.forEach((track, index) => {
      const row = document.createElement('button');
      row.className = 'track-row';
      row.type = 'button';
      row.setAttribute('aria-label', `Play ${track.title}`);
      const number = document.createElement('span');
      number.className = 'track-number';
      number.textContent = String(index + 1).padStart(2, '0');
      const name = document.createElement('span');
      name.className = 'track-name';
      name.textContent = track.title || `Untitled track ${index + 1}`;
      const duration = document.createElement('span');
      duration.className = 'track-duration';
      duration.textContent = track.duration || '—:—';
      row.append(number, name, duration);
      row.addEventListener('click', () => chooseTrack(index, true));
      list.appendChild(row);
    });
  }

  function updateRows() {
    [...list.children].forEach((row, i) => {
      const active = i === currentIndex;
      row.classList.toggle('active', active);
      row.setAttribute('aria-current', active ? 'true' : 'false');
      row.querySelector('.track-number').textContent = active && !audio.paused ? '♫' : String(i + 1).padStart(2, '0');
    });
  }

  function chooseTrack(index, autoplay) {
    const track = tracks[index];
    if (!track || !track.src) return;
    currentIndex = index;
    audio.src = track.src;
    nowTitle.textContent = track.title || 'Untitled track';
    nowArtist.textContent = track.artist || 'Whispering Pines';
    coverTitle.textContent = track.title || 'A song from the woods';
    playButton.disabled = false;
    seekBar.disabled = false;
    updateRows();
    if (autoplay) audio.play().catch(() => {
      playButton.textContent = '▶';
      playButton.setAttribute('aria-label', 'Play selected song');
    });
  }

  playButton.addEventListener('click', () => {
    if (!audio.src && tracks.length) chooseTrack(0, false);
    if (audio.paused) audio.play().catch(() => {});
    else audio.pause();
  });
  audio.addEventListener('play', () => { playButton.textContent = 'Ⅱ'; playButton.setAttribute('aria-label', 'Pause song'); updateRows(); });
  audio.addEventListener('pause', () => { playButton.textContent = '▶'; playButton.setAttribute('aria-label', 'Play selected song'); updateRows(); });
  audio.addEventListener('loadedmetadata', () => {
    document.getElementById('duration').textContent = formatTime(audio.duration);
    if (currentIndex >= 0 && list.children[currentIndex]) list.children[currentIndex].querySelector('.track-duration').textContent = formatTime(audio.duration);
  });
  audio.addEventListener('timeupdate', () => {
    document.getElementById('current-time').textContent = formatTime(audio.currentTime);
    document.getElementById('duration').textContent = formatTime(audio.duration);
    if (Number.isFinite(audio.duration) && audio.duration > 0) seekBar.value = String((audio.currentTime / audio.duration) * 100);
  });
  audio.addEventListener('ended', () => {
    if (currentIndex + 1 < tracks.length) chooseTrack(currentIndex + 1, true);
  });
  audio.addEventListener('error', () => {
    if (currentIndex >= 0) nowArtist.textContent = 'Could not load this file — check its filename in tracks.js.';
  });
  seekBar.addEventListener('input', () => {
    if (Number.isFinite(audio.duration) && audio.duration > 0) audio.currentTime = (Number(seekBar.value) / 100) * audio.duration;
  });
  volumeBar.addEventListener('input', () => { audio.volume = Number(volumeBar.value); audio.muted = false; muteButton.textContent = '♫'; });
  muteButton.addEventListener('click', () => { audio.muted = !audio.muted; muteButton.textContent = audio.muted ? '×' : '♫'; muteButton.setAttribute('aria-label', audio.muted ? 'Unmute audio' : 'Mute audio'); });

  const toggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('main-nav');
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }));
  renderTracks();
})();
