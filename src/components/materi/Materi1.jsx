import React, { useState } from "react";
import { toast } from "react-toastify";
function Materi1() {

    const [message, setMessage] = useState("Invalid");
    const [message2, setMessage2] = useState("");
    const [isEnable, setIsEnable] = useState(false);

    const notify = (event) => {
        toast.success("Berhasil Ke Submit!!", {
            position: toast.POSITION.TOP_RIGHT,
            theme: "dark",
        });
    };

    const textChangeHandler = (event) => {
        console.log(event);
        if (event.target.value.trim().length < 3) {
            setMessage("Invalid");
        } else {
            setMessage("Valid");
        }
    };

    const textDisableHandler = (event) => {
        console.log(event);
        if (event.target.value.trim().length < 1) {
            setIsEnable(false);
        } else {
            setIsEnable(true);
        }
    };

    return (
        <div className="p-5">

            <h1 className="mb-2">Berfokus pada penggunaan UseState</h1>

            
            <div className="d-flex justify-content-start align-items-center mb-3">
                <div className="col-md-6">
                    <label htmlFor="Input" className="d-block text-start">
                        Your message
                    </label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="Input"
                        placeholder="Inputkan 3 kata"
                        onChange={textChangeHandler} 
                    />
                </div>
                <div className="col-md-6 d-flex justify-content-start">
                    <p className="text-start mt-4 ms-3">{message} message</p>
                </div>
            </div>

            <div className="d-flex justify-content-start align-items-center mb-3">
                <div className="col-md-6">
                    <label htmlFor="Input3" className="d-block text-start">
                        Your message
                    </label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="Input3"
                        placeholder="kata yang diketikan akan di kirim kesamping"
                        value={message2}
                        onChange={(e) => setMessage2(e.target.value)}
                    />
                </div>
                <div className="col-md-6 d-flex justify-content-start">
                    <p className="text-start mt-4 ms-3">kata yang simpan : {message2}</p>
                </div>
            </div>

            <div className="d-flex justify-content-start align-items-center mb-3">
                <div className="col-md-6">
                    <label htmlFor="Input2" className="d-block text-start">
                        Your message
                    </label>
                    <input 
                        type="text" 
                        placeholder="jika tidak diisi maka button akan disable"
                        className="form-control" 
                        id="Input2"
                        onChange={textDisableHandler} 
                    />
                </div>
                <div className="col-md-6 d-flex justify-content-start">
                    <button 
                        className="btn btn-primary ms-3 mt-4"
                        onClick={notify}
                        disabled={!isEnable}
                    >
                        Submit
                    </button>
                </div>
            </div>
            
        </div>
    );
} 

export default Materi1;