import 'react-native-gesture-handler';
import React from 'react'
import AppProvider from './hooks';
import { StatusBar, View } from 'react-native'

import AuthRoutes from './routes/index';
import { NavigationContainer } from '@react-navigation/native';

const App: React.FC = () => {
    return (
        <NavigationContainer>
            <StatusBar barStyle='light-content' backgroundColor='#321e38' />
            <AppProvider>
                <View style={{ flex: 1, backgroundColor: '#321e38', }}>
                    <AuthRoutes />
                </View>
            </AppProvider>
        </NavigationContainer>
    )
}

export default App;