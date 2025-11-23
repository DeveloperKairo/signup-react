import { useState } from 'react';
import './MyForm.css'

const MyForm = () => {
  const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?)*$/;
  const regexPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passError, setPassError] = useState('');
  const [confirmPassError, setConfirmPassError] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();

    const isNameValid = checkName();
    const isEmailValid = checkEmail();
    const isPasswordValid = checkPass();
    const isConfirmValid = checkConfirmPass();

    if (isNameValid && isEmailValid && isPasswordValid && isConfirmValid) {
      alert('Cadastro efetuado!');
      setName('');
      setEmail('');
      setPassword('');
      setConfirmPass('');
    }

  }

  const checkName = () => {
    if (name.length > 3) {
      setNameError('')
      return true; 
    } else {
      setNameError('O nome deve ter mais de 3 caracteres')
      return false;
    }
  }

  const checkEmail = () => {
    if (!regexEmail.test(email)){
      setEmailError('O email digitado está incorreto');
      return false;
    } else {
      setEmailError('');
      return true;
    }
  }

  const checkPass = () => {
    if (!regexPass.test(password)){
      setPassError('A senha precisa ter pelo menos 8 caracteres, 1 letra minúscula, 1 letra maiscula e 1 caractere especial');
      return false;
    } else {
      setPassError('');
      return true;
    }
  }

  const checkConfirmPass = () => {
    if (confirmPass !== password) {
      setConfirmPassError('As senhas não coincidem');
      return false;
    } else {
      setConfirmPassError('');
      return true;
    }
  }

  return (
    <div className='page-wrapper'>

      <div className='form-container'>
        <form onSubmit={handleSubmit} noValidate>
          <h1>Crie sua conta</h1>
          <div className='input-group'>
            <label htmlFor='name' className='input-label'>Nome Completo</label>
            <input type="text" placeholder="Digite seu nome completo" id="name" onChange={(e) => setName(e.target.value)} />
            {nameError && <span className='input-error'>{nameError}</span>}
          </div>

          <div className='input-group'>
            <label htmlFor='email' className='input-label'>E-mail</label>
            <input type="email" placeholder="seuemail@exemplo.com" id="email" onChange={(e) => setEmail(e.target.value)} />
            {emailError && <span className='input-error'>{emailError}</span>}
          </div>

          <div className='input-group'>
            <label className='input-label' htmlFor='pass'>Senha</label>
            <input type="password" placeholder="Crie uma senha forte" id="pass" onChange={(e) => setPassword(e.target.value)} />
            {passError && <span className='input-error'>{passError}</span>}
          </div>

          <div className='input-group'>
            <label htmlFor='confirm-pass' className='input-label'>Confirmar Senha</label>
            <input type="password" placeholder="Confirme sua senha" name="confirm-pass" onChange={(e) => setConfirmPass(e.target.value)} />
            {confirmPassError && <span>{confirmPassError}</span>}
          </div>

          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  )
}

export default MyForm