import dayjs from 'dayjs'

export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call to database
        const firestore = getFirestore();　
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        firestore.collection('projects').add({
            ...project,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            createdAt: dayjs(new Date()).format('YYYY-MM-DD HH:mm:ss')
        }).then(() => {
            dispatch({ type: 'CREATE_PROJECT', project})
        }).catch((err) => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', err })
        })

    }
};