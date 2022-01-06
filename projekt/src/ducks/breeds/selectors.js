export const getAllCatBreeds = (state) => {
    return state.entities.breeds.allIds.map(id => state.entities.breeds.byId[id]);
}