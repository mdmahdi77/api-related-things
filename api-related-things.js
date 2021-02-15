const person = {
    name: "rohim",
    age: 24
}
// console.log(JSON.stringify(person)) //object ke JSON.stringify kore json a convert korte hoi
 const data = JSON.stringify(person);
 const dataParse = JSON.parse(data) //sorasorin data theke name property neya jabe na ba asbe na....tai data ke JSON.parse korte hobe tahole name er property show korbe
//  console.log(dataParse.name)



// localStorage.setItem('userId', 12564)

localStorage.setItem('person', JSON.stringify(person)) //setItem mane hocce j objct ke prothome json.stringfy kore getItem korte hobe tahole data paua jabe
const storedPerson = localStorage.getItem('person') //getItem kore data store korce
const parsePerson = JSON.parse(storedPerson) //data pete hole json.parse korte hobe getItem ke
// console.log(parsePerson.name)

const keys = Object.keys(parsePerson) //property gulo dekhanor jonno
console.log(keys)

const values = Object.values(parsePerson) //value gulo dekhar jonno
console.log(values)