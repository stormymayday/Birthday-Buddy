const Person = ({ image, name, age }) => {
    return (
        <article>
            <img src={image} alt={name} />
            <div>
                <h4>{name}</h4>
                <p>{age} years</p>
            </div>
        </article>
    );
};

export default Person;