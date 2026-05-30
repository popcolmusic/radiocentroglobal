<!-- ============================================ --><!-- VIDEOS ACTUALIZADOS MAYO 2026               --><!-- CON MINIATURAS REALES DE YOUTUBE            --><!-- RADIO CENTRO - CON CARRUSEL MÓVIL           --><!-- ============================================ --><style>
/* ESTILOS COMPLETOS - VERSIÓN MEJORADA */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
/* FONDO PRINCIPAL */
html, body {
    background: #0a0a0a !important;
    min-height: 100vh;
    margin: 0;
    padding: 0;
}
/* Contenedor principal - MÁS ANCHO EN ESCRITORIO */
.radio-centro-container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 20px;
    background: #0a0a0a;
}
/* ============================================ */
/* 1. CARRUSEL DE VIDEOS                       */
/* ============================================ */
.video-carousel {
    margin: 20px 0 40px 0;
}
.section-title {
    color: #e91826;
    font-size: 1.5rem;
    margin-bottom: 20px;
    border-left: 4px solid #e91826;
    padding-left: 15px;
}
/* Contenedor del carrusel - Grid por defecto (escritorio) */
.carousel-container {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;
    overflow-x: visible;
    scroll-behavior: smooth;
}
.carousel-item {
    background: #1a1a1a;
    border-radius: 12px;
    overflow: hidden;
    transition: transform 0.3s, box-shadow 0.3s;
    cursor: pointer;
    text-decoration: none;
    color: inherit;
    display: block;
}
.carousel-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(233, 24, 38, 0.2);
}
.thumb-container {
    position: relative;
}
.carousel-item img {
    width: 100%;
    height: 160px;
    object-fit: cover;
    display: block;
}
.video-time {
    position: absolute;
    bottom: 8px;
    right: 8px;
    background: rgba(0,0,0,0.8);
    color: #e91826;
    padding: 3px 6px;
    border-radius: 4px;
    font-size: 11px;
    font-weight: bold;
}
.carousel-item h4 {
    font-size: 0.9rem;
    margin: 12px 12px 5px;
    color: #e0e0e0;
}
.carousel-item p {
    font-size: 0.75rem;
    margin: 0 12px 12px;
    color: #888;
}
/* ============================================ */
/* 2. SECCIÓN RC NEWS + TRENDING                */
/* ============================================ */
.rc-news-section {
    background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%);
    border-radius: 15px;
    padding: 35px;
    margin: 40px 0;
    border: 1px solid #e91826;
}
.news-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 25px;
}
.rc-news-badge {
    background: #f9b001;
    color: #000000;
    padding: 8px 22px;
    border-radius: 30px;
    font-weight: bold;
    font-size: 1rem;
}
.trending-badge {
    color: #e91826;
    font-weight: bold;
    font-size: 1rem;
}
.trending-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
}
.trending-text h3 {
    color: #f0f0f0;
    font-size: 1.5rem;
    margin: 10px 0;
}
.date {
    color: #e91826;
    font-weight: bold;
    font-size: 1.1rem;
}
.buttons-group {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
}
.btn-primary {
    background: #e91826;
    color: white;
    padding: 12px 28px;
    border-radius: 30px;
    text-decoration: none;
    font-weight: bold;
    transition: background 0.3s;
    display: inline-block;
}
.btn-primary:hover {
    background: #b8121e;
}
.btn-secondary {
    background: transparent;
    color: #e91826;
    border: 2px solid #e91826;
    padding: 12px 28px;
    border-radius: 30px;
    text-decoration: none;
    font-weight: bold;
    transition: all 0.3s;
    display: inline-block;
}
.btn-secondary:hover {
    background: #e91826;
    color: white;
}
/* ============================================ */
/* 3. SECCIÓN SHAKIRA + ARTISTA SEMANA          */
/* ============================================ */
.featured-section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 25px;
    margin: 40px 0;
}
.featured-main {
    position: relative;
    border-radius: 15px;
    overflow: hidden;
    background: #1a1a1a;
}
.featured-main img {
    width: 100%;
    height: auto;
    display: block;
}
.featured-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(transparent, rgba(0,0,0,0.95));
    padding: 25px;
}
.featured-overlay h3 {
    color: #e91826;
    margin: 0;
    font-size: 1.2rem;
}
.featured-overlay p {
    color: white;
    margin: 5px 0 0;
    font-size: 0.9rem;
}
.artist-week {
    background: #1a1a1a;
    border-radius: 15px;
    padding: 25px;
    text-align: center;
    border: 1px solid #e91826;
}
.artist-week h3 {
    color: #f9b001;
    margin-bottom: 15px;
    font-size: 1.3rem;
}
.artist-week img {
    width: 100%;
    max-width: 200px;
    margin: 15px auto;
    display: block;
}
.artist-week p {
    color: #888;
    font-size: 0.95rem;
}
/* ============================================ */
/* 4. RESPONSIVE - CARRUSEL EN MÓVIL           */
/* ============================================ */
@media (max-width: 1024px) {
    .carousel-container {
        grid-template-columns: repeat(3, 1fr);
        gap: 15px;
    }
    .carousel-item img {
        height: 140px;
    }
}
@media (max-width: 768px) {
    .radio-centro-container {
        padding: 15px;
    }
    .carousel-container {
        display: flex;
        grid-template-columns: unset;
        gap: 15px;
        overflow-x: auto;
        scroll-snap-type: x mandatory;
        padding-bottom: 15px;
        -webkit-overflow-scrolling: touch;
    }
    .carousel-item {
        min-width: 260px;
        scroll-snap-align: start;
        flex-shrink: 0;
    }
    .carousel-container::-webkit-scrollbar {
        height: 5px;
    }
    .carousel-container::-webkit-scrollbar-track {
        background: #1a1a1a;
        border-radius: 10px;
    }
    .carousel-container::-webkit-scrollbar-thumb {
        background: #e91826;
        border-radius: 10px;
    }
    .carousel-item img {
        height: 150px;
    }
    .section-title {
        font-size: 1.2rem;
    }
    .trending-content {
        flex-direction: column;
        text-align: center;
    }
    .news-header {
        flex-direction: column;
        gap: 10px;
        text-align: center;
    }
    .featured-section {
        grid-template-columns: 1fr;
    }
    .trending-text h3 {
        font-size: 1.2rem;
    }
    .rc-news-section {
        padding: 20px;
    }
    .buttons-group {
        flex-direction: column;
        align-items: center;
        width: 100%;
    }
    .btn-primary, .btn-secondary {
        width: 100%;
        text-align: center;
    }
}
@media (max-width: 480px) {
    .carousel-item {
        min-width: 240px;
    }
    .carousel-item img {
        height: 130px;
    }
    .carousel-item h4 {
        font-size: 0.8rem;
    }
    .featured-overlay h3 {
        font-size: 0.9rem;
    }
    .featured-overlay p {
        font-size: 0.75rem;
    }
    .artist-week h3 {
        font-size: 1.1rem;
    }
}
</style>
<div class="radio-centro-container">
    <!-- SECCIÓN 1: CARRUSEL DE 5 VIDEOS ACTUALIZADOS -->
    <div class="video-carousel">
        <h2 class="section-title">
            🎬Estrenos de Música Popular - Actualidad Mayo 2026
        </h2>
        <div class="carousel-container">
            <!-- VIDEO 1 - Lo Mejor de la Musica Popular - ÉXITOS DE DESPECHO -->
            <div class="carousel-item" data-titulo="Lo Mejor de la Musica Popular - ÉXITOS DE DESPECHO">
                <div class="thumb-container">
                    <img src="https://img.youtube.com/vi/ZVGOgZZgFRI/maxresdefault.jpg" alt="Lo Mejor de la Musica Popular - ÉXITOS DE DESPECHO" width="1280" height="720"> <span class="video-time">03:12</span>
                </div>
                <h4>
                    Lo Mejor de la Música Popular
                </h4>
                <p>
                    Éxitos de Despecho
                </p>
            </div>
            <!-- VIDEO 2 - Estrenos de Música Popular 2019 - JESSI URIBE, ARELYS HENAO, ETC -->
            <div class="carousel-item" data-titulo="Estrenos de Música Popular 2019 - JESSI URIBE, ARELYS HENAO, ETC">
                <div class="thumb-container">
                    <img src="https://img.youtube.com/vi/JA1h03Ytg7g/maxresdefault.jpg" alt="Estrenos de Música Popular 2019" width="1280" height="720"> <span class="video-time">03:36</span>
                </div>
                <h4>
                    Estrenos Música Popular 2019
                </h4>
                <p>
                    Jessi Uribe, Arelys Henao
                </p>
            </div>
            <!-- VIDEO 3 - Video Musical (ID: NTY8bcSLDRw) -->
            <div class="carousel-item" data-titulo="Nuevo Éxito Musical 2026">
                <div class="thumb-container">
                    <img src="https://img.youtube.com/vi/NTY8bcSLDRw/maxresdefault.jpg" alt="Nuevo Éxito Musical" width="1280" height="720"> <span class="video-time">04:12</span>
                </div>
                <h4>
                    Nuevo Éxito Musical
                </h4>
                <p>
                    Artista Destacado
                </p>
            </div>
            <!-- VIDEO 4 - Video Musical (ID: RhTdoAjh_W8) -->
            <div class="carousel-item" data-titulo="Lanzamiento Exclusivo 2026">
                <div class="thumb-container">
                    <img src="https://img.youtube.com/vi/RhTdoAjh_W8/maxresdefault.jpg" alt="Lanzamiento Exclusivo" width="1280" height="720"> <span class="video-time">03:45</span>
                </div>
                <h4>
                    Lanzamiento Exclusivo 2026
                </h4>
                <p>
                    Top Charts
                </p>
            </div>
            <!-- VIDEO 5 - Melissa Mora Feat Jay Maly - Vámonos de fiesta -->
            <div class="carousel-item" data-titulo="Melissa Mora Feat Jay Maly - Vámonos de fiesta">
                <div class="thumb-container">
                    <img src="https://img.youtube.com/vi/e892EQ0Ac_8/maxresdefault.jpg" alt="Melissa Mora - Vámonos de Fiesta" width="1280" height="720"> <span class="video-time">03:30</span>
                </div>
                <h4>
                    Melissa Mora feat Jay Maly
                </h4>
                <p>
                    Vámonos de fiesta
                </p>
            </div>
        </div>
    </div>
    <!-- SECCIÓN 2: RC NEWS + TRENDING NOW -->
    <div class="rc-news-section">
        <div class="news-header">
            <span class="rc-news-badge">RC NEWS</span> <span class="trending-badge">🔥 TRENDING NOW</span>
        </div>
        <div class="trending-content">
            <div class="trending-text">
                <p>
                    <span class="date">05/11</span>
                </p>
                <h3>
                    Nuevo Artista firma con RC Distribución para ser Viral
                </h3>
            </div>
            <div class="buttons-group">
                <a class="btn-primary" href="https://radiocentro.net/servicios/tendencias">📈 Tendencias</a> <a class="btn-secondary" href="https://radiocentro.net/contratar-artistas">🎤 Contratar Artistas</a>
            </div>
        </div>
    </div>
    <!-- SECCIÓN 3: SHAKIRA + ARTISTA DE LA SEMANA -->
    <div class="featured-section">
        <div class="featured-main">
            <img src="https://cdn.radiocentro.net/Radio%20Centro/Sitio%20web%20Principal/Nueva%20web%20drupal/SHAKIRA%20EN%204%20MUNDIALES%20CANTANDO.svg" alt="Shakira" width="320" height="200">
            <div class="featured-overlay">
                <h3>
                    SHAKIRA
                </h3>
                <p>
                    Shakira de nuevo figura para Colombia en el mundial 2026 | RC NEWS
                </p>
            </div>
        </div>
        <div class="artist-week">
            <h3>
                ⭐ ARTISTA DE LA SEMANA
            </h3>
            <p>
                En Radio Centro premiamos a los artistas más escuchados en nuestras plataformas:
            </p>
            <img src="https://cdn.radiocentro.net/Radio%20Centro/Sitio%20web%20Principal/Nueva%20web%20drupal/javy%20kartucho%20artista%20recomendado.svg" alt="Javy Kartucho" width="400" height="250">
            <h4 style="color:#e91826;margin:10px 0 5px;">
                Javy Kartucho
            </h4>
            <p>
                🎵 +1M reproducciones esta semana
            </p>
        </div>
    </div>
