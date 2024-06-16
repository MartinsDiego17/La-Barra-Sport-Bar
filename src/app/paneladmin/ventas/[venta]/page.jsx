"use client";

import { useEffect, useState } from "react";
import { getSale } from "./getSale";
import SaleDetail from "@/app/components/saleDetail/SaleDetail";

const salePage = ({ params }) => {

    const [sale, setSale] = useState({});

    useEffect(() => {

        const fetchData = async () => {
            try {
                const saleFound = await getSale(params.venta);
                setSale(saleFound);
            } catch (error) {
                console.error("Error fetching sale:", error.message);
            }
        };
        fetchData();

    }, [getSale]);

    return (
        <SaleDetail sale={sale} />
    );

};

export default salePage;