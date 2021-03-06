const defaultState={}
defaultState["users"]={"byId": {},"allIds": []}

defaultState["user"]={}

const entityReducer = (entity, state = {}, action) => {
    console.log('Before', entity, state, action);
    const actionEntities = action.payload[entity];
    console.log('Entity', actionEntities);
    const { actionType } = action.meta;

    switch(actionType) {
        case 'GET_ALL':
            return {
                byId: {
                    ...Object.keys(actionEntities).reduce(
                        (acc, id) => ({
                            ...acc,
                            [id]: {
                                ...state.byId[id],
                                ...actionEntities[id]
                            }
                        })
                    , {}),
                },
                allIds: Object.keys(actionEntities)
            }
        case 'GET_ONE':
            return actionEntities[Object.keys(actionEntities)[0]]  
        default:
            return state;
    }
}


export const entities = (state = defaultState, action) => {
    if(!action.meta || !action.meta.actionType) return state;

    console.log(action);
    return {
        ...state,
        ...Object.keys(action.payload).reduce(
            (acc, entity) => ({
                ...acc,
                [entity]: entityReducer(entity, state[entity], action)
            }), {}
        ),
    }
}

