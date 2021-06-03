import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Button = styled(Link)`
  padding: 4px 8px;
  border: 1px solid #fff;
  border-radius: 4px;
  color: #fff;
  margin: 165px;
  cursor: pointer;
`

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  background-color: #123;
`

export const Title = styled.h1`
  font-size: 64px;
  margin-top: 64px;
  margin-bottom: 25px;
  padding-left: 57px;
  color: #fff;
`

export const SubText = styled.p`
  font-size: 18px;
  color: #fff;
  font-weight: 600;
  margin: 100px 0 64px;
`

export const ButtonRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 32px;
`