</div>
<script>
// ============================================ //
// SCRIPT GLOBAL RADIO CENTRO                   //
// ============================================ //
(function() {
    'use strict';
    
    function initCarruselClicks() {
        const carouselItems = document.querySelectorAll('.carousel-item');
        carouselItems.forEach(item => {
            item.removeEventListener('click', carouselHandler);
            item.addEventListener('click', carouselHandler);
        });
    }
    
    function carouselHandler(e) {
        if (!e.target.closest('a')) {
            const titulo = this.querySelector('h4')?.innerText || 'video';
            alert(`🎬 Reproduciendo: ${titulo}`);
        }
    }
    
    function initMobileMenu() {
        const navLinks = document.querySelector('.nav-links');
        if (window.innerWidth <= 768 && navLinks && !document.querySelector('.menu-toggle')) {
            const topNavContainer = document.querySelector('.top-nav .container') || document.querySelector('.top-nav');
            const toggleBtn = document.createElement('button');
            toggleBtn.className = 'menu-toggle';
            toggleBtn.innerHTML = '☰';
            toggleBtn.style.cssText = `
                background: #f9b001;
                border: none;
                font-size: 1.8rem;
                padding: 5px 20px;
                border-radius: 8px;
                cursor: pointer;
                margin-bottom: 10px;
                font-weight: bold;
            `;
            if (topNavContainer) {
                topNavContainer.prepend(toggleBtn);
            }
            
            toggleBtn.addEventListener('click', function() {
                if (navLinks.style.display === 'flex') {
                    navLinks.style.display = 'none';
                } else {
                    navLinks.style.display = 'flex';
                    navLinks.style.flexDirection = 'column';
                    navLinks.style.gap = '12px';
                }
            });
        }
        
        window.addEventListener('resize', function() {
            const navLinks = document.querySelector('.nav-links');
            if (window.innerWidth > 768 && navLinks) {
                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'row';
            } else if (navLinks && window.innerWidth <= 768 && navLinks.style.display !== 'flex') {
                navLinks.style.display = 'none';
            }
        });
    }
    
    function initCards() {
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            card.addEventListener('click', function(e) {
                if (!e.target.closest('a')) {
                    const titulo = this.querySelector('h3')?.innerText || 'contenido';
                    alert(`🔊 Próximamente: reproducción de "${titulo}"`);
                }
            });
        });
    }
    
    function initRadioButton() {
        const playBtn = document.getElementById('playRadioBtn');
        if (playBtn) {
            playBtn.addEventListener('click', function(e) {
                e.preventDefault();
                alert('🎧 Conectando con la emisora...');
            });
        }
    }
    
    function setupObserver() {
        const observer = new MutationObserver(function() {
            setTimeout(function() {
                initCarruselClicks();
            }, 500);
        });
        
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }
    
    function initAll() {
        initMobileMenu();
        initRadioButton();
        initCards();
        initCarruselClicks();
        setupObserver();
        console.log('Radio Centro: Todos los scripts inicializados');
    }
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initAll);
    } else {
        initAll();
    }
    
})();
</script>
<!-- ============================================ --><!-- RADIO CENTRO - SECCIÓN DE VIDEOS COMPLETA    --><!-- REPRODUCTOR GRANDE INTEGRADO - SIN POPUPS    --><!-- ============================================ --><style>
/* ============================================ */
/* ESTILOS GENERALES - FONDO Y CONTENEDOR       */
/* ============================================ */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html, body {
    background: #0a0a0a !important;
    min-height: 100vh;
    margin: 0;
    padding: 0;
}
/* Contenedor principal */
.radio-centro-container {
    max-width: 1600px;
    margin: 0 auto;
    padding: 20px 30px;
    background: #0a0a0a;
}
/* Título principal */
.section-title {
    color: #e91826;
    font-size: 2.2rem;
    margin-bottom: 30px;
    border-left: 5px solid #e91826;
    padding-left: 20px;
    font-weight: 800;
}
/* ============================================ */
/* SECCIÓN DE VIDEOS - ESTILOS                  */
/* ============================================ */
.videos-section {
    margin: 40px 0;
}
/* Grid de videos */
.videos-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 25px;
    margin-bottom: 40px;
}
/* Tarjeta de video */
.video-card {
    background: #111111;
    border-radius: 16px;
    overflow: hidden;
    transition: transform 0.3s, box-shadow 0.3s;
    position: relative;
    border: 1px solid #2a2a2a;
    cursor: pointer;
}
.video-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 35px rgba(233, 24, 38, 0.2);
    border-color: #e91826;
}
.video-number {
    position: absolute;
    top: 15px;
    left: 15px;
    background: #e91826;
    color: white;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 1.3rem;
    z-index: 2;
    box-shadow: 0 3px 10px rgba(0,0,0,0.5);
}
.video-thumb {
    position: relative;
}
.video-thumb img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    display: block;
}
.video-duration {
    position: absolute;
    bottom: 10px;
    right: 10px;
    background: rgba(0,0,0,0.85);
    color: #e91826;
    padding: 4px 8px;
    border-radius: 6px;
    font-size: 12px;
    font-weight: bold;
}
.video-info {
    padding: 20px;
}
.video-badge {
    background: #f9b001;
    color: #000000;
    padding: 4px 14px;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 800;
    display: inline-block;
    margin-bottom: 12px;
}
.video-info h3 {
    color: #e91826;
    font-size: 1.2rem;
    margin: 0 0 8px;
    font-weight: 800;
}
.video-artist {
    color: #f0f0f0;
    font-size: 0.9rem;
    font-weight: 700;
    margin: 0 0 8px;
}
.video-title-small {
    color: #aaaaaa;
    font-size: 0.8rem;
    margin: 0 0 10px;
}
.video-date {
    color: #777777;
    font-size: 0.75rem;
    margin: 8px 0 5px;
}
/* ============================================ */
/* REPRODUCTOR GRANDE INTEGRADO - SIN POPUP     */
/* ============================================ */
.featured-player {
    margin: 30px 0 50px;
    background: linear-gradient(145deg, #0f0f0f 0%, #080808 100%);
    border-radius: 24px;
    padding: 25px;
    border: 1px solid #e91826;
    display: none;
    animation: fadeInUp 0.5s ease;
}
.featured-player.active {
    display: block;
}
.featured-player-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    padding-bottom: 15px;
    border-bottom: 1px solid #222;
}
.featured-player-title {
    color: #e91826;
    font-size: 1.1rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 2px;
}
.close-featured {
    background: none;
    border: none;
    color: #666;
    font-size: 1.5rem;
    cursor: pointer;
    transition: color 0.3s;
}
.close-featured:hover {
    color: #e91826;
}
.player-container {
    position: relative;
    width: 100%;
    background: #000;
    border-radius: 16px;
    overflow: hidden;
}
.player-container iframe {
    width: 100%;
    height: 480px;
    border: none;
    display: block;
}
.player-info {
    margin-top: 15px;
    padding: 15px;
    background: #0a0a0a;
    border-radius: 12px;
}
.player-info h4 {
    color: #f0f0f0;
    font-size: 1.2rem;
    margin: 0 0 5px;
}
.player-info p {
    color: #888;
    font-size: 0.85rem;
    margin: 0;
}
/* ============================================ */
/* PAGINACIÓN - 1, 2, 3, 4                     */
/* ============================================ */
.pagination {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin: 50px 0 30px;
    flex-wrap: wrap;
}
.page-btn {
    background: #1a1a1a;
    border: 2px solid #333;
    color: #e0e0e0;
    width: 55px;
    height: 55px;
    border-radius: 50%;
    font-size: 1.3rem;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
}
.page-btn:hover {
    background: #e91826;
    border-color: #e91826;
    color: white;
    transform: scale(1.1);
}
.page-btn.active {
    background: #e91826;
    border-color: #e91826;
    color: white;
    box-shadow: 0 0 15px rgba(233, 24, 38, 0.5);
}
/* Animaciones */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
/* ============================================ */
/* RESPONSIVE                                   */
/* ============================================ */
@media (max-width: 1200px) {
    .radio-centro-container {
        max-width: 1200px;
        padding: 20px;
    }
    .section-title {
        font-size: 1.8rem;
    }
    .videos-grid {
        grid-template-columns: repeat(3, 1fr);
    }
    .player-container iframe {
        height: 420px;
    }
}
@media (max-width: 900px) {
    .videos-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
    }
    .section-title {
        font-size: 1.6rem;
    }
    .video-info h3 {
        font-size: 1.1rem;
    }
    .player-container iframe {
        height: 320px;
    }
    .page-btn {
        width: 45px;
        height: 45px;
        font-size: 1.1rem;
    }
}
@media (max-width: 600px) {
    .radio-centro-container {
        padding: 15px;
    }
    .videos-grid {
        grid-template-columns: 1fr;
    }
    .video-number {
        width: 34px;
        height: 34px;
        font-size: 1.1rem;
    }
    .video-thumb img {
        height: 200px;
    }
    .section-title {
        font-size: 1.4rem;
    }
    .player-container iframe {
        height: 220px;
    }
    .page-btn {
        width: 40px;
        height: 40px;
        font-size: 1rem;
    }
    .featured-player {
        padding: 15px;
    }
}
</style><!-- CONTENEDOR PRINCIPAL -->
<div class="radio-centro-container">
    <!-- SECCIÓN DE VIDEOS -->
    <div class="videos-section">
        <h2 class="section-title">
            🎵 ÚLTIMOS VÍDEOS
        </h2>
        <!-- REPRODUCTOR GRANDE INTEGRADO (aparece al hacer clic) -->
        <div class="featured-player" id="featuredPlayer">
            <div class="featured-player-header">
                <span class="featured-player-title">🎬 RC VIDEO PLAYER</span> <button class="close-featured" id="closePlayer">✕</button>
            </div>
            <div class="player-container">
                <iframe id="mainPlayer" src="" frameborder="0" allow="autoplay; fullscreen" allowfullscreen=""></iframe>
            </div>
            <div class="player-info" id="playerInfo">
                <h4 id="playerTitle">
                    Selecciona un video
                </h4>
                <p id="playerDesc">
                    Haz clic en cualquier tarjeta para reproducir
                </p>
            </div>
        </div>
        <!-- Grid de videos - PÁGINA 1 (videos 1-4) -->
        <div class="videos-page" id="page-1">
            <div class="videos-grid">
                <!-- Video 1 -->
                <div class="video-card" data-video="z5b9VyWDhgU" data-title="AMOR BONITO" data-artist="JAVY KARTUCHO" data-desc="Javy Kartucho - Amor Bonito">
                    <div class="video-number">
                        1
                    </div>
                    <div class="video-thumb">
                        <img src="https://img.youtube.com/vi/z5b9VyWDhgU/hqdefault.jpg" alt="Melissa Mora" width="480" height="360"> <span class="video-duration">04:12</span>
                    </div>
                    <div class="video-info">
                        <p>
                            <span class="video-badge">RC NEWS</span>
                        </p>
                        <h3>
                            AMOR BONITO
                        </h3>
                        <p class="video-artist">
                            JAVY KARTUCHO
                        </p>
                        <p class="video-title-small">
                            Javy Kartucho - Amor Bonito
                        </p>
                    </div>
                </div>
                <!-- Video 2 -->
                <div class="video-card" data-video="fcnDmrtj6Sk" data-title="DAI DAI" data-artist="SHAKIRA x BURNA BOY" data-desc="Canción Oficial FIFA World Cup 2026">
                    <div class="video-number">
                        2
                    </div>
                    <div class="video-thumb">
                        <img src="https://img.youtube.com/vi/fcnDmrtj6Sk/hqdefault.jpg" alt="Shakira" width="480" height="360"> <span class="video-duration">03:36</span>
                    </div>
                    <div class="video-info">
                        <p>
                            <span class="video-badge">RC NEWS</span>
                        </p>
                        <h3>
                            DAI DAI
                        </h3>
                        <p class="video-artist">
                            SHAKIRA x BURNA BOY
                        </p>
                        <p class="video-title-small">
                            FIFA WORLD CUP 2026
                        </p>
                    </div>
                </div>
                <!-- Video 3 -->
                <div class="video-card" data-video="8jsFGdeWNPo" data-title="JUEGOS PROHIBIDOS" data-artist="NICKY JAM" data-desc="Nicky Jam - Juegos Prohibidos">
                    <div class="video-number">
                        3
                    </div>
                    <div class="video-thumb">
                        <img src="https://img.youtube.com/vi/8jsFGdeWNPo/hqdefault.jpg" alt="Nicky Jam" width="480" height="360"> <span class="video-duration">03:45</span>
                    </div>
                    <div class="video-info">
                        <p>
                            <span class="video-badge">RC NEWS</span>
                        </p>
                        <h3>
                            JUEGOS PROHIBIDOS
                        </h3>
                        <p class="video-artist">
                            NICKY JAM
                        </p>
                        <p class="video-title-small">
                            Nicky Jam - Juegos Prohibidos
                        </p>
                    </div>
                </div>
                <!-- Video 4 -->
                <div class="video-card" data-video="6vPhcRew8hA" data-title="ENTRE TR3S" data-artist="PAOLA JARA X ARELYS HENAO" data-desc="Arelis Henao - Entre Tres">
                    <div class="video-number">
                        4
                    </div>
                    <div class="video-thumb">
                        <img src="https://img.youtube.com/vi/6vPhcRew8hA/hqdefault.jpg" alt="Maluma" width="480" height="360"> <span class="video-duration">03:20</span>
                    </div>
                    <div class="video-info">
                        <p>
                            <span class="video-badge">RC NEWS</span>
                        </p>
                        <h3>
                            ENTRE TR3S
                        </h3>
                        <p class="video-artist">
                            PAOLA JARA X ARELYS HENAO
                        </p>
                        <p class="video-title-small">
                            Arelis Henao - Entre Tres
                        </p>
                        <p class="video-date">
                            📅 Hace 4 días
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <!-- PÁGINA 2 (videos 5-8) -->
        <div class="videos-page" style="display:none;" id="page-2">
            <div class="videos-grid">
                <!-- Video 5 -->
                <div class="video-card" data-video="X9CsK_nuqdE" data-title="DAI DAI (AUDIO)" data-artist="SHAKIRA x BURNA BOY" data-desc="Official Audio - FIFA 2026">
                    <div class="video-number">
                        5
                    </div>
                    <div class="video-thumb">
                        <img src="https://img.youtube.com/vi/X9CsK_nuqdE/hqdefault.jpg" alt="Shakira Audio" width="480" height="360"> <span class="video-duration">03:30</span>
                    </div>
                    <div class="video-info">
                        <p>
                            <span class="video-badge">RC NEWS</span>
                        </p>
                        <h3>
                            DAI DAI (AUDIO)
                        </h3>
                        <p class="video-artist">
                            SHAKIRA x BURNA BOY
                        </p>
                        <p class="video-title-small">
                            Official Audio - FIFA 2026
                        </p>
                    </div>
                </div>
                <!-- Video 6 -->
                <div class="video-card" data-video="dQw4w9WgXcQ" data-title="PRÓXIMO ESTRENO" data-artist="ARTISTA SORPRESA" data-desc="Estreno esta semana" data-soon="true">
                    <div class="video-number">
                        6
                    </div>
                    <div class="video-thumb">
                        <img src="https://placehold.co/400x250/1a1a1a/e91826?text=VIDEO+6" alt="Próximo Estreno" width="400" height="250"> <span class="video-duration">03:55</span>
                    </div>
                    <div class="video-info">
                        <p>
                            <span class="video-badge">RC NEWS</span>
                        </p>
                        <h3>
                            PRÓXIMO ESTRENO
                        </h3>
                        <p class="video-artist">
                            ARTISTA SORPRESA
                        </p>
                        <p class="video-title-small">
                            Estreno esta semana
                        </p>
                    </div>
                </div>
                <!-- Video 7 -->
                <div class="video-card" data-video="dQw4w9WgXcQ" data-title="TOP LATINO 2026" data-artist="VARIOUS ARTISTS" data-desc="Los más sonados del mes" data-soon="true">
                    <div class="video-number">
                        7
                    </div>
                    <div class="video-thumb">
                        <img src="https://placehold.co/400x250/1a1a1a/f9b001?text=VIDEO+7" alt="Top Latino" width="400" height="250"> <span class="video-duration">04:02</span>
                    </div>
                    <div class="video-info">
                        <p>
                            <span class="video-badge">RC NEWS</span>
                        </p>
                        <h3>
                            TOP LATINO 2026
                        </h3>
                        <p class="video-artist">
                            VARIOUS ARTISTS
                        </p>
                        <p class="video-title-small">
                            Los más sonados del mes
                        </p>
                    </div>
                </div>
                <!-- Video 8 -->
                <div class="video-card" data-video="dQw4w9WgXcQ" data-title="ENTREVISTA EXCLUSIVA" data-artist="DETRÁS DE CÁMARAS" data-desc="Charlamos con los artistas" data-soon="true">
                    <div class="video-number">
                        8
                    </div>
                    <div class="video-thumb">
                        <img src="https://placehold.co/400x250/1a1a1a/e91826?text=VIDEO+8" alt="Entrevista" width="400" height="250"> <span class="video-duration">08:15</span>
                    </div>
                    <div class="video-info">
                        <p>
                            <span class="video-badge">RC EXCLUSIVE</span>
                        </p>
                        <h3>
                            ENTREVISTA EXCLUSIVA
                        </h3>
                        <p class="video-artist">
                            DETRÁS DE CÁMARAS
                        </p>
                        <p class="video-title-small">
                            Charlamos con los artistas
                        </p>
                        <p class="video-date">
                            📅 Hace 2 días
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <!-- PAGINACIÓN 1, 2, 3, 4 -->
        <div class="pagination">
            <button class="page-btn active" data-page="1">1</button> <button class="page-btn" data-page="2">2</button> <button class="page-btn" data-page="3">3</button> <button class="page-btn" data-page="4">4</button>
        </div>
    </div>
