import React from 'react'
function UserDesc(props) {
    return (
        <main style={{"display":"flex", "justifyContent":"center"}}>
            <br/>Name:{props.name}
            <br/>ImgURL:{props.URL}
            <br/>Desc:{props.desc}
        </main>
    )
}


export default UserDesc;