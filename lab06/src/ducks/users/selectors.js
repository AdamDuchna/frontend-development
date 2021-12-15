export const getOneUser = (state) => state.entities.user;

export const getAllUsers = (state) => {
    return state.entities.users.allIds.map(id => state.entities.users.byId[id]);
}