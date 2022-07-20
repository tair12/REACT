
// import Header from "./components/header/Header";
// function App(){
//    return(
//      <div className = "container"> 
//       <Header/>
//      </div>
//    );
// }
// export default App;




import React from 'react';

function UsersList(props) {
    return (
        <ul>
            <li>{props.user.name} - {props.user.age}</li>
            {props.usersName.map(user => {
                return (
                    <li>{user}</li>
                )
            })}
        </ul>
    );
}

export default UsersList;


