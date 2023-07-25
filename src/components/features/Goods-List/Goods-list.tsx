import React, {FC} from 'react';
import {useSelector} from 'react-redux';
import {goodsSelect} from '../../../bll/selectors';
import {CardGood} from './Card';
import styled from 'styled-components';


type PropsType = {
}

export const GoodsList: FC<PropsType> = () => {

    const goods = useSelector(goodsSelect)

    return (
        <CardWrapper>
            {goods.map(el => {
                return (
                    <CardGood good={el}/>
                )
            })}
        </CardWrapper>
    );
};

const CardWrapper = styled.div`
  padding: 50px;
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
  justify-content: space-between;
`
