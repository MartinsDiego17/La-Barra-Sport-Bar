export const updateProduct = (field, value) => {

    const validationName = () => {

        for (let i = 0; i < value.length; i++) {
            if (!isNaN(value[i]) && value[i] !== " ") {
                return true;    
            }
        }
        return false;
    }

    const validationPrice = () => {
        for (let i = 0; i < value.length; i++) {
            if (isNaN(value[i])) {
                return true;
            }
        }
        return false;
    }

    let error = "";

    if (field === "name") {
        if (value.length > 30 || validationName()) error = "inputError";
    }

    if (field === "price") {
        if (validationPrice() || value > 150000) error = "inputError"
    }


    return error;

};