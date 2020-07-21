import React, { useCallback, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import moment from 'moment';
import Spinner from '../../components/Spinner';


import {
  Container,
  Content,
  Title,
  InnerContent,
  RadioContainer,
  Form,
  Buttons
} from './styles';

import Radio from '../../components/Radio';
import InputField from '../../components/InputField';
import Button from '../../components/Button';
import api from '../../services/api';

export default function CadastroControleFinanceiro(props) {
  const history = useHistory();
  const [isEdit, setIsEdit] = useState(false);
  const [id, setId] = useState("");
  const [type, setType] = useState("-");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [value, setValue] = useState("");
  const [date, setDate] = useState("");
  const [isErrored, setIsErrored] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    const loadTransaction = async () => {
      if (!props.match.params.id) {
        setIsLoading(false);
        return;
      }
      const { data: transaction } = await api.get(`/api/transaction/byId/${props.match.params.id}`);;
      if (transaction) {
        const { _id, type, description, category, value, yearMonthDay } = transaction;
        setId(_id);
        setType(type);
        setDescription(description);
        setCategory(category);
        setValue(value);
        setDate(yearMonthDay);
        setIsEdit(true);
      }
      else {
        setIsEdit(false);
      }
      setIsLoading(false);
    }
    loadTransaction();
  }, [props.match.params.id])

  const handleCancelar = useCallback(
    () => {
      history.push('/' +  moment(date).format('YYYY-MM'));
    },
    [history , date],
  );

  const getTransaction = useCallback(
    () => {
      const dateMoment = moment(date);
      const transaction = {
        _id: id,
        category,
        description,
        type,
        value,
        day: dateMoment.format('DD'),
        month: dateMoment.format('MM'),
        year: dateMoment.format('YYYY'),
        yearMonth: dateMoment.format('YYYY-MM'),
        yearMonthDay: dateMoment.format('YYYY-MM-DD'),
      };
      if (!id) {
        delete transaction._id;
      }
      return transaction;
    },
    [id, category, description, type, value, date],
  );

  const validateFields = useCallback(
    () => {
      const validateErrors = {};
      if (!type) {
        validateErrors['type'] = true;
      }
      if (!description) {
        validateErrors['description'] = true;
      }
      if (!category) {
        validateErrors['category'] = true;
      }
      if (!value && value !== 0) {
        validateErrors['value'] = true;
      }
      if (!date) {
        validateErrors['date'] = true;
      }
      setIsErrored(validateErrors);
      return validateErrors;
    },
    [category, description, type, value, date, setIsErrored],
  )

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      try {
        setIsSaving(true);
        const errors = validateFields();
        if (Object.entries(errors).length > 0) {
          setIsSaving(false);
          return;
        }
        setIsSaving(true);
        const newTransaction = getTransaction();
        if (!id) {
          await api.post('/api/transaction/', newTransaction);
        } else {
          await api.put('/api/transaction/', newTransaction);
        }
        history.push('/' +  moment(date).format('YYYY-MM'));
      } catch (error) {
        setIsSaving(false);
      }
    },
    [getTransaction, validateFields, id, history, date],
  );

  const handleTypeChange = (type) => {
    setType(type);
  }
  const handleDescriptionChange = (description) => {
    setDescription(description);
  }
  const handleCategoryChange = (category) => {
    setCategory(category);
  }
  const handleValueChange = (value) => {
    setValue(value);
  }
  const handleDateChange = (date) => {
    setDate(date);
  }

  return (
    <Container>
      <Content>
        <Title>{isEdit ? "Alterar Lançamento" : "Novo Lançamento"}</Title>
        <InnerContent>
          {isLoading ?
            <Spinner /> :
            <Form onSubmit={handleSubmit}>
              <RadioContainer value={type} >
                <Radio autoFocus disabled={isEdit ? true : false} label="Despesa" name="radio-lcto" value="-" checkedOption={type} onChange={handleTypeChange} />
                <Radio disabled={isEdit ? true : false} label="Receita" name="radio-lcto" value="+" checkedOption={type} onChange={handleTypeChange} />
              </RadioContainer>
              <InputField isErrored={isErrored['description']} label="Descrição" value={description} onChange={handleDescriptionChange} id="inputDescription" name="inputDescription" />
              <InputField isErrored={isErrored['category']} label="Categoria" value={category} onChange={handleCategoryChange} id="inputCategory" name="inputCategory" />
              <InputField isErrored={isErrored['value']} label="Valor" value={value} onChange={handleValueChange} id="inputValue" name="inputValue" type="number" min="0" step="0.01" />
              <InputField
                min={moment(props.match.params.period).startOf('month').format('YYYY-MM-DD')}
                max={moment(props.match.params.period).endOf('month').format('YYYY-MM-DD')}
                isErrored={isErrored['date']}
                label="Data" value={date}
                onChange={handleDateChange}
                id="inputDate"
                name="inputDate"
                type="date" />
              <Buttons>
                {isSaving ?
                  <Spinner /> :
                  <>
                    <Button action="confirm" type="submit">Confirmar</Button>
                    <Button action="cancel" type="button" onClick={handleCancelar} >Cancelar</Button>
                  </>
                }
              </Buttons>
            </Form>}
        </InnerContent>
      </Content>
    </Container>
  )
}