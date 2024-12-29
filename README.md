# Firebase DocumentSnapshot Promise Resolution Error

This repository demonstrates a common error in Firebase when accessing data from a `DocumentSnapshot` before the asynchronous operation completes.  The `bug.js` file shows the problematic code, which attempts to access document data synchronously.  The `bugSolution.js` file provides the corrected version, properly using promises or `async/await` to handle the asynchronous nature of the operation.

## Problem

The primary issue is accessing data from `docSnap.data()` before the `docRef.get()` promise resolves.  This can lead to unexpected errors and unpredictable behavior.

## Solution

The solution involves using promises or `async/await` to ensure that the data is available before attempting to access it. This ensures that the operation completes successfully and prevents runtime errors.