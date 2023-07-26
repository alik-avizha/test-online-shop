import React, {useEffect} from 'react';
import {Route, Routes} from 'react-router-dom';
import {Basket} from '../components/features/basket/Basket';
import {GoodsList} from '../components/features/goods-list/goods-list';
import {goodsThunks} from './goods-slice';
import {Header} from '../components/features/header/Header';


function App() {

    useEffect(() => {
        goodsThunks.fetchGoods()
    }, [])

    return (
        <div>
            <Header/>
            <Routes>
                <Route path="/" element={<GoodsList/>}/>
                <Route path="/basket" element={<Basket/>}/>
            </Routes>
        </div>
    );
}

export default App;


