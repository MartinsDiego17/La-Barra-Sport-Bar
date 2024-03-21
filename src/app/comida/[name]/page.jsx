import { comidas } from '@/app/comidas';
import Product from '@/app/components/product/Product';
import Relacionado from '@/app/components/relacionado/Relacionado';

const comidaPage = ({ params }) => {

    const name = decodeURIComponent(params.name);
    let comida = comidas.find(comida => comida.name === name);
    let product;

    if (comida.id) {
        product = comida;
    }

    const relacionados = [comidas[0], comidas[1], comidas[2], comidas[3]]

    return (
        <div className='patherContainer' >
            <Product product={comida} />
            <Relacionado relacionados={relacionados} />
        </div>
    );
};

export default comidaPage;