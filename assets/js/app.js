
    const items = [
        { id: 1, title: 'Freelance Writer', description: ' I’m working as a writer in <br>Medium.com', img: 'assets/images/medium.png' },
        { id: 2, title: 'Software <br>Engineering Student', description: 'I’m a software engineering<br> student at ICET.', img: 'assets/images/images.png' },
        { id: 3, title: 'Designer', description: ' I’m a Graphic Designer <br>of CV&B', img: 'assets/images/CV&B.png' },
    ];

const container = document.getElementById('about-cards');
if (container) {
    items.forEach(activity => {
        const card = document.createElement('div');
        card.className = 'col-lg-4 col-md-4 col-12';
        card.innerHTML = `
           <div class="card text-white border-secondary h-100" style="background-color:#14213D;">
                <div class="card-body d-flex flex-column justify-content-center text-center p-4">
                    <div class="p-3 mb-4">
                        <img src="${activity.img}" alt="${activity.title}" style="width: 100px;border-radius: 50%;">
                    </div>
                    <h3 class="card-title fs-4 fw-bold mb-3">${activity.title}</h3>
                    <p class="card-text text-white-50">${activity.description}</p>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

const navbarContainer = document.getElementById('navbar');
if (navbarContainer) {
    const navItem = document.createElement('nav');
    navItem.className = 'navbar navbar-expand-lg navbar-dark bg-transparent py-4';
    navItem.innerHTML = `
        <div class="container" >
            <a class="navbar-brand" href="#"><img src="assets/images/icons8-chatgpt.svg" alt="Logo"
                style="width:40px;"></a>

            <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span class="navbar-toggler-icon" style="filter: invert(1);"></span>
            </button>

            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul class="navbar-nav align-items-center">
                <li class="nav-item"><a class="nav-color" href="index.html">Home</a></li>
                <li class="nav-item"><a class="nav-color" href="about.html">About me</a></li>
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
