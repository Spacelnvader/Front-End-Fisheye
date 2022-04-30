function photographerFactory(data) {
	const { name, id, city, country, tagline, price, portrait } = data;

    
	const picture = `assets/photographers/portrait/${portrait}`;

	function getUserCardDOM() {
		// Create new article
		const article = document.createElement( "article" );
		article.classList.add("photographer-article");

		const url = `./photographer.html?id=${id}`;
		const link = document.createElement( "a" );
		link.setAttribute("href", url);

		const mainContainer = document.createElement("div");
		mainContainer.setAttribute("tabindex", "0");

    
		const img = document.createElement( "img" );
		img.classList.add("photographer-article__picture");
		img.setAttribute("src", picture);
		img.setAttribute("alt", name);

		const h2 = document.createElement( "h2" );
		h2.textContent = name;
		h2.classList.add("photographer-article__name");
		h2.setAttribute("aria-label", name); 

		// Build photographer details section
		const detailsSection = document.createElement("section");
		detailsSection.setAttribute("tabindex", "0");

		const location = document.createElement( "h3" );
		location.textContent = city + ", " + country;
		location.classList.add("photographer-article__location");


		const tag = document.createElement( "span" );
		tag.textContent = tagline;
		tag.classList.add("photographer-article__tagline");

		const honorary = document.createElement( "span" );
		honorary.textContent = price + "€/jour";
		honorary.classList.add("photographer-article__price");

		//Append elements to article
		detailsSection.appendChild(location);
		detailsSection.appendChild(tag);
		detailsSection.appendChild(honorary);
		mainContainer.appendChild(img);
		mainContainer.appendChild(h2);
		link.appendChild(mainContainer);
		link.appendChild(detailsSection);
		// append article to link
		article.appendChild(link);
		return article;
	}
	function getUserSectionDOM() {
		const profile = document.createDocumentFragment();

		// Build profile picture element
		const img = document.createElement( "img" );
		img.classList.add("photographer-section__picture");
		img.setAttribute("src", picture);
		img.setAttribute("alt", name);

		const profileDiv = document.createElement("div");
		profileDiv.classList.add("photographer-section__profile");

		// Build title element with Name
		const h2 = document.createElement( "h2" );
		h2.textContent = name;
		h2.classList.add("photographer-section__profile-name");
		h2.setAttribute("tabindex", "0");

		const detailsDiv = document.createElement("div");
		detailsDiv.classList.add("photographer-section__profile-details");
		detailsDiv.setAttribute("tabindex", "0");

		// Build City, Country element
		const locationSpan = document.createElement( "span" );
		locationSpan.textContent = city + ", " + country;
		locationSpan.classList.add("photographer-section__profile-details-location");

		// Build tagline
		const taglineSpan = document.createElement( "span" );
		taglineSpan.textContent = tagline;
		taglineSpan.classList.add("photographer-section__profile-details-tagline");

		const contactButton = document.createElement("button");
		contactButton.textContent = "Contactez-moi";
		contactButton.classList.add("contact_button");
		contactButton.setAttribute("id","contact-me_button");
		contactButton.setAttribute("aria-labelledby", "contact-me_button");
		//contactButton.setAttribute('onclick', "displayModal()");

		detailsDiv.appendChild(locationSpan);
		detailsDiv.appendChild(taglineSpan);
		profileDiv.appendChild(h2);
		profileDiv.appendChild(detailsDiv);
		profile.appendChild(profileDiv);
		//profile.appendChild(priceSpan);
		profile.appendChild(contactButton);
		profile.appendChild(img);

		return profile;
	}
	return { name, picture, getUserCardDOM, getUserSectionDOM };
}