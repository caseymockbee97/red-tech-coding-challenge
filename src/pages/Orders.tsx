import styled from '@emotion/styled';
import { DataTable } from '../components';

export const OrdersPage = () => {
  return (
    <Container>
      <DataTable />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;
`;
