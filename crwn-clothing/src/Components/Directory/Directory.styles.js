import styled from "styled-components";

const DirectoryContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media screen and (max-width: 800px) {
    align-items: center;
  }
`;

export default DirectoryContainer;
