import Modal from "../UI/Modal";
import React from 'react'
import styled from 'styled-components'
import { Rating } from "@mui/material";
import media from "../../utils/helpers/media";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useDispatch , useSelector } from 'react-redux'
import { orderActions , productActons } from '../../store/index'


const SinglePorductModal = ({isOpen,onClose,modalData}) => {
  const dispatch = useDispatch()
  const { order } = useSelector(store => store.order)

  const addMaterial = (material) => {
    const isFirst = order.find((product) => product.productId == material.productId)
      dispatch(orderActions.addItem(material))
      dispatch(productActons.increment({productId:material.productId,isFirst:!!isFirst}))
  }


  return (
    <Modal title="Продукт" onClose={onClose} isOpen={isOpen}>
       <StyledWrapper>
         <StyledImageWrapper>
           <StyledImage image={modalData?.image}/>
         </StyledImageWrapper>
        <StyledInformationWrapper>
        <StyledTitle>
         {modalData?.model}
       </StyledTitle>
       <StyledTitle>
         {modalData?.manufacter}
       </StyledTitle>
       <StyledDescription>
           {modalData?.about}
       </StyledDescription> 
       <StyledActions>
       <Rating sx={{margin:'0px',padding:'0px'}} name="read-only" value={4} readOnly /> 
         <StyledButtonWrapper>
         <h3 style={{margin:'0px'}}>{modalData?.price}Руб</h3>
           <StyledButton onClick={() => addMaterial(modalData)}>
             В корзину
           </StyledButton>
         </StyledButtonWrapper>
       </StyledActions>
        </StyledInformationWrapper>
       </StyledWrapper>
    </Modal>
  )
}

export default SinglePorductModal





const StyledImage = styled.div`
  width: 100%;
  height: 300px;
  background-image: ${({image}) => `url(${image})`};
  background-size: contain;
  background-repeat: no-repeat;
  margin: 0 auto;
  margin-top: 20px;

  ${
    media.mobile`
      width:400px;
      height: 200px;
      position: relative;
      right: 60px;
    `
  }
`


const StyledTitle = styled.h1`

`


const StyledDescription = styled.p``


const StyledWrapper = styled.div`
   display: flex;
   justify-content: space-around;
   ${
     media.mobile`
       flex-direction:column;
       align-items:center;
       justify-content:center;
       height: 100%;
       text-align:center;
     `
   }

`

const StyledButtonWrapper = styled.div`
 width:400px;
 display: flex;
 align-items: center;
 justify-content: space-around;
 margin-top: 30px;
`

const StyledActions = styled.div``

const StyledImageWrapper = styled.div`
  width: 20%;
`


const StyledInformationWrapper = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  ${
    media.mobile`
     width:100%
    `
  }

`

const StyledButton = styled.button`
   align-items: center;
  background-clip: padding-box;
  background-color: #fa6400;
  border: 1px solid transparent;
  border-radius: .25rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-flex;
  font-family: system-ui,-apple-system,system-ui,"Helvetica Neue",Helvetica,Arial,sans-serif;
  font-size: 16px;
  font-weight: 600;
  justify-content: center;
  line-height: 1.25;
  margin: 0;
  min-height: 3rem;
  padding: calc(.875rem - 1px) calc(1.5rem - 1px);
  position: relative;
  text-decoration: none;
  transition: all 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  width: auto;

  &:hover,
  &:focus {
  background-color: #fb8332;
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  }
  &:hover{
    transform: translateY(-1px);
  }
  &:active{
    background-color: #c85000;
    box-shadow: rgba(0, 0, 0, .06) 0 2px 4px;
    transform: translateY(0);
  }
`

