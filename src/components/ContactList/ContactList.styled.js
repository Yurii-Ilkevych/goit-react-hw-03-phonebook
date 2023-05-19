import styled from '@emotion/styled';

const Wrapper = styled.div`
  width: 392px;
  border: 1px solid black;
  border-radius: 10px;
  flex-wrap: wrap;
  margin: auto;
  margin-bottom: 15px;
  background-color: rgb(232, 246, 247);
  padding: 8px;
`;
const WrapperItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`;
const List = styled.ul`
  list-style: none;
`;
const Item = styled.li`
  font-family: standart;
  font-weight: 500;
`;

const Delete = styled.button`
  background-color: rgb(247, 237, 224);
  border: 1px solid rgb(74, 72, 71);
  border-radius: 4px;
  box-shadow: 0 1px #666;
  &:hover {
    background-color: rgb(245, 198, 137);
  }
  &:active {
    background-color: rgb(247, 237, 224);
    box-shadow: none;
    transform: translateY(1px);
  }
`;

export { Wrapper, List, Item, WrapperItem, Delete };
