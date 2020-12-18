import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import './Register.css';

const submitClasses = 'submit_form' + ' ' + 'button';

const required = value => value ? undefined : 'Поле требуется заполнить';
const minValue = value =>
  value && value.length < 6 ? `Пароль должен быть минимум длины 6 ` : undefined;
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
  'Неверный почтовый адрес' : undefined;

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div className="container_input">
    <label className="label_form">{label}</label>
    <div className="input_wrap">
        <input {...input} className="input_form" placeholder={label} type={type}/>
        {touched && (error && <span className="error_message">{error}</span>)}
    </div>
  </div>
)

class Register extends Component {

    render() {
        const {handleSubmit} = this.props;

        return (
                <form className="form_block" name="registerForm" onSubmit={handleSubmit}>
                    <Field name="firstName" label="Фамилия: " component={renderField} validate={required} type="text"/>
                    <Field name="secondName" label="Имя: " component={renderField} validate={required} type="text"/>
                    <Field name="thirdName" label="Отчество: " component={renderField} validate={required} type="text"/>
                    <Field name="date" label="Дата рождения: " component={renderField} validate={required} type="date" />
                    <div>
                        <Field name="firstPassword" label="Пароль: " component={renderField} validate={[required, minValue]} type="text"/>
                        <Field name="secondPassword" label="Подтверждение: " component={renderField} validate={required} type="text"/>
                    </div>
                    <Field name="email" label="Почта: " component={renderField} validate={[required, email]} type="text"/>
                    <div>
                        <button type="submit" className={submitClasses}>Отправить</button>
                    </div>
                </form>
        )
    }
}

Register = reduxForm({
    form: 'registerForm'
})(Register);

export default Register;