import { createAction } from "redux-api-middleware";
import { schema, normalize} from 'normalizr';
import types from "./types";

const imageSchema = new schema.Entity('images');
const imagesSchema = new schema.Array(imageSchema);
export const getCatImageList = (page,order,filetypes,category,searched) => {
    return createAction({
        endpoint: `https://api.thecatapi.com/v1/images/search?limit=100&page=81&order=asc`,
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

export const addCatImage = (payload) => {
    const {entities} = normalize(payload, imageSchema)
    return {type: types.IMAGE_ADD,
    payload: entities,
    meta: {actionType: 'ADD_ONE'}}
    };

export const updateCatImage = (payload) => {
    const {entities} = normalize(payload, imageSchema)
    return{type: types.IMAGE_UPDATE,
    payload: entities,
    meta: {actionType: 'UPDATE_ONE'}
}};
