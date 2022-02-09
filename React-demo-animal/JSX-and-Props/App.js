const App = () => {
    <div>
        <Animal
            name="Stevie Chicks"
            species="Silkie Chicken"
            emoji="🐔"
            isCute={true}
        />
        <Animal name="Patrick" species="Red Fox" emoji="🦊" isCute={false} />
        
        <Bouncer age={19} />
        <Bouncer age={17} />
        <Bouncer age={32} />

    </div>
}


ReactDOM.render(<App />, document.getElementById("root"))