const Person = (props) => {
    const { id, name, age, image } = props.person;
    const removePerson = props.removePerson;
    return (
        <article className="person">
            <img className="img" src={image} alt={name} />
            <div>
                <h4>{name}</h4>
                <p>{age}</p>
                <button
                    className="btn"
                    type="button"
                    onClick={() => {
                        removePerson(id);
                    }}
                >
                    remove
                </button>
            </div>
        </article>
    );
};
export default Person;
