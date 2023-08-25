import { AppState } from "./app-state";
import { ActionType } from "./action-type";
import { Action } from "./action";

let appState = new AppState();

export function reduce(oldAppState: AppState = appState, action: Action): AppState {
    const newAppState = { ...oldAppState };

    switch (action.type) {
        case ActionType.UserEnteredNumbers:
            let userNum1 = action.payload.num1;
            let userNum2 = action.payload.num2;

            newAppState.number1 = userNum1;
            newAppState.number2 = userNum2;
            break;
    }

    return newAppState;
}