import 'react-native-gesture-handler';
import React from 'react'
import { StatusBar, View } from 'react-native'

import AuthRoutes from './routes';
import { NavigationContainer } from '@react-navigation/native';

const App: React.FC = () => {
    return (
        <NavigationContainer>
            <StatusBar barStyle='light-content' backgroundColor='#321e38' />
            <View style={{ flex: 1, backgroundColor: '#321e38', }}>
                <AuthRoutes />
            </View>
        </NavigationContainer>
    )
}

export default App;