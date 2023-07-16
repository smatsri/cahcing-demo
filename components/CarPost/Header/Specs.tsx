import styled from '@emotion/styled';
import { Fragment } from 'react';

type SpecProps = {
  items: string[];
  extendedPostPageVariant?: boolean;
};

type StyledProps = {
  extendedPostPageVariant?: boolean;
};

const Specs = ({ items, extendedPostPageVariant }: SpecProps) => {
  return (
    <Container>
      {items.map((item, i) => (
        <Fragment key={i}>
          <Item extendedPostPageVariant={extendedPostPageVariant}>{item}</Item>
          {i !== items.length - 1 && (
            <Seperator extendedPostPageVariant={extendedPostPageVariant} />
          )}
        </Fragment>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 4px;
`;

const Item = styled.div<StyledProps>`
  font-size: ${(props) => (props.extendedPostPageVariant ? '16px' : '13px')};
`;

const Seperator = styled.div<StyledProps>`
  width: 6px;
  height: 6px;
  background-color: #d9d9d9;
  border-radius: 50%;
  margin: 0px;
`;

export default Specs;
