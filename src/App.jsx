import { useState } from 'react';
import data from './data.js';
import List from './components/List.jsx';

function App() {

  const [people, setPeople] = useState(data);

  const clearList = () => {

    setPeople({});

  };

  return (

    <main>

      <section>

        <h3>{people.length} birthdays today</h3>

        <List people={people} />

      </section>

    </main>

  );

}

export default App;
