export const actionTypes={
    "COLOR":"COLOR",
    "GENDER" :"GENDER",
    "PRICE":"PRICE",
    "TYPE":"TYPE"
}


// ACTIONS
export const updatecolor=(data)=>{
    return{
        type:actionTypes.COLOR,
        payload:data
    }
}
export const updategender=(data)=>{
    return{
        type:actionTypes.GENDER,
        payload:data
    }
}
export const updateprice=(data)=>{
    return{
        type:actionTypes.PRICE,
        payload:data
    }
}
export const updatetype=(data)=>{
    return{
        type:actionTypes.TYPE,
        payload:data
    }
}