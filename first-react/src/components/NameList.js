import React from "react";
import Person from "./Person";

function NameList() {
  const names = ["Ahdin", "Nidha", "Jakkani"];
  const namesList = names.map((a) => <h2>{a}</h2>);

  const persons = [{
  "id": 1,
  "name": "Greggory",
  "skill": "Riply",
  "email": "griply0@bbb.org"
}, {
  "id": 2,
  "name": "Alain",
  "skill": "Grushin",
  "email": "agrushin1@wordpress.org"
}, {
  "id": 3,
  "name": "Bret",
  "skill": "Alderman",
  "email": "balderman2@google.ca"
}, {
  "id": 4,
  "name": "Marlowe",
  "skill": "Gotcher",
  "email": "mgotcher3@myspace.com"
}, {
  "id": 5,
  "name": "Cinnamon",
  "skill": "Quarrell",
  "email": "cquarrell4@businessinsider.com"
}];

const personList = persons.map((person, index) => <Person key={person.id} person={person} index={index}/>);

  return (
    <div>
      {personList}
    </div>
  );
}

export default NameList;
