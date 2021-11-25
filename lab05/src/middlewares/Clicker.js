const clicker = store => next => action => {
    if(action == "INCREMENT"){console.log('Incremented');}
    if(action == "DECREMENT"){console.log('Decremented');}
    return next(action);

}

export default clicker;