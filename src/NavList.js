function NavList(props){

    const stil = {
        display: 'inline-block',
        margin: '0 10px'
    };

    const linktus = {
        backgroundColor: 'aqua',
        color: '#333',
        textDecoration: 'none',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        display: 'inline-block',
        margin: '5',
        transition: 'background-color 0.2s ease'
    };

    const hoverStili = {
        backgroundColor: 'pink',
    };


    return (
        <li style={stil}>
            <a href={"#"} 
                onClick= {props.tiklandiginda}
                style={linktus}
                onMouseOver={(e) => Object.assign(e.target.style, hoverStili)}
                onMouseOut={(e) => Object.assign(e.target.style, linktus)}
                >
                {props.menuElemani}
            </a>
        </li>
    );
}

export default NavList;