// Write your code right here)
import './index.sass';

const template1 = document.getElementById('h1-template');
const app = document.getElementById('app');
const changed = template1.content.cloneNode(true);

app.appendChild(changed);