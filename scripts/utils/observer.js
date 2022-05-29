/* eslint-disable no-mixed-spaces-and-tabs */
/**
 * Instanciate intersection observer on galery articles to display medias when they enter viewport. 
 * cette fonction compare la position de l'élement par rapport à la root et ajoutera un buffer si c'est le cas
 */
export function addObserver() {
	const articles = document.querySelectorAll(".media-article");

	const observerOptions = 
        {
        	root: null, 
        	treshold: 0, 
        	rootMargin: "0px 0px 250px 0px"
        };
    
	const observer = new IntersectionObserver(function (entries, observer) {
		entries.forEach(entry => {
			if(!entry.isIntersecting){
				return;
			}
			//console.log(entry.target);
			entry.target.classList.add("lazy-load");
			observer.unobserve(entry.target);
		});
	}, observerOptions);
    
	articles.forEach(article => {
		observer.observe(article);
	});
}