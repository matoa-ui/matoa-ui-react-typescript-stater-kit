import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #ffffff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  z-index: 900;
  position: fixed;
  width: 100%;
  height: 64;
  padding: 0;
  background: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
`;

export const LeftWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const RightWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  li {
    cursor: pointer;
    line-height: normal;
    position: relative;
    display: inline-block;
    margin-right: 22px;

    &:last-child {
      margin: 0;
    }
  }
`;
