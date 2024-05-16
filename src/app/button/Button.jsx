import './button.css';

export const Button = ({ text, fn }) => {

  const handleFn = () => {
    if (!fn || fn === undefined) {
      fn = () => {
        
      }
      return;
    }
    fn();
  }

  return (
    <button id='btnPersonalizado' onClick={() => handleFn()} ><span>{text.toUpperCase()}</span></button>
  )
}
