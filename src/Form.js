import { useState } from 'react';

function Form(){

    const [input, setInput] = useState("");


    const degistiginde = (event) => {

        const input_name = event.target.name; 
        const input_value = event.target.value; 

        setInput(values => ({...values, [input_name]: input_value }))
                                                //isim: Mert

    }

    const submitFonk = function(event) {
        event.preventDefault();

        console.log(input);

    }


    return (
        <>
        <form onSubmit={submitFonk}>
            <div className="row justify-content-center">
                <div className="col-4" name="FORM_SUTUN">
                    <div className="row">
                        <div className="col-6">
                            <label className="col-form-label">İsmini Gir:</label>
                                <input className="form-control"
                                    type="text"
                                    name="isim"
                                    value={input.isim || ""}
                                    onChange={degistiginde}/>
                        </div>
                        <div className="col-6">
                            <label className="col-form-label">Yaşını Gir:</label>
                                <input className="form-control"
                                    type="number"
                                    name="yas"
                                    value={input.yas || ""}
                                    onChange={degistiginde}
                                    />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <label className="col-form-label">Başvuru Amacı:</label>
                                <textarea className="form-control"
                                    name="amac"
                                    value={input.amac || ""}
                                    onChange={degistiginde}
                                />
                        </div>
                    </div>
                    <div className="row py-4">
                        <div className="col-6">
                            <label className="col-form-label">Burs İsteği</label>
                        </div>
                        <div className="col-6">
                            <select className="form-select"
                                name="burs"
                                value={input.burs || ""}
                                onChange={degistiginde}
                            >
                                <option value="0">
                                    Burs İstemiyorum
                                </option>
                                <option value="1">
                                    Burs İstiyorum
                                </option>
                            </select>
                        </div>         
                    </div> 
                    <div className="row text-end justify-content-end">
                        <div className="col-4">
                            <input className="btn btn-primary" type="submit"/>
                        </div>
                    </div>   
                </div>            
            </div>
            
            
        </form>
        </>
    );
}
export default Form;