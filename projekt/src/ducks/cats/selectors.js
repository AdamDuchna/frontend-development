export const getAllCatBreeds = (state) => {
    return state.entities.cats.allIds.map(id => state.entities.cats.byId[id]);
}