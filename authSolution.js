```javascript
// Solution code
firebase.auth().onAuthStateChanged(user => {
  // ... (existing code) ...
});

setInterval(() => {
  const user = firebase.auth().currentUser;
  if (user) {
    console.log('User currently signed in (interval check):', user);
  } else {
    console.log('User currently signed out (interval check)');
  }
}, 5000); // Check every 5 seconds

// Consider error handling and more sophisticated checks based on your application's needs.
```