</div>
<script>
// ============================================ //
// REPRODUCTOR GRANDE INTEGRADO - SIN POPUPS    //
// ============================================ //
(function() {
    'use strict';
    
    // Elementos del reproductor integrado
    const featuredPlayer = document.getElementById('featuredPlayer');
    const mainPlayer = document.getElementById('mainPlayer');
    const closePlayer = document.getElementById('closePlayer');
    const playerTitle = document.getElementById('playerTitle');
    const playerDesc = document.getElementById('playerDesc');
    
    // Función para reproducir video en el reproductor grande
    function playVideoInPlayer(videoId, title, artist, desc) {
        // Mostrar el reproductor si estaba oculto
        featuredPlayer.classList.add('active');
        
        // Configurar el iframe con autoplay
        mainPlayer.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
        
        // Actualizar la información del video
        playerTitle.innerHTML = title;
        playerDesc.innerHTML = desc || `${artist} | ${title}`;
        
        // Scroll suave hasta el reproductor
        setTimeout(() => {
            featuredPlayer.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
    }
    
    // Función para cerrar/ocultar el reproductor
    function closeFeaturedPlayer() {
        mainPlayer.src = '';
        featuredPlayer.classList.remove('active');
        playerTitle.innerHTML = 'Selecciona un video';
        playerDesc.innerHTML = 'Haz clic en cualquier tarjeta para reproducir';
    }
    
    // Evento del botón cerrar
    if (closePlayer) {
        closePlayer.addEventListener('click', closeFeaturedPlayer);
    }
    
    // Asignar clics a todas las tarjetas de video
    function bindVideoClicks() {
        const videoCards = document.querySelectorAll('.video-card');
        videoCards.forEach(card => {
            card.removeEventListener('click', videoClickHandler);
            card.addEventListener('click', videoClickHandler);
        });
    }
    
    function videoClickHandler(e) {
        // Si el clic fue en un enlace, no abrir el modal
        if (e.target.closest('a')) return;
        
        const videoId = this.getAttribute('data-video');
        const title = this.getAttribute('data-title') || this.querySelector('h3')?.innerText || 'Video';
        const artist = this.getAttribute('data-artist') || this.querySelector('.video-artist')?.innerText || '';
        const desc = this.getAttribute('data-desc') || this.querySelector('.video-title-small')?.innerText || '';
        const isSoon = this.getAttribute('data-soon') === 'true';
        
        if (isSoon) {
            alert('🎬 Video próximo a estrenarse. ¡Muy pronto!');
            return;
        }
        
        if (videoId && videoId !== 'dQw4w9WgXcQ') {
            playVideoInPlayer(videoId, title, artist, desc);
        } else if (videoId === 'dQw4w9WgXcQ') {
            alert('🎬 Video próximo a estrenarse. ¡Muy pronto!');
        }
    }
    
    // Paginación
    let currentPage = 1;
    const pageBtns = document.querySelectorAll('.page-btn');
    const page1 = document.getElementById('page-1');
    const page2 = document.getElementById('page-2');
    
    function showPage(page) {
        // Ocultar todas las páginas
        if (page1) page1.style.display = 'none';
        if (page2) page2.style.display = 'none';
        
        // Mostrar página seleccionada
        const activePage = document.getElementById(`page-${page}`);
        if (activePage) activePage.style.display = 'block';
        
        // Actualizar botones activos
        pageBtns.forEach(btn => {
            if (parseInt(btn.getAttribute('data-page')) === page) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
        
        currentPage = page;
        
        // Cerrar reproductor al cambiar de página
        closeFeaturedPlayer();
        
        // Rebondear clics después de cambiar de página
        setTimeout(bindVideoClicks, 100);
    }
    
    // Eventos de los botones de paginación
    pageBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const pageNum = parseInt(this.getAttribute('data-page'));
            if (pageNum === 1) showPage(1);
            else if (pageNum === 2) showPage(2);
            else if (pageNum === 3) {
                alert('📺 Página 3: Más videos musicales próximamente');
            } else if (pageNum === 4) {
                alert('🎵 Página 4: Pronto nuevos lanzamientos');
            }
        });
    });
    
    // Inicializar
    bindVideoClicks();
    
    console.log('Radio Centro: Reproductor integrado y paginación inicializados');
})();
</script>
<!-- ============================================ --><!-- RADIO CENTRO - SECCIÓN FINAL COMPLETA        --><!-- TÍTULOS EN ROJO POTENTE - DISEÑO PROFESIONAL --><!-- IMÁGENES COMPLETAS - SIN RECORTES           --><!-- URLs LISTAS PARA REEMPLAZAR                  --><!-- ============================================ --><style>
/* ============================================ */
/* FONDO NEGRO UNIFORME                         */
/* ============================================ */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html, body {
    background: #000000 !important;
    min-height: 100vh;
}
.radio-centro-container {
    max-width: 1600px;
    margin: 0 auto;
    padding: 20px 30px;
    background: #000000;
}
/* ============================================ */
/* BANNER PREMIUM                               */
/* ============================================ */
.premium-banner {
    background: linear-gradient(135deg, #0a0a0a 0%, #000000 100%);
    border-radius: 24px;
    padding: 50px 60px;
    margin: 40px 0 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 30px;
    border: 1px solid #e91826;
    box-shadow: 0 10px 30px rgba(0,0,0,0.5);
}
.premium-text {
    flex: 2;
}
.premium-badge {
    background: #f9b001;
    color: #000;
    font-weight: 800;
    font-size: 0.85rem;
    padding: 6px 18px;
    border-radius: 30px;
    display: inline-block;
    margin-bottom: 20px;
}
.premium-text h2 {
    font-size: 2.5rem;
    color: #ffffff;
    margin: 0 0 15px;
    font-weight: 800;
}
.premium-text p {
    font-size: 1.1rem;
    color: #aaa;
    max-width: 550px;
    line-height: 1.5;
}
.premium-btn {
    background: #e91826;
    color: white;
    padding: 16px 42px;
    border-radius: 50px;
    text-decoration: none;
    font-weight: 800;
    font-size: 1.1rem;
    transition: all 0.3s;
    display: inline-block;
    white-space: nowrap;
}
.premium-btn:hover {
    background: transparent;
    color: #e91826;
    border: 2px solid #e91826;
    transform: scale(1.02);
}
/* ============================================ */
/* ENCABEZADO DE SECCIÓN - TÍTULOS EN ROJO      */
/* ============================================ */
.section-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    flex-wrap: wrap;
    margin: 50px 0 30px;
    border-bottom: 3px solid #e91826;
    padding-bottom: 15px;
}
/* TÍTULOS EN COLOR ROJO BRILLANTE - POTENTE */
.section-header h2 {
    font-size: 2rem;
    color: #e91826 !important;
    font-weight: 800;
    letter-spacing: -0.5px;
    text-transform: uppercase;
    text-shadow: 0 0 10px rgba(233, 24, 38, 0.3);
}
.section-header a {
    color: #e91826;
    text-decoration: none;
    font-weight: 700;
    font-size: 0.95rem;
    transition: all 0.3s;
}
.section-header a:hover {
    color: #f9b001;
}
/* ============================================ */
/* 3 TARJETAS - IMÁGENES COMPLETAS              */
/* ============================================ */
.features-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 35px;
    margin: 30px 0 50px;
}
.feature-card {
    background: #0a0a0a;
    border-radius: 20px;
    overflow: hidden;
    transition: all 0.3s ease;
    border: 1px solid #222;
    text-decoration: none;
    color: inherit;
    display: block;
}
.feature-card:hover {
    transform: translateY(-6px);
    border-color: #e91826;
    box-shadow: 0 15px 30px rgba(233, 24, 38, 0.15);
}
.feature-img {
    width: 100%;
    height: auto;
    object-fit: contain;
    display: block;
    background: #1a1a1a;
}
.feature-content {
    padding: 25px;
}
.feature-badge {
    color: #f9b001;
    font-size: 0.7rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 10px;
    display: block;
}
.feature-content h3 {
    font-size: 1.5rem;
    color: #e91826;
    margin: 0 0 12px;
    font-weight: 800;
}
.feature-content p {
    color: #aaa;
    font-size: 0.95rem;
    line-height: 1.5;
    margin-bottom: 20px;
}
.feature-link {
    color: #e91826;
    font-weight: 700;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 5px;
    transition: gap 0.3s;
}
.feature-card:hover .feature-link {
    gap: 10px;
}
/* ============================================ */
/* GRID DE 4 NOTICIAS - IMÁGENES COMPLETAS      */
/* ============================================ */
.news-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 25px;
    margin: 40px 0 60px;
}
.news-card {
    background: #0a0a0a;
    border-radius: 16px;
    overflow: hidden;
    transition: all 0.3s ease;
    border: 1px solid #222;
    text-decoration: none;
    color: inherit;
    display: block;
}
.news-card:hover {
    transform: translateY(-5px);
    border-color: #e91826;
}
.news-image {
    background: #1a1a1a;
    height: auto;
    min-height: 160px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
}
.news-image-placeholder {
    font-size: 3rem;
    color: #333;
}
.news-tag {
    position: absolute;
    top: 12px;
    left: 12px;
    background: #f9b001;
    color: #000;
    font-size: 0.65rem;
    font-weight: 800;
    padding: 4px 12px;
    border-radius: 20px;
    z-index: 2;
}
.news-content {
    padding: 18px;
}
.news-content h3 {
    font-size: 0.95rem;
    color: #e0e0e0;
    margin: 0 0 12px;
    line-height: 1.4;
}
.news-share {
    display: flex;
    gap: 15px;
    border-top: 1px solid #222;
    padding-top: 12px;
}
.news-share a {
    color: #666;
    text-decoration: none;
    font-size: 0.8rem;
    font-weight: 700;
}
.news-share a:hover {
    color: #e91826;
}
/* ============================================ */
/* RESPONSIVE                                   */
/* ============================================ */
@media (max-width: 1000px) {
    .features-grid {
        gap: 25px;
    }
    .feature-content h3 {
        font-size: 1.3rem;
    }
    .news-grid {
        gap: 20px;
    }
}
@media (max-width: 900px) {
    .premium-banner {
        padding: 35px;
        flex-direction: column;
        text-align: center;
    }
    .premium-text p {
        max-width: 100%;
    }
    .premium-text h2 {
        font-size: 1.8rem;
    }
    .features-grid {
        grid-template-columns: repeat(2, 1fr);
    }
    .news-grid {
        grid-template-columns: repeat(2, 1fr);
    }
    .section-header h2 {
        font-size: 1.5rem;
    }
}
@media (max-width: 600px) {
    .radio-centro-container {
        padding: 15px;
    }
    .features-grid {
        grid-template-columns: 1fr;
    }
    .news-grid {
        grid-template-columns: 1fr;
    }
    .premium-banner {
        padding: 25px;
    }
    .premium-text h2 {
        font-size: 1.4rem;
    }
    .premium-btn {
        width: 100%;
        text-align: center;
    }
    .feature-content h3 {
        font-size: 1.2rem;
    }
    .section-header h2 {
        font-size: 1.2rem;
    }
}
</style><!-- ============================================ --><!-- 1. BANNER PREMIUM                            --><!-- ============================================ -->
<div class="premium-banner">
    <div class="premium-text">
        <p>
            <span class="premium-badge">⚡ EXCLUSIVO</span>
        </p>
        <h2>
            SUSCRIPCIÓN PREMIUM RADIO
        </h2>
        <p>
            Acceso ilimitado a entrevistas, shows exclusivos y contenido sin publicidad.
        </p>
    </div>
    <p>
        <a class="premium-btn" href="#">Disponible Ahora →</a>
    </p>
