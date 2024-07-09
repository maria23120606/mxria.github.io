document.addEventListener('DOMContentLoaded', function() {
    const projectsContainer = document.getElementById('projects');

    const projects = [
        {
            title: 'jogo da velha',
            description: 'Descrição do Projeto 1.',
            link: 'exemplos/velha.html'
        },
        {
            title: 'jogo da cobra',
            description: 'Descrição do Projeto 2.',
            link: 'exemplos2/cobra.html'
        },
        {
            title: 'site aniversario',
            description: 'Descrição do Projeto 3.',
            link: 'aniversario/aniversariante.html'
        }
        // Adicione mais projetos conforme necessário
    ];

    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.classList.add('project');
        
        projectElement.innerHTML = `
            <h2>${project.title}</h2>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank">Ver Projeto</a>
        `;
        
        projectsContainer.appendChild(projectElement);
    });
});
