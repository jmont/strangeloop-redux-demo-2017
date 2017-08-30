import update from 'react-addons-update'

// ------------------------------------
// Constants
// ------------------------------------
export const LOAD_FAKE_TODO_LIST = 'LOAD_FAKE_TODO_LIST'

// ------------------------------------
// Actions
// ------------------------------------

const fakeTodoList = {
    title: 'My Todo List',
    todoItems: [
        { id: 1, task: 'Clean my apartment' },
    ],
}

export const loadFakeTodoList = () => {
    return (dispatch, getState) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                dispatch({
                    type: LOAD_FAKE_TODO_LIST,
                    payload: fakeTodoList,
                })
                resolve()
            }, 200)
        })
    }
}

export const actions = {
    loadFakeTodoList,
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
    [LOAD_FAKE_TODO_LIST]: (state, action) => update(state, {
        isLoading: { $set: false },
        title: { $set: action.payload.title },
        todoItems: { $set: action.payload.todoItems },
    }),
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
    isLoading: true,
    title: '',
    todoItems: [],
}

export default function counterReducer (state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type]
    return handler ? handler(state, action) : state
}
