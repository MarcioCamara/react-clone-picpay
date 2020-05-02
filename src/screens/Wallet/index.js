import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Switch } from 'react-native';
import { Badge } from 'react-native-elements';
import creditCard from '../../images/credit-card.png';
import { Action, ActionLabel, Actions, AddButton, AddLabel, BalanceContainer, Bold, Card, CardBody, CardDetails, CardInfo, CardTitle, Container, EyeButton, Header, HeaderContainer, Icon, Img, Info, PaymentMethods, PaymentMethodsTitle, Title, UseBalance, UseBalanceTitle, UseTicketButton, UseTicketLabel, Value, ValueHidden, Wrapper } from './styles';

export default function Wallet() {
    const [isVisible, setIsVisible] = useState(true);
    const [useBalance, setUseBalance] = useState(true);

    function handleToggleVisibility() {
        setIsVisible((prevState) => !prevState);
    }

    function BalanceShow() {
        if (isVisible) {
            return (
                <Value>
                    R$ <Bold>61,66</Bold>
                </Value>
            );
        }

        return (
            <ValueHidden useBalance={useBalance}/>
        );
    }

    function handleToggleBalance() {
        setUseBalance((prevState) => !prevState);
    }

    return (
        <Wrapper>
            <Container>
                <Header
                    colors={
                        useBalance ? ['#52e78c', '#1ab563'] : ['#d3d3d3', '#868686']
                    }>
                    <HeaderContainer>
                        <Icon name="bar-graph" color="#fff" />
                        <Badge value="1" status="error" containerStyle={{ position: 'absolute', top: 12, right: 26 }} />

                        <Title>Saldo PicPay</Title>

                        <BalanceContainer>
                            <BalanceShow />

                            <EyeButton onPress={handleToggleVisibility}>
                                <FontAwesome name={isVisible ? 'eye-slash' : 'eye'} color="#fff" size={28} />
                            </EyeButton>
                        </BalanceContainer>

                        <Info>Seu saldo está rendendo 100% do CDI</Info>

                        <Actions>
                            <Action>
                                <MaterialCommunityIcons name="cash-multiple" size={20} color="#fff" />
                                <ActionLabel>Adicionar</ActionLabel>
                            </Action>

                            <Action>
                                <MaterialCommunityIcons name="bank" size={20} color="#fff" />
                                <ActionLabel>Retirar</ActionLabel>
                            </Action>
                        </Actions>
                    </HeaderContainer>
                </Header>

                <UseBalance>
                    <UseBalanceTitle>Usar saldo ao pagar</UseBalanceTitle>

                    <Switch value={useBalance} onValueChange={handleToggleBalance} />
                </UseBalance>

                <PaymentMethods>
                    <PaymentMethodsTitle>Formas de Pagamento</PaymentMethodsTitle>

                    <Card>
                        <CardBody>
                            <CardDetails>
                                <CardTitle>Cadastre seu cartão de crédito</CardTitle>

                                <CardInfo>
                                    Cadastre um cartão de crédito para poder fazer pagamentos mesmo quando não tiver saldo no seu PicPay
                                </CardInfo>
                            </CardDetails>

                            <Img source={creditCard} resizeMode="contain" />
                        </CardBody>

                        <AddButton>
                            <MaterialCommunityIcons name="plus-circle-outline" size={30} color="#0db060" />
                            <AddLabel>Adicionar cartão de crédito</AddLabel>
                        </AddButton>
                    </Card>

                    <UseTicketButton>
                        <MaterialCommunityIcons name="ticket-outline" size={20} color="#0db060" />
                        <UseTicketLabel>Usar código promocional</UseTicketLabel>
                    </UseTicketButton>
                </PaymentMethods>
            </Container>
        </Wrapper>
    );
}