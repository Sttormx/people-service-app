import AsyncStorage from '@react-native-async-storage/async-storage';

export const getToken = async () =>
{
    try 
    {
        const dataJson = await AsyncStorage.getItem('UserData');
    
        return dataJson != null ? JSON.parse(dataJson).token : null;   
    } 
    catch (error) 
    {
        console.log(error);
    }
};

export const doUpdateToken = async (token: string) =>
{
    try 
    {
        const dataInJson = await AsyncStorage.getItem('UserData');
        const userData = JSON.parse(dataInJson || '{}')
        userData.token = token;
    
        AsyncStorage.setItem('UserData', JSON.stringify(userData));
    } 
    catch (error) 
    {
        console.log(error);    
    }
};