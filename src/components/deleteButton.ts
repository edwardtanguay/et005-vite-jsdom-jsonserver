export const setupDeleteButtons = (buttonElems: HTMLButtonElement[]) => {
	buttonElems.forEach(buttonElem => {
		buttonElem.style.color = 'red';
		buttonElem.style.backgroundColor = 'yellow';
		buttonElem.addEventListener('click', () => {
			buttonElem.style.display = "none";
		});
	});
} 