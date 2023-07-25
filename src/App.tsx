import React, {useEffect} from 'react';
import {Header} from './components/features/Header/Header';
import {Route, Routes} from 'react-router-dom';
import {Basket} from './components/features/Goods-List/Basket';
import {GoodsList} from './components/features/Goods-List/Goods-list';
import {goodsThunks} from './bll/goods-slice';


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


