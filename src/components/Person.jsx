const Person = ({ id, image, name, age, people, setPeople }) => {

    const removeItem = (id) => {

        setPeople(people.filter((person) => {

            return person.id !== id;

        }));

    };

    return (
        <article className="person">
            <img className="img" src={image} alt={name} />
            <div>
                <h4>{name}</h4>
                <p>{age} years</p>
                <button onClick={() => {

                    removeItem(id);

                }} className="btn btn-hipster">remove</button>
            </div>
        </article>
    );
};

export default Person;