import { FaArrowLeft } from 'react-icons/fa';
import { Searchbar } from '../searchbar/Searchbar';
import List from './list/List';
import './listadmin.css';
import Link from 'next/link';

const ListAdmin = ({ title, options, arr }) => {

    return (
        <>
            <div className='listAdminContainer' >
                <div className='subContainerList' >

                    <Link href="/paneladmin" >
                        <button className='buttonBack' >
                            <FaArrowLeft />
                            <span>Volver</span>
                        </button>
                    </Link>

                    <section>
                        <article>
                            <h1>{title}</h1>
                        </article>

                        <article>
                            <input type="text" placeholder='Buscar...' />
                            <div className='buttons' >
                                {
                                    options.map(option => (
                                        <button>{option}</button>
                                    ))
                                }
                            </div>
                        </article>

                    </section>

                    <List data={arr} />

                </div>
            </div></>
    )
}

export default ListAdmin
