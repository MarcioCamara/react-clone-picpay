import styled from 'styled-components/native';

export const Container = styled.View`
    background: #6882bb;
    margin: 25px 16px;
    border-radius: 8px;
    height: 150px;
    flex-direction: row;
    padding: 16px;
    align-items: center;
`;

export const Details = styled.View`
    flex: 1;
`;

export const Img = styled.Image`
    margin-left: 5px;
`;

export const Title = styled.Text`
    color: #fff;
    font-size: 18px;
    font-weight: bold;
`;

export const Description = styled.Text`
    color: #fff;
    font-size: 14px;
    margin-top: 16px;
`;