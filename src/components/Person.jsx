const Person = ({ id, image, name, age, setPeople }) => {

    const removeItem = (id) => {

        setPeople((currentStateValue) => {

            const newStateValue = currentStateValue.filter((person) => {

                return person.id !== id;

            });

            return newStateValue;

        });

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