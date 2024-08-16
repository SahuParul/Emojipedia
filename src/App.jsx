import Card from './Card';
import './App.css';
import emojipedia from "./emojipedia.js";

function createCard(emojiTerm){
  return (
  <Card
  key = {emojiTerm.id}
  emoji = {emojiTerm.emoji}
  name = {emojiTerm.name}
  description = {emojiTerm.meaning}
  />
  );
}

function App() {
  return(
 <div>
  <h2><span>emojipedia.com</span></h2>
 <dl className='dictionary'>
 {emojipedia.map(createCard)}
 </dl>
 </div>
  );
}

export default App;
