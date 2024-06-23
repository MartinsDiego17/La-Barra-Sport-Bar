"use client";
import { useStoreCart } from '../store';
import { useState, useEffect } from "react";
import PagoDetail from '../components/pagodetail/PagoDetail';

const page = () => {

    const { chargeProducts } = useStoreCart();
    const [localProducts, setLocalProducts] = useState([]);
    const [delivery, setDelivery] = useState(0);
    const [option, setOption] = useState({
        delivery: "",
        local: "",
    })
    const [code, setCode] = useState(0);
    const [confirm, setConfirm] = useState(false);
    const [disabled, setDisabled] = useState(true);

    let subtotal = 0;
    chargeProducts().forEach(product => {
        subtotal += product.price;
    })
    let total = subtotal + delivery;
    useEffect(() => {
        setLocalProducts(chargeProducts());
    }, []);

    const handleOption = (op) => {
        setDisabled(false);

        if (op === 1) {
            setDelivery(3);
            setOption({
                delivery: "selected"
            });
            return;
        }
        setDelivery(0);
        setOption({
            local: "selected"
        })
    };

    const handlePay = () => {
        setConfirm(true);
        setCode(1234);
    };

    return (
        <PagoDetail
            products={localProducts}
            deliveryPrice={delivery}
            option={option}
            codeConfirm={code}
            confirm={confirm}
            disabled={disabled}
            subtotal={subtotal}
            total={total}
            handleOption={handleOption}
            handlePay={handlePay}
            setDisabled={setDisabled}
        />
    )
}

export default page 
