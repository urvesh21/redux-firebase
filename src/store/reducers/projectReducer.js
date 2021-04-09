const initState = {
    projects: [
        { id: '1', title: 'Title 1', content: 'content 1' },
        { id: '2', title: 'Title 2', content: 'content 2' },
        { id: '3', title: 'Title 3', content: 'content 3' },
    ]
};

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('Created Project ', action.project);
            return { ...state };
        case 'CREATE_PROJECT_ERROR':
            console.log('Err;r: ', action.err);
            return { ...state };
        default:
            return { ...state };
    }
}

export default projectReducer;