import { createAction } from "redux-api-middleware";
import { schema, normalize} from 'normalizr';
import types from "./types";

const categorySchema = new schema.Entity('categories');
const categoriesSchema = new schema.Array(categorySchema);
export const getImageCategoriesList = () => {
    return createAction({
        endpoint: `https://api.thecatapi.com/v1/categories`,
        method: 'GET',
        headers: {
         'Content-Type': 'application/json',
         'x-api-key': 'e1152019-b721-432a-a704-5c402ab5ea46'
        },
        types: [
            types.CATEGORIES_REQUEST,
            {
                 type: types.CATEGORIES_SUCCESS,
                 payload: async (action, state, res) => {
                     const json = await res.json();
                     const { entities } = normalize(json,categoriesSchema)
                     return entities;
                 },
                 meta: { actionType: 'GET_ALL' }
            },
            types.CATEGORIES_FAILURE
        ]
    })
 }

