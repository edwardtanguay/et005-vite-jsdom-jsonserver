import './style.css';
import axios from 'axios';

const url = 'http://localhost:5577/flashcards';

// FETCH ONE-LINER
// const flashcards = await(await fetch(url)).json();

// AXIOS ONE-LINER
// const flashcards = (await axios.get(url)).data;

const response = await axios.get(url);
const flashcards = response.data;

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<h1>Flashcards</h1>
`
