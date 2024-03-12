import './button.css';

export const Button = ({text}) => {
  return (
    <button id='btnPersonalizado' ><span>{text.toUpperCase()}</span></button>
    )
}
