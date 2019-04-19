// Import stylesheets
import './style.css';
import events from './event-manager';
// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;


// clickEvent1.unsubscribe();


const clickEvent2 = events.subscribe('click', (ev) => {
  console.log("[Event 2] New event has been occurred", ev);
})

// clickEvent2.unsubscribe();

const clickEvent3 = events.subscribe('click', (ev) => {
  console.log("[Event 3] New event has been occurred", ev);
})

clickEvent3.unsubscribe();




events.publish('click', { message: "Hello Observers" })