</div>
<!-- ============================================ --><!-- 2. TÍTULO TENDENCIAS - EN ROJO POTENTE      --><!-- ============================================ -->
<div class="section-header">
    <h2>
        🔥 TENDENCIAS / ÚLTIMAS NOTICIAS
    </h2>
    <p>
        <a href="#">Ver más →</a>
    </p>
</div>
<!-- ============================================ --><!-- 3. TRES TARJETAS CON URLs LISTAS             --><!-- ============================================ -->
<div class="features-grid">
    <!-- Tarjeta 1: Ranking Musical -->
    <div class="feature-card">
        <img class="feature-img" src="https://cdn.radiocentro.net/Radio%20Centro/Sitio%20web%20Principal/Nueva%20web%20drupal/ranking%20musical.svg" alt="Ranking Musical" width="400" height="250" onerror="this.src=&apos;https://placehold.co/800x400/1a1a1a/e91826?text=RANKING+MUSICAL&apos;">
        <div class="feature-content">
            <p>
                <span class="feature-badge">RC RANKING</span>
            </p>
            <h3>
                RANKING MUSICAL
            </h3>
            <p>
                Conoce los artistas más escuchados del momento. Top 10 semanal con los hits que marcan tendencia.
            </p>
            <p>
                <a class="feature-link" href="#">Explorar ranking →</a>
            </p>
        </div>
    </div>
    <!-- Tarjeta 2: Actualidad Musical -->
    <div class="feature-card">
        <img class="feature-img" src="https://cdn.radiocentro.net/Radio%20Centro/Sitio%20web%20Principal/Nueva%20web%20drupal/Actualidad%20rc%20news.svg" alt="Actualidad Musical" width="400" height="250" onerror="this.src=&apos;https://placehold.co/800x400/1a1a1a/e91826?text=ACTUALIDAD+MUSICAL&apos;">
        <div class="feature-content">
            <p>
                <span class="feature-badge">RC NEWS</span>
            </p>
            <h3>
                ACTUALIDAD MUSICAL DIARIO
            </h3>
            <p>
                Las últimas noticias de la música y el mundo en RC, el portal digital que está revolucionando la industria.
            </p>
            <p>
                <a class="feature-link" href="https://radiocentro.net/news">Leer noticias →</a>
            </p>
        </div>
    </div>
    <!-- Tarjeta 3: Publicidad ADS -->
    <div class="feature-card">
        <img class="feature-img" src="https://cdn.radiocentro.net/Radio%20Centro/Sitio%20web%20Principal/Nueva%20web%20drupal/publicidad%20ads.svg" alt="Publicidad ADS" width="400" height="250" onerror="this.src=&apos;https://placehold.co/800x400/1a1a1a/e91826?text=PUBLICIDAD+ADS&apos;">
        <div class="feature-content">
            <p>
                <span class="feature-badge">RC ADS</span>
            </p>
            <h3>
                PUBLICIDAD DIGITAL ADS
            </h3>
            <p>
                Llega al público objetivo en el momento idóneo con RC ADS, expertos en campañas de publicidad.
            </p>
            <p>
                <a class="feature-link" href="https://www.radiocentro.net/servicios">Impulsa tu marca →</a>
            </p>
        </div>
    </div>
</div>
<!-- ============================================ --><!-- 4. TÍTULO ÚLTIMAS NOTICIAS - EN ROJO        --><!-- ============================================ -->
<div class="section-header">
    <h2>
        📰 ÚLTIMAS NOTICIAS
    </h2>
    <p>
        <a href="#">Todas las noticias →</a>
    </p>
</div>
<!-- ============================================ --><!-- 5. GRID DE 4 NOTICIAS                        --><!-- ============================================ -->
<div class="news-grid">
    <div class="news-card">
        <div class="news-image">
            <div class="news-image-placeholder">
                🎬
            </div>
            <p>
                <span class="news-tag">RC NEWS</span>
            </p>
        </div>
        <div class="news-content">
            <h3>
                Shakira vuelve a otro mundial y es el 4rto&nbsp;
            </h3>
            <div class="news-share">
                <a href="#">f</a> <a href="#">x</a> <a href="#">↓</a>
            </div>
        </div>
    </div>
    <div class="news-card">
        <div class="news-image">
            <div class="news-image-placeholder">
                🎤
            </div>
            <p>
                <span class="news-tag">RC NEWS</span>
            </p>
        </div>
        <div class="news-content">
            <h3>
                Como impulsar tu música a tendencias en Youtube&nbsp;
            </h3>
            <div class="news-share">
                <a href="#">f</a> <a href="#">x</a> <a href="#">↓</a>
            </div>
        </div>
    </div>
    <div class="news-card">
        <div class="news-image">
            <div class="news-image-placeholder">
                🏆
            </div>
            <p>
                <span class="news-tag">RC NEWS</span>
            </p>
        </div>
        <div class="news-content">
            <h3>
                Maluma y su historia con Yeison jimenez algo historico: Reggaeton con popular
            </h3>
            <div class="news-share">
                <a href="#">f</a> <a href="#">x</a> <a href="#">↓</a>
            </div>
        </div>
    </div>
    <div class="news-card">
        <div class="news-image">
            <div class="news-image-placeholder">
                🎙️
            </div>
            <p>
                <span class="news-tag">RC EXCLUSIVE</span>
            </p>
        </div>
        <div class="news-content">
            <h3>
                Karol G será homenajeada en los AMAs con el premio otorgado a Whitney Houston
            </h3>
            <div class="news-share">
                <a href="#">f</a> <a href="#">x</a> <a href="#">↓</a>
            </div>
        </div>
    </div>
