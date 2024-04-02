import { ADD_GOOD } from "../actions/actionTypes";

import { TObjectGood } from "../../types/TObjectGood";

const initialState: TObjectGood[] = [];

export default function GoodsReducer(state = initialState, action: {type: string, payload: TObjectGood}) {
    switch (action.type) {
        case ADD_GOOD:
            return state = [...state, action.payload];
    
        default: 
            return state;
    }
}
