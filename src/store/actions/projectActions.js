export const createProject = (project) => {
    return (dispatch, getState, getFirebase) => {
        // make async call to db
        const firestore = getFirebase().firestore();
        const profile = getState().firebase.profile;
        const autherId = getState().firebase.auth.uid;
        firestore.collection('projects').add({
            ...project,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: autherId,
            createdAt: new Date()
        }).then(() => {
            console.log('added');
            dispatch({ type: 'CREATE_PROJECT', project });
        }).catch((err) => {
            console.log('Err: ', err);
            dispatch({ type: 'CREATE_PROJECT_ERROR', err });
        })
    }
}