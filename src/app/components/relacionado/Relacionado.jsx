import { Card } from '../menu/card/Card';
import './relacionado.css';

const Relacionado = ({ relacionados }) => {

    console.log("RELACIONADOS: ", relacionados);    

    return (
        <div className='relacionadoContainer' >
            <h1>PRODUCTOS RELACIONADOS</h1>

            <div className='productosGrid' >

                {
                    relacionados.map(producto => (
                        <div key={producto.id} >
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
