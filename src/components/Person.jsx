const Person = (props) => {
    console.log(props);
    const { id, name, age, image } = props.person;
    return (
        <article className="person">
            <img className="img" src={image} alt={name} />
            <div>
                <h4>{name}</h4>
                <p>{age}</p>
            </div>
        </article>
    );
};
export default Person;
