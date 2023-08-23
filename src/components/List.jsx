import Person from "./Person";

const List = ({ people }) => {

    return (

        <section>

            {

                people.length > 1

                    ?

                    people.map((person) => {

                        return (

                            <Person key={person.id} {...person} />

                        );

                    })

                    :

                    null
            }

        </section>
    );
};

export default List;