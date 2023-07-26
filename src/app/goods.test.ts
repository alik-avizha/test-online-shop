import {goodsActions, goodsSlice, GoodsType} from './goods-slice';

describe('goodsSlice reducer', () => {
    let initialState: GoodsType[];

    beforeEach(() => {
        initialState = [
            {id: '1', inCart: 0, price: 100, title: 'Milk', description: 'Описание'},
            {id: '2', inCart: 0, price: 100, title: 'Milk', description: 'Описание'},
            {id: '3', inCart: 3, price: 100, title: 'Milk', description: 'Описание'},
            {id: '4', inCart: 0, price: 100, title: 'Milk', description: 'Описание'},
        ];
    });

    it('should add goods to the cart', () => {
        const endstate = goodsSlice(initialState, goodsActions.addGoogsInBasket({ goodsId: '1' }));

        expect(endstate[0].inCart).toEqual(1);
    });
    it('should deleted goods from the cart', () => {
        const endstate = goodsSlice(initialState, goodsActions.deleteGoods({ goodsId: '3' }));

        expect(endstate[2].inCart).toEqual(2);
    });
    it('should be 0 count in basket', () => {
        const endstate = goodsSlice(initialState, goodsActions.clearBasket());

        expect(endstate[2].inCart).toEqual(0);
    });
});
