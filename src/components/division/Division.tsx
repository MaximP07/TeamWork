import { useSelector } from "react-redux";
import { AppState } from "../../redux/app-state";
 
const Division = () =>{   
    let num1 = useSelector((state: AppState) => state.number1);
    let num2 = useSelector((state: AppState) => state.number2);

    let divide = num1 / num2;

    return (
        <div className="Division">
            <MathOperation operation="Division"/>
            <p>{divide}</p>
        </div>
    );
}

export default Division;