</div>
<!-- ============================================ --><!-- VERSIÓN SUPER GRANDE - MÁXIMO TAMAÑO         --><!-- RADIO CENTRO - SECCIÓN WWE VERTICAL          --><!-- ============================================ -->
<div class="wwe-videos-vertical">
    <h2 class="titulo-gradiente">
        🔥 RC VIDEOS / MUSICA 🔥&nbsp;
    </h2>
    <div class="wwe-list">
        <!-- VIDEO 1 - SMACKDOWN -->
        <div class="wwe-list-item">
            <div class="wwe-left">
                <div class="wwe-item-thumb" data-video-id="CocEMWJ7k6o">
                    <p>
                        <span class="wwe-event-badge">💜 RC VIDEOS</span>
                    </p>
                    <div class="wwe-play-button">
                        &nbsp;
                    </div>
                    <p>
                        <span class="wwe-duration">03:12</span>
                    </p>
                    <p>
                        <img src="https://img.youtube.com/vi/15iEJ0qY_70/maxresdefault.jpg" alt="Shakira Acróstico" width="120" height="68">
                    </p>
                </div>
                <div class="video-container" style="display:none;" id="video-container-1">
                    <iframe src="" frameborder="0" allow="autoplay; fullscreen" allowfullscreen=""></iframe>
                </div>
            </div>
            <div class="wwe-item-content">
                <h3 class="wwe-item-title">
                    Karol G - Papasito
                </h3>
                <p class="wwe-item-subtitle">
                    La nueva canción de la bichota a los papasitos | Éxito mundial
                </p>
            </div>
            <div class="wwe-item-social">
                <div class="wwe-social-icons-group">
                    <a class="wwe-social-link share-fb" href="#" data-url="https://www.youtube.com/watch?v=15iEJ0qY_70" data-title="Shakira - Acróstico">📘 Facebook</a> <a class="wwe-social-link share-tw" href="#" data-url="https://www.youtube.com/watch?v=CocEMWJ7k6o" data-title="Shakira - Acróstico">🐦 X</a> <a class="wwe-social-link share-pin" href="#" data-url="https://www.youtube.com/watch?v=CocEMWJ7k6o" data-title="Shakira - Acróstico">📌 Pinterest</a> <a class="wwe-social-link share-em" href="#" data-url="https://www.youtube.com/watch?v=CocEMWJ7k6o" data-title="Shakira - Acróstico">✉️ Email</a>
                </div>
            </div>
        </div>
        <!-- VIDEO 2 - TENDENCIAS -->
        <div class="wwe-list-item">
            <div class="wwe-left">
                <div class="wwe-item-thumb" data-video-id="fcnDmrtj6Sk">
                    <img src="https://img.youtube.com/vi/fcnDmrtj6Sk/maxresdefault.jpg" alt="Shakira Dai Dai" width="1280" height="720">
                    <p>
                        <span class="wwe-event-badge">🔥 TENDENCIAS</span>
                    </p>
                    <div class="wwe-play-button">
                        &nbsp;
                    </div>
                    <p>
                        <span class="wwe-duration">03:36</span>
                    </p>
                </div>
                <div class="video-container" style="display:none;" id="video-container-2">
                    <iframe src="" frameborder="0" allow="autoplay; fullscreen" allowfullscreen=""></iframe>
                </div>
            </div>
            <div class="wwe-item-content">
                <h3 class="wwe-item-title">
                    Shakira x Burna Boy - Dai Dai
                </h3>
                <p class="wwe-item-subtitle">
                    Canción Oficial FIFA World Cup 2026
                </p>
            </div>
            <div class="wwe-item-social">
                <div class="wwe-social-icons-group">
                    <a class="wwe-social-link share-fb" href="#" data-url="https://www.youtube.com/watch?v=fcnDmrtj6Sk" data-title="Shakira x Burna Boy - Dai Dai">📘 Facebook</a> <a class="wwe-social-link share-tw" href="#" data-url="https://www.youtube.com/watch?v=fcnDmrtj6Sk" data-title="Shakira x Burna Boy - Dai Dai">🐦 X</a> <a class="wwe-social-link share-pin" href="#" data-url="https://www.youtube.com/watch?v=fcnDmrtj6Sk" data-title="Shakira x Burna Boy - Dai Dai">📌 Pinterest</a> <a class="wwe-social-link share-em" href="#" data-url="https://www.youtube.com/watch?v=fcnDmrtj6Sk" data-title="Shakira x Burna Boy - Dai Dai">✉️ Email</a>
                </div>
            </div>
        </div>
        <!-- VIDEO 3 - ARTIST RC -->
        <div class="wwe-list-item">
            <div class="wwe-left">
                <div class="wwe-item-thumb" data-video-id="z5b9VyWDhgU">
                    <img src="https://img.youtube.com/vi/z5b9VyWDhgU/maxresdefault.jpg" alt="Melissa Mora" width="1280" height="720">
                    <p>
                        <span class="wwe-event-badge">⚡ ARTIST RC</span>
                    </p>
                    <div class="wwe-play-button">
                        &nbsp;
                    </div>
                    <p>
                        <span class="wwe-duration">04:12</span>
                    </p>
                </div>
                <div class="video-container" style="display:none;" id="video-container-3">
                    <iframe src="" frameborder="0" allow="autoplay; fullscreen" allowfullscreen=""></iframe>
                </div>
            </div>
            <div class="wwe-item-content">
                <h3 class="wwe-item-title">
                    Melissa Mora - Copas
                </h3>
                <p class="wwe-item-subtitle">
                    El nuevo éxito del regional mexicano
                </p>
            </div>
            <div class="wwe-item-social">
                <div class="wwe-social-icons-group">
                    <a class="wwe-social-link share-fb" href="#" data-url="https://www.youtube.com/watch?v=z5b9VyWDhgU" data-title="Melissa Mora - Copas">📘 Facebook</a> <a class="wwe-social-link share-tw" href="#" data-url="https://www.youtube.com/watch?v=z5b9VyWDhgU" data-title="Melissa Mora - Copas">🐦 X</a> <a class="wwe-social-link share-pin" href="#" data-url="https://www.youtube.com/watch?v=z5b9VyWDhgU" data-title="Melissa Mora - Copas">📌 Pinterest</a> <a class="wwe-social-link share-em" href="#" data-url="https://www.youtube.com/watch?v=z5b9VyWDhgU" data-title="Melissa Mora - Copas">✉️ Email</a>
                </div>
            </div>
        </div>
        <!-- VIDEO 4 - SMACKDOWN -->
        <div class="wwe-list-item">
            <div class="wwe-left">
                <div class="wwe-item-thumb" data-video-id="8jsFGdeWNPo">
                    <img src="https://img.youtube.com/vi/8jsFGdeWNPo/maxresdefault.jpg" alt="Nicky Jam" width="1280" height="720">
                    <p>
                        <span class="wwe-event-badge">💜 RC VIDEOS</span>
                    </p>
                    <div class="wwe-play-button">
                        &nbsp;
                    </div>
                    <p>
                        <span class="wwe-duration">03:45</span>
                    </p>
                </div>
                <div class="video-container" style="display:none;" id="video-container-4">
                    <iframe src="" frameborder="0" allow="autoplay; fullscreen" allowfullscreen=""></iframe>
                </div>
            </div>
            <div class="wwe-item-content">
                <h3 class="wwe-item-title">
                    Nicky Jam - Juegos Prohibidos
                </h3>
                <p class="wwe-item-subtitle">
                    El viral del momento que no para de sonar
                </p>
            </div>
            <div class="wwe-item-social">
                <div class="wwe-social-icons-group">
                    <a class="wwe-social-link share-fb" href="#" data-url="https://www.youtube.com/watch?v=8jsFGdeWNPo" data-title="Nicky Jam - Juegos Prohibidos">📘 Facebook</a> <a class="wwe-social-link share-tw" href="#" data-url="https://www.youtube.com/watch?v=8jsFGdeWNPo" data-title="Nicky Jam - Juegos Prohibidos">🐦 X</a> <a class="wwe-social-link share-pin" href="#" data-url="https://www.youtube.com/watch?v=8jsFGdeWNPo" data-title="Nicky Jam - Juegos Prohibidos">📌 Pinterest</a> <a class="wwe-social-link share-em" href="#" data-url="https://www.youtube.com/watch?v=8jsFGdeWNPo" data-title="Nicky Jam - Juegos Prohibidos">✉️ Email</a>
                </div>
            </div>
        </div>
        <!-- VIDEO 5 - TENDENCIAS -->
        <div class="wwe-list-item">
            <div class="wwe-left">
                <div class="wwe-item-thumb" data-video-id="X9CsK_nuqdE">
                    <img src="https://img.youtube.com/vi/X9CsK_nuqdE/maxresdefault.jpg" alt="Shakira Audio" width="1280" height="720">
                    <p>
                        <span class="wwe-event-badge">🔥TENDENCIAS</span>
                    </p>
                    <div class="wwe-play-button">
                        &nbsp;
                    </div>
                    <p>
                        <span class="wwe-duration">03:30</span>
                    </p>
                </div>
                <div class="video-container" style="display:none;" id="video-container-5">
                    <iframe src="" frameborder="0" allow="autoplay; fullscreen" allowfullscreen=""></iframe>
                </div>
            </div>
            <div class="wwe-item-content">
                <h3 class="wwe-item-title">
                    Shakira - Dai Dai (Audio)
                </h3>
                <p class="wwe-item-subtitle">
                    Escucha el audio oficial del hit del mundial
                </p>
            </div>
            <div class="wwe-item-social">
                <div class="wwe-social-icons-group">
                    <a class="wwe-social-link share-fb" href="#" data-url="https://www.youtube.com/watch?v=X9CsK_nuqdE" data-title="Shakira - Dai Dai (Audio)">📘 Facebook</a> <a class="wwe-social-link share-tw" href="#" data-url="https://www.youtube.com/watch?v=X9CsK_nuqdE" data-title="Shakira - Dai Dai (Audio)">🐦 X</a> <a class="wwe-social-link share-pin" href="#" data-url="https://www.youtube.com/watch?v=X9CsK_nuqdE" data-title="Shakira - Dai Dai (Audio)">📌 Pinterest</a> <a class="wwe-social-link share-em" href="#" data-url="https://www.youtube.com/watch?v=X9CsK_nuqdE" data-title="Shakira - Dai Dai (Audio)">✉️ Email</a>
                </div>
            </div>
        </div>
    </div>
</div>
<style>
.wwe-videos-vertical {
    margin: 50px 0;
    padding: 20px 0;
    max-width: 1800px;
    margin-left: auto;
    margin-right: auto;
}
/* ============================================ */
/* TÍTULO CON GRADIENTE ROJO ESPECTACULAR       */
/* ============================================ */
.titulo-gradiente {
    font-size: 3rem;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 4px;
    margin-bottom: 50px;
    border-left: 8px solid #e91826;
    padding-left: 30px;
    font-family: 'Impact', 'Bebas Neue', sans-serif;
    background: linear-gradient(135deg, #ff0000, #cc0000, #990000, #ff3333, #e91826);
    background-size: 300% 300%;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    animation: gradienteMovil 3s ease infinite;
    text-shadow: 2px 2px 10px rgba(233, 24, 38, 0.3);
}
@keyframes gradienteMovil {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}
.wwe-list {
    display: flex;
    flex-direction: column;
    gap: 45px;
}
.wwe-list-item {
    display: grid;
    grid-template-columns: 500px 1fr 280px;
    gap: 35px;
    background: #0a0a0a;
    border-radius: 28px;
    overflow: hidden;
    border: 1px solid #2a2a2a;
    padding: 25px;
    transition: all 0.3s ease;
}
.wwe-list-item:hover {
    border-color: #e91826;
    transform: translateX(10px);
    box-shadow: 0 10px 30px rgba(233, 24, 38, 0.2);
}
.wwe-left {
    position: relative;
}
/* ============================================ */
/* MINIATURA - MUCHO MÁS GRANDE                 */
/* ============================================ */
.wwe-item-thumb {
    position: relative;
    overflow: hidden;
    height: 300px;
    cursor: pointer;
    border-radius: 20px;
    box-shadow: 0 8px 20px rgba(0,0,0,0.4);
}
.wwe-item-thumb img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s;
}
.wwe-item-thumb:hover img {
    transform: scale(1.08);
}
.wwe-event-badge {
    position: absolute;
    top: 20px;
    left: 20px;
    background: #e91826;
    color: white;
    font-weight: 800;
    font-size: 1.1rem;
    padding: 8px 20px;
    border-radius: 40px;
    text-transform: uppercase;
    letter-spacing: 2px;
    z-index: 2;
    box-shadow: 0 4px 10px rgba(0,0,0,0.3);
}
/* ============================================ */
/* BOTÓN PLAY - SUPER GRANDE (100px)            */
/* ============================================ */
.wwe-play-button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(233, 24, 38, 0.92);
    width: 100px;
    height: 100px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: all 0.35s ease;
    pointer-events: none;
    box-shadow: 0 8px 30px rgba(0,0,0,0.4);
    border: 3px solid rgba(255,255,255,0.3);
}
.wwe-play-button::after {
    content: "▶";
    color: white;
    font-size: 2.5rem;
    margin-left: 10px;
}
.wwe-item-thumb:hover .wwe-play-button {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1.12);
}
.wwe-duration {
    position: absolute;
    bottom: 15px;
    right: 15px;
    background: rgba(0,0,0,0.85);
    color: #e91826;
    padding: 6px 12px;
    border-radius: 10px;
    font-size: 1rem;
    font-weight: bold;
}
/* ============================================ */
/* REPRODUCTOR - MÁXIMO TAMAÑO                  */
/* ============================================ */
.video-container {
    margin-top: 25px;
    border-radius: 20px;
    overflow: hidden;
    background: #000;
    box-shadow: 0 15px 35px rgba(0,0,0,0.5);
}
.video-container iframe {
    width: 100%;
    height: 520px;
    border: none;
    display: block;
}
/* Animación de entrada */
.video-container {
    animation: fadeInUp 0.5s ease;
}
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
/* ============================================ */
/* TÍTULO CENTRAL - MÁS GRANDE                  */
/* ============================================ */
.wwe-item-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 15px;
}
.wwe-item-title {
    font-size: 1.9rem;
    font-weight: 800;
    color: #f0f0f0;
    margin: 0 0 12px;
    line-height: 1.3;
    transition: color 0.3s;
}
.wwe-item-title:hover {
    color: #e91826;
}
.wwe-item-subtitle {
    font-size: 1.05rem;
    color: #999;
    margin: 0;
    line-height: 1.5;
}
/* ============================================ */
/* ICONOS SOCIALES - MÁS GRANDES                */
/* ============================================ */
.wwe-item-social {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    padding-right: 15px;
}
.wwe-social-icons-group {
    display: flex;
    gap: 25px;
    flex-wrap: wrap;
}
.wwe-social-link {
    color: #777;
    text-decoration: none;
    font-size: 1.1rem;
    font-weight: 700;
    transition: all 0.3s;
    padding: 8px 5px;
    cursor: pointer;
}
.wwe-social-link:hover {
    color: #e91826;
    transform: translateY(-3px);
}
/* ============================================ */
/* RESPONSIVE - MÓVIL                          */
/* ============================================ */
@media (max-width: 1200px) {
    .wwe-list-item {
        grid-template-columns: 420px 1fr 240px;
        gap: 25px;
    }
    .wwe-item-thumb {
        height: 260px;
    }
    .wwe-play-button {
        width: 85px;
        height: 85px;
    }
    .wwe-play-button::after {
        font-size: 2rem;
    }
    .video-container iframe {
        height: 450px;
    }
    .wwe-item-title {
        font-size: 1.6rem;
    }
    .titulo-gradiente {
        font-size: 2.4rem;
    }
}
@media (max-width: 1000px) {
    .wwe-list-item {
        grid-template-columns: 360px 1fr 200px;
        gap: 20px;
    }
    .wwe-item-thumb {
        height: 230px;
    }
    .wwe-play-button {
        width: 75px;
        height: 75px;
    }
    .wwe-play-button::after {
        font-size: 1.8rem;
    }
    .video-container iframe {
        height: 380px;
    }
    .titulo-gradiente {
        font-size: 2rem;
    }
}
@media (max-width: 900px) {
    .wwe-list-item {
        grid-template-columns: 1fr;
        gap: 25px;
        padding: 20px;
    }
    .wwe-item-thumb {
        height: 280px;
    }
    .wwe-item-content {
        padding: 0;
        text-align: center;
    }
    .wwe-item-social {
        flex-direction: row;
        justify-content: center;
        padding: 0;
    }
    .titulo-gradiente {
        font-size: 1.8rem;
    }
    .video-container iframe {
        height: 400px;
    }
}
@media (max-width: 600px) {
    .wwe-item-thumb {
        height: 220px;
    }
    .titulo-gradiente {
        font-size: 1.3rem;
        padding-left: 20px;
        border-left-width: 5px;
    }
    .wwe-social-icons-group {
        gap: 15px;
        justify-content: center;
    }
    .wwe-social-link {
        font-size: 0.9rem;
    }
    .wwe-play-button {
        width: 65px;
        height: 65px;
    }
    .wwe-play-button::after {
        font-size: 1.5rem;
    }
    .video-container iframe {
        height: 220px;
    }
    .wwe-item-title {
        font-size: 1.3rem;
    }
}
</style><script>
// ============================================ //
// REPRODUCTOR SUPER GRANDE - MÁXIMO TAMAÑO     //
// ============================================ //
(function() {
    var activeVideo = null;
    
    function toggleVideo(thumb, videoId, containerId) {
        var container = document.getElementById(containerId);
        var iframe = container.querySelector('iframe');
        
        if (activeVideo && activeVideo !== containerId) {
            var prevContainer = document.getElementById(activeVideo);
            var prevIframe = prevContainer.querySelector('iframe');
            prevIframe.src = '';
            prevContainer.style.display = 'none';
        }
        
        if (container.style.display === 'none' || container.style.display === '') {
            iframe.src = 'https://www.youtube.com/embed/' + videoId + '?autoplay=1&rel=0&modestbranding=1&showinfo=0';
            container.style.display = 'block';
            activeVideo = containerId;
            setTimeout(function() {
                container.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        } else {
            iframe.src = '';
            container.style.display = 'none';
            activeVideo = null;
        }
    }
    
    var thumbs = document.querySelectorAll('.wwe-item-thumb');
    for (var i = 0; i < thumbs.length; i++) {
        (function(index) {
            var thumb = thumbs[index];
            var videoId = thumb.getAttribute('data-video-id');
            var containerId = 'video-container-' + (index + 1);
            
            thumb.onclick = function(e) {
                e.stopPropagation();
                toggleVideo(thumb, videoId, containerId);
            };
        })(i);
    }
    
    function shareOnFacebook(url) {
        window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(url), '_blank', 'width=600,height=400');
        return false;
    }
    
    function shareOnTwitter(url, title) {
        window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(title) + '&url=' + encodeURIComponent(url), '_blank', 'width=600,height=400');
        return false;
    }
    
    function shareOnPinterest(url, title) {
        window.open('https://pinterest.com/pin/create/button/?url=' + encodeURIComponent(url) + '&description=' + encodeURIComponent(title), '_blank', 'width=600,height=400');
        return false;
    }
    
    function shareOnEmail(url, title) {
        window.location.href = 'mailto:?subject=' + encodeURIComponent('Mira este video: ' + title) + '&body=' + encodeURIComponent('Te recomiendo este video: ' + title + '\n\nVerlo en: ' + url);
        return false;
    }
    
    var fbBtns = document.querySelectorAll('.share-fb');
    var twBtns = document.querySelectorAll('.share-tw');
    var pinBtns = document.querySelectorAll('.share-pin');
    var emBtns = document.querySelectorAll('.share-em');
    
    for (var j = 0; j < fbBtns.length; j++) {
        fbBtns[j].onclick = function(e) {
            e.preventDefault();
            var url = this.getAttribute('data-url');
            shareOnFacebook(url);
        };
        twBtns[j].onclick = function(e) {
            e.preventDefault();
            var url = this.getAttribute('data-url');
            var title = this.getAttribute('data-title');
            shareOnTwitter(url, title);
        };
        pinBtns[j].onclick = function(e) {
            e.preventDefault();
            var url = this.getAttribute('data-url');
            var title = this.getAttribute('data-title');
            shareOnPinterest(url, title);
        };
        emBtns[j].onclick = function(e) {
            e.preventDefault();
            var url = this.getAttribute('data-url');
            var title = this.getAttribute('data-title');
            shareOnEmail(url, title);
        };
    }
    
})();
</script>
<!-- ============================================ --><!-- TÍTULO CON GRADIENTE ROJO POTENTE            --><!-- RADIO CENTRO - SECCIÓN EVENTOS WWE STYLE     --><!-- ============================================ --><style>
/* ============================================ */
/* ESTILOS SECCIÓN EVENTOS                      */
/* ============================================ */
.eventos-section {
    margin: 60px 0;
    padding: 20px 0;
}
/* Encabezado con botón rojo */
.eventos-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 35px;
    border-bottom: 3px solid #e91826;
    padding-bottom: 15px;
}
/* 🔥 TÍTULO CON GRADIENTE ROJO POTENTE 🔥 */
.eventos-title h2 {
    font-size: 1.8rem;
    margin: 0;
    font-weight: 800;
    background: linear-gradient(135deg, #e91826 0%, #8a0f18 50%, #e91826 100%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    text-shadow: 0 2px 10px rgba(233, 24, 38, 0.3);
    letter-spacing: 1px;
}
.eventos-title p {
    color: #e91826;
    font-size: 0.8rem;
    letter-spacing: 2px;
    margin-top: 5px;
}
.btn-red {
    background: #e91826;
    color: white;
    padding: 12px 30px;
    border-radius: 40px;
    text-decoration: none;
    font-weight: 700;
    font-size: 0.9rem;
    transition: all 0.3s;
    display: inline-block;
    border: 2px solid #e91826;
}
.btn-red:hover {
    background: transparent;
    color: #e91826;
    transform: scale(1.02);
}
/* Grid de tarjetas de eventos */
.eventos-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
}
/* Tarjeta individual de evento */
.event-card {
    background: #0a0a0a;
    border-radius: 20px;
    overflow: hidden;
    transition: all 0.3s ease;
    border: 1px solid #2a2a2a;
    display: flex;
    flex-direction: column;
}
.event-card:hover {
    transform: translateY(-6px);
    border-color: #e91826;
    box-shadow: 0 15px 30px rgba(233, 24, 38, 0.15);
}
/* Imagen del evento */
.event-image {
    position: relative;
    overflow: hidden;
    height: 200px;
}
.event-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s;
}
.event-card:hover .event-image img {
    transform: scale(1.05);
}
/* Badge del evento (RC EVENTOS, SMACKDOWN, etc) */
.event-badge {
    position: absolute;
    top: 15px;
    left: 15px;
    background: #e91826;
    color: white;
    font-weight: 800;
    font-size: 0.8rem;
    padding: 5px 14px;
    border-radius: 30px;
    text-transform: uppercase;
    letter-spacing: 1px;
    z-index: 2;
}
/* Contenido de la tarjeta */
.event-content {
    padding: 20px;
}
.event-content h3 {
    font-size: 1.2rem;
    color: #f0f0f0;
    margin: 0 0 10px;
    font-weight: 700;
}
.event-content p {
    font-size: 0.85rem;
    color: #aaa;
    line-height: 1.5;
    margin-bottom: 15px;
}
/* Botón amarillo estilo WWE */
.btn-yellow {
    background: #f9b001;
    color: #000000;
    padding: 8px 20px;
    border-radius: 30px;
    text-decoration: none;
    font-weight: 800;
    font-size: 0.75rem;
    display: inline-block;
    transition: all 0.3s;
    text-transform: uppercase;
    letter-spacing: 1px;
}
.btn-yellow:hover {
    background: #e91826;
    color: white;
    transform: translateX(5px);
}
/* ============================================ */
/* RESPONSIVE                                   */
/* ============================================ */
@media (max-width: 900px) {
    .eventos-grid {
        grid-template-columns: 1fr;
        gap: 25px;
    }
    
    .eventos-header {
        flex-direction: column;
        gap: 15px;
        text-align: center;
    }
    
    .eventos-title h2 {
        font-size: 1.5rem;
    }
    
    .btn-red {
        padding: 10px 25px;
        font-size: 0.85rem;
    }
}
@media (max-width: 600px) {
    .event-image {
        height: 180px;
    }
    
    .event-content h3 {
        font-size: 1rem;
    }
    
    .event-content p {
        font-size: 0.75rem;
    }
}
</style><!-- ============================================ --><!-- HTML DE LA SECCIÓN EVENTOS                   --><!-- ============================================ -->
<div class="eventos-section">
    <!-- ENCABEZADO CON BOTÓN ROJO -->
    <div class="eventos-header">
        <div class="eventos-title">
            <h2>
                🎪 Radio Centro EVENTOS
            </h2>
            <p>
                Próximos Eventos
            </p>
        </div>
        <p>
            <a class="btn-red" href="https://www.radiocentro.net/eventos">Ver todos los Shows →</a>
        </p>
    </div>
    <!-- GRID DE 4 TARJETAS DE EVENTOS -->
    <div class="eventos-grid">
        <!-- TARJETA 1 - RC EVENTOS-->
        <div class="event-card">
            <div class="event-image">
                <img src="https://placehold.co/600x400/1a1a1a/e91826?text=RAW+EVENT" alt="RAW Event" width="600" height="400"> <span class="event-badge">🔥 RC EVENTOS</span>
            </div>
            <div class="event-content">
                <h3>
                    Raw results, May 4, 2026
                </h3>
                <p>
                    Jacob Fatu smashes Roman Reigns through a table after locking in Tongan Death Grip
                </p>
                <p>
                    <a class="btn-yellow" href="https://www.radiocentro.net/eventos">Ver todos los eventos →</a>
                </p>
            </div>
        </div>
        <!-- TARJETA 2 - RC EVENT -->
        <div class="event-card">
            <div class="event-image">
                <img src="https://placehold.co/600x400/1a1a1a/f9b001?text=RADIOCENTRO+EVENT" alt="Radio Centro Event" width="600" height="400"> <span class="event-badge">💜 RADIO CENTRO EVENTOS</span>
            </div>
            <div class="event-content">
                <h3>
                    SmackDown results, May 8, 2026
                </h3>
                <p>
                    The Gingerbread Man reanimates to attack Sami Zayn
                </p>
                <p>
                    <a class="btn-yellow" href="https://www.radiocentro.net/eventos">Ver todos los eventos →</a>
                </p>
            </div>
        </div>
        <!-- TARJETA 3 - BACKLASH -->
        <div class="event-card">
            <div class="event-image">
                <img src="https://placehold.co/600x400/1a1a1a/e91826?text=BACKLASH+EVENT" alt="Backlash Event" width="600" height="400"> <span class="event-badge">⚡ BACKLASH</span>
            </div>
            <div class="event-content">
                <h3>
                    WWE Backlash 2026
                </h3>
                <p>
                    Jacob Fatu unleashes a brutal attack after falling to Roman Reigns
                </p>
                <p>
                    <a class="btn-yellow" href="https://www.radiocentro.net/eventos">Ver Todos los eventos →</a>
                </p>
            </div>
        </div>
        <!-- TARJETA 4 - NXT -->
        <div class="event-card">
            <div class="event-image">
                <img src="https://placehold.co/600x400/1a1a1a/f9b001?text=Contrata+Artistas" alt="NXT Event" width="600" height="400"> <span class="event-badge">⭐ Contrata Artistas</span>
            </div>
            <div class="event-content">
                <h3>
                    NXT Results, May 11, 2026
                </h3>
                <p>
                    New champions crowned as the road to Battleground heats up
                </p>
                <p>
                    <a class="btn-yellow" href="https://radiocentro.net/contratar-artistas">Contratar Cantantes →</a>
                </p>
            </div>
        </div>
    </div>
