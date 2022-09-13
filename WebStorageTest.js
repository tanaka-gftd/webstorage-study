'use strict';

const resultDivided = document.getElementById('result-area');
resultDivided.innerText = 'WebStorageの表示テスト（コンソールにデータが表示）';

localStorage.setItem('Apple', 'りんご');

const value = localStorage.getItem('Apple');
console.log(value);

localStorage.setItem('kiwi', 'キウイ');
const value2 = localStorage.getItem('kiwi');
console.log(value2);