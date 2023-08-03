import { CheckboxQuestion, DateQuestion, DropDownQuestion, FormLayout, RadioQuestion, TextQuestion } from '@/components/QuestionRender'
import Ribbon from '@/components/Ribbon'
import React, { useEffect, useState } from 'react'

const Questionnaire = () => {
  const [responses, setResponses] = useState({})
  const handleDataChange = (name, value) => {
    setResponses((prevData) => ({ ...prevData, [name]: value }))
    console.log(responses)
  }
  return (
    <>
      <Ribbon />
      <div className="flex justify-center bg-cover bg-center bg-no-repeat bg-[url('../../public/images/sunset.jpg')] overflow-x-hidden" sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw'>
        <br />
        <FormLayout title='Cuestionario de seguimiento de egresados' section='Datos Personales de identificación'>
          <TextQuestion question='Ingresa tu nombre completo' placeholder='Nombre completo' alias='nombre' event={(name, value) => handleDataChange(name, value)} />
          <DateQuestion question='Ingresa la fecha de egreso' alias='fecha' event={(name, value) => handleDataChange(name, value)} />
          <RadioQuestion question='Plan Educativo' options={['ISTI', 'ITI' , 'ITEM', 'ITMA', 'LAG', 'LMI']} alias='plan' event={(name, value) => handleDataChange(name, value)} />
          <DropDownQuestion question='En que tipo de preparatoria estuviste?' options={['Cobach', 'Bachillerato', 'Prepa Tecnica', 'Prepa general']} alias='escuela' event={(name, value) => handleDataChange(name, value)} />
        
        </FormLayout>
      </div>
    </>
  )
}

const questionnaire = () => {
  return (
    <Questionnaire />
  )
}

export default questionnaire