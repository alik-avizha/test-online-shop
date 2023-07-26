import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {get, push, ref, set} from 'firebase/database';
import {createAppAsyncThunk} from '../common/utils/create-async-thunk';
import {db} from '../common/api/api';

export type GoodsType = {
    id: string
    title: string
    price: number
    inCart: number
    description: string
}
export type DataType = {
    email: string,
    surname: string,
    phone: string,
    address: string,
    goods: GoodsType[]
}

const slice = createSlice({
    name: 'todolists',
    initialState: [] as GoodsType[],
    reducers: {
        addGoogsInBasket: (state, action: PayloadAction<{ goodsId: string }>) => {
            const index = state.findIndex((tl) => tl.id === action.payload.goodsId);
            if (index > -1) state[index].inCart += 1;
        },
        deleteGoods: (state, action: PayloadAction<{ goodsId: string }>) => {
            const index = state.findIndex((tl) => tl.id === action.payload.goodsId);
            if (index > -1) state[index].inCart -= 1;
        },
        clearBasket: (state) => {
            return state.map(el => ({...el, inCart: 0}))
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchGoods.fulfilled, (state, action) => {
                return action.payload.goods;
            })
    },
});

const fetchGoods = createAppAsyncThunk<{ goods: GoodsType[] }>(
    'goods/fetchGoods',
    async () => {
        const amandaRef = ref(db, 'goods');
        const snapshot = await get(amandaRef);
        if (snapshot.exists() && snapshot) {
            return {goods: snapshot.val()};
        } else {
            console.log('Данные не найдены');
            return {goods: []};
        }
    }
);
const sendData = createAppAsyncThunk<void, { data: DataType }>(
    'goods/sendData',
    async (arg, thunkAPI) => {
        debugger
        const {email, surname, phone, address, goods} = arg.data;
        const order: DataType = {
            email,
            surname,
            phone,
            address,
            goods
        };
        try {
            const ordersRef = ref(db, 'orders');
            const newOrderRef = push(ordersRef);
            set(newOrderRef, order);
            thunkAPI.dispatch(goodsActions.clearBasket())
            console.log('Заказ успешно отправлен в Firebase!');
        } catch (error) {
            console.error('Ошибка при отправке заказа:', error);
        }
    }
);

export const goodsSlice = slice.reducer;
export const goodsActions = slice.actions;
export const goodsThunks = {fetchGoods, sendData};

