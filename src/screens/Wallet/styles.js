import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { Entypo } from '@expo/vector-icons';

export const Wrapper = styled.View`
    background: #000;
    flex: 1;
`;

export const Container = styled.ScrollView``;

export const Header = styled(LinearGradient)`
    height: 300px;
`;

export const HeaderContainer = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text`
    color: #fff;
    font-size: 16px;
    font-weight: bold;
`;

export const Icon = styled(Entypo)`
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 16px;
`;

export const BalanceContainer = styled.View`
    margin: 10px 0;
    flex-direction: row;
    align-items: center;
`;

export const Value = styled.Text`
    color: #fff;
    font-size: 38px;
    font-weight: 200;
`;

export const ValueHidden = styled.Text`
    height: 50px;
    width: 150px    
    background: ${({ useBalance }) => useBalance ? 'rgba(82, 231, 140, 0.8)' : 'rgba(211, 211, 211, 0.8)'};
`;

export const Bold = styled.Text`
    font-weight: bold;
`;

export const EyeButton = styled.TouchableOpacity`
    margin-left: 10px;
`;

export const Info = styled.Text`
    color: #fff;
    font-size: 14px;
    font-weight: bold;
`;

export const Actions = styled.View`
    flex-direction: row;
    margin-top: 40px;
`;

export const Action = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    border: 1px solid rgba(255, 255, 255, 0.6);
    width: 150px;
    height: 45px;
    border-radius: 25px;
    justify-content: center;
    margin: 0 10px;
`;

export const ActionLabel = styled.Text`
    color: #fff;
    font-size: 16px;
    margin-left: 10px;
`;

export const UseBalance = styled.View`
    background: #1c1c1e;
    height: 60px;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 16px;
    align-items: center;
`;

export const UseBalanceTitle = styled.Text`
    color: #fff;
    font-size: 16px;
    font-weight: 500;
`;

export const PaymentMethods = styled.View`
    margin-top: 25px;
    padding: 0 16px;
    `;

export const PaymentMethodsTitle = styled.Text`
    color: #8e8e93;
    text-transform: uppercase;
    `;

export const Card = styled.View`
    background: #1e232a;
    padding: 20px;
    border-radius: 8px;
    margin-top: 10px;
    `;

export const CardBody = styled.View`    
    flex-direction: row;
`;

export const CardDetails = styled.View`
    flex: 1;
    margin-right: 20px;
`;

export const CardTitle = styled.Text`
    color: #fff;
    font-size: 18px;
    font-weight: bold;
`;

export const CardInfo = styled.Text`
    color: rgba(255, 255, 255, 0.8);
    font-size: 15px;
    margin-top: 15px;
`;

export const Img = styled.Image`
    width: 60px;
`;

export const AddButton = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    margin-top: 25px;
`;

export const AddLabel = styled.Text`
    color: #0bd060;
    font-size: 18px;
    font-weight: bold;
    margin-left: 16px;
`;

export const UseTicketButton = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 25px 0;
`;

export const UseTicketLabel = styled.Text`
    color: #0bd060;
    font-size: 16px;
    font-weight: bold;
    margin-left: 10px;
    text-decoration-line: underline;
`;