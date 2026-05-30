(function() {
    'use strict';
    
    function initCarrusel() {
        // Buscar el contenedor de la lista
        const carruselContainer = document.querySelector('.views-element-container .item-list ul');
        
        if (!carruselContainer) {
            console.log('Carrusel: No encontrado');
            return;
        }
        
        // Evitar duplicar botones
        if (document.querySelector('.carrusel-nav')) {
            return;
        }
        
        // Buscar el título para poner los botones a su lado
        const header = document.querySelector('.views-element-container > h2');
        
        if (!header) {
            console.log('Carrusel: No se encontró el header');
            return;
        }
        
        // Crear contenedor de botones
        const navContainer = document.createElement('div');
        navContainer.className = 'carrusel-nav';
        
        const prevBtn = document.createElement('button');
        prevBtn.className = 'carrusel-prev';
        prevBtn.innerHTML = '◀';
        prevBtn.setAttribute('aria-label', 'Anterior');
        
        const nextBtn = document.createElement('button');
        nextBtn.className = 'carrusel-next';
        nextBtn.innerHTML = '▶';
        nextBtn.setAttribute('aria-label', 'Siguiente');
        
        navContainer.appendChild(prevBtn);
        navContainer.appendChild(nextBtn);
        
        // Insertar botones después del título
        header.parentNode.insertBefore(navContainer, header.nextSibling);
        
        // Eventos de desplazamiento
        prevBtn.addEventListener('click', function(e) {
            e.preventDefault();
            carruselContainer.scrollBy({
                left: -300,
                behavior: 'smooth'
            });
        });
        
        nextBtn.addEventListener('click', function(e) {
            e.preventDefault();
            carruselContainer.scrollBy({
                left: 300,
                behavior: 'smooth'
            });
        });
        
        console.log('Carrusel: Inicializado correctamente');
    }
    
    // Tu código existente del menú móvil
    function initMobileMenu() {
        const navLinks = document.querySelector('.nav-links');
        const topNavContainer = document.querySelector('.top-nav .container');
        
        if (window.innerWidth <= 680 && navLinks && !document.querySelector('.menu-toggle')) {
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
            } else if (document.querySelector('.top-nav')) {
                document.querySelector('.top-nav').appendChild(toggleBtn);
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
            if (window.innerWidth > 680 && navLinks) {
                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'row';
            } else if (navLinks && window.innerWidth <= 680 && navLinks.style.display !== 'flex') {
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
    
    // Observador para cambios AJAX
    function setupObserver() {
        const observer = new MutationObserver(function() {
            setTimeout(function() {
                if (!document.querySelector('.carrusel-nav')) {
                    initCarrusel();
                }
            }, 500);
        });
        
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }
    
    // Inicialización principal
    function initAll() {
        initMobileMenu();
        initRadioButton();
        initCards();
        
        setTimeout(function() {
            initCarrusel();
        }, 800);
        
        setupObserver();
        
        console.log('Radio Centro: Todos los scripts inicializados');
    }
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initAll);
    } else {
        initAll();
    }
    
})();
