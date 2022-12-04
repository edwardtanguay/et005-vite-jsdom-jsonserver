import axios from 'axios';

export const setupDeleteButtons = (buttonElems: HTMLButtonElement[], siteMessageElem: HTMLDivElement | null, flashcardElems: HTMLDivElement[], url: string) => {
	buttonElems.forEach(buttonElem => {
		buttonElem.addEventListener('click', () => {
			const id = Number(buttonElem.dataset.id);
			(async () => {
				try {
					const res = await axios.delete(url + '/' + String(id));
					if (res.status = 200) {
						// flashcard has been deleted in backend, therefore delete it on the frontend
						flashcardElems.forEach(flashcardElem => {
							const flashcardId = Number(flashcardElem.dataset.id);
							if (flashcardId === id) {
								flashcardElem.style.display = 'none';
							}
						});
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