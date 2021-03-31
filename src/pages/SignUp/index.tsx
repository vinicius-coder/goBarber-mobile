import React from 'react';
import { Image, KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

import logoImg from '../../assets/logo.png';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Title, BackToSignInButton, BackToSignInButtonText } from './styles';

const SignUp: React.FC = () => {

    const navigation = useNavigation();

    return (
        <>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                enabled
            >
                <ScrollView
                    keyboardShouldPersistTaps="handled"
                    contentContainerStyle={{ flex: 1 }}
                >
                    <Container>
                        <Image source={logoImg} />

                        <View>
                            <Title>Crie sua conta</Title>
                        </View>

                        <Input name="Name" icon="user" placeholder="Nome" />
                        <Input name="Email" icon="mail" placeholder="E-mail" />
                        <Input name="Password" icon="lock" placeholder="Senha" />

                        <Button onPress={() => { console.log('ok') }}>Entrar</Button>

                    </Container>
                </ScrollView>
            </KeyboardAvoidingView>

            <BackToSignInButton onPress={() => navigation.goBack()}>
                <Icon
                    name="arrow-left"
                    size={20}
                    color="#ddd"
                />
                <BackToSignInButtonText>Voltar para logon</BackToSignInButtonText>
            </BackToSignInButton>
        </>

    );
}

export default SignUp;