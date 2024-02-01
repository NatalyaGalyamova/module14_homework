function useRequest(url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  
  xhr.onload = function() {
    if (xhr.status != 200) {
      console.log('Статус ответа: ', xhr.status);
    } else {
      const result = JSON.parse(xhr.response);
      if (callback) {
        callback(result);
      }
    }
  };
  
  xhr.onerror = function() {
    console.log('Ошибка! Статус ответа: ', xhr.status);
  };
  
  xhr.send();
};

const resultNode = document.querySelector('.j-result');

const btnNode = document.querySelector('.btn');

const value = document.querySelector('input').value;

function displayResult(item) {
  const card = `
      <div class="card">
        <img
          src="${item.thumbnailUrl}"
          class="card-image"
        />
        <p>${item.title}</p>
      </div>
    `;
    
  resultNode.innerHTML = card;
}

const checkNumber = (value) => {
    let url = 'https://jsonplaceholder.typicode.com/photos?_limit=';

    let message = '';

    if(value < 1 || value > 10){
        message = 'число вне диапазона от 1 до 10';
        resultNode.innerHTML = message;
    } else {
        url += value;
        useRequest(url, displayResult);
    } 
}

btnNode.addEventListener('click', () => {
    checkNumber(value); 
})



