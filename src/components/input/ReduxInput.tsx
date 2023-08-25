import { useState } from "react";
import { useDispatch } from "react-redux";
import { ActionType } from "../../redux/action-type";

const ReduxInput = () => {
    let dispatch = useDispatch();

    let [num1, setNum1] = useState(0);
    let [num2, setNum2] = useState(0);

    function onButtonClicked(num1: number, num2: number) {
        debugger;
        dispatch({ type: ActionType.UserEnteredNumbers, payload: { num1, num2 } });
    }

    return (
        <div className="ReduxInput">
            <input type="number" onChange={(event) => setNum1(+event.target.value)} placeholder="Number 1" />
            <input type="number" onChange={(event) => setNum2(+event.target.value)} placeholder="Number 2" />
            <button onClick={() => onButtonClicked(num1, num2)}>Hit Me!</button>
        </div>
    );
}

export default ReduxInput;