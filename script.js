document.addEventListener('DOMContentLoaded', () => {
    const music = document.getElementById('bday-music');
    const card = document.getElementById('birthday-card');
    
    // Fungsi utama untuk mencoba memutar musik
    function tryToPlayMusic() {
        music.play().catch(error => {
            console.error("Autoplay diblokir:", error);
            
            // Cek apakah tombol sudah ada
            if (!document.getElementById('play-btn')) { 
                const playButton = document.createElement('button');
                playButton.id = 'play-btn';
                playButton.textContent = 'Klik untuk Putar Musik & Mulai Pesta!';
                
                // Tambahkan styling dasar untuk tombol
                playButton.style.cssText = `
                    margin-top: 20px;
                    padding: 10px 20px;
                    cursor: pointer;
                    background-color: #ff69b4;
                    color: white;
                    border: none;
                    border-radius: 5px;
                    font-size: 1.1em;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                    transition: all 0.3s;
                `;
                
                // Tambahkan efek hover minimal pada tombol
                playButton.onmouseover = () => playButton.style.backgroundColor = '#ff45a0';
                playButton.onmouseout = () => playButton.style.backgroundColor = '#ff69b4';

                playButton.onclick = () => {
                    music.play();
                    playButton.remove(); // Hapus tombol setelah diklik
                };
                card.appendChild(playButton);
            }
        });
    }

    // Coba putar musik segera setelah halaman dimuat
    tryToPlayMusic();

    // Tambahkan event listener cadangan jika audio dimuat setelah DOMContentLoaded
    music.addEventListener('canplaythrough', tryToPlayMusic);
});
