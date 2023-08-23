const List = ({ people }) => {

    return (

        <section>

            {

                people.length > 1

                    ?

                    people.map((person) => {

                        const { id, name, age, image } = person;

                        return (

                            <img src={image} alt={name} />

                        );

                    })

                    :

                    null
            }

        </section>
    );
}

export default List;