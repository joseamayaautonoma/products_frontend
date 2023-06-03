import { useState } from "react"
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

export const ProductForm = () => {
    const navigate = useNavigate();

    const [productForm, setProductForm] = useState({
        name: '',
        price: '',
        description: ''
    });

    const handleInputChange = ( event ) => {
        const { name, value } = event.target;

        setProductForm({
            ...productForm,
            [name]: value
        })
    }

    const handleSubmit = async ( event ) => {
        event.preventDefault();
        if ( !productForm.name.trim() || !productForm.price.trim() || !productForm.description.trim() ) return;

        try {
            const response = await fetch('http://localhost:3500/products', {
                method: 'POST',
                headers: {
                    'Content-Type': "application/json",
                    'Accept': 'application/json'
                },
                body: JSON.stringify( productForm )
            });
            const data = await response.json();

            toast.success( data.message ?? 'Producto creado con éxito');
            return navigate('/products');

        } catch (error) {
            console.log( error );
        }


    }

    return (
        <div className="row m-5">
            <form onSubmit={ handleSubmit }>
                <div className="mb-3">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Nombre"
                        value={ productForm.name }
                        name="name"
                        onChange={ handleInputChange }
                    />
                </div>
                <div className="mb-3">
                    <input 
                        type="number" 
                        className="form-control" 
                        placeholder="Precio"
                        value={ productForm.price }
                        name="price"
                        onChange={ handleInputChange }
                    />
                </div>
                <div className="mb-3">
                    <textarea 
                        placeholder="Descripción" 
                        className="form-control"
                        value={ productForm.description }
                        name="description"
                        onChange={ handleInputChange }
                    ></textarea>
                </div>

                <button type="submit" className="btn btn-primary d-block ms-auto">
                    Crear producto
                </button>
            </form>
        </div>
    )
}
