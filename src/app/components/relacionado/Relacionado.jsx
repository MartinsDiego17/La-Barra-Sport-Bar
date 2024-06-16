import { Card } from '../menu/card/Card';
import './relacionado.css';

const Relacionado = ({ relacionados }) => {

    return (
        <div className='relacionadoContainer' >
            <h1>PRODUCTOS RELACIONADOS</h1>

            <div className='productosGrid' >

                {
                    relacionados.map((producto, index) => (
                        <div key={producto.id * index} >
                            <Card
                                product={producto}
                            />
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default Relacionado
