import { data as phData } from "./placeholderData";
import { ActionTypes } from "./Types"

export const loadData = (dataType) => ({
        type: ActionTypes.DATA_LOAD,
        payload: {
            dataType: dataType,
            data: phData[dataType]
        }
})