function photographerFactory(data) {
    const { name, id, city, country, tagline, price, portrait } = data;

    
    const picture = `assets/photographers/portrait/${portrait}`;

    function getUserCardDOM() {
        // Create new article
        const article = document.createElement( 'article' );
        article.classList.add("photographer-article");

        const url = `./photographer.html?id=${id}`;
        const link = document.createElement( 'a' );
        link.setAttribute('href', url);

        const mainContainer = document.createElement('div');
        mainContainer.setAttribute('tabindex', '0');

    
        const img = document.createElement( 'img' );
        img.classList.add("photographer-article__picture")
        img.setAttribute("src", picture)
        img.setAttribute('alt', name)

        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        h2.classList.add("photographer-article__name");
        h2.setAttribute('aria-label', name); 

        // Build photographer details section
        const detailsSection = document.createElement('section');
        detailsSection.setAttribute('tabindex', '0');

        const location = document.createElement( 'h3' );
        location.textContent = city + ', ' + country;
        location.classList.add("photographer-article__location")


        const tag = document.createElement( 'span' );
        tag.textContent = tagline;
        tag.classList.add("photographer-article__tagline")

        const honorary = document.createElement( 'span' );
        honorary.textContent = price + "€/jour";
        honorary.classList.add("photographer-article__price")

        //Append elements to article
        detailsSection.appendChild(location);
        detailsSection.appendChild(tag)
        detailsSection.appendChild(honorary);
        mainContainer.appendChild(img);
        mainContainer.appendChild(h2);
        link.appendChild(mainContainer);
        link.appendChild(detailsSection)
        // append article to link
        article.appendChild(link)
        return article;
    }
    return { name, picture, getUserCardDOM }
}