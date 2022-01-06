import { createAction } from "redux-api-middleware";
import { schema, normalize} from 'normalizr';
import types from "./types";

const imageSchema = new schema.Entity('images');
const imagesSchema = new schema.Array(imageSchema);
export const getCatImageList = (page,order) => {
    return createAction({
        endpoint: `https://api.thecatapi.com/v1/images/search?limit=100&page=${page}&order=${order}`,
        method: 'GET',
        headers: {
         'Content-Type': 'application/json',
         'x-api-key': 'e1152019-b721-432a-a704-5c402ab5ea46'
        },
        types: [
            types.IMAGES_REQUEST,
            {
                 type: types.IMAGES_SUCCESS,
                 payload: async (action, state, res) => {
                     const json = await res.json();
                     const pages = res.headers.get("Pagination-Count")
                     const { entities } = normalize(json, imagesSchema)
                     return entities;
                 },
                 meta: { actionType: 'GET_ALL' }
            },
            types.IMAGES_FAILURE
        ]
    })
 }

 export const delCatImage = (payload) => ({
    type: types.IMAGE_DELETE,
    payload: {'images':payload},
    meta: {actionType: 'DEL_ONE'}
});
