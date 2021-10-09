import styled from "styled-components";

const Container = styled.div``;

const Login = () => {
  return (
    <Container>
    <Wrapper>
      <Title>LOG IN</Title>
      <Form>
        <Input placeholder="username" />
        <Input placeholder="password" />
        <Button>LOGIN</Button>
        <Link>DO NOT REMEMBER THE PASSWORD?</Link>
        <Link>CREATE A NEW ACCOUNT</Link>
      </Form>
    </Wrapper>
  </Container>
  )
}

export default Login;
