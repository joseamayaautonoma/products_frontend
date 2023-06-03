import { useState } from "react"

export const Counter = ({ initialValue = 0, factor = 1 }) => {
    const [ counter, setCounter ] = useState( initialValue );

    const add = () => {
        setCounter( counter + factor );
    }

    const substract = () => {
        setCounter(( val ) => val - factor );
        if ( counter - factor < 0) {
            setCounter( 0 );
        }
    }

    const reset = () => {
        setCounter( initialValue );
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h2>Valor del contador</h2>
                    <h1>{ counter }</h1>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-md-4 text-center">
                    <button 
                        className="btn btn-primary"
                        onClick={ add }
                    >+</button>
                </div>
                <div className="col-md-4 text-center">
                    <button 
                        className="btn btn-secondary"
                        onClick={ reset }
                    >Reset</button>
                </div>
                <div className="col-md-4 text-center">
                    <button 
                        className="btn btn-warning"
                        onClick={ substract }
                    >-</button>
                </div>
            </div>
        </div>
    );
}