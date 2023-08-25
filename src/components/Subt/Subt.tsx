
import { useSelector } from "react-redux";
import { AppState } from "../../redux/app-state";
 
const Subtract = () =>{   
    let num1 = useSelector((state: AppState) => state.number1);
    let num2 = useSelector((state: AppState) => state.number2);

    let subt = num1 - num2;

    return (
        <div className="Subtraction">
            <p>{subt}</p>
        </div>
    );
}

export default Subtract;