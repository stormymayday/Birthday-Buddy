import Person from "./Person";

const List = ({ people, setPeople }) => {

    return (

        <section>

            {

                people.length >= 1

                    ?

                    people.map((person) => {

                        return (

                            <Person key={person.id} {...person} setPeople={setPeople} />

                        );

                    })

                    :

                    null
            }

        </section>
    );
};

export default List;