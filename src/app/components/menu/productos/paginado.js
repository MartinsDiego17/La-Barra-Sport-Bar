export const changePage = (arr, page) => {
    
    const totalRender = page * 12;
    const prevRender = totalRender - 12;

    const products = arr.slice(prevRender, totalRender);
    return products;    

};