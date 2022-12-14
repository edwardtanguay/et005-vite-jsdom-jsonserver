import './style.scss';
import axios from 'axios';
import { setupDeleteButtons } from './components/deleteButton.js';
import { Flashcard } from './types.js';

const url = 'http://localhost:5577/flashcards';

const response = await axios.get(url);
const flashcards = response.data;

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<h1>Flashcards</h1>
<div class="siteMessage"></div>
<div class="flashcards">

${flashcards.map((flashcard: Flashcard) => {
	return `
	<div class="flashcard" data-id="${flashcard.id}">
		<div class="category">${flashcard.category}</div>	
		<div class="front">${flashcard.front}</div>	
		<div class="back">${flashcard.back}</div>	
		<div class="buttonRow">
			<div><button type="button" class="deleteButton" data-id="${flashcard.id}">Delete</button></div>
		</div>
	</div>`;
}).join('')}

</div>
`;

setupDeleteButtons(Array.from(document.querySelectorAll('.deleteButton')), document.querySelector('.siteMessage'), Array.from(document.querySelectorAll('.flashcard')), url);