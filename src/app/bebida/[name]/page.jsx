import { tragos } from '@/app/tragos';
import Product from '@/app/components/product/Product';
import Relacionado from '@/app/components/relacionado/Relacionado';

const bebidaPage = ({ params }) => {

    const name = decodeURIComponent(params.name);
    let bebida = tragos.find(trago => trago.name === name);
    let product;

    if (bebida.id) {
        product = bebida;
    }

    const relacionados = [tragos[0], tragos[1], tragos[2], tragos[3]]

    return (
        <div className='patherContainer' >
            <Product product={bebida} />
            <Relacionado relacionados={relacionados} />
        </div>
    );
};

export default bebidaPage;