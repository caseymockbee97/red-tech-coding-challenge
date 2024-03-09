import styled from '@emotion/styled';
import { Button, Snackbar, TextField } from '@mui/material';
import { useCallback, useState } from 'react';
import { Order } from '../../Types';
import { addOrder } from '../../dataServices';
import { useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { OrderSelect } from './OrderSelect';

export const CreateOrderForm = () => {
  const navigate = useNavigate();

  const [toastMessage, setToastMessage] = useState('');
  const { handleSubmit, register } =
    useForm<Omit<Order, 'createdDate' | 'orderId'>>();

  const onSubmit: SubmitHandler<Omit<Order, 'createdDate' | 'orderId'>> =
    useCallback(
      async (data) => {
        if (!data.orderType) {
          return;
        }
        const response = await addOrder(data);
        if (response.ok) {
          navigate('/');
        } else {
          setToastMessage(`${response.status}: An error occurred`);
        }
      },
      [navigate]
    );

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ButtonContainer>
        <OrderSelect register={register} />

        <TextField
          {...register('customerName')}
          sx={{ width: '300px' }}
          size="small"
          label="Customer Name"
          required
        />

        <TextField
          {...register('createdByUserName')}
          sx={{ width: '300px' }}
          size="small"
          label="Created by User Name"
          required
        />

        <Button fullWidth variant="contained" color="error" href="/">
          Discard
        </Button>

        <Button fullWidth variant="contained" color="success" type="submit">
          Submit
        </Button>
      </ButtonContainer>
      <Snackbar
        open={!!toastMessage}
        autoHideDuration={2000}
        onClose={() => setToastMessage('')}
        message={toastMessage}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      />
    </form>
  );
};

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
`;
