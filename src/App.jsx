import { useState } from "react";
import data from "./data";
import List from "./components/List";

const App = () => {
    const [people, setPeople] = useState(data);
    return <List people={people} />;
};
export default App;
