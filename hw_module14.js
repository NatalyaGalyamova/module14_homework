//Задание 1

const parser = new DOMParser();

const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

const xmlDOM = parser.parseFromString(xmlString, 'text/xml');

const listNode = xmlDOM.querySelector('list');

//Первый студент
const firstStudent = listNode.firstElementChild;
const firstStudentName = firstStudent.querySelector('name');
const firstStudentFirstName = firstStudentName.querySelector('first');
const firstStudentLastName = firstStudentName.querySelector('second');
const firstStudentAge = firstStudent.querySelector('age');
const firstStudentProf = firstStudent.querySelector('prof');
const firstStudentLang = firstStudentName.getAttribute('lang');
 
//Второй студент
const secondStudent = listNode.lastElementChild;
const secondStudentName = secondStudent.querySelector('name');
const secondStudentFirstName = secondStudentName.querySelector('first');
const secondStudentLastName = secondStudentName.querySelector('second');
const secondStudentAge = secondStudent.querySelector('age');
const secondStudentProf = secondStudent.querySelector('prof');
const secondStudentLang = secondStudentName.getAttribute('lang');

const result1 = {
    list: [{
        name: firstStudentFirstName.textContent + ' ' + firstStudentLastName.textContent,
        age: Number(firstStudentAge.textContent),
        prof: firstStudentProf.textContent,
        lang: firstStudentLang,
    }, {
        name: secondStudentFirstName.textContent + ' ' + secondStudentLastName.textContent,
        age: Number(secondStudentAge.textContent),
        prof: secondStudentProf.textContent,
        lang: secondStudentLang,
    }]
}

console.log('result1', result1)

//Задание 2

const jsonString = `
{
    "list": [
     {
      "name": "Petr",
      "age": "20",
      "prof": "mechanic"
     },
     {
      "name": "Vova",
      "age": "60",
      "prof": "pilot"
     }
    ]
}
`;

const data = JSON.parse(jsonString);

const list = data.list;

const result2 = {
    list: [{
        name: list[0].name,
        age: Number(list[0].age),
        prof: list[0].prof,
    }, {
        name: list[1].name,
        age: Number(list[1].age),
        prof: list[1].prof,
    }]
};

console.log('result2', result2);
