'use strict';

function back() {
    window.parent.postMessage('hello', 'http://localhost:4000');
    const tag = document.createElement('div');
    tag.innerText = '+';
    document.body.append(tag);
}
