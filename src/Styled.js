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

export const FormField = styled.input`
  display: block;
  padding: 0;
  margin-right: 16px;
  background: none;
  border: none;
  height: 56px;
  font-size: 24px;
  border-bottom: 1px solid #111;
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
  margin-top: 4px;
  margin-bottom: 72px;
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
`
