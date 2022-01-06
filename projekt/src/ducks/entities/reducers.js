const allEntities = [
    "breeds",
    "images",
    "categories",
];
const defaultState = allEntities.reduce(
    (acc, entity) => ({
        ...acc,
        [entity]: {
            byId: {},
            allIds: [],
            pages: 0
        }
    }), {}
);

const entityReducer = (entity, state = { allIds: [], byId: {} }, action) => {
    const actionEntities = action.payload[entity];
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
        case "DEL_ONE":      
            return {byId:Object.fromEntries(Object.entries(state.byId).filter(([k,v]) => k!==actionEntities)),allIds:state.allIds.slice(0).filter(id => id !== actionEntities)}
        case "UPDATE_ONE": 
            return {
                ...state,
                byId:{
                    ...state.byId,
                    'actionEntities':{actionEntities}
                }
            }
        default:
            return state;
    }
}


export const entities = (state = defaultState, action) => {
    if(!action.meta || !action.meta.actionType) return state;
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

