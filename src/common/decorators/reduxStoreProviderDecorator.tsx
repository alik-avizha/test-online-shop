import React from 'react';
import {Provider} from 'react-redux';
import {combineReducers} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import {goodsSlice} from '../../app/goods-slice';
import {AppRootType} from '../../app/store';
import {BrowserRouter} from 'react-router-dom';

const rootReducer = combineReducers({
    goods: goodsSlice,
});

const initialGlobalState: AppRootType = {
    goods: [
        {id: '1', inCart: 0, price: 100, title: 'Milk', description: 'Описание'},
        {id: '2', inCart: 0, price: 100, title: 'Milk', description: 'Описание'},
        {id: '3', inCart: 3, price: 100, title: 'Milk', description: 'Описание'},
        {id: '4', inCart: 0, price: 100, title: 'Milk', description: 'Описание'},
    ]
};

export const storyBookStore = configureStore({
    reducer: rootReducer,
    preloadedState: initialGlobalState,
});

export const ReduxStoreProviderDecorator = (storyFn: () => React.ReactNode) => {
    return <Provider store={storyBookStore}><BrowserRouter>{storyFn()}</BrowserRouter></Provider>;
};
