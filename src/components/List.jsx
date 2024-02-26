import { Person } from "../components";

const List = (props) => {
    const people = props.people;

    const removePerson = props.removePerson;

    // console.log(people);
    return (
        <section>
            {people.map((person) => {
                return (
                    <Person
                        key={person.id}
                        person={person}
                        removePerson={removePerson}
                    />
                );
            })}
        </section>
    );
};
export default List;
