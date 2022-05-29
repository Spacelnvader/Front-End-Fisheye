import { getPhotographerId, getGalery } from "../queries/query.js";
import { displayProfile } from "../components/display.js";
import { updateGalery } from "../components/updategalery.js";
import { createWidget } from "../components/widget.js";
import { addStaticDOMListeners } from "../components/events.js";
import { addObserver } from "../utils/observer.js";

// On apelle ici nos fonctions qui vont générer le contenu de la page
async function init() {
	const photographerId = getPhotographerId();
	const galery = await getGalery(photographerId);

	displayProfile(photographerId);
	await updateGalery();
	createWidget(photographerId, galery);
	addStaticDOMListeners();
	addObserver();
}
await init();

