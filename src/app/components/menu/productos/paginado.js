export const changePage = (arr, page) => {
    
    console.log(arr)

    const totalRender = page * 12;
    const prevRender = totalRender - 12;

    const products = arr.slice(prevRender, totalRender);
    return products;    

};