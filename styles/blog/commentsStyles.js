import styled from 'styled-components';

export const Container = styled.div`
  border-top: 1px solid ${props => props.theme.base};
  padding: 1rem 0;
`;

export const Heading = styled.h2``;

export const Form = styled.form`
  display: grid;
  grid-template-columns: auto auto;
  column-gap: 1rem;
  row-gap: 1rem;

  margin: 1rem 0;
`;

export const InputContainer = styled.div`
  position: relative;
  background: ${props => props.theme.base};
  border-radius: 2px;
  width: 100%;
  transition: 0.4s;

  &:focus-within {
    background-color: ${props => props.theme.baseLight};
  }
`;

export const Input = styled.input`
  font-family: Antonio;
  background-color: ${props => props.theme.base};
  outline: none;
  color: ${props => props.theme.primary};
  font-size: 1rem;
  letter-spacing: 0.5px;
  width: 100%;
  padding: 5px;
  border-radius: 2px;
  border: 2px solid transparent;
  transition: 0.4s;

  &:focus-within {
    background-color: transparent;
  }

  &::placeholder {
    color: ${props => props.theme.primary};
  }

  ~ span::before,
  ~ span::after {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background-color: ${props => props.theme.primary};
    transition: 0.4s;
    border-radius: 2px;
  }

  ~ span::after {
    top: auto;
    bottom: 0;
  }

  ~ i::before,
  ~ i::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    width: 2px;
    height: 0;
    background-color: ${props => props.theme.primary};
    transition: 0.6s;
  }

  ~ i::after {
    left: auto;
    right: 0;
  }

  &:focus ~ span:before,
  &:focus ~ span:after {
    left: 0;
    width: 100%;
    transition: 0.4s;
  }

  &:focus ~ i:before,
  &:focus ~ i:after {
    left: 0;
    width: 100%;
    transition: 0.4s;
  }
`;

export const TextAreaContainer = styled.div`
  grid-column: span 2;
  position: relative;
  background: ${props => props.theme.base};
  border-radius: 2px;
  width: 100%;
  transition: 0.4s;

  &:focus-within {
    background-color: ${props => props.theme.baseLight};
  }
`;

export const TextArea = styled.textarea`
  font-family: Antonio;
  background-color: ${props => props.theme.base};
  outline: none;
  color: ${props => props.theme.primary};
  font-size: 1rem;
  letter-spacing: 0.5px;
  width: 100%;
  padding: 5px;
  border: 2px solid transparent;
  transition: 0.4s;

  &:focus-within {
    background-color: transparent;
  }

  &::placeholder {
    color: ${props => props.theme.primary};
  }

  ~ span::before,
  ~ span::after {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background-color: ${props => props.theme.primary};
    transition: 0.4s;
    border-radius: 2px;
  }

  ~ span::after {
    top: auto;
    bottom: 0;
  }

  ~ i::before,
  ~ i::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    width: 2px;
    height: 0;
    background-color: ${props => props.theme.primary};
    transition: 0.6s;
  }

  ~ i::after {
    left: auto;
    right: 0;
  }

  &:focus ~ span:before,
  &:focus ~ span:after {
    left: 0;
    width: 100%;
    transition: 0.4s;
  }

  &:focus ~ i:before,
  &:focus ~ i:after {
    left: 0;
    width: 100%;
    transition: 0.4s;
  }
`;

// Comments

export const DiscussionContainer = styled.div``;

export const CommentBlock = styled.div``;

export const Author = styled.div`
  display: flex;
  align-items: center;

  & div {
    width: 6px;
    height: 6px;
    background-color: ${props => props.theme.base};
    margin: 0 0.6rem;
    border-radius: 100%;
  }
`;

export const Name = styled.h3`
  color: ${props => props.theme.primary};
`;

export const Email = styled.h5``;

export const Date = styled.h5``;

export const Message = styled.div`
  display: flex;
  align-items: flex-start;
  padding-top: 0.5rem;
  & svg {
    margin-top: -0.5rem;
  }
  & p {
    flex: 1;
    border: 2px solid ${props => props.theme.base};
    border-radius: 7px;
    padding: 1rem;
    margin-left: 1rem;
    font-size: 1.13rem;
  }
`;

export const Reply = styled.div`
  display: flex;
  align-items: center;
  padding-left: 3rem;
  margin-top: 0.5rem;

  & svg {
    margin-right: 0.2rem;
  }

  & span {
    margin-top: -0.2rem;
  }
`;

export const Replies = styled.div`
  padding-top: 2rem;
  padding-left: 2rem;
`;
