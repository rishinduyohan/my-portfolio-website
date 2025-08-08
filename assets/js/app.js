document.addEventListener('DOMContentLoaded', () => {
    const items = [

    ];

    const container = document.createElement('div');
    container.id = 'sample-items';

    items.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'portfolio-item';
        itemDiv.innerHTML = `
            <h3>${item.title}</h3>
            <p>${item.description}</p>
        `;
        container.appendChild(itemDiv);
    });

    document.body.appendChild(container);
});

const navbarContainer = document.getElementById('navbar');
if (navbarContainer) {
    const navItem = document.createElement('nav');
    navItem.className = 'navbar navbar-expand-lg navbar-dark bg-transparent py-4 fixed';
    navItem.innerHTML = `
        <div class="container">
            <a class="navbar-brand" href="#"><img src="assets/images/icons8-chatgpt.svg" alt="Logo"
                    style="width:40px;"></a>

            <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul class="navbar-nav align-items-center">
                    <li class="nav-item"><a class="nav-color" href="#">About me</a></li>
                    <li class="nav-item"><a class="nav-color " href="#">Skills</a></li>
                    <li class="nav-item"><a class="nav-color " href="#">Projects</a></li>
                    <li class="nav-item">
                        <a class="btn btn-light rounded-pill px-3" href="#">CONTACT ME</a>
                    </li>
                </ul>
            </div>
        </div>
    `;
    navbarContainer.appendChild(navItem);
}
