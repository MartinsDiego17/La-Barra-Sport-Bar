import { useEffect, useState } from 'react';
import './modaldelete.css';
import { deleteIngredient } from './deleteIngredient';
import { getIngredients } from '../../../paneladmin/productos/[producto]/getIngredients';

const ModalDelete = ({ isOpen, setIsOpen, ingredients }) => {

    const [selected, setSelected] = useState({});
    const [localIngredients, setLocalIngredients] = useState(ingredients);

    useEffect(() => {
        setSelected({});
    }, [isOpen, setIsOpen]);

    const truncateName = (name, maxLength) => {
        return name.length > maxLength ? name.slice(0, maxLength) + '...' : name;
    };

    const handleSelect = (ing) => {
        setSelected(ing);
    };
    const handleDelete = () => {
        const data = deleteIngredient(selected);
        const fetchIngredients = async () => {
            const ingredientesLocales = await getIngredients();
            setLocalIngredients(ingredientesLocales);
        };
        if (data) {
            setIsOpen(false);
            fetchIngredients();
        }
    };

    if (isOpen) {
        return (
            <div className='modalDeleteFather'>
                <div className="modalDeleteContainer">
                    <section>
                        <article className='titleAndClose' >
                            <h2>Selecciona el ingrediente a eliminar</h2>
                            <button onClick={() => setIsOpen(false)} >x</button>
                        </article>
                        <article className='listIngredients' >
                            {
                                localIngredients.length && localIngredients.map((ingre, index) => (
                                    <div key={index} >
                                        <button
                                            className={ingre.name === selected.name && "ingSelected"}
                                            onClick={() => handleSelect(ingre)}
                                        >
                                            {truncateName(ingre.name, 9)}
                                        </button>
                                    </div>
                                ))
                            }
                        </article>
                        <article className='buttonsModal' >
                            <button onClick={handleDelete} disabled={!selected?.name?.length} >Eliminar</button>
                            <button onClick={() => setIsOpen(false)} >Cancelar</button>
                        </article>
                    </section>
                </div>
            </div>
        )
    }
}

export default ModalDelete
