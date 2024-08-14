function CustomButton(props) {
    let { name, handleClick } = props;
    let handle = () => {
        // console.log("Called", handleClick);
        handleClick();
    };
    return (
        <button className="custom-button" onClick={handle}>
            {props.icon ? props.icon : name}
        </button>
    );
}

export default CustomButton;
