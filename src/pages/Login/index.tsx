import { useState } from 'react';
import { Formik, Form, FormikProps, useField } from 'formik';
import { Box, Card, Stack, Heading, FormLabel, InputText, Button, Text } from '@matoa-ui/components';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { SigninLogo } from './style';

import { loginUser } from '../../store/userManagement/slice';

const signInSchema = Yup.object().shape({
  email: Yup.string().email().required('Email is required'),
  password: Yup.string().required('Password is required').min(4, 'Password is too short - should be 4 chars min'),
});

interface Values {
  email: string;
  password: string;
}

const MyTextField = ({ ...props }) => {
  const [field, meta] = useField(props.name);

  return (
    <>
      <FormLabel htmlFor={props.name}>{props.label}</FormLabel>
      <InputText {...field} type={props.type} placeholder={props.label} errors={meta.touched && meta.error} />
      {meta.touched && meta.error ? (
        <Text display="block" scale={300} color="red07">
          {meta.error}
        </Text>
      ) : null}
    </>
  );
};

const Login = (props: any) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [initialValues] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (values: { email: string; password: string }) => {
    dispatch(loginUser({ data: values, navigate }));
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      backgroundColor="greylight04"
      width="100%"
      height="100%">
      <Card p="lg" elevation={2}>
        <Stack spacing="md">
          <Heading scale={400}>Internal Dashboard</Heading>
          <Formik
            initialValues={initialValues}
            validationSchema={signInSchema}
            onSubmit={(values) => {
              handleSubmit(values);
            }}>
            {(props: FormikProps<Values>) => {
              return (
                <Form>
                  <Stack spacing="xs">
                    <MyTextField name="email" type="email" label="Email" />
                    <MyTextField name="password" type="password" label="Password" />
                    <Button type="submit" variant="primary" size="md">
                      Sign In
                    </Button>
                  </Stack>
                </Form>
              );
            }}
          </Formik>
        </Stack>
      </Card>
      {/* <img alt="signin-dotted" className="kwSigninDotted" src={bgDotted} /> */}
    </Box>
  );
};

export default Login;
