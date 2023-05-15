import styled from '@emotion/styled';

const FilterContainer = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  font-size: 1rem;
`;

const FilterInput = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid gray;
  border-radius: 0.25rem;
`;

export { FilterContainer, FilterInput };
