// Import stylesheets
import './style.css';
import events from './event-manager';
// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Javascript patterns - PubSub</h1>`;


// Hold a reference for the subscription
let sub1 = events.subscribe("click", (data) => {
    console.log("Observer 1", data)
})
// Hold a reference for the subscription
let sub2 = events.subscribe("click", (data) => {
    console.log("Observer 2", data)
})

// Hold a reference for the subscription

let sub3 = events.subscribe("click", (data) => {
    console.log("Observer 3", data)
})

// Hold a reference for the subscription
let sub4 = events.subscribe("click", (data) => {
    console.log("Observer 4", data)
}).unsubscribe()

events.publish('click', {black: "swan"})
