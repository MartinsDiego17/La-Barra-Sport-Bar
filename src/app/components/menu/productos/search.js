import { comidas } from "@/app/comidas";
import { tragos } from "@/app/tragos";

const searchFn = (category, letters) => {
    letters = letters.trim();
    letters = letters.split(' ').join('');

    let dataCopy;

    if (category === "comida") {
        dataCopy = comidas;
    } else if (category === "bebida") {
        dataCopy = tragos;
    }

    const finds = dataCopy.filter(
        product =>
          product.name.toLowerCase().includes(letters.toLowerCase()) ||
            product.name.toUpperCase().includes(letters.toUpperCase()) ||
            product.name.toLowerCase().split(' ').join('').includes(letters.toLowerCase()) ||
            product.name.toUpperCase().split(' ').join('').includes(letters.toUpperCase())
    );

    return finds;

}

export default searchFn;