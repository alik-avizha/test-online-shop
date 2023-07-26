import {AppRootType} from '../../app/store';

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('goods-basket');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

export const saveState = (state: AppRootType) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('goods-basket', serializedState);
    } catch {
        // ignore write errors
    }
};