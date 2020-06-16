import React from 'react'
import styled from '@emotion/styled'

const ColorBox = ({ color, name }) => (
  <StyledColorBox color={color}>
    <CopyContainer>
      <BoxContent>
        <span>{name}</span>
      </BoxContent>
      <CopyButton>Copy</CopyButton>
    </CopyContainer>
    <SeeMore>More</SeeMore>
  </StyledColorBox>
)

const StyledColorBox = styled.div`
  position: relative;
  cursor: pointer;
  background-color: ${(props) => props.color};
`

const CopyContainer = styled.div``

const BoxContent = styled.div``

const CopyButton = styled.button`
  width: 100px;
  height: 30px;
  position: absolute;
  display: inline-block;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  outline: none;
  background: rgba(255, 255, 255, 0.3);
  font-size: 1rem;
  line-height: 30px;
  color: white;
  text-transform: uppercase;
  border: none;
  opacity: 0;

  ${StyledColorBox}:hover {
    opacity: 0;
  }
`

const SeeMore = styled.span``

export default ColorBox
