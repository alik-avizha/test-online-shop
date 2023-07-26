import basket from '../../../assets/img/basket.png'
import Button from '../../../common/components/button';
import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {goodsSelect} from '../../../app/selectors';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';

type HeaderPropsType = {}

export const Header: React.FC<HeaderPropsType> = () => {

    const sum = useSelector(goodsSelect).filter(el => el.inCart).reduce((acc, el) => acc + el.price * el.inCart, 0)

    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{mr: 2}}>
                    <MenuIcon/>
                </IconButton>
                <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                    <Link style={{textDecoration: 'none', color: 'white'}} to={`/`}>Main</Link>
                </Typography>
                <Link to={`/basket`}><Button img={basket} countBasket={sum}/></Link>
            </Toolbar>
        </AppBar>
    )
}

