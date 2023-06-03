import { useRouteError } from "react-router-dom"

export const ErrorPage = () => {
    const error = useRouteError();
    console.log( error );
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-10 mx-auto text-center">
                    <h1>Ooops!</h1>
                    <p>Ocurrió un error fatal</p>
                    {
                        (error.status === 404) && <p>Estás perdido</p>
                    }
                </div>
            </div>
        </div>
    )
}
