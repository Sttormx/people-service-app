import { View } from 'react-native';
import { Text, TextInput, Checkbox, Button } from 'react-native-paper';
import styled from 'styled-components/native';

export const RecoveryContainer = styled(View)`
	background-color: rgba(255, 255, 255, 0.5);
	padding: 15px;
`;

export const RecoveryText = styled(Text)`
	margin-bottom: 20px;
`;

export const RecoveryInput = styled(TextInput)`
	margin-bottom: 10px;
`

export const RecoveryCheckBox = styled(Checkbox)`
	margin-bottom: 10px;
`

export const RecoveryButton = styled(Button)`
	margin-bottom: 10px;
`