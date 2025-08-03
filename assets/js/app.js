document.addEventListener('DOMContentLoaded', () => {
    const items = [
        { title: 'Test One', description: 'This is test one.' },
        { title: 'Test Two', description: 'This is test two.' },
        { title: 'Test Three', description: 'This is test three.' },
        { title: 'Test Four', description: 'This is test four.' },
        { title: 'Test Five', description: 'This is test five.' },
        { title: 'Test Six', description: 'This is test six.' }
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