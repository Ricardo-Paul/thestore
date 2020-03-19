import { ActionTypes } from "./Types";

export const ShopReducer = (storedata, action) => {
    switch(action.type){
        case ActionTypes.DATA_LOAD:
            return {
                ...storedata,
                [action.payload.dataType]: action.payload.data
            };
        default:
            return storedata || {};
    }
}

// actionTypes.DATA_LOAD is "data_load"
// the payload of this this "data_load" is

// payload{
//     dataType: "products/categories",
//     data: phData[products/category]
// }

// [action.payload.dataType]


// the reducer is used to create the store