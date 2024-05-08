import React from "react";
import Userslist from "../components/UsersList";

const Users = () => {
    
    const USER = [{ id: 'u1', name: 'Max Schwarz', image: 'https://imgv3.fotor.com/images/share/Free-pink-gradient-aesthetic-background-from-Fotor.jpg', places: 3 }/*, { id: 'u2', name: 'Clark Kent', image: 'https://imgv3.fotor.com/images/share/Free-pink-gradient-aesthetic-background-from-Fotor.jpg', places: 4 }*/];
    return (
        <Userslist items={USER} />
    )
}

export default Users 