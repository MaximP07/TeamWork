import { useSelector } from "react-redux";
import { AppState } from "../../redux/app-state";
 
const Addition = () =>{   
    let num1 = useSelector((state: AppState) => state.number1);
    let num2 = useSelector((state: AppState) => state.number2);

    let add = num1 + num2;

    return (
        <div className="Addition">
            <p>{add}</p>
        </div>
    );
}

export default Addition;