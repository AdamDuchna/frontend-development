import axios from "axios";
import * as actions from './actions';
import { createAction } from "redux-api-middleware";
import { schema, normalize} from 'normalizr';
import types from "./types";

const catSchema = new schema.Entity('cats');
const catsSchema = new schema.Array(catSchema);

export const getCatBreedList = () => {
   return createAction({
       endpoint: 'https://api.thecatapi.com/v1/breeds',
       method: 'GET',
       headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'e1152019-b721-432a-a704-5c402ab5ea46'
       },
       types: [
           types.CAT_LIST_REQUEST,
           {
                type: types.CAT_LIST_SUCCESS,
                payload: async (action, state, res) => {
                    console.log('PAYLOAD', action, state, res);
                    const json = await res.json();
                    const { entities } = normalize(json, catsSchema)
                    console.log(entities)
                    return entities;
                },
                meta: { actionType: 'GET_ALL' }
           },
           types.CAT_LIST_FAILURE
       ]
   })
}



