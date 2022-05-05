import { View } from 'react-native';
import { Text, TextInput, Checkbox, Button } from 'react-native-paper';
import styled from 'styled-components/native';

export const LoginCover = styled(View)`
	position: absolute;
	width: 100%;
	height: 100%;
	background-color: rgba(255, 255, 255, 0.3);
`;

export const LoginContainer = styled(View)`
	background-color: rgba(255, 255, 255, 0.5);
	padding: 15px;
`;

export const LoginText = styled(Text)`
	margin-bottom: 20px;
`;

export const LoginInput = styled(TextInput)`
	margin-bottom: 10px;
`

export const LoginCheckBox = styled(Checkbox)`
	margin-bottom: 10px;
`

export const LoginButton = styled(Button)`
	margin-bottom: 10px;
`