import React from 'react';
import styled from 'styled-components/native';

import { View } from 'react-native';
import { Appbar, Title } from 'react-native-paper';

interface AppBarProps
{
    title: string;
    icon?: React.Component;
}

const CustomView = styled(View)`
	margin-top: 13px;
`

const AppBar = (props: AppBarProps) =>
{
    return (
        <Appbar.Header style={{ backgroundColor: '#1CFA94' }} >
            <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#1CFA94' }}>
                { props.icon }
                <CustomView>
                    <Appbar.Content title={<Title> { props.title } </Title>} />
                </CustomView>
            </View>
        </Appbar.Header>
    );
}

export default AppBar;