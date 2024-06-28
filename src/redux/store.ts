import {
    Action,
    ListenerEffectAPI,
    ThunkAction,
    TypedAddListener,
    TypedStartListening,
    configureStore,
    createListenerMiddleware
} from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"
import photoViewerSlice from "../features/photoViewerSlice"

export type AppAddListener = TypedAddListener<RootState, AppDispatch>

const listenerMiddlewareInstance = createListenerMiddleware({
    onError: () => console.error
})

export type AppDispatch = typeof store.dispatch

export type AppListenerEffectAPI = ListenerEffectAPI<RootState, AppDispatch>
export type AppStartListening = TypedStartListening<RootState, AppDispatch>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>

export type RootState = ReturnType<typeof store.getState>

export const startAppListening = listenerMiddlewareInstance.startListening as AppStartListening
export const store = configureStore({
    reducer: {
        photoViewerSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            thunk: {
                extraArgument: null
            },
            serializableCheck: false
        }).prepend(listenerMiddlewareInstance.middleware)
})

setupListeners(store.dispatch)
export default store
