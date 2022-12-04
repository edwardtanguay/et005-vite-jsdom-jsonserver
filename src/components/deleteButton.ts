import axios from 'axios';

export const setupDeleteButtons = (buttonElems: HTMLButtonElement[], siteMessageElem: HTMLDivElement | null, flashcardElems: HTMLDivElement[], url: string) => {
	buttonElems.forEach(buttonElem => {
		buttonElem.addEventListener('click', () => {
			const id = Number(buttonElem.dataset.id);
			(async () => {
				try {
					const res = await axios.delete(url + '/' + String(id));
					if (res.status = 200) {
						console.log('reload page');
						// delete flashcard element
						console.log(flashcardElems)
					} else {
						if (siteMessageElem !== null) {
							siteMessageElem.innerText = res.statusText;
						}
					}
				}
				catch (e: any) {
					console.log(siteMessageElem)
					if (siteMessageElem !== null) {
						siteMessageElem.innerText = e.message;
					}
				}
			})();

		});
	});
} 