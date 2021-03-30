import React from 'react';
import { Container } from './styles';

import logoImg from '../../assets/logo.png';
import { Image } from 'react-native';

const SignIn: React.FC = () => {
    return (

        <Container>
            <Image source={logoImg} />
        </Container>

    );
}

export default SignIn;