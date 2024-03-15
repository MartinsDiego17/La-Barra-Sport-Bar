import './details.css';

const bebidaPage = ({ params }) => {

    const name = params.name;

    return (
        <div className="detailContainer" >
            <h1 className="light" >Esta es la bebida: {name}</h1>
        </div>
    );
};

export default bebidaPage;