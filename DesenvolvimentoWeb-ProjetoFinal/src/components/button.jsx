

function Button({title, ...rest}) {
  return (
    <button {...rest} >{title}</button>
  );
}


export default Button;