"use client";

import ListAdmin from "@/app/components/listAdmin/ListAdmin"
import { useStoreUsers } from "@/app/store";
import { useState, useEffect } from "react";

const page = () => {

  const { getAllUsers } = useStoreUsers();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const users = await getAllUsers();
        setUsers(users);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchData();
  }, [getAllUsers]);

  return (
    <ListAdmin
      title={"Usuarios"}
      options={["Todos", "Admin"]}
      arr={users}
    />
  )
}

export default page
