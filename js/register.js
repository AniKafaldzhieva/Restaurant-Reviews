/**
 * Register Service Worker
 */

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
  .then(function() {
    // Succesful registration
    console.log('Registration succeeded.');
  }).catch(function(error) {
    // registration failed
    console.log('Registration failed with ' + error);
  });
}

	
