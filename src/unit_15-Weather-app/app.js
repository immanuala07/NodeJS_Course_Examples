/**
 * Asyncronous code ->
 * Non-Blocking 
 * Single threaded
 * Event-driven
 */

console.log("Starting");
setTimeout(() => {
	console.log('2 second timer');
}, 2000);
console.log('Stopping');