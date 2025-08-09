
    const items = [
        { id: 1, title: 'Freelance Writer', description: ' I’m working as a writer in Medium.com', img: 'assets/images/medium.png' },
        { id: 1, title: 'Software Engineering Student', description: ' I’m a software engineering student at iCET', img: 'assets/images/green.png' },
        { id: 1, title: 'Designer', description: ' I’m a Graphic Designer of CV&B', img: 'assets/images/CV&B.png' },
    ];

const container = document.getElementById('');
if (container) {
    items.forEach(plants => {
        const card = document.createElement('div');
        card.className = 'col-sm-6 col-md-4 col-lg-4';
        card.innerHTML = `
           
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
                <span class="navbar-toggler-icon "></span>
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
