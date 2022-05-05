import React from 'react';
import AppBar from '../Components/Appbar';
import axios from 'axios';
import { APIURL } from '@env';
import API from '../Services/API';

import { View } from 'react-native';
import { LoginContainer, LoginText, LoginInput, LoginButton } from '../Components/Login';
import { Title, Checkbox, Paragraph, TouchableRipple } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const Login = () =>
{
    const [checked, setChecked] = React.useState(false);
    const navigation = useNavigation<NativeStackNavigationProp<any>>();

    // Login Data
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handlerInputEmail = (event: any) => setEmail(event);
    const handlerInputPass = (event: any) => setPassword(event);

    // Login
    const handlerLogin = () =>
    {
        API.post('/login', { email, password }, { baseURL: APIURL }).then((data) => 
        {
            if (data.data.token)
                navigation.navigate('Dashboard');
            else
            {
                // TO-DO
                // MENSAGEM DE LOGIN FALHOU
            }
        });
    };

    return (
        <>
            <AppBar title='Login' />

            <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ width: '90%', height: '70%' }} >
                    <LoginContainer>
                        <Title> Log In </Title>
                        <LoginText> Input your credentials. </LoginText>
                        <LoginInput mode={'outlined'} activeOutlineColor='#1CFA94' label={'Email'} onChangeText={handlerInputEmail} />
                        <LoginInput mode={'outlined'} activeOutlineColor='#1CFA94' label={'Password'} onChangeText={handlerInputPass}  />

                        <TouchableRipple onPress={() => setChecked(!checked)}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', paddingVertical: 3, marginVertical: 8 }} >
                                <View pointerEvents="none">
                                    <Checkbox status={checked ? 'checked' : 'unchecked'} />
                                </View>
                                <Paragraph>Remember me</Paragraph>
                            </View>
                        </TouchableRipple>

                        <LoginButton mode="contained" color='#1CFA94' onPress={() => handlerLogin() }> LOGIN </LoginButton>
                        <TouchableRipple onPress={() => navigation.navigate('Recovery')} >
                            <Paragraph> Forgot password? </Paragraph>
                        </TouchableRipple>
                        
                        <TouchableRipple onPress={() => navigation.navigate('Register')} >
                            <Paragraph> Create an account </Paragraph>
                        </TouchableRipple>
                    </LoginContainer>
                </View>
            </View>
        </>
    );
}

export default Login;