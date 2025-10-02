"use client"

import { useEffect, useState } from "react";

const Users = () => {

    const [users, setUsers] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                if (!response.ok) {
                    throw new Error("Error getting response")
                }
                const result = await response.json();
                setUsers(result);
                console.log("result", result);

            } catch (error) {
                console.error("Api error", error);

            }
        };
        fetchData();
    }, []);

    return (
        <div>
            {/* {users.map((item, index) => (

            ))} */}
        </div>
    )
}

export default Users;