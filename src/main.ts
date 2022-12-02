import './style.scss';
import axios from 'axios';

type Flashcard = {
	id: number,
	category: string,
	front: string,
	back: string;
}

const url = 'http://localhost:5577/flashcards';

// FETCH ONE-LINER
// const flashcards = await(await fetch(url)).json();

// AXIOS ONE-LINER
// const flashcards = (await axios.get(url)).data;

const response = await axios.get(url);
const flashcards = response.data;

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<h1>Flashcards</h1>
<div class="flashcards">

${flashcards.map((flashcard: Flashcard) => {
	return `<div class="flashcard">
<div class="category">${flashcard.category}</div>	
<div class="front">${flashcard.front}</div>	
<div class="back">${flashcard.back}</div>	
	</div>`;
}).join('')}

</div>
`;
