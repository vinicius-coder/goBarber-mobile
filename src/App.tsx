import React from 'react'
import { StatusBar, Text, View } from 'react-native'

const App: React.FC = () => {
    return (
        <>
            <StatusBar 
                barStyle='light-content'
                backgroundColor='#321e38'
            />
            <View style={{
                flex: 1,
                backgroundColor: '#321e38',
            }}>
                <Text>Olá mundo</Text>
            </View>
        </>
    )
}

export default App;