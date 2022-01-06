export const getAllCatImages = (state) => {
    return state.entities.images.allIds.map(id => state.entities.images.byId[id]);
}