</div>
<!-- ============================================ --><!-- NOMBRES ÚNICOS - NO INTERFIERE CON LA OTRA   --><!-- RADIO CENTRO - NUEVA SECCIÓN WWE VERTICAL    --><!-- ============================================ --><style>
/* TODAS LAS CLASES TIENEN PREFIJO "NUEVO-" PARA EVITAR CONFLICTOS */
.nuevo-wwe-container {
    margin: 50px 0;
    padding: 20px 0;
    max-width: 1800px;
    margin-left: auto;
    margin-right: auto;
}
.nuevo-wwe-titulo {
    font-size: 3rem;
    font-weight: 900;
    color: #e91826;
    text-transform: uppercase;
    letter-spacing: 4px;
    margin-bottom: 50px;
    border-left: 8px solid #e91826;
    padding-left: 30px;
    font-family: 'Impact', 'Bebas Neue', sans-serif;
}
.nuevo-wwe-lista {
    display: flex;
    flex-direction: column;
    gap: 45px;
}
.nuevo-wwe-item {
    display: grid;
    grid-template-columns: 500px 1fr 280px;
    gap: 35px;
    background: #0a0a0a;
    border-radius: 28px;
    overflow: hidden;
    border: 1px solid #2a2a2a;
    padding: 25px;
    transition: all 0.3s ease;
}
.nuevo-wwe-item:hover {
    border-color: #e91826;
    transform: translateX(10px);
    box-shadow: 0 10px 30px rgba(233, 24, 38, 0.2);
}
.nuevo-wwe-left {
    position: relative;
}
.nuevo-wwe-thumb {
    position: relative;
    overflow: hidden;
    height: 320px;
    cursor: pointer;
    border-radius: 20px;
    box-shadow: 0 8px 20px rgba(0,0,0,0.4);
}
.nuevo-wwe-thumb img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s;
}
.nuevo-wwe-thumb:hover img {
    transform: scale(1.08);
}
.nuevo-wwe-badge {
    position: absolute;
    top: 20px;
    left: 20px;
    background: #e91826;
    color: white;
    font-weight: 800;
    font-size: 1.1rem;
    padding: 8px 20px;
    border-radius: 40px;
    text-transform: uppercase;
    letter-spacing: 2px;
    z-index: 2;
    box-shadow: 0 4px 10px rgba(0,0,0,0.3);
}
.nuevo-wwe-play {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(233, 24, 38, 0.92);
    width: 110px;
    height: 110px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: all 0.35s ease;
    pointer-events: none;
    box-shadow: 0 8px 30px rgba(0,0,0,0.4);
    border: 3px solid rgba(255,255,255,0.3);
}
.nuevo-wwe-play::after {
    content: "▶";
    color: white;
    font-size: 2.8rem;
    margin-left: 10px;
}
.nuevo-wwe-thumb:hover .nuevo-wwe-play {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1.12);
}
.nuevo-wwe-duracion {
    position: absolute;
    bottom: 15px;
    right: 15px;
    background: rgba(0,0,0,0.85);
    color: #e91826;
    padding: 6px 12px;
    border-radius: 10px;
    font-size: 1rem;
    font-weight: bold;
}
.nuevo-video-container {
    margin-top: 25px;
    border-radius: 20px;
    overflow: hidden;
    background: #000;
    box-shadow: 0 15px 35px rgba(0,0,0,0.5);
    display: none;
}
.nuevo-video-container iframe {
    width: 100%;
    height: 520px;
    border: none;
    display: block;
}
@keyframes nuevoFadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
.nuevo-video-container {
    animation: nuevoFadeInUp 0.5s ease;
}
.nuevo-wwe-contenido {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 15px;
}
.nuevo-wwe-titulo-video {
    font-size: 1.9rem;
    font-weight: 800;
    color: #f0f0f0;
    margin: 0 0 12px;
    line-height: 1.3;
    transition: color 0.3s;
}
.nuevo-wwe-titulo-video:hover {
    color: #e91826;
}
.nuevo-wwe-subtitulo {
    font-size: 1.05rem;
    color: #999;
    margin: 0;
    line-height: 1.5;
}
.nuevo-wwe-sociales {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    padding-right: 15px;
}
.nuevo-wwe-social-group {
    display: flex;
    gap: 25px;
    flex-wrap: wrap;
}
.nuevo-wwe-social-link {
    color: #777;
    text-decoration: none;
    font-size: 1.1rem;
    font-weight: 700;
    transition: all 0.3s;
    padding: 8px 5px;
    cursor: pointer;
}
.nuevo-wwe-social-link:hover {
    color: #e91826;
    transform: translateY(-3px);
}
@media (max-width: 1200px) {
    .nuevo-wwe-item {
        grid-template-columns: 420px 1fr 240px;
        gap: 25px;
    }
    .nuevo-wwe-thumb {
        height: 280px;
    }
    .nuevo-wwe-play {
        width: 90px;
        height: 90px;
    }
    .nuevo-wwe-play::after {
        font-size: 2.2rem;
    }
    .nuevo-video-container iframe {
        height: 450px;
    }
    .nuevo-wwe-titulo-video {
        font-size: 1.6rem;
    }
}
@media (max-width: 1000px) {
    .nuevo-wwe-item {
        grid-template-columns: 360px 1fr 200px;
        gap: 20px;
    }
    .nuevo-wwe-thumb {
        height: 240px;
    }
    .nuevo-wwe-play {
        width: 80px;
        height: 80px;
    }
    .nuevo-wwe-play::after {
        font-size: 2rem;
    }
    .nuevo-video-container iframe {
        height: 380px;
    }
    .nuevo-wwe-titulo {
        font-size: 2.4rem;
    }
}
@media (max-width: 900px) {
    .nuevo-wwe-item {
        grid-template-columns: 1fr;
        gap: 25px;
        padding: 20px;
    }
    .nuevo-wwe-thumb {
        height: 300px;
    }
    .nuevo-wwe-contenido {
        padding: 0;
        text-align: center;
    }
    .nuevo-wwe-sociales {
        flex-direction: row;
        justify-content: center;
        padding: 0;
    }
    .nuevo-wwe-titulo {
        font-size: 2rem;
    }
    .nuevo-video-container iframe {
        height: 400px;
    }
}
@media (max-width: 600px) {
    .nuevo-wwe-thumb {
        height: 220px;
    }
    .nuevo-wwe-titulo {
        font-size: 1.6rem;
        padding-left: 20px;
        border-left-width: 5px;
    }
    .nuevo-wwe-social-group {
        gap: 15px;
        justify-content: center;
    }
    .nuevo-wwe-social-link {
        font-size: 0.9rem;
    }
    .nuevo-wwe-play {
        width: 70px;
        height: 70px;
    }
    .nuevo-wwe-play::after {
        font-size: 1.6rem;
    }
    .nuevo-video-container iframe {
        height: 220px;
    }
    .nuevo-wwe-titulo-video {
        font-size: 1.3rem;
    }
}
</style>
<div class="nuevo-wwe-container">
    <h2 class="nuevo-wwe-titulo">
        🔥 RC VIDEOS / MÚSICA POPULAR 🔥
    </h2>
    <div class="nuevo-wwe-lista">
        <!-- VIDEO 1 - RICHARD ESPINEL: Tomando por ella -->
        <div class="nuevo-wwe-item">
            <div class="nuevo-wwe-left">
                <div class="nuevo-wwe-thumb" data-nuevo-video="joNiq-6J240" data-nuevo-container="nuevo-container-1">
                    <img src="https://img.youtube.com/vi/joNiq-6J240/maxresdefault.jpg" alt="Richard Espinel - Tomando por ella" width="1280" height="720">
                    <p>
                        <span class="nuevo-wwe-badge">🎵 ÉXITO 2025</span>
                    </p>
                    <div class="nuevo-wwe-play">
                        &nbsp;
                    </div>
                    <p>
                        <span class="nuevo-wwe-duracion">03:45</span>
                    </p>
                </div>
                <div class="nuevo-video-container" id="nuevo-container-1">
                    <iframe src="" frameborder="0" allow="autoplay; fullscreen" allowfullscreen=""></iframe>
                </div>
            </div>
            <div class="nuevo-wwe-contenido">
                <h3 class="nuevo-wwe-titulo-video">
                    Richard Espinel - Tomando por ella
                </h3>
                <p class="nuevo-wwe-subtitulo">
                    El despecho que mueve fibras - El éxito del 2025 que no para de sonar
                </p>
            </div>
            <div class="nuevo-wwe-sociales">
                <div class="nuevo-wwe-social-group">
                    <a class="nuevo-wwe-social-link nuevo-fb" href="#" data-nuevo-url="https://www.youtube.com/watch?v=joNiq-6J240" data-nuevo-title="Richard Espinel - Tomando por ella">📘 Facebook</a> <a class="nuevo-wwe-social-link nuevo-tw" href="#" data-nuevo-url="https://www.youtube.com/watch?v=joNiq-6J240" data-nuevo-title="Richard Espinel - Tomando por ella">🐦 X</a> <a class="nuevo-wwe-social-link nuevo-pin" href="#" data-nuevo-url="https://www.youtube.com/watch?v=joNiq-6J240" data-nuevo-title="Richard Espinel - Tomando por ella">📌 Pinterest</a> <a class="nuevo-wwe-social-link nuevo-em" href="#" data-nuevo-url="https://www.youtube.com/watch?v=joNiq-6J240" data-nuevo-title="Richard Espinel - Tomando por ella">✉️ Email</a>
                </div>
            </div>
        </div>
        <!-- VIDEO 2 - BETUEL DEVIA: El Pollero -->
        <div class="nuevo-wwe-item">
            <div class="nuevo-wwe-left">
                <div class="nuevo-wwe-thumb" data-nuevo-video="v-jH86FIKBw" data-nuevo-container="nuevo-container-2">
                    <img src="https://img.youtube.com/vi/v-jH86FIKBw/maxresdefault.jpg" alt="Betuel Devia - El Pollero" width="1280" height="720">
                    <p>
                        <span class="nuevo-wwe-badge">🔥 TRENDING</span>
                    </p>
                    <div class="nuevo-wwe-play">
                        &nbsp;
                    </div>
                    <p>
                        <span class="nuevo-wwe-duracion">04:02</span>
                    </p>
                </div>
                <div class="nuevo-video-container" id="nuevo-container-2">
                    <iframe src="" frameborder="0" allow="autoplay; fullscreen" allowfullscreen=""></iframe>
                </div>
            </div>
            <div class="nuevo-wwe-contenido">
                <h3 class="nuevo-wwe-titulo-video">
                    Betuel Devia - El Pollero (Video Oficial)
                </h3>
                <p class="nuevo-wwe-subtitulo">
                    El nuevo hit de la música popular que está arrasando en todas las plataformas
                </p>
            </div>
            <div class="nuevo-wwe-sociales">
                <div class="nuevo-wwe-social-group">
                    <a class="nuevo-wwe-social-link nuevo-fb" href="#" data-nuevo-url="https://www.youtube.com/watch?v=v-jH86FIKBw" data-nuevo-title="Betuel Devia - El Pollero">📘 Facebook</a> <a class="nuevo-wwe-social-link nuevo-tw" href="#" data-nuevo-url="https://www.youtube.com/watch?v=v-jH86FIKBw" data-nuevo-title="Betuel Devia - El Pollero">🐦 X</a> <a class="nuevo-wwe-social-link nuevo-pin" href="#" data-nuevo-url="https://www.youtube.com/watch?v=v-jH86FIKBw" data-nuevo-title="Betuel Devia - El Pollero">📌 Pinterest</a> <a class="nuevo-wwe-social-link nuevo-em" href="#" data-nuevo-url="https://www.youtube.com/watch?v=v-jH86FIKBw" data-nuevo-title="Betuel Devia - El Pollero">✉️ Email</a>
                </div>
            </div>
        </div>
        <!-- VIDEO 3 - MELISSA MORA: Copas -->
        <div class="nuevo-wwe-item">
            <div class="nuevo-wwe-left">
                <div class="nuevo-wwe-thumb" data-nuevo-video="PHG2iWGHDGQ" data-nuevo-container="nuevo-container-3">
                    <img src="https://img.youtube.com/vi/PHG2iWGHDGQ/maxresdefault.jpg" alt="Melissa Mora - Copas" width="1280" height="720">
                    <p>
                        <span class="nuevo-wwe-badge">⚡ RC VIDEOS</span>
                    </p>
                    <div class="nuevo-wwe-play">
                        &nbsp;
                    </div>
                    <p>
                        <span class="nuevo-wwe-duracion">03:58</span>
                    </p>
                </div>
                <div class="nuevo-video-container" id="nuevo-container-3">
                    <iframe src="" frameborder="0" allow="autoplay; fullscreen" allowfullscreen=""></iframe>
                </div>
            </div>
            <div class="nuevo-wwe-contenido">
                <h3 class="nuevo-wwe-titulo-video">
                    Melissa Mora - Copas
                </h3>
                <p class="nuevo-wwe-subtitulo">
                    El éxito del regional mexicano que está sonando con fuerza
                </p>
            </div>
            <div class="nuevo-wwe-sociales">
                <div class="nuevo-wwe-social-group">
                    <a class="nuevo-wwe-social-link nuevo-fb" href="#" data-nuevo-url="https://www.youtube.com/watch?v=PHG2iWGHDGQ" data-nuevo-title="Melissa Mora - Copas">📘 Facebook</a> <a class="nuevo-wwe-social-link nuevo-tw" href="#" data-nuevo-url="https://www.youtube.com/watch?v=PHG2iWGHDGQ" data-nuevo-title="Melissa Mora - Copas">🐦 X</a> <a class="nuevo-wwe-social-link nuevo-pin" href="#" data-nuevo-url="https://www.youtube.com/watch?v=PHG2iWGHDGQ" data-nuevo-title="Melissa Mora - Copas">📌 Pinterest</a> <a class="nuevo-wwe-social-link nuevo-em" href="#" data-nuevo-url="https://www.youtube.com/watch?v=PHG2iWGHDGQ" data-nuevo-title="Melissa Mora - Copas">✉️ Email</a>
                </div>
            </div>
        </div>
        <!-- VIDEO 4 - JAVY KARTUCHO: Amor Bonito -->
        <div class="nuevo-wwe-item">
            <div class="nuevo-wwe-left">
                <div class="nuevo-wwe-thumb" data-nuevo-video="uaC3WgPAr0g" data-nuevo-container="nuevo-container-4">
                    <img src="https://img.youtube.com/vi/uaC3WgPAr0g/maxresdefault.jpg" alt="Javy Kartucho - Amor Bonito" width="1280" height="720">
                    <p>
                        <span class="nuevo-wwe-badge">⭐ MAIN EVENT</span>
                    </p>
                    <div class="nuevo-wwe-play">
                        &nbsp;
                    </div>
                    <p>
                        <span class="nuevo-wwe-duracion">04:30</span>
                    </p>
                </div>
                <div class="nuevo-video-container" id="nuevo-container-4">
                    <iframe src="" frameborder="0" allow="autoplay; fullscreen" allowfullscreen=""></iframe>
                </div>
            </div>
            <div class="nuevo-wwe-contenido">
                <h3 class="nuevo-wwe-titulo-video">
                    Javy Kartucho - Amor Bonito (Video Oficial)
                </h3>
                <p class="nuevo-wwe-subtitulo">
                    La canción romántica del momento que conquista corazones
                </p>
            </div>
            <div class="nuevo-wwe-sociales">
                <div class="nuevo-wwe-social-group">
                    <a class="nuevo-wwe-social-link nuevo-fb" href="#" data-nuevo-url="https://www.youtube.com/watch?v=uaC3WgPAr0g" data-nuevo-title="Javy Kartucho - Amor Bonito">📘 Facebook</a> <a class="nuevo-wwe-social-link nuevo-tw" href="#" data-nuevo-url="https://www.youtube.com/watch?v=uaC3WgPAr0g" data-nuevo-title="Javy Kartucho - Amor Bonito">🐦 X</a> <a class="nuevo-wwe-social-link nuevo-pin" href="#" data-nuevo-url="https://www.youtube.com/watch?v=uaC3WgPAr0g" data-nuevo-title="Javy Kartucho - Amor Bonito">📌 Pinterest</a> <a class="nuevo-wwe-social-link nuevo-em" href="#" data-nuevo-url="https://www.youtube.com/watch?v=uaC3WgPAr0g" data-nuevo-title="Javy Kartucho - Amor Bonito">✉️ Email</a>
                </div>
            </div>
        </div>
        <!-- VIDEO 5 - RICHARD ESPINEL: Sólo Con Verte -->
        <div class="nuevo-wwe-item">
            <div class="nuevo-wwe-left">
                <div class="nuevo-wwe-thumb" data-nuevo-video="34tfdNBH9kI" data-nuevo-container="nuevo-container-5">
                    <img src="https://img.youtube.com/vi/34tfdNBH9kI/maxresdefault.jpg" alt="Richard Espinel - Sólo Con Verte" width="1280" height="720">
                    <p>
                        <span class="nuevo-wwe-badge">🔥 RC TRENDING</span>
                    </p>
                    <div class="nuevo-wwe-play">
                        &nbsp;
                    </div>
                    <p>
                        <span class="nuevo-wwe-duracion">03:50</span>
                    </p>
                </div>
                <div class="nuevo-video-container" id="nuevo-container-5">
                    <iframe src="" frameborder="0" allow="autoplay; fullscreen" allowfullscreen=""></iframe>
                </div>
            </div>
            <div class="nuevo-wwe-contenido">
                <h3 class="nuevo-wwe-titulo-video">
                    Richard Espinel - Sólo Con Verte (Video Oficial)
                </h3>
                <p class="nuevo-wwe-subtitulo">
                    La balada que toca el alma - El nuevo lanzamiento del artista del despecho
                </p>
            </div>
            <div class="nuevo-wwe-sociales">
                <div class="nuevo-wwe-social-group">
                    <a class="nuevo-wwe-social-link nuevo-fb" href="#" data-nuevo-url="https://www.youtube.com/watch?v=34tfdNBH9kI" data-nuevo-title="Richard Espinel - Sólo Con Verte">📘 Facebook</a> <a class="nuevo-wwe-social-link nuevo-tw" href="#" data-nuevo-url="https://www.youtube.com/watch?v=34tfdNBH9kI" data-nuevo-title="Richard Espinel - Sólo Con Verte">🐦 X</a> <a class="nuevo-wwe-social-link nuevo-pin" href="#" data-nuevo-url="https://www.youtube.com/watch?v=34tfdNBH9kI" data-nuevo-title="Richard Espinel - Sólo Con Verte">📌 Pinterest</a> <a class="nuevo-wwe-social-link nuevo-em" href="#" data-nuevo-url="https://www.youtube.com/watch?v=34tfdNBH9kI" data-nuevo-title="Richard Espinel - Sólo Con Verte">✉️ Email</a>
                </div>
            </div>
        </div>
    </div>
