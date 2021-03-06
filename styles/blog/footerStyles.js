import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  position: absolute;
  width: 20%;
  max-width: 18rem;
  right: 20px;
  top: 30px;
  padding: 1rem;
  background: ${props => props.theme.baseLight};
  border-radius: 2px;
  border-top: 2px solid ${props => props.theme.primary};
  border-bottom: 2px solid ${props => props.theme.primary};
  z-index: 10;

  @media (max-width: 1080px) {
    width: 70%;
    position: fixed;
  }
`;

export const TBContainer = styled.div`
  position: absolute;
  right: 20px;
`;

export const Heading = styled.h2`
  font-family: Antonio;
  font-weight: bold;
  font-size: 3.5rem;
  color: ${props => props.theme.heading};
`;

export const Para = styled.p`
  padding: 1rem 0;
  text-align: center;
  font-size: 1rem;
`;

export const Menu = styled.ul`
  list-style: none;
  text-align: center;
  margin-top: 20px;
`;

export const Item = styled.li`
  position: relative;
  cursor: pointer;
  margin: -0.13rem 0;
  padding: 0.2rem 0;
  font-family: Antonio;
  font-weight: bold;
  color: ${props => props.theme.heading};
  font-size: 1.6rem;
  text-transform: uppercase;
  transition: all 0.6s ease-in-out;

  & a {
    transition: all 0.6s ease-in-out;
  }

  &:hover a {
    letter-spacing: 5px;
  }

  &::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    height: 2px;
    background-color: ${props => props.theme.heading};
    transition: transform 0.6s ease-in-out;
    transform: scaleX(0);
  }

  &:hover::before {
    transform: scaleX(1);
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 2px;
    background-color: ${props => props.theme.heading};
    transition: transform 0.6s ease-in-out;
    transform: scaleX(0);
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;

export const Form = styled.form`
  padding: 0.1rem;
  text-align: center;
  width: 100%;
`;

export const InputContainer = styled.div`
  position: relative;
  background: ${props => props.theme.base};
  border-radius: 2px;
  margin-bottom: 0.5rem;
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
    content: "";
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
    content: "";
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

export const Svgs = styled.div`
  padding-top: 10px;
`;

export const Svg = styled.span`
  position: relative;
  margin: 0 10px;

  & svg {
    width: 18px;
  }

  & path {
    transition: all 0.6s ease;
    fill: ${props => props.theme.primary};
  }

  &:hover path {
    fill: ${props => props.theme.heading};
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 2px;
    background-color: ${props => props.theme.heading};
    transition: transform 0.3s ease-in-out;
    transform: scaleX(0);
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;

export const SwitchButton = styled.label`
  margin-top: 0.5rem;
  position: relative;
  display: inline-block;
  width: 40px;
  height: 27px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${props => props.theme.base};
    border: 2px solid ${props => props.theme.primary};
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 34px;
  }

  span:before {
    position: absolute;
    content: "";
    height: 15px;
    width: 15px;
    left: 4px;
    bottom: 4px;
    background-color: ${props => props.theme.heading};
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }

  input:checked + span {
    background-color: ${props => props.theme.base};
    border: 2px solid ${props => props.theme.primary};
  }

  input:focus + span {
    box-shadow: 0 0 1px #2196f3;
  }

  input:checked + span:before {
    -webkit-transform: translateX(15px);
    -ms-transform: translateX(15px);
    transform: translateX(15px);
  }
`;
