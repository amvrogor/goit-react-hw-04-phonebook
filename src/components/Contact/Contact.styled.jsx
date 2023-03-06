import styled from 'styled-components';

export const ContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 5px;
  :nth-child(even) {
    background-color: #e9e9ed;
  }
`;

export const Name = styled.span``;

export const Number = styled.span`
  margin-left: auto;
  margin-right: 5px;
`;
