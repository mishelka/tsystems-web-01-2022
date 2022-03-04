"use strict"

const BASE_URL = 'https://jsonplaceholder.typicode.com/users';
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
};
let persons = [
];

$(() => {
    getDataFromApiNewJS();
});

const getDataFromApiNewJS = async () => {
    try {
        const response = await fetch(BASE_URL);
        persons = await response.json();
        renderPersonTable();
    } catch(err) {
        console.error("Sorry, an error occured", err);
    }
};

const deletePersonOnServer = async id => {
    try {
        const response = await fetch(BASE_URL + "/" + id, {method: 'DELETE'});
        // takto sa robi post, put:
        //const response = await fetch(BASE_URL + "/" + id, {method: 'POST', body: objektNovehoPersonuAleboEditovanehoPersonu});
        if(await response.status === 200)
            getDataFromApiNewJS();
    } catch(err) {
        console.error("Sorry, an error occured", err);
    }
};

const getDataFromApiAjax = () => {
    const request = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");

    request.onreadystatechange = () => {
        if(request.readyState === 4) {
            try {
                if(request.status === 200) {
                    persons = JSON.parse(request.responseText);
                    console.log(request);
                    renderPersonTable();
                }
            } catch (error) {
                console.error("Sorry, an error occured", error);
            }
        }
    };
    request.open("GET", BASE_URL, true);
    request.setRequestHeader("api-key", "123456");
    request.send(null);
}

const handleNewPerson = () => {
    togglePersonForm();
}

const togglePersonForm = () => {
    $("#personForm").toggleClass("hidden");
    $("#newPersonButton").toggleClass("hidden");
}

const renderPersonTable = () => {    
    // console.log(personTable.parentNode);
    // console.log(personTable.firstChild);
    // console.log(personTable.getAttribute("id"));
    // console.log(personTable.getAttributeNode("id"));

    let tableContent = "";
    for(let i in persons) {
        tableContent += 
        `<tr>
            <td><a href="person.html">${persons[i].name}</a></td>
            <td>${persons[i].age}</td>
            <td>
              <button onclick={deletePerson(${i})}>
                <span class="icon-bin"/>
                Delete
              </button>
            </td>
        </tr>`;
    };
    //other way - via createElement and append:
    //for(let i in persons) {
        //const tr = document.createElement("tr");
        //tr.append(document.createElement("td"));
        //...
    //};

    $("#personTable").html(tableContent);    
    //document.getElementById("personTable").innerHTML = tableContent;
}

const deletePerson = id => {
    // const personTable = $("#personTable");
    // const elementToRemove = personTable.childNodes[id];
    // personTable.removeChild(elementToRemove);
    // console.log("deleting person id " + id);
    deletePersonOnServer(id);
}

const handleNameOnBlur = function () {
    document.personForm.name.value = document.personForm.name.value.toUpperCase();
};

const handlePersonFormSubmit = function() {
    const timer = () => console.log("Hello");
    //setTimeout(timer, 1000);

    const formData = document.personForm;
    const name = formData.name.value;
    var r = /[a-z]+[0-9]/gi;
    // /[0-9]{5}/
    console.log(r.test(name));

    const age = parseInt(formData.age.value);
    persons.push(new Person(name, age));
    console.log(persons);
    renderPersonTable();
    togglePersonForm();
    return false;
};

const handleClickMeButton = () => {

    console.log(persons);

    let result = persons.find(function (p) {
        if(p.name.startsWith('R')) 
            return true;        //ugly!!
        else 
            return false;
        });
    let result2 = persons.find(p => p.name.startsWith('M'));
    result2 = persons.find(p => p.name.charAt(0) === 'M');
    result2 = persons.find(p => p.name[0] === 'M');
    console.log(result, result2);

    result = persons.filter(p => p.name.startsWith('M') && p.age < 30);
    result = persons.find(function (p) {
        return p.name.startsWith('M') && p.age < 30;    //nice
    });
    console.log(result);

    result = persons.every(p => p.age >= 18);
    console.log("All persons are adults: ", result);

    result = persons.some(p => p.age < 18);
    console.log("There is at least one person younger than 18: ", result);

    result = persons.map(p => p.name.length);
    console.log(result);

    persons.forEach((p, index) => console.log(index + ": " + p.name));

    // podmienka ? a : b
    result = persons.reduce((previousVal, currentVal) => {
        if(previousVal && previousVal instanceof Person) 
            return previousVal.age + currentVal.age;
        else return previousVal + currentVal.age;
    });
    console.log(result);

    persons.sort((p1, p2) => p1.name.localeCompare(p2.name))
    console.log("Sorted persons: ", persons);

    const arrFromString = Array.from('ABCD');
    console.log(arrFromString.includes('A'));
    console.log(arrFromString.includes('X'));
}