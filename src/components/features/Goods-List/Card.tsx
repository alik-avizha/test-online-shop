import React, {FC} from 'react';
import styled from 'styled-components';
import {useDispatch} from 'react-redux';
import {goodsActions, GoodsType} from '../../../bll/goods-slice';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';

export type PropsType = {
    good: GoodsType
}
export const CardGood: FC<PropsType> = ({good}) => {

    const dispatch = useDispatch()
    const addGoodsToBasketHandler = () => {
        dispatch(goodsActions.addGoogsInBasket({goodsId: good.id}))
    }

    return (

        <Paper elevation={3}>
            <WrapperModal>
                <PhotoCont>Photo</PhotoCont>
                <Descriptin>
                    <span>{good.title}</span>
                    <span>{good.price}</span>
                    <span>{good.description}</span>
                </Descriptin>
                <BuyWrapper>
                    <Button variant="contained" onClick={addGoodsToBasketHandler}>Купить</Button>
                </BuyWrapper>
            </WrapperModal>

        </Paper>
    );
};

const WrapperModal = styled.div`
  width: 300px;
  height: 300px;
  background-color: blanchedalmond;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const PhotoCont = styled.div`
  width: 300px;
  height: 40%;
  background-color: aqua;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Descriptin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`

const BuyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  color: black;

  & button {
    width: 40%;
  }
`
