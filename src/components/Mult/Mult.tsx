import { useSelector } from "react-redux";
import { AppState } from "../../redux/app-state";
 
const Multiply = () =>{   
    let num1 = useSelector((state: AppState) => state.number1);
    let num2 = useSelector((state: AppState) => state.number2);

    let mult = num1 * num2;

    return (
        <div className="Multiplication">
            <p>{mult}</p>
        </div>
    );
}

export default Multiply;