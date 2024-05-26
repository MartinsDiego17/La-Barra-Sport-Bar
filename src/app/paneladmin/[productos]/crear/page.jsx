"use client";

import FormCreate from "@/app/components/formcreate/FormCreate";
import axios from "axios";
import { useEffect, useState } from "react";

const createProduct = () => {

    const [ingredientes, setIngredientes] = useState([]);

    useEffect(() => {

        const fetchIngredients = async () => {
            const { data }= await axios("http://localhost:3002/getIngredients");
            setIngredientes(data);
        }
        fetchIngredients();
    }, []);

    return (
        <FormCreate ingredients={ingredientes} />
    )
}

export default createProduct;
