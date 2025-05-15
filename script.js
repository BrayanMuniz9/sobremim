document.addEventListener('DOMContentLoaded', () => {

    // Dados para os cards de Habilidades/Estudos
    const skillsData = [
        // Frontend
        { icon: 'fab fa-html5', title: 'HTML5 e CSS3', category: 'Frontend', status: 'Concluído' },
        { icon: 'fas fa-palette', title: 'Responsividade com CSS3', category: 'Frontend', status: 'Estudando' },
        { icon: 'fab fa-js-square', title: 'Javascript para sites', category: 'Frontend', status: 'A Estudar' },
        { icon: 'fas fa-exchange-alt', title: 'Requisições HTTP com Javascript', category: 'Frontend', status: 'A Estudar' },
        { icon: 'fab fa-react', title: 'Aprender React', category: 'Frontend', status: 'A Estudar' },
        { icon: 'fas fa-tasks', title: 'Projeto: Pokedex em React', category: 'Frontend', status: 'A Estudar' },
        // Backend
        { icon: 'fas fa-laptop-code', title: '20 Exercícios de Lógica (TS/Node)', category: 'Backend', status: 'A Estudar' },
        { icon: 'fas fa-object-group', title: 'Conceitos de POO', category: 'Backend', status: 'A Estudar' },
        { icon: 'fas fa-server', title: 'Estudar sobre RESTful', category: 'Backend', status: 'A Estudar' },
        { icon: 'fas fa-memory', title: 'API com Dados em Memória (RESTful)', category: 'Backend', status: 'A Estudar' },
        { icon: 'fas fa-layer-group', title: 'Camadas: Controller, Services, Repository', category: 'Backend', status: 'A Estudar' },
        { icon: 'fas fa-database', title: 'API com ORM e Banco de Dados', category: 'Backend', status: 'A Estudar' },
        { icon: 'fas fa-retweet', title: 'Projeto: Recriar API Pokedex', category: 'Backend', status: 'A Estudar' },
        // Database
        { icon: 'fas fa-table', title: 'SQL: INSERT, SELECT, DELETE, UPDATE', category: 'Database', status: 'A Estudar' },
        { icon: 'fas fa-search-plus', title: 'SQL: Consultas Complexas', category: 'Database', status: 'A Estudar' },
        { icon: 'fas fa-code-branch', title: 'Projeto: Rotas API com SQL Puro', category: 'Database', status: 'A Estudar' },
        // DevOps
        { icon: 'fab fa-docker', title: 'O que é Docker e como utilizar', category: 'DevOps', status: 'A Estudar' },
        { icon: 'fas fa-boxes', title: 'Como utilizar Docker Compose', category: 'DevOps', status: 'A Estudar' },
        { icon: 'fas fa-cubes', title: 'Projeto: Docker Compose (Full Stack)', category: 'DevOps', status: 'A Estudar' },
        // Adicione mais um card para completar 20, se necessário, ou ajuste os existentes.
        { icon: 'fas fa-cogs', title: 'Em construção...', category: '', status: 'A Estudar' } 
    ];

    const skillsContainer = document.getElementById('skills-cards-container');
    if (skillsContainer) {
        skillsData.forEach(skill => {
            const card = document.createElement('div');
            card.classList.add('card', 'skill-card');
            // Você pode adicionar uma classe baseada no status se quiser estilizar diferente
            // card.classList.add(skill.status.toLowerCase().replace(' ', '-')); 

            card.innerHTML = `
                <div class="card-icon"><i class="${skill.icon}"></i></div>
                <h3 class="card-title">${skill.title}</h3>
                <p class="card-category">${skill.category}</p>
                <div class="card-details">
                    <p class="status">Status: ${skill.status}</p>
                </div>
            `;
            // Adiciona o evento de clique para expandir/recolher
            card.addEventListener('click', function() {
                this.classList.toggle('open');
            });
            skillsContainer.appendChild(card);
        });
    }

    // Funcionalidade de expandir/recolher para cards de Projeto (que já estão no HTML)
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('click', function(event) {
            // Evita que o clique no link dentro do card feche o card
            if (event.target.closest('a')) {
                return;
            }
            this.classList.toggle('open');
        });
    });
    
    // Opcional: Navbar some/aparece ao rolar (efeito sutil)
    let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', function() {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop > lastScrollTop && scrollTop > navbar.offsetHeight * 2) { // Rolando para baixo
                navbar.style.top = `-${navbar.offsetHeight}px`;
            } else { // Rolando para cima
                navbar.style.top = "0";
            }
            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Para lidar com o topo
        });
    }

    // Smooth scroll para links da navbar (já tratado com CSS `scroll-behavior: smooth;`)
    // Mas se precisar de mais controle ou compatibilidade:
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Calcula a posição do elemento alvo levando em conta a altura do navbar
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - navbarHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
                
                // Opcional: fechar menu hamburguer se tiver um em mobile
            }
        });
    });

});