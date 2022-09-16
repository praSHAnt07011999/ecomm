import { addProduct } from "../redux/reducers/addProductSlice";
import { useDispatch  } from "react-redux";
import Bicycle from '../resources/images/bicycle.jpg'

const AddProduct = () => {

    const dispatch = useDispatch();
    return (
        <div>
            <button onClick={ ()=> dispatch(addProduct({
                id: '1',
                title: 'cycle',
                source: { Bicycle },
                description: 'Rockrider ST10',
                price: 8999,
                rating: 4.7
            }))}>Add Product</button>
        </div>
    )
}

export default AddProduct