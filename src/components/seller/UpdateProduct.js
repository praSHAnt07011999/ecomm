import { useDispatch  } from "react-redux";
import { useState } from "react";
import { updateProduct } from "../../redux/actions/productsActions";
import { useLocation, useNavigate } from "react-router-dom";
import './UpdateProduct.css';

export const UpdateProduct = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const { item } = location.state;

    const [ title, setTitle ] = useState(item.title);
    const [ description, setDescription ] = useState(item.description);
    const [ price, setPrice ] = useState(item.price);
    const [ rating, setRating ] = useState(item.rating);
    const [ selectedFile, setSelectedFile ] = useState(item.image);

    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        if(!title || !description || !price || !rating) {
            alert('Please provide required fields');
        }
        else {
            event.preventDefault();
            const updatedProduct = {
                id: item.id,
                title:title,
                description:description,
                price:price,
                rating:rating,
                image: selectedFile
            };
            dispatch(updateProduct(updatedProduct));
            setTitle('');
            setDescription('');
            setPrice('');
            setRating('');
            setSelectedFile('');
            navigate('/sellerHome');
        }
    }

    return (
        <div className="form-container">
            <h3 className="form-heading">Update Details</h3>
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
