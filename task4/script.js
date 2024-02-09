const resultNode = document.querySelector('.j-result');

const btnNode = document.querySelector('.btn');

function displayImage(imageUrl) {
  const img = document.createElement('img');
  img.src = imageUrl;
  resultNode.innerHTML = '';
  resultNode.appendChild(img);
}

function isNumberInRange(value) {
  return !isNaN(value) && value >= 100 && value <= 300;
}

btnNode.addEventListener('click', async () => {
  const value1 = document.getElementById('input1').value;
  const value2 = document.getElementById('input2').value;

  if(isNumberInRange(value1) && isNumberInRange(value2)){
    const url = `https://dummyimage.com/${value1}x${value2}/`;

    try {
      const response = await fetch(url);

      if (!response.ok) {
          throw new Error('Произошла ошибка при получении данных.');
      }

      const imageUrl = await response.url;
      displayImage(imageUrl);
  } catch (error) {
    resultNode.innerHTML = error.message;
  }
    
  } else {
    resultNode.innerHTML = 'одно из чисел вне диапазона от 100 до 300';
  } 
})



