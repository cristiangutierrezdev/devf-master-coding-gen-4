function Component(props) {
    const UserInfoAlert = () => {
        alert(`request information of ${props.name} was sent`);
    };
    
    return (
        <main>
            Name:{props.name}
            <br /> gender:{props.gender}
            <br /> born:{props.born}
            <br /> house:{props.house}
            <br /> description:{props.desc} 
            <br /> email: {props.email} <br />
            <button className="componentBtn" onClick={UserInfoAlert}>
                know more about {props.name}
            </button>
        </main>
    )
}

export default Component;

