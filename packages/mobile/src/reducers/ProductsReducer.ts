import { Cart, ProductCart } from "../types/entities";

export enum  typeAction{
    CART_INITIAL= 'CART_INITIAL',
    CART_SAVE='CART_SAVE',
    CART_ADD='CART_ADD',
    CART_REMOVE='CART_REMOVE'
}

export type ActionCart={
    payload : ProductCart | ProductCart["id"],
    type: typeAction
}


export function CartReducers(state: Cart, action: ActionCart): Cart {
        switch (action.type) {
          case typeAction.CART_INITIAL:
                 return {};
          case typeAction.CART_ADD:
                if(action.payload instanceof Object)
                  return {...state, [action.payload.id] : action.payload };
          case typeAction.CART_SAVE:
            if(action.payload instanceof Object)
                return {
                          ...state,
                          [action.payload.id] : action.payload
                      }
          case typeAction.CART_REMOVE:
            if(typeof action.payload === "number"){
              const { [action.payload] : deleteValue, ...newValue  } =  state
              return newValue
            }
          default:
            return state;
        }
 }
      