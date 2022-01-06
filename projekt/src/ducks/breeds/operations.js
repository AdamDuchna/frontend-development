import { createAction } from "redux-api-middleware";
import { schema, normalize} from 'normalizr';
import types from "./types";

const breedSchema = new schema.Entity('breeds');
const breedsSchema = new schema.Array(breedSchema);

export const getCatBreedList = () => {
   return createAction({
       endpoint: 'https://api.thecatapi.com/v1/breeds',
       method: 'GET',
       headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'e1152019-b721-432a-a704-5c402ab5ea46'
       },
       types: [
           types.BREEDS_REQUEST,
           {
                type: types.BREEDS_SUCCESS,
                payload: async (action, state, res) => {
                    const json = await res.json();
                    const { entities } = normalize(json, breedsSchema)
                    return entities;
                },
                meta: { actionType: 'GET_ALL' }
           },
           types.BREEDS_FAILURE
       ]
   })
}

export const delCatBreed = (payload) => ({
    type: types.BREED_DELETE,
    payload: {'breeds':payload},
    meta: {actionType: 'DEL_ONE'}
});


