import { useEffect, useState } from 'react';
import './optionsTable.css';

const OptionsTable = ({ tables, selectedTable, setSelectedTable }) => {

    const handleTable = (table) => {
        setSelectedTable(table);
    };

    if (tables.length > 0) {
        return (
            <div className='tablesFather'>
                <h3>MESAS</h3>
                <div className='tablesContainer' >
                    {
                        tables.map(table => (
                            <div key={table} >
                                <button onClick={() => handleTable(table)} className={selectedTable === table ? 'selected' : ''} >{table}</button>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }

}

export default OptionsTable;
