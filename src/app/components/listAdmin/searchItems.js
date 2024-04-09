export const searchItems = (letters, array) => {
    letters = letters.trim();
    letters = letters.split(' ').join('');

    let dataCopy = array;

    const finds = dataCopy.filter(
        product =>
            product.name.toLowerCase().includes(letters.toLowerCase()) ||
            product.name.toUpperCase().includes(letters.toUpperCase()) ||
            product.name.toLowerCase().split(' ').join('').includes(letters.toLowerCase()) ||
            product.name.toUpperCase().split(' ').join('').includes(letters.toUpperCase())
    );

    return finds;

}
