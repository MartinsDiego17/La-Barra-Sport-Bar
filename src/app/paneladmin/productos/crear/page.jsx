"use client";

require('dotenv').config();
import FormCreate from "@/app/components/formcreate/FormCreate";
import axios from "axios";
import { useEffect, useState } from "react";

const createProduct = () => {

    const [ingredientes, setIngredientes] = useState([]);

    useEffect(() => {

        const fetchIngredients = async () => {
            const url = process.env.NODE_ENV === "development" ?
                process.env.NEXT_PUBLIC_GET_INGREDIENTES_LOCAL :
                process.env.NEXT_PUBLIC_GET_INGREDIENTES;
            const { data } = await axios(url);
            setIngredientes(data);
        }
        fetchIngredients();
    }, []);

    return (
        <FormCreate ingredients={ingredientes} />
    )
}

export default createProduct;
