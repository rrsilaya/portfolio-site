import styled from 'styled-components';
import { spacing, colors, breakpoint } from 'styles/constants';

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
`;

export const InnerWrapper = styled.div`
    text-align: center;
`;

export const Text = styled.h1`
    font-size: 36px;
    font-weight: bold;
    margin-top: ${spacing.base}px;
    line-height: 1;
`;

export const Footer = styled.footer`
    width: 100%;
    max-width: ${breakpoint.tablet}px;
    margin-top: ${spacing.huge}px;
    border-top: 1px solid ${colors.black};
    font-size: 12px;
    font-weight: 500;
    text-transform: uppercase;
    padding: ${spacing.tiny}px;
`;
