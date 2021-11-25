const logger = store => next => action => {
    console.log('Dispatching action', action);
    console.log('State before', store.getState());
    console.log('State after', store.getState());
    return next(action);
}

export default logger;