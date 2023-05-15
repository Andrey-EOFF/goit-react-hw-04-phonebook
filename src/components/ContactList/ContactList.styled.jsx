import styled from '@emotion/styled';

const StyledContactList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const StyledContactItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
`;

const StyledName = styled.p`
  margin: 0;
  font-weight: 600;
  font-size: 18px;
`;

const StyledNumber = styled.span`
  font-size: 14px;
  color: #666;
`;

export { StyledContactList, StyledContactItem, StyledName, StyledNumber };