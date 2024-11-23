        window.addEventListener('scroll', () => {
            const nav = document.querySelector('.nav-container');
            if (window.scrollY > 50) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        });

        document.querySelectorAll('.video-card').forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.querySelector('video').play();
            });
            card.addEventListener('mouseleave', () => {
                const video = card.querySelector('video');
                video.pause();
                video.currentTime = 0;
            });
        });

        const fraseshero = [
            'tu mundo digital',
            'tu vida',
            'tu identidad',
            'tus datos'
        ];
        
        let currentFRASEIndex = 0;
        const typingText = document.querySelector('.escribiendo-css');
        
        async function typeFrase(frase) {
            for (let i = 0; i <= frase.length; i++) {
                typingText.textContent = frase.substring(0, i);
                await new Promise(resolve => setTimeout(resolve, 100));
            }
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            for (let i = frase.length; i >= 0; i--) {
                typingText.textContent = frase.substring(0, i);
                await new Promise(resolve => setTimeout(resolve, 50));
            }
            await new Promise(resolve => setTimeout(resolve, 500));
        }
        
        async function animateText() {
            while (true) {
                await typeFrase(fraseshero[currentFRASEIndex]);
                currentFRASEIndex = (currentFRASEIndex + 1) % fraseshero.length;
            }
        }
        
        animateText();
