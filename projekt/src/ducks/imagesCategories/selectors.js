export const getAllImagesCategories = (state) => {
    return state.entities.categories.allIds.map(id => state.entities.categories.byId[id]);
}

