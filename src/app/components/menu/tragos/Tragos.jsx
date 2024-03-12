import './tragos.css';

export const Tragos = () => {
  return (
    <div className='menuContainer' >
    <div>
        <div>
            <span>ORDENAR POR</span>
            <select name="" id="">
                <option value="">PRECIO MÁS BAJO</option>
                <option value="">PRECIO MÁS ALTO</option>
                <option value="">MAYOR RELEVANCIA</option>
                <option value="">MENOR RELEVANCIA</option>
            </select>
        </div>
        <h1>TRAGOS <span className='point' >.</span></h1>
    </div>
    <hr />
</div>
  )
}