</div>
<script>
// ============================================ //
// SCRIPT EXCLUSIVO PARA NUEVA SECCIÓN         //
// ============================================ //
(function() {
    var nuevoVideoActivo = null;
    
    function nuevoAbrirVideo(videoId, containerId) {
        var contenedor = document.getElementById(containerId);
        if (!contenedor) return;
        var iframe = contenedor.querySelector('iframe');
        
        if (nuevoVideoActivo && nuevoVideoActivo !== containerId) {
            var contAnterior = document.getElementById(nuevoVideoActivo);
            if (contAnterior) {
                var ifrAnterior = contAnterior.querySelector('iframe');
                if (ifrAnterior) ifrAnterior.src = '';
                contAnterior.style.display = 'none';
            }
        }
        
        if (contenedor.style.display === 'none' || contenedor.style.display === '') {
            iframe.src = 'https://www.youtube.com/embed/' + videoId + '?autoplay=1&rel=0';
            contenedor.style.display = 'block';
            nuevoVideoActivo = containerId;
            setTimeout(function() {
                contenedor.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }, 100);
        } else {
            iframe.src = '';
            contenedor.style.display = 'none';
            nuevoVideoActivo = null;
        }
    }
    
    var nuevasMiniaturas = document.querySelectorAll('.nuevo-wwe-thumb');
    for (var i = 0; i < nuevasMiniaturas.length; i++) {
        nuevasMiniaturas[i].onclick = function(e) {
            e.stopPropagation();
            var videoId = this.getAttribute('data-nuevo-video');
            var containerId = this.getAttribute('data-nuevo-container');
            if (videoId && containerId) {
                nuevoAbrirVideo(videoId, containerId);
            }
        };
    }
    
    function nuevoShareFacebook(url) {
        window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(url), '_blank', 'width=600,height=400');
        return false;
    }
    
    function nuevoShareTwitter(url, title) {
        window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(title) + '&url=' + encodeURIComponent(url), '_blank', 'width=600,height=400');
        return false;
    }
    
    function nuevoSharePinterest(url, title) {
        window.open('https://pinterest.com/pin/create/button/?url=' + encodeURIComponent(url) + '&description=' + encodeURIComponent(title), '_blank', 'width=600,height=400');
        return false;
    }
    
    function nuevoShareEmail(url, title) {
        window.location.href = 'mailto:?subject=' + encodeURIComponent('Mira este video: ' + title) + '&body=' + encodeURIComponent('Te recomiendo este video: ' + title + '\n\nVerlo en: ' + url);
        return false;
    }
    
    var nuevosFb = document.querySelectorAll('.nuevo-fb');
    var nuevosTw = document.querySelectorAll('.nuevo-tw');
    var nuevosPin = document.querySelectorAll('.nuevo-pin');
    var nuevosEm = document.querySelectorAll('.nuevo-em');
    
    for (var j = 0; j < nuevosFb.length; j++) {
        nuevosFb[j].onclick = function(e) {
            e.preventDefault();
            e.stopPropagation();
            var url = this.getAttribute('data-nuevo-url');
            nuevoShareFacebook(url);
        };
        nuevosTw[j].onclick = function(e) {
            e.preventDefault();
            e.stopPropagation();
            var url = this.getAttribute('data-nuevo-url');
            var title = this.getAttribute('data-nuevo-title');
            nuevoShareTwitter(url, title);
        };
        nuevosPin[j].onclick = function(e) {
            e.preventDefault();
            e.stopPropagation();
            var url = this.getAttribute('data-nuevo-url');
            var title = this.getAttribute('data-nuevo-title');
            nuevoSharePinterest(url, title);
        };
        nuevosEm[j].onclick = function(e) {
            e.preventDefault();
            e.stopPropagation();
            var url = this.getAttribute('data-nuevo-url');
            var title = this.getAttribute('data-nuevo-title');
            nuevoShareEmail(url, title);
        };
    }
})();
</script>
