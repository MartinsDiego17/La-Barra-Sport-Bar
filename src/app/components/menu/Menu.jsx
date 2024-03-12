import { Comidas } from './comidas/Comidas';
import { Tragos } from './tragos/Tragos';
import './menu.css';

export const Menu = () => {
    return (
        <div className='menuPather' >
            <Comidas />
            <Tragos />
        </div>
    )
}
