import { Person } from "../components";

const List = (props) => {
    const people = props.people;
    console.log(people);
    return (
        <section>
            {people.map((person) => {
                return <Person key={person.id} person={person} />;
            })}
        </section>
    );
};
export default List;
