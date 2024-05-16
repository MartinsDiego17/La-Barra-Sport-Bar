export const changePage = (arr, page, numberPage) => {

    if (numberPage || numberPage == 0) {
        const from = numberPage * 12;
        const destiny = (numberPage + 1) * 12;
        const products = arr.slice(from, destiny);
        return products;
    }

    const totalRender = page * 12;
    const prevRender = totalRender - 12;

    const products = arr.slice(prevRender, totalRender);
    return products;

};