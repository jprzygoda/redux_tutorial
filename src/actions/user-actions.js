import $ from 'jquery';

export const UPDATE_USER='users: updateUser';
export const SHOW_ERROR='users: showError'

export function updateUser(newUser){
    return{
        type: API_USER_SUCCESS,
        payload: {
            user: newUser
        }
    }
}

export function showError() {
    return {
        type: AIP_REQUEST_ERROR,
        payload: {
            user: 'ERROR'}
    }
}

export function onRequest(){
    return
}

export function apiRequest(){
    return dispatch => {
        dispatch(requestMade());
        $.ajax({
            url: 'http://google.com',
            success(response){
                console.log('SUCCESS');
                dispatch(updateUser(response.newUser));
            },
            error(){
                console.log('ERROR');
                dispatch(showError());
            }
        });
    }
}
