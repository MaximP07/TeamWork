import { useSelector } from "react-redux";
import { AppState } from "../../redux/app-state";
 
const Division = () =>{   
    let num1 = useSelector((state: AppState) => state.number1);
    let num2 = useSelector((state: AppState) => state.number2);

    function divide(num1: number, num2: number) {
        if (num2 === 0) {
            return "Can't divide by 0";
        }
        return num1 / num2;
    }
    let reasult = divide(num1, num2);

    return (
        <div className="Division">
            
            <p>{reasult}</p>
        </div>
    );
}

export default Division;