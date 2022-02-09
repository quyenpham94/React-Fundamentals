function Tweet(props) {
    return (
        <div>
            <span>{props.name}</span>
            <span classname="username">{props.username}</span>
            <span classname="date">{props.date}</span>
            <p>{props.message}</p>
        </div>
    );
}