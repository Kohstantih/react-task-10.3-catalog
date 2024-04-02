import {
    ADD_GOOD
} from "./actionTypes";

import { TObjectGood } from "../../types/TObjectGood";

export function addGoods(obj: TObjectGood) {
    return { type: ADD_GOOD, payload: obj }
}
