document.addEventListener('DOMContentLoaded', function () {
    // Preencha as informações sobre o livro
    document.getElementById('book-title').innerText = 'Harry Potter and the Sorcerer\'s Stone';
    document.getElementById('author').innerText = 'J.K. Rowling';
    document.getElementById('description').innerText = 'Harry Potter discovers his magical heritage on his 11th birthday when he receives a letter of acceptance to Hogwarts School of Witchcraft and Wizardry.';

    // Adicione alguns comentários de exemplo
    const reviewList = document.getElementById('review-list');
    const reviews = [
        'Este livro é incrível! Eu não consegui parar de ler desde a primeira página.',
        'A narrativa é envolvente, e os personagens são muito bem desenvolvidos.',
        'Recomendo fortemente para fãs de fantasia!'
    ];

    reviews.forEach(function (reviewText) {
        const reviewItem = document.createElement('li');
        reviewItem.className = 'review-item';
        reviewItem.innerText = reviewText;
        reviewList.appendChild(reviewItem);
    });
});