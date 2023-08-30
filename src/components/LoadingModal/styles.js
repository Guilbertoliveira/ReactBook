import styled from 'styled-components'


export const LoadingStyled = styled.div`
height: 300px;
max-width: 400px;
margin: 100px auto;
`

export const LoadingAnimation = styled.div`
  width: 50px;
  height: 50px;
  margin: 10px auto ;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #ff5722;
  border-radius: 50%;
  animation: spin 1.5s linear infinite;

  @keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

`