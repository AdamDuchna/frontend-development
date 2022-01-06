import { createAction } from "redux-api-middleware";
import { schema, normalize} from 'normalizr';
import types from "./types";

const imageSchema = new schema.Entity('images');
const imagesSchema = new schema.Array(imageSchema);
export const getCatImageList = (page,order,filetypes,category,searched) => {
    return createAction({
        endpoint: `https://api.thecatapi.com/v1/images/search?limit=19&page=${page}&order=${order}&mime_types=${filetypes.toString()}&category_ids=${category}&breed_ids=${searched}`,
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
                     const pagified = {...json,'20':{'id':'records','count':pages}}
                     const { entities } = normalize(pagified, imagesSchema)
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

