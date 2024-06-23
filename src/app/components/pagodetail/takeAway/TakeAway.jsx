const TakeAway = ({ code }) => {
    return (
        <div id='boxPay' className='localConfirm' >
            <div>
                <button>PAGAR CON TRANSBANK</button>
                <h3>HAZ CONFIRMADO EXITOSAMENTE TU PEDIDO</h3>
                <p>TU CÓDIGO DE ENTREGA ES <span className='codigo' >{code}</span></p>
                <h4>MUÉSTRALE EL CÓDIGO A CUALQUIER GARZÓN Y RETIRA TU PEDIDO</h4>
            </div>
        </div>
    )
}

export default TakeAway
