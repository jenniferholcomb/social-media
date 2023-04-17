function Button(props) {
  if (props.round) {
    return (
      <button className="Button round-blue">
        {props.label}
      </button>
    );
  } else {
    return (
      <button className="Button">
        {props.label}
      </button>
    );
  }

}

export default Button;