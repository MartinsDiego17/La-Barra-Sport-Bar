const EmptyPay = () => {
    return (
        <div className='noProducts' >
            <h1>Aún no haz agregado productos al carrito.</h1>
            <button onClick={() => { window.location.href = "/" }} >Ir a comprar</button>
        </div>
    )
}

export default EmptyPay
