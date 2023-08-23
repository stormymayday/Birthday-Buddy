import { useState } from 'react';
import data from './data.js';

function App() {

  const [people, setPeople] = useState(data);

  console.log(people);

  return (
    <h1>Hello World</h1>
  );
}

export default App;
