import React from 'react';
import { Container, FormContent, FormInput, Icon, FormWrap, Form, FormH1, FormLabel,
    FormButton, Text } from './SigInElements'

const SignIn = () => {
  return (
    <>
        <Container>
            <FormWrap>
            <Icon to='/'>dolla</Icon>
            <FormContent>
                <Form action='#'>
                <FormH1>Sign int to your account</FormH1>
                <FormLabel htmlFor='for'>Email</FormLabel>
                <FormInput type='email' required />
                <FormLabel htmlFor='for'>Password</FormLabel>
                <FormInput type='password' required />
                <FormButton type='submit'>Continue</FormButton>
                <Text>Forgot Password</Text>
                </Form>
            </FormContent>
            </FormWrap>
        </Container>
    </>
  )
}

export default SignIn;