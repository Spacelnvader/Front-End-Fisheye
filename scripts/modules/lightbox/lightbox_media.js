/* eslint-disable no-prototype-builtins */
/**
 * Creates a figure and a figcaption to append in the lightbox. Sets a data attribute 'data-direction' used for CSS animation.
 */
export function appendLightboxMedia(photographerId, mediaObject, animationDirection) {
	const { id, title, image, video } = mediaObject;
	const lightboxModalMain = document.getElementById("lightbox_modal_main");
    
	lightboxModalMain.innerHTML = "";

	const lightboxFigure = document.createElement("figure");
	lightboxFigure.setAttribute("data-direction", animationDirection);

	let lightboxMedia, mediaLink;

	if (mediaObject.hasOwnProperty("image")) {
		lightboxMedia = document.createElement("img");
		mediaLink = `./assets/photos/${photographerId}/${image}`;
	} else if (mediaObject.hasOwnProperty("video")) {
		lightboxMedia = document.createElement("video");
		mediaLink = `./assets/photos/${photographerId}/${video}`;
		lightboxMedia.setAttribute("controls", "");
	}
	lightboxMedia.setAttribute("src", mediaLink);
	lightboxMedia.setAttribute("id", "lightbox_modal_media");
	lightboxMedia.setAttribute("data-mediaid", `${id}`);
	lightboxMedia.setAttribute("aria-label", "image closeup view");
	lightboxMedia.setAttribute("tabindex", "0");

	const mediaTitle = document.createElement("figcaption");
	mediaTitle.setAttribute("id", "lightbox_modal_title");
	mediaTitle.setAttribute("tabindex", "0");
	mediaTitle.textContent = title;

	lightboxFigure.appendChild(lightboxMedia);
	lightboxFigure.appendChild(mediaTitle);
	lightboxModalMain.appendChild(lightboxFigure);
	const lightboxModal = document.getElementById("lightbox_modal");
	lightboxModal.focus();
}