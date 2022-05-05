import React from 'react';
import AppBar from '../Components/Appbar';
import { View } from 'react-native';
import { Title } from 'react-native-paper';
import { RecoveryContainer, RecoveryText, RecoveryButton, RecoveryInput } from '../Components/Recovery';

const Recovery = () =>
{
    return (
        <>
            <AppBar title={'RECOVERY'} />

            <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ width: '90%', height: '50%' }} >
                    <RecoveryContainer>
                        <Title> Recovery Password </Title>
                        <RecoveryText> Input your email </RecoveryText>

                        <RecoveryInput mode={'outlined'} activeOutlineColor='#1CFA94' label={'Email'} />
                        <RecoveryButton mode="contained" color='#1CFA94' onPress={() => console.log('Pressed')}> SEND </RecoveryButton>
                    </RecoveryContainer>
                </View>
            </View>
        </>
    );
}

export default Recovery;