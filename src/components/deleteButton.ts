import axios from 'axios';
import { Flashcard } from '../types';

export const setupDeleteButtons = (buttonElems: HTMLButtonElement[], siteMessageElem: HTMLDivElement | null, flashcards: Flashcard[], url: string) => {
	buttonElems.forEach(buttonElem => {
		buttonElem.addEventListener('click', () => {
			const id = Number(buttonElem.dataset.id);
			(async () => {
				try {
					const res = await axios.delete(url + '/' + String(id));
					console.log(res);
					console.log(res.status)
					if (res.status = 200) {
						console.log('reload page');
						console.log(flashcards);
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