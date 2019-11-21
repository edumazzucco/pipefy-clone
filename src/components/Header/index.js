import React from 'react'
import { Container } from './styles';
import LogoWhite from '../../assets/logo-white.svg';

export default function Header() {
    return (
        <Container>
            <img src={LogoWhite} alt="logo-white" width={90} height={30}/>
        </Container>
    )
}
