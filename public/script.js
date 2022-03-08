'use strict';

function back(event) {
    console.log(event);
    event.postMessage('hello', 'http://localhost:4000');
}
