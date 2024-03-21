import { Card } from '../menu/card/Card';
import './relacionado.css';

const Relacionado = ({ relacionados }) => {
    return (
        <div className='relacionadoContainer' >
            <h1>PRODUCTOS RELACIONADOS</h1>

            <div className='productosGrid' >

                {
                    relacionados.map(producto => (
                        <div key={producto.id} >
                            <Card
                                image={producto.image}
                                name={producto.name}
                                category={producto.category}
                                precio={producto.precio}
                            />
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default Relacionado
