function Details(props){
 

    return (
        <>
        <div style={{
            position: 'fixed',
            top: '60%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '33%',
            border: '1px solid black',
            padding: '20px'
        }}>
        <img src={props.resim}
            style={{
                height: '50%', 
                width: '50%', 
                display: 'block', 
                margin: '0 auto'
            }} />
        <p>{props.aciklama}</p>
        </div>
        </>
    );
}
export default Details;