import styled from '@emotion/styled';
import { CreateOrderForm } from '../components/CreateOrderForm';

export const CreateOrder = () => {
  return (
    <PageContainer>
      <CreateOrderForm />
    </PageContainer>
  );
};

const PageContainer = styled.div`
  max-width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 12px;
`;
