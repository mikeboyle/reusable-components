import './Button.css';

const Button = ({
  className = '',
  disabled = false,
  text = 'Submit',
  onClick = () => {},
}) => {
  return (
    <button
      data-testid="Button"
      className={`Button ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
