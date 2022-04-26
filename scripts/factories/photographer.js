function photographerFactory(data) {
    const { name, id, city, country, tagline, price, portrait } = data;


    const picture = `assets/photographers/portrait/${portrait}`;

    function getUserCardDOM() {
        // Create new article
        const article = document.createElement( 'article' );
        article.classList.add("photographer-article");

    
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        article.appendChild(img);
        article.appendChild(h2);
        return (article);
    }
    return { name, picture, getUserCardDOM }
}