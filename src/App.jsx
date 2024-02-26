import { useState } from "react";
import data from "./data.js";
import { List } from "../src/components";

const App = () => {
    const [people, setPeople] = useState(data);

    const getPeople = () => {
        setPeople(data);
    };

    const clearPeople = () => {
        setPeople([]);
    };

    const removePerson = (id) => {
        setPeople((currentStateVal) => {
            const newStateVal = currentStateVal.filter((person) => {
                return person.id !== id;
            });

            return newStateVal;
        });
    };

    return (
        <main>
            <section className="container">
                <h3>{people.length} birthdays today</h3>
                <List people={people} removePerson={removePerson} />

                {people.length > 0 ? (
                    <button
                        className="btn btn-block"
                        type="button"
                        onClick={clearPeople}
                    >
                        clear all
                    </button>
                ) : (
                    <button
                        className="btn btn-block"
                        type="button"
                        onClick={getPeople}
                    >
                        fetch data
                    </button>
                )}
            </section>
        </main>
    );
};
export default App;
