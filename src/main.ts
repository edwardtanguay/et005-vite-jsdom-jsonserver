import './style.scss';
import axios from 'axios';
import { setupDeleteButtons } from './components/deleteButton';
import { Flashcard } from './types';

const url = 'http://localhost:5577/flashcards';

// FETCH ONE-LINER
// const flashcards = await(await fetch(url)).json();

// AXIOS ONE-LINER
// const flashcards = (await axios.get(url)).data;

const response = await axios.get(url);
const flashcards = response.data;

// const deleteFlashcard = (flashcard: Flashcard) => {
// 	console.log(flashcard);
// }

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<h1>Flashcards</h1>
<div class="siteMessage"></div>
<div class="flashcards">

${flashcards.map((flashcard: Flashcard) => {
	return `
	<div class="flashcard">
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

setupDeleteButtons(Array.from(document.querySelectorAll('.deleteButton')), document.querySelector('.siteMessage'), flashcards, url);