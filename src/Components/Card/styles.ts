import { StyleSheet } from 'react-native';

const styles = StyleSheet.create(
{
    card: 
    {
        backgroundColor: '#fff',
        boxSizing: 'border-box',
        width: '47%',
        height: '47%',
        padding: '5%',
        marginBottom: '5%',
        justifyContent: 'space-around',
        alignContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#e5e5e5',
        borderRadius: 4
    },

    count: 
    {
        color: '#9e9e9e',
        fontWeight: '400',
        fontSize: 24
    },

    title: 
    {
        color: 'rgba(0, 0, 0, 0.24)',
        letterSpacing: 0.4,
        fontSize: 12
    },

    cardActive: 
    {
        backgroundColor: 'black'
    },
    
    countActive: 
    {
        color: '#fff'
    },
    
    titleActive: 
    {
        color: 'rgba(255, 255, 255, 0.70)'
    }
});

export default styles;