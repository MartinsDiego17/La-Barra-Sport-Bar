"use client";

import ListAdmin from "@/app/components/listAdmin/ListAdmin"
import { useState, useEffect } from "react";
import { fetchVentas } from "./fetchVentas";

const page = () => {

    const [ventas, setVentas] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const ventasFetch = await fetchVentas();
                setVentas(ventasFetch);
            } catch (error) {
                console.error("Error fetching sales:", error.message);
            }
        };

        fetchData();
    }, []);

    return (
        <ListAdmin
            title={"Ventas"}
            options={["Todos"]}
            arr={ventas}
        />
    )
}

export default page
