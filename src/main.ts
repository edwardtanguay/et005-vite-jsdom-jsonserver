import './style.css';
import axios from 'axios';

const url = 'http://localhost:5577/flashcards';

const response = axios.get(url);
const flashcards = response.data;
console.log(flashcards);

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<h1>Flashcards</h1>
`
