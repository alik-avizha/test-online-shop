import React, {ChangeEvent, useState} from 'react';
import {useSelector} from 'react-redux';
import {goodsSelect} from '../../../app/selectors';
import styled from 'styled-components';
import {goodsActions, goodsThunks} from '../../../app/goods-slice';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import {useAppDispatch} from '../../../app/store';


export const Basket = () => {

    const addedGoods = useSelector(goodsSelect).filter(el => el.inCart)
    const sum = addedGoods.reduce((acc, el) => acc + el.price * el.inCart, 0)
    const [data, setData] = useState({
        email: '',
        surname: '',
        address: '',
        phone: '',
        goods: addedGoods
    })
    const dispatch = useAppDispatch()

    const addGoodHandler = (id: string) => {
        dispatch(goodsActions.addGoogsInBasket({goodsId: id}))
    }
    const deleteGoodHandler = (id: string) => {
        dispatch(goodsActions.deleteGoods({goodsId: id}))
    }

    const disableSendButton = !(data.email && data.surname && data.address && data.phone) && data.goods.length > 0
    function onChangeHandler({target: {value, id}}: ChangeEvent<HTMLInputElement>) {
        setData({
            ...data,
            [id]: value
        })    }

    const sendData = () => {
        dispatch(goodsThunks.sendData({data: data})).then(()=>{
            setData({
                email: '',
                surname: '',
                address: '',
                phone: '',
                goods: data.goods
            })
        })
    };

    return (
        <Wrapper>
            <CardWrapper>
                <CardsBlock>
                    {addedGoods.map(el => {
                        return (
                            <Paper elevation={6}>
                            <Card key={el.id}>
                                <PhotoWrapper>
                                    <span>Photo</span>
                                </PhotoWrapper>
                                <Description>
                                    <span>{el.title}</span>
                                    <span>{el.description}</span>
                                    <span>{el.price}</span>
                                </Description>
                                <AddGoodsWrapper>
                                    <Button variant="contained" onClick={() => deleteGoodHandler(el.id)}>-</Button>
                                    <Typography variant="h4">
                                        {el.inCart}
                                    </Typography>
                                    <Button variant="contained" onClick={() => addGoodHandler(el.id)}>+</Button>
                                </AddGoodsWrapper>
                            </Card>
                            </Paper>
                        )
                    })}
                </CardsBlock>
                <Paper elevation={3}>
                    <OrderWrapper>
                        <TextField value={data.email} label="Email" variant="standard" id={'email'} onChange={onChangeHandler}/>
                        <TextField value={data.surname} label="Surname" variant="standard" id={'surname'} onChange={onChangeHandler}/>
                        <TextField value={data.address} label="Address" variant="standard" id={'address'} onChange={onChangeHandler}/>
                        <TextField value={data.phone} label="Phone" variant="standard" id={'phone'} onChange={onChangeHandler}/>
                        <TextField disabled={disableSendButton} variant="outlined" type={'submit'} onClick={sendData}/>
                    </OrderWrapper>
                </Paper>
            </CardWrapper>
            <Typography variant="h4">
                Total: {sum}$
            </Typography>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`
const CardWrapper = styled.div`
  display: flex;
  gap: 40px;
`
const CardsBlock = styled.div`
  height: 70vh;
  width: 40vw;
  
  overflow-y: auto;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 20px;
`
const Card = styled.div`
  display: flex;
  border: 1px solid black;
  gap: 40px;
`
const PhotoWrapper = styled.div`
  height: 160px;
  width: 200px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Description = styled.div`
  height: 160px;
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`
const AddGoodsWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`
const OrderWrapper = styled.div`
  height: 70vh;
  width: 30vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`


