import React, { useState } from 'react';
import data from './data';
import PickDate from './datePicker';
import List from './List';

const App = () => {

  const [people, setPeople] = useState(data);
  const [filterSelectedValue, setFilterSelectedValue] = useState('');

  function onFilter(filterValue) {
    setFilterSelectedValue(filterValue);
  }

  const filteredPeople = people.filter((person) => {
    return person.yearly === filterSelectedValue;
  });

  return (
    <main>
      <section className="container2">
        <filter>
          <PickDate filterSelectedValue={onFilter}/>
        </filter>
      </section>
      <section className="container">
        <h3>{filteredPeople.length} birthday(s) today</h3>
        <List people={filteredPeople}/>
        <button onClick={() => setPeople([])}>clear all</button>
      </section>
    </main>
  );
}

export default App;
