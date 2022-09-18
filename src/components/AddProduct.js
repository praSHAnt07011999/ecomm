import { addProduct } from "../redux/reducers/addProductSlice";
import { useDispatch  } from "react-redux";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import './addProduct.css';

const AddProduct = () => {

    const [ title, setTitle ] = useState('');
    const [ description, setDescription ] = useState('');
    const [ price, setPrice ] = useState('');
    const [ rating, setRating ] = useState('');
    const [ selectedFile, setSelectedFile ] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        if(!title || !description || !price || !rating) {
            alert('Please provide required fields');
        }
        else {
            event.preventDefault();
            const productId = uuidv4();
            const newProduct = {
                id:productId,
                title:title,
                description:description,
                price:price,
                rating:rating,
                image: selectedFile,
                addedToCart: false
            };
            dispatch(addProduct(newProduct));
            setTitle('');
            setDescription('');
            setPrice('');
            setRating('');
        }
    }

    return (
        <div className="form-container">
            <h3 className="form-heading">Product Details</h3>
            <form onSubmit={handleSubmit} className="add-product-form">
            <label className="title-label">Title:
                <input
                type="text"
                name="title"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
            />
            </label>
            <label className="description-label">Description:
                <input
                type="text"
                name="description"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
            />
            </label>
            <label className="price-label">Price:
                <input
                type="number"
                name="price"
                value={price}
                onChange={(event) => setPrice(event.target.value)}
            />
            </label>
            <label className="rating-label">Rating:
                <input
                type="number"
                name="rating"
                value={rating}
                onChange={(event) => setRating(event.target.value)}
            />
            </label>
             <label className="image-label">Image:
                <input
                type="file"
                name="img"
                onChange={(event) => setSelectedFile(URL.createObjectURL(event.target.files[0]))}
            />
            </label>
                <input type="submit" className="submit-button" />
            </form>
        </div>
    )
}

export default AddProduct