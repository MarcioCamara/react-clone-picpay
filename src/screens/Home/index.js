import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import Activities from '../../components/Activities';
import Banner from '../../components/Banner';
import Suggestions from '../../components/Suggestions';
import Tips from '../../components/Tips';
import { Balance, BalanceContainer, BalanceTitle, Container, Header, Wrapper } from './styles';


export default function Home() {
    return (
        <Wrapper>
            <Container>
                <Header>
                    <MaterialCommunityIcons name="qrcode-scan" size={30} color="#10c86e" />

                    <BalanceContainer>
                        <BalanceTitle>Meu saldo</BalanceTitle>
                        <Balance>R$ 0,00</Balance>
                    </BalanceContainer>

                    <AntDesign name="gift" size={30} color="#10c86e" />
                </Header>

                <Suggestions />

                <Activities />

                <Tips />

                <Banner />
            </Container>
        </Wrapper>
    );
}