import React from 'react'
import styled from 'styled-components'

const DeliveryPage = () => {
  return (
    <StyledWrapper>
        <StyledTitle>
        Доставка
        </StyledTitle>
       <div>
           <StyledBold>
           Осуществляем СРОЧНУЮ доставку в день заказа в течении двух часов!
           </StyledBold>
       </div>
       <p>
         Доставка осуществляется до подъезда.
       </p>
       <p>
        Доставка в Москву и Московскую область
       </p>
       <StyledTitle>
         Доставка в Москву и Московскую область
       </StyledTitle>
       <ul>
           <li>
            договорная
           </li>
       </ul>
       <p>
       Стоимость доставки зависит от нескольких факторов: отдаленности от склада, веса, длины, объема заказываемого материала и рассчитывается менеджером индивидуально.
       </p>
       <p>
         График работы службы доставки: ПН-ВС 8:00-19:00 без выходных
       </p>
       <h1>
        Самовывоз
       </h1>
       <p>
       Самовывоз возможен только по предварительному заказу.
       </p>
       <p>
       Адреса пунктов самовывоза:
       </p>
       <ul>
           <li>Россия,город Москва ,Видное , 26 км Мкад Каширское шоссе , вл 32</li>
       </ul>
       <h1>
       РАЗГРУЗКА И ПОДЪЕМ
       </h1>
       <p>
       Разгрузка и подъем материалов оплачивается отдельно.
       </p>
       <p>
       В услуги грузчиков входят:
       </p>
       <ul>
           <li>выгрузка из машины</li>
           <li>подъем на этаж</li>
           <li>занос в квартиру</li>
       </ul>
       <p>
       Стоимость разгрузки материалов на лифте:
       </p>
       <ul>
       договорная
        </ul>
        <p>
        Стоимость разгрузки материалов вручную:
        </p>
        <ul>
            <li>договорная</li>
        </ul>
        <p>Внимание!</p>
        <ul>
            <li>пронос материалов более 30 метров (расстояние от машины до подъезда, от лифта до квартиры) оплачивается отдельно.</li>
        </ul>
    </StyledWrapper>
  )
}

export default DeliveryPage



const StyledWrapper = styled.div``

const StyledTitle = styled.h1``


const StyledBold = styled.b``