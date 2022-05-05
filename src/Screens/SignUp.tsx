import React from 'react';
import AppBar from '../Components/Appbar';
import { View } from 'react-native';
import { SignUpContainer, SignUpInput, SignUpText, SignUpButton } from '../Components/Signup';
import { Title, Checkbox } from 'react-native-paper';

const SignUp = () =>
{
    const [checked, setChecked] = React.useState(false);

    return (
        <>
            <AppBar title={'Sign UP'} />
        
            <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ width: '90%', height: '65%' }} >
                    <SignUpContainer>
                        <Title> Sign UP </Title>
                        <SignUpText> Input your credentials. </SignUpText>

                        <SignUpInput mode={'outlined'} activeOutlineColor='#1CFA94' label={'Full Name'} />
                        <SignUpInput mode={'outlined'} activeOutlineColor='#1CFA94' label={'Email'} />
                        <SignUpInput mode={'outlined'} activeOutlineColor='#1CFA94' label={'Password'} />

                        <SignUpText> <Checkbox status={checked ? 'checked' : 'unchecked'} onPress={() => setChecked(!checked) } />I accept the terms and conditions </SignUpText>
                        <SignUpButton mode="contained" color='#1CFA94' onPress={() => console.log('Pressed')}> SIGN UP </SignUpButton>

                    </SignUpContainer>
                </View>
            </View>
        </>
    );
}

export default SignUp;