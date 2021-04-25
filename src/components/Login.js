import styled from "styled-components";

const Login = (props) => {
    return (
        <Container>
        <Content>
            Content
        </Content>
    </Container>
    )
    
}

const Container = styled.section`
overflow: hidden;
display:flex;
flex-direciton : column;
text-align: center; 
height: 100vh;
`

const Content = styled.div`
    margin-bottom: 10vw;
    width: 100%;
    position: relative; 
    min-height: 100vh;
    
`;

export default Login;