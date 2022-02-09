function Person (props) {
    let voteText = props.age >= 18 ? "Go vote!" : "Go study";

    let hobbies = props.hobbies.map(hobby => <li>{hobby}</li>);
    return (
        <div>
            <p>Learn some information about this person</p>
            <ul>
                <li>Name: {props.name}</li>
                <li>Age: {props.age}</li>
                <ul>
                    Hobbies
                    {hobbies}
                </ul>
                <h3>{voteText}</h3>
            </ul>
            
        </div>
       
            )
}