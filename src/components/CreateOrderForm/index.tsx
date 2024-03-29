import { useCallback, useState } from 'react';
import styled from '@emotion/styled';
import { Button, Snackbar, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { CreateOrder } from '../../Types';
import { addOrder } from '../../dataServices';
import { OrderSelect } from './OrderSelect';
import { orderStore } from './orderStore';

export const CreateOrderForm = () => {
  const navigate = useNavigate();

  const [toastMessage, setToastMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const { order, setOrder, reset } = orderStore();

  const { handleSubmit, register, control, getValues } = useForm<CreateOrder>({
    defaultValues: order,
  });

  const onSubmit: SubmitHandler<CreateOrder> = useCallback(
    async (data) => {
      setLoading(true);
      const response = await addOrder(data);
      if (response.ok) {
        reset();
        navigate('/');
      } else {
        setToastMessage(`${response.status}: An error occurred`);
      }
      setLoading(false);
    },
    [navigate, reset]
  );

  const handleSaveDraft = useCallback(() => {
    setLoading(true);
    const order = getValues();
    setOrder(order);
    navigate('/');
    setLoading(false);
  }, [getValues, navigate, setOrder]);

  const handleCancel = useCallback(() => {
    reset();
    navigate('/');
  }, [navigate, reset]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ButtonContainer>
        <OrderSelect control={control} />

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

        <Button
          fullWidth
          variant="contained"
          color="error"
          onClick={handleCancel}
          disabled={loading}
        >
          Discard
        </Button>

        <Button
          fullWidth
          variant="contained"
          onClick={handleSaveDraft}
          disabled={loading}
        >
          Save Draft
        </Button>

        <Button
          fullWidth
          variant="contained"
          color="success"
          type="submit"
          disabled={loading}
        >
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
