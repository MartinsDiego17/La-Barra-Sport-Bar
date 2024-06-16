export const searchItems = (letters, array, num) => {

    if (num) {
        const finds = [];
        array.forEach(sale => {
            sale.id == num && finds.push(sale);
        })
        return finds;
    }

    letters = letters.trim();
    letters = letters.split(' ').join('');

    let dataCopy = array;
    let finds;

    if (dataCopy.length < 1) return [];

    //SI SON PRODUCTOS
    if (dataCopy[0].price > 0) {
        finds = dataCopy.filter(
            product =>
                product.name.toLowerCase().includes(letters.toLowerCase()) ||
                product.name.toUpperCase().includes(letters.toUpperCase()) ||
                product.name.toLowerCase().split(' ').join('').includes(letters.toLowerCase()) ||
                product.name.toUpperCase().split(' ').join('').includes(letters.toUpperCase())
        );
    }

    //SI SON USUARIOS
    else if (dataCopy[0].email.length > 0) {
        finds = dataCopy.filter(
            user =>
                user.name.toLowerCase().includes(letters.toLowerCase()) ||
                user.name.toUpperCase().includes(letters.toUpperCase()) ||
                user.name.toLowerCase().split(' ').join('').includes(letters.toLowerCase()) ||
                user.name.toUpperCase().split(' ').join('').includes(letters.toUpperCase())
        );
    }

    return finds;

}
