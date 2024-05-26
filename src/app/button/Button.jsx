import './button.css';

export const Button = ({ text, fn, ds }) => {

  const handleFn = () => {
    if (!ds) ds = false;
    if (!fn || fn === undefined) {
      fn = () => {
      }
      return;
    }
    fn();
  }

  return (
    <button disabled={ds} id='btnPersonalizado' onClick={() => handleFn()} ><span>{text.toUpperCase()}</span></button>
  )
}
