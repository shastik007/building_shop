import Modal from "../components/UI/Modal";
import Input from "../components/UI/Input";
import Button from "../components/UI/Button";
import styled from 'styled-components'
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../store/authSlice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const LoginModal = ({isOpen,onClose}) => {
  const { role } = useSelector(store => store.auth)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [userData,setUserData] = useState({
      email:'',
      password:''
  })
  

  const changeHandler = (e) => {
      const {name,value} = e.target
      setUserData((prev) => {
          return {
              ...prev,
              [name]:value
          }
      })
  }


  const SubmitHandler = async () => {
      if (userData.email && userData.password) {
         const {data} = await dispatch(login(userData)).unwrap()
         console.log(data,'this is auth');
         if(data.role === '[ROLE_ADMIN]'){
           console.log('admin');
           navigate('admin',-1)
        }
          onClose()
      }else{
         alert('error')
      }
  }
  return (
    <Modal width="600px" onClose={onClose} title="Войти" isOpen={isOpen}>
        <InputsWrapper>
          <Input onChange={changeHandler} value={userData.email} name="email" label="email"/>
          <Input onChange={changeHandler} value={userData.password} name="password" label="пароль"/>
        </InputsWrapper>
        <ModalActions>
        <ButtonWrapper>
               <Button variant="outlined" onClick={onClose}>Закрыть</Button>
           </ButtonWrapper>
           <ButtonWrapper>
               <Button disabled={!userData.email || !userData.password} onClick={SubmitHandler}>Войти</Button>
           </ButtonWrapper>
        </ModalActions>
    </Modal>
  )
}

export default LoginModal


const InputsWrapper = styled.div`
  display:flex;
  flex-direction: column;
  gap:10px;
`


const ButtonWrapper = styled.div`
  width:50%;
`


const ModalActions = styled.div`
   display: flex;
   gap: 10px;
   margin-top: 10px;
`