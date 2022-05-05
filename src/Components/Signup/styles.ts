import { View } from 'react-native';
import { Text, TextInput, Checkbox, Button } from 'react-native-paper';
import styled from 'styled-components/native';

export const SignUpContainer = styled(View)`
	background-color: rgba(255, 255, 255, 0.5);
	padding: 15px;
`;

export const SignUpText = styled(Text)`
	margin-bottom: 20px;
`;

export const SignUpInput = styled(TextInput)`
	margin-bottom: 10px;
`

export const SignUpCheckBox = styled(Checkbox)`
	margin-bottom: 10px;
`

export const SignUpButton = styled(Button)`
	margin-bottom: 10px;
`