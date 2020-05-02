import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import avatar from '../../images/avatar.png';
import { Actions, Avatar, Bold, Card, CardBody, CardFooter, CardHeader, Container, Date, Description, Details, Divider, Header, Option, OptionLabel, Title, UserName, Value } from './styles';

const actions = [
    {
        key: String(Math.random()),
        icon: 'comment-outline',
        label: '0',
    },
    {
        key: String(Math.random()),
        icon: 'heart-outline',
        label: '0',
    },
];

export default function Activities() {
    return (
        <Container>
            <Header>
                <Title>Atividades</Title>
            </Header>

            <Card>
                <CardHeader>
                    <Avatar source={avatar} />

                    <Description>
                        <Bold>Você</Bold> pagou a <Bold>@_xcamarax</Bold>
                    </Description>
                </CardHeader>

                <CardBody>
                    <UserName>Marcio Câmara</UserName>
                </CardBody>

                <CardFooter>
                    <Details>
                        <Value>R$ 16,66</Value>

                        <Divider />


                        <Feather name="lock" color="#fff" size={14} />
                        <Date>há 2 dias</Date>
                    </Details>

                    <Actions>
                        {actions.map((action) => (
                            <Option key={action.key}>
                                <MaterialCommunityIcons color="#fff" size={14} name={action.icon} />
                                <OptionLabel>{action.label}</OptionLabel>
                            </Option>
                        ))}
                    </Actions>
                </CardFooter>
            </Card>
        </Container>
    );
}