import './MyApp.css';
import { Counter } from './components/Counter';
import { NavBar } from './components/NavBar';
import { Product } from './components/Product';
import { Profile } from './components/Profile';


const products = ['Mango', 'Manzana', 'Piña', 'Pera', 'Uva'];


export const MyApp = () => {
    const user = {
        name: 'José amaya',
        age: 24,
        email: 'jose.amayac@autonoma.edu.co',
        photo: 'https://img.freepik.com/free-icon/user_318-159711.jpg'
    } 

    const handleClick = ( productName ) => {
        const position = products.indexOf( productName );
        console.log( position );
    }

    return ( 
        <div className="container" >
            <NavBar />
            <div className="row">
                <div className="col-md-5">
                    <Profile user={ user } />
                </div>
                <div className="col-md-7">
                    <Counter initialValue={ 5 } factor={ 1 } />
                    <hr />
                    <div className="row">
                        {
                            products.map(( productName ) => (
                                <div className="col-md-4" key={ productName }>
                                    <Product product={ productName } click={ handleClick } />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}