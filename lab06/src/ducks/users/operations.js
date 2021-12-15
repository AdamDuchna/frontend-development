import axios from "axios";
import * as actions from './actions';
import { createAction } from "redux-api-middleware";
import { schema, normalize} from 'normalizr';
import types from "./types";

const userSchema = new schema.Entity('users');
const singleUserSchema = new schema.Entity('user');
const usersSchema = new schema.Array(userSchema);

export const getUserList = () => {
   return createAction({
       endpoint: 'https://fakestoreapi.com/users',
       method: 'GET',
       headers: {
        'Content-Type': 'application/json'
       },
       types: [
           types.USER_LIST_REQUEST,
           {
                type: types.USER_LIST_SUCCESS,
                payload: async (action, state, res) => {
                    console.log('PAYLOAD', action, state, res);
                    const json = await res.json();
                    const { entities } = normalize(json, usersSchema)
                    return entities;
                },
                meta: { actionType: 'GET_ALL' }
           },
           types.USER_LIST_FAILURE
       ]
   })
}

export const getUser = (id) => {
    return createAction({
        endpoint: `https://fakestoreapi.com/users/${id}`,
        method: 'GET',
        headers: {
         'Content-Type': 'application/json'
        },
        types: [
            types.USER_REQUEST,
            {
                 type: types.USER_SUCCESS,
                 payload: async (action, state, res) => {
                     console.log('PAYLOAD', action, state, res);
                     const json = await res.json();
                     const { entities } = normalize(json, singleUserSchema)
                     return entities;
                 },
                 meta: { actionType: 'GET_ONE' }
            },
            types.USER_LIST_FAILURE
        ]
    })
 }

