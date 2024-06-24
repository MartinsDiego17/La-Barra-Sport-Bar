"use client";

require('dotenv').config();
import FormCreate from "@/app/components/formcreate/FormCreate";
import axios from "axios";
import { useEffect, useState } from "react";

const createProduct = () => {

    const [ingredientes, setIngredientes] = useState([]);

    useEffect(() => {

        const fetchIngredients = async () => {
            const url = process.env.NEXT_PUBLIC_GET_INGREDIENTES;
            const { data }= await axios(url);
            setIngredientes(data);
        }
        fetchIngredients();
    }, []);

    return (
        <FormCreate ingredients={ingredientes} />
    )
}

export default createProduct;
