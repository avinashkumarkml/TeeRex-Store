import { actionTypes } from "./action";
const initialState = {
  color: [],
  gender: [],
  price: [],
  type: [],
};
export const filterReducer = (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case actionTypes.COLOR: {
      let present = state?.color?.includes(payload);
      if (present) {
        let updateColor = state?.color?.filter(
          (colorName) => colorName !== payload
        );

        return {
          ...state,
          color: updateColor,
        };

      } else {
        return{
            ...state,
            color :[...state?.color, payload]
        }
      }
    }
    case actionTypes.GENDER: {
        let present = state?.gender?.includes(payload);
        if (present) {
          let updateGender = state?.gender?.filter(
            (genderName) => genderName !== payload
          );
  
          return {
            ...state,
            gender: updateGender,
          };
          
        } else {
          return{
              ...state,
              gender :[...state?.gender, payload]
          }
        }
    }
    case actionTypes.PRICE: {
        let present = state?.price?.includes(payload);
      if (present) {
        let updatePrice = state?.price?.filter(
          (price) => price !== payload
        );

        return {
          ...state,
          price: updatePrice
        };
        
      } else {
        return{
            ...state,
            price :[...state?.price, payload]
        }
      }
    }
    case actionTypes.TYPE: {
        let present = state?.type?.includes(payload);
        if (present) {
          let updateColor = state?.type?.filter(
            (type) => type !== payload
          );
  
          return {
            ...state,
            type: updateColor,
          };
          
        } else {
          return{
              ...state,
              type :[...state?.type, payload]
          }
        }
    }
    default: {
      return state;
    }
  }
};
