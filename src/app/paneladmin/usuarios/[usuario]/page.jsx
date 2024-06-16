"use client";

import { useEffect, useState } from "react";
import { getUser } from "./getUser";
import UserDetail from "@/app/components/userdetail/UserDetail";

const userPage = ({ params }) => {

    const [localUser, setLocalUser] = useState({});
    const id = decodeURIComponent(params.usuario);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userFound = await getUser(id);
                setLocalUser(userFound)
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };
        fetchData();

    }, [getUser]);

    if (localUser?.name?.length > 1) {
        return (
            <UserDetail user={localUser} />
        );
    }

};

export default userPage;