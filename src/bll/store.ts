import {combineReducers, configureStore, ThunkDispatch} from '@reduxjs/toolkit';
import {goodsSlice} from './goods-slice';
import {loadState, saveState} from './local-storage-utils';
import {useDispatch} from 'react-redux';


const rootReducer = combineReducers({
    goods: goodsSlice,
});

export const store = configureStore({
    reducer: rootReducer,
    preloadedState: loadState()
});

store.subscribe(()=>{
    saveState({
        goods: store.getState().goods
    })
})

export type AppRootType = ReturnType<typeof rootReducer>;

export type AllAction = any;

export type AppDispatchType = ThunkDispatch<AppRootType, any, AllAction>;

export const useAppDispatch = () => useDispatch<AppDispatchType>();
// @ts-ignore
window.store = store;
