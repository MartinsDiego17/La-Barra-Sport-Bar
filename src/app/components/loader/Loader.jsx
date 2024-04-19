import './loader.css';
import { Oval } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className='loadingContainer'>
    <Oval
        visible={true}
        height="80"
        width="80"
        color="#b10303"
        ariaLabel="oval-loading"
        wrapperStyle={{}}
        wrapperClass=""
        secondaryColor='transparent'
    />
</div>
  )
}

export default Loader
