# radiology-ai-helper

<!DOCTYPE html> <html lang="pt-BR"> <head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>LaudAI - O Co-Piloto para Radiologistas Eficientes</title> <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/> <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet"> <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@700&display=swap" rel="stylesheet"> <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@700&display=swap" rel="stylesheet"> <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"> <style> :root { --primary-color: #2c3e50; --secondary-color: #3498db; --light-color: #ecf0f1; --dark-color: #34495e; --gradient-start: #2980b9; --gradient-end: #6dd5fa; }
body {
        font-family: 'Montserrat', sans-serif;
        background-color: var(--light-color);
        margin: 0;
        padding: 0;
        color: var(--dark-color);
        overflow-x: hidden;
    }

    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 40px;
    }

    .navbar {
        background: linear-gradient(45deg, var(--gradient-start), var(--gradient-end));
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 999;
        transition: background-color 0.3s, box-shadow 0.3s;
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
    }

    .navbar.scrolled {
        background: linear-gradient(45deg, var(--gradient-start), var(--gradient-end));
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }

    .navbar-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px 40px;
    }

    .logo {
        display: flex;
        align-items: center;
        text-decoration: none;
    }

    .logo-text {
        font-family: 'Orbitron', sans-serif;
        font-size: 32px;
        color: #fff;
        margin: 0;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    }

    .nav-menu {
        display: flex;
        align-items: center;
    }

    .nav-menu a {
        margin-left: 20px;
        text-decoration: none;
        color: #fff;
        font-weight: 500;
        transition: color 0.3s;
        position: relative;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
    }

    .nav-menu a::before {
        content: '';
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 0;
        height: 2px;
        background-color: #fff;
        transition: width 0.3s;
    }

    .nav-menu a:hover::before {
        width: 100%;
    }

    .btn {
        display: inline-block;
        padding: 12px 24px;
        background-color: #fff;
        color: var(--primary-color);
        text-decoration: none;
        border-radius: 50px;
        transition: background-color 0.3s, transform 0.3s;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .btn:hover {
        background-color: var(--secondary-color);
        color: #fff;
        transform: translateY(-2px);
    }

    .btn:active {
        transform: translateY(0);
    }

    .hero-section {
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background: url('https://media.discordapp.net/attachments/1168297562395123823/1228664164847976448/natan.paraisk_the_background_for_a_space_grey_color_pallete_web_52a2b809-4695-4f44-9f6b-d8dcf05f4262.png?ex=662cddac&is=661a68ac&hm=992fc587ced17601cb7725ef451367b8f21af22842605bdf32967e71523c370c&=&format=webp&quality=lossless&width=535&height=535') no-repeat center center;
        background-size: cover;
        position: relative;
    }

    .hero-text-wrapper {
        text-align: center;
        position: relative;
        z-index: 2;
        padding: 40px;
        background-color: rgba(255, 255, 255, 0.8);
        border-radius: 10px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
    }

    .hero-title {
        font-size: 60px;
        font-weight: 700;
        margin-bottom: 20px;
        color: var(--primary-color);
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    }

    .hero-subtitle {
        font-size: 24px;
        color: var(--dark-color);
        margin-bottom: 40px;
    }

    .cta-button {
        display: inline-block;
        padding: 16px 32px;
        background: linear-gradient(45deg, var(--gradient-start), var(--gradient-end));
        color: #fff;
        text-decoration: none;
        border-radius: 50px;
        font-size: 18px;
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: 1px;
        transition: background-color 0.3s, transform 0.3s;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .cta-button:hover {
        background: linear-gradient(45deg, var(--gradient-end), var(--gradient-start));
        transform: translateY(-2px);
    }

    .cta-button:active {
        transform: translateY(0);
    }

    .modal {
        display: none;
        position: fixed;
        z-index: 9999;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color: rgba(0, 0, 0, 0.8);
    }

    .modal-content {
        background-color: #fff;
        margin: 15% auto;
        padding: 40px;
        border-radius: 10px;
        max-width: 600px;
        position: relative;
        color: var(--dark-color);
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .close {
        color: var(--dark-color);
        position: absolute;
        top: 10px;
        right: 20px;
        font-size: 28px;
        font-weight: bold;
        cursor: pointer;
    }

    .close:hover,
    .close:focus {
        color: var(--primary-color);
        text-decoration: none;
        cursor: pointer;
    }

    form {
        animation: fadeIn 1s ease;
    }

    .form-group {
        margin-bottom: 20px;
        position: relative;
    }

    label {
        display: block;
        font-size: 24px;
        font-weight: 500;
        margin-bottom: 10px;
        color: var(--dark-color);
        transition: color 0.3s;
    }

    input[type="text"],
    textarea {
        width: 100%;
        padding: 12px;
        border: 1px solid var(--dark-color);
        border-radius: 4px;
        background-color: #fff;
        font-size: 16px;
        color: var(--dark-color);
        transition: border-color 0.3s, box-shadow 0.3s;
    }

    input[type="text"]:focus,
    textarea:focus {
        outline: none;
        border-color: var(--primary-color);
        box-shadow: 0 0 5px var(--primary-color);
    }

    textarea {
        resize: vertical;
        min-height: 120px;
    }

    .btn-submit {
        display: block;
        width: 100%;
        padding: 16px;
        background: linear-gradient(45deg, var(--gradient-start), var(--gradient-end));
        color: #fff;
        border: none;
        border-radius: 50px;
        font-size: 18px;
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: 1px;
        cursor: pointer;
        transition: background-color 0.3s, transform 0.3s;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .btn-submit:hover {
        background: linear-gradient(45deg, var(--gradient-end), var(--gradient-start));
        transform: translateY(-2px);
    }

    .btn-submit:active {
        transform: translateY(0);
    }

    .section {
        padding: 100px 0;
        background-color: #fff;
    }

    .section-title {
        font-size: 48px;
        font-weight: 700;
        text-align: center;
        margin-bottom: 60px;
        color: var(--primary-color);
        position: relative;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    }

    .section-title::after {
        content: '';
        position: absolute;
        bottom: -15px;
        left: 50%;
        transform: translateX(-50%);
        width: 100px;
        height: 4px;
        background: linear-gradient(45deg, var(--gradient-start), var(--gradient-end));
    }

    .features {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 40px;
    }

    .feature {
        text-align: center;
        padding: 40px;
        background-color: #fff;
        border-radius: 8px;
        border: 1px solid var(--dark-color);
        transition: transform 0.3s, box-shadow 0.3s;
        position: relative;
        overflow: hidden;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .feature:hover {
        transform: translateY(-10px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    }

    .feature-icon {
        font-size: 48px;
        color: var(--secondary-color);
        margin-bottom: 20px;
        transition: color 0.3s;
    }

    .feature:hover .feature-icon {
        color: var(--primary-color);
    }

    .feature-title {
        font-size: 24px;
        font-weight: 600;
        margin-bottom: 15px;
        color: var(--dark-color);
    }

    .feature-description {
        font-size: 16px;
        color: var(--dark-color);
        opacity: 0.8;
    }

    .faq-section {
        max-width: 800px;
        margin: 0 auto;
        padding: 60px;
        background-color: #fff;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        animation: fadeInUp 1s ease;
    }

    .faq-title {
        font-size: 48px;
        font-weight: 700;
        text-align: center;
        margin-bottom: 60px;
        color: var(--primary-color);
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    }

    .faq-list {
        list-style-type: none;
        padding-left: 0;
    }

    .faq-item {
        margin-bottom: 40px;
        position: relative;
        cursor: pointer;
        transition: color 0.3s;
    }

    .faq-item:hover {
        color: var(--secondary-color);
    }

    .faq-question {
        font-size: 24px;
        font-weight: 600;
        margin-bottom: 10px;
        color: var(--dark-color);
        transition: color 0.3s;
        display: flex;
        align-items: center;
    }

    .faq-item:hover .faq-question {
        color: var(--secondary-color);
    }

    .faq-question::before {
        content: '\f054';
        font-family: 'Font Awesome 5 Free';
        font-weight: 900;
        margin-right: 10px;
        transition: transform 0.3s;
    }

    .faq-item.active .faq-question::before {
        transform: rotate(90deg);
    }

    .faq-answer {
        font-size: 18px;
        color: var(--dark-color);
        opacity: 0.8;
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.3s, opacity 0.3s;
    }

    .faq-item.active .faq-answer {
        max-height: 500px;
        opacity: 1;
    }

    .footer {
        background: linear-gradient(45deg, var(--gradient-start), var(--gradient-end));
        padding: 40px 0;
    }

    .footer-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .footer-logo {
        font-family: 'Orbitron', sans-serif;
        font-size: 24px;
        color: #fff;
        text-decoration: none;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    }

   .footer-links {
list-style-type: none;
padding-left: 0;
display: flex;
}
.footer-links li {
        margin-left: 20px;
    }

    .footer-links a {
        color: #fff;
        text-decoration: none;
        transition: color 0.3s;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
    }

    .footer-links a:hover {
        color: var(--secondary-color);
    }

    .social-icons {
        display: flex;
    }

    .social-icons a {
        margin-left: 10px;
        color: #fff;
        font-size: 24px;
        transition: color 0.3s;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
    }

    .social-icons a:hover {
        color: var(--secondary-color);
    }

    .loading {
        display: none;
        text-align: center;
        margin-top: 40px;
        position: relative;
    }

    .loading-text {
        font-size: 18px;
        color: var(--dark-color);
        margin-bottom: 20px;
        opacity: 0;
        animation: fadeInOut 3s ease-in-out infinite;
    }

    .loading-spinner {
        display: inline-block;
        width: 50px;
        height: 50px;
        border: 3px solid rgba(44, 62, 80, 0.3);
        border-top-color: var(--secondary-color);
        border-radius: 50%;
        animation: spin 1s linear infinite;
    }

    @keyframes fadeInUp {
        0% {
            opacity: 0;
            transform: translateY(50px);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    @keyframes spin {
        0% {
            transform: rotate(0);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    @keyframes fadeInOut {
        0%, 100% {
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
    }

    @media screen and (max-width: 768px) {
        .container {
            padding: 20px;
        }

        .navbar-container {
            padding: 10px 20px;
        }

        .logo-text {
            font-size: 24px;
        }

        .nav-menu {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background-color: var(--light-color);
            padding: 20px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.3s;
        }

        .nav-menu.active {
            display: flex;
            flex-direction: column;
            opacity: 1;
            pointer-events: auto;
        }

        .nav-menu a {
            margin: 10px 0;
        }

        .hero-title {
            font-size: 48px;
        }

        .hero-subtitle {
            font-size: 20px;
        }

        .features {
            grid-template-columns: 1fr;
        }

        .modal-content {
            margin: 10% auto;
            padding: 20px;
        }

        .footer-content {
            flex-direction: column;
            text-align: center;
        }

        .footer-links {
            margin-top: 20px;
            justify-content: center;
        }

        .footer-links li {
            margin: 0 10px;
        }

        .social-icons {
            margin-top: 20px;
            justify-content: center;
        }
    }
</style>

<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-SVQW9L8T8E"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-SVQW9L8T8E');
</script>
</head> <body> <nav class="navbar"> <div class="container navbar-container"> <a href="#" class="logo"> <h1 class="logo-text">LaudAI</h1> </a> <div class="nav-menu"> <a href="#inicio">Início</a> <a href="#como-funciona">Por que escolher a LaudAI?</a> <a href="#faq">FAQ</a> </div> </div> </nav>
<section class="hero-section" id="inicio">
    <div class="container">
        <div class="hero-text-wrapper">
            <h1 class="hero-title">O co-piloto para radiologistas eficientes</h1>
            <p class="hero-subtitle">Gere laudos radiológicos com rapidez e precisão usando a inteligência artificial</p>
            <a href="#" class="cta-button" id="openModalBtn">Gerar Laudo</a>
        </div>
    </div>
</section>

<div id="modal" class="modal">
    <div class="modal-content">
        <span class="close" id="closeModalBtn">&times;</span>
        <form action="/" method="post" onsubmit="showLoading()">
            <div class="form-group">
                <label for="exame">Exame:</label>
                <input type="text" id="exame" name="exame" required>
            </div>
            <div class="form-group">
                <label for="achados">Achados:</label>
                <textarea id="achados" name="achados" required></textarea>
            </div>
            <button type="submit" class="btn-submit">Gerar Laudo</button>
        </form>
        <div class="loading">
            <div class="loading-text"></div>
            <div class="loading-spinner"></div>
        </div>
    </div>
</div>

<section class="section" id="como-funciona">
    <div class="container">
        <h2 class="section-title">Por que escolher a LaudAI?</h2>
        <div class="features">
            <div class="feature">
                <i class="fas fa-rocket feature-icon"></i>
                <h3 class="feature-title">Agilidade</h3>
                <p class="feature-description">Gere laudos radiológicos de forma rápida e eficiente com nossa inteligência artificial avançada.</p>
            </div>
            <div class="feature">
                <i class="fas fa-brain feature-icon"></i>
                <h3 class="feature-title">Precisão</h3>
                <p class="feature-description">Nosso sistema de IA foi treinado com milhares de exames e laudos para fornecer resultados precisos e confiáveis.</p>
            </div>
            <div class="feature">
                <i class="fas fa-user-md feature-icon"></i>
                <h3 class="feature-title">Foco no Radiologista</h3>
                <p class="feature-description">Desenvolvido com o radiologista em mente, oferecendo uma experiência intuitiva e personalizável.</p>
            </div>
        </div>
    </div>
</section>

<section class="section faq-section" id="faq">
    <div class="container">
        <h2 class="faq-title">Perguntas Frequentes</h2>
        <ul class="faq-list">
            <li class="faq-item">
                <h3 class="faq-question">Como a LaudAI funciona?</h3>
                <p class="faq-answer">A LaudAI utiliza inteligência artificial avançada para analisar os achados do exame e gerar um laudo radiológico completo e estruturado. Basta fornecer o tipo de exame e os achados relevantes, e a LaudAI fará o resto.</p>
            </li>
            <li class="faq-item">
                <h3 class="faq-question">O que é LaudAI?</h3>
                <p class="faq-answer">LaudAI é uma ferramenta inovadora desenvolvida para auxiliar radiologistas, utilizando inteligência artificial para otimizar diagnósticos e reduzir a carga de trabalho, visando principalmente a redução de burnout entre profissionais da área como missão de existência.</p>
            </li>
            <li class="faq-item">
                <h3 class="faq-question">O LaudAI está aberto para uso?</h3>
                <p class="faq-answer">Sim, atualmente, o LaudAI está aberto e acessível para radiologistas. Nosso objetivo é fornecer suporte imediato à comunidade médica, aliviando sobrecargas de trabalho e contribuindo para a saúde mental dos profissionais.</p>
            </li>
            <li class="faq-item">
                <h3 class="faq-question">Haverá uma versão paga do LaudAI?</h3>
                <p class="faq-answer">Sabemos que seu tempo é valioso e que você precisa de ferramentas que se adaptem à sua rotina, e não o contrário. É por isso que estamos finalizando o desenvolvimento de uma solução intuitiva, personalizável e que se integra perfeitamente ao seu dia a dia. Com recursos como reconhecimento de voz, modelos adaptáveis e uma interface clean e objetiva, além de inúmeras ferramentas de IA, você terá em mãos uma ferramenta poderosa e ao mesmo tempo amigável. Simplifique seu trabalho e eleve a qualidade dos seus laudos com uma solução criada especialmente para atender às necessidades únicas do radiologista moderno.</p>
            </li>
        </ul>
    </div>
</section>

<footer class="footer">
    <div class="container">
        <div class="footer-content">
            <a href="#" class="footer-logo">LaudAI</a>
            <ul class="footer-links">
                <li><a href="{{ url_for('privacy') }}">Política de Privacidade</a></li>
                <li><a href="{{ url_for('services') }}">Termos de Serviço</a></li>
            </ul>
            <div class="social-icons">
                <a href="#"><i class="fab fa-facebook-f"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="https://www.linkedin.com/in/natanparaiso/" target="_blank"><i class="fab fa-linkedin-in"></i></a>
            </div>
        </div>
    </div>
</footer>

<script>
    function showLoading() {
        const loadingText = document.querySelector('.loading-text');
        const loadingPhrases = [
            'Enviando o tipo de exame e os achados para a LaudAI...',
            'Sintetizando descrições radiológicas...',
            'Entendendo as imagens e estruturas anatômicas relacionadas...',
            'Aplicando conhecimento médico especializado...',
            'Identificando achados relevantes...',
            'Correlacionando informações clínicas...',
            'Estruturando o laudo radiológico...',
            'Revisando a consistência do laudo...',
            'Otimizando a clareza e precisão do laudo...',
            'Finalizando a geração do laudo...'
        ];

        let currentPhraseIndex = 0;
        loadingText.textContent = loadingPhrases[currentPhraseIndex];

        const loading = document.querySelector('.loading');
        loading.style.display = 'block';

        const interval = setInterval(() => {
            currentPhraseIndex = (currentPhraseIndex + 1) % loadingPhrases.length;
            loadingText.textContent = loadingPhrases[currentPhraseIndex];
        }, 3000);
    }

    document.addEventListener('DOMContentLoaded', function() {
        const navbar = document.querySelector('.navbar');
        const heroSection = document.querySelector('.hero-section');

        window.addEventListener('scroll', function() {
            if (window.scrollY > heroSection.offsetHeight) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(function(link) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const target = link.getAttribute('href');
                smoothScroll(target);
            });
        });

        const faqItems = document.querySelectorAll('.faq-item');
        faqItems.forEach(function(item) {
            item.addEventListener('click', function() {
                item.classList.toggle('active');
            });
        });

        const modal = document.getElementById('modal');
        const openModalBtn = document.getElementById('openModalBtn');
        const closeModalBtn = document.getElementById('closeModalBtn');

        openModalBtn.addEventListener('click', function(e) {
            e.preventDefault();
            modal.style.display = 'block';
        });

        closeModalBtn.addEventListener('click', function() {
            modal.style.display = 'none';
        });

        window.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    });

    function smoothScroll(target) {
        const element = document.querySelector(target);
        element.scrollIntoView({
            behavior: 'smooth'
        });
    }
</script>
</body>
 </html>



com base no html acima, faça uma interface de laudos com inúmeros templates radiológicos (vou adicioná-los), e cada um enviará esse template para a IA via post como se tivessem no campo id 'exame'

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/radiology-ai-helper.git
cd radiology-ai-helper
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
