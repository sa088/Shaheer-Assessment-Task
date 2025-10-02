"use client"

import { useEffect, useState } from "react";

const Users = () => {

    const [data, setData] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                if (!response.ok) {
                    throw new Error("Error getting response")
                }
                const result = await response.json();
                setData(result);
                console.log("result", result);

            } catch (error) {
                console.error("Api error", error);

            }
        };
        fetchData();
    }, []);

    console.log("data", data);


    return (
        <div>
            {data?.map((item, index) => (
                <div key={index} className="my-4">
                    <p>{item?.id}</p>
                    <h2>Name: {item.name}</h2>
                    <h3>Email: {item.email}</h3>
                </div>
            ))}
        </div>
    )
}

export default Users;