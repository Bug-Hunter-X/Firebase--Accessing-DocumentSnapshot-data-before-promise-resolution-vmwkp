The Firebase SDK might throw an error if you try to access a property of a document snapshot before the promise resolves.  This can happen if you use `.get()` without using `.then()` or `async/await`. For example:
```javascript
const docRef = doc(db, 'collection', 'docId');
const docSnap = await docRef.get();
console.log(docSnap.data().someField); // Error if the promise hasn't resolved
```