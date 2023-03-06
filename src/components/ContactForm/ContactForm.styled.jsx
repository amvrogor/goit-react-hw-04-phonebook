import styled from 'styled-components';
import { Form as FormikForm, ErrorMessage as FormikError } from 'formik';

export const Form = styled(FormikForm)`
  width: 400px;
  margin-bottom: 10px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  border-radius: 5px;
  background-color: #f3f3f3;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.12);
`;

export const FormField = styled.label`
  display: flex;
  flex-direction: column;
`;

export const ErrorMessage = styled(FormikError)`
  font-size: 14px;
  color: red;
`;

export const SubmitButton = styled.button`
  cursor: pointer;
`;
