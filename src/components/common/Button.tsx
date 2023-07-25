import React, {ChangeEvent} from 'react';
import basket from "../../assets/img/basket.png";
import styled from "styled-components";
type PropsType={
    title?:string,
    callBack?:()=>void
    img?: string
    countBasket?: number
}
const Button:React.FC<PropsType> = (props) => {
    const {title, callBack, img, countBasket} = props
    return (
        <StButton img={img}>
            {
                img && <><img src={img} alt="Img"/><span>{countBasket}</span></>
            }
            {title}
        </StButton>
    );
};

export default Button;

type ButtonType = {
    img?: string
}
const StButton = styled.button<ButtonType>`
    cursor: pointer;
    position: relative;
    background: ${(props) => (props.img ? "none" : "white")};
    border: ${(props) => (props.img ? "none" : "1px")};
    span{
        position: absolute;
        bottom: 0;
        right: 0;
        width: 15px;
        height: 15px;
        background: brown;
        color: white;
        border-radius: 50%;
    }
    img{
      width: 32px;
    }
`
const StImg = styled.img`
    
`