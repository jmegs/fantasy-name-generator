import styled, { keyframes } from "styled-components"

export const Wrapper = styled.div`
  max-width: 750px;
  min-height: 600px;
  margin: 0 auto;
  font-family: "Iowan Old Style", serif;
  padding: 24px 32px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const Title = styled.h2`
  max-width: 236px;
  font-size: 32px;
  line-height: 1;
  font-weight: 700;
`

export const Version = styled.span`
  font-family: "SF Mono", monospace;
  font-size: 14px;
  color: #ccc;
  font-weight: 200;
`
export const Form = styled.form`margin-bottom: 72px;`

export const FormField = styled.input`
  display: block;
  padding: 0;
  margin-right: 16px;
  background: none;
  border: none;
  height: 56px;
  font-size: 24px;
  font-family: "Iowan Old Style", serif;
  border-bottom: 1px solid #111;

  &:focus {
    outline: none;
    border-bottom: 1px solid tomato;
  }
`

export const Button = styled.button`
  font-size: 16px;
  border: 1px solid tomato;
  background: none;
  padding: 16px;
  margin: 32px 0 16px 0;
`
const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`
export const Label = styled.label`
  display: block;
  font-family: sans-serif;
  font-size: 14px;
  margin-top: 8px;
`

export const Intro = styled.div`
  font-family: sans-serif;
  animation: ${fadeIn} 1.5s ease-in;
`

export const Name = styled.h1`
  font-size: 48px;
  font-weight: 900;
  margin-top: 16px;
  animation: ${fadeIn} 2.5s ease-in-out;
  width: 100%;
  overflow-wrap: break-word;
  // hyphens: auto;
`

export const Credits = styled.div`
  margin-top: auto;
  color: #ccc;
  font-family: sans-serif;
  font-size: 14px;

  p {
    margin: 4px 0;
  }

  a {
    color: #2e2e2e;
    text-decoration: none;
  }
`
