import { GoodDialogue, BadDialogue } from '@/components/Layouts'
import { CustomQuestion, DropDownQuestion, MultipleFieldInput, ToggleButton } from '@/components/QuestionRender'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaHashtag, FaMapSigns, FaMarker, FaQuestion } from 'react-icons/fa'

const AdminQuestions = () => {

  //Variables
  let initialData = {
    section: '',
    question: '',
    alias: '',
    type: 'text',
    placeholder: '',
    options: ['', ''],
    requiered: false
  }
  const questionType = ['Solo texto', 'Solo números', 'Alfanumérica', 'Teléfono', 'Dinero', 'Correo electrónico', 'Fecha', 'Opción multiple', 'Selección multiple', 'Despliegue de opción multiple']
  const questionTypeMap = {
    'Solo texto': 'text',
    'Solo números': 'numeric',
    'Alfanumérica': 'alphanumeric',
    'Teléfono': 'phone',
    'Dinero': 'money',
    'Correo electrónico': 'email',
    'Fecha': 'date',
    'Opción multiple': 'radio',
    'Selección multiple': 'checkbox',
    'Despliegue de opción multiple': 'dropdown'
  }

  //States
  const [sections, setSections] = useState([])
  const [sectionsMap, setSectionsMap] = useState({})
  const [responses, setResponses] = useState(initialData)
  const [isField, setIsField] = useState(false)
  const [isMultiple, setIsMultiple] = useState(false)
  const [submissionState, setSubmissionState] = useState([false, false])

  //Functions
  const fetchSections = async () => {
    try {
      const response = await axios.get('/api/sections')
      const section_names = response.data.result.map((item) => (item.section_name))
      const sectionMap = {}
      response.data.result.forEach((item) => {
        sectionMap[item.section_name] = item.section_id
      })
      setSectionsMap(sectionMap)
      setSections(section_names)
    } catch (error) {
      console.log(error)
    }
  }
  const handleDataChange = (name, value) => {
    setResponses((prevData) => ({ ...prevData, [name]: name === 'type' ? questionTypeMap[value] : name === 'section' ?  sectionsMap[value] : value }))
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    const newQuestion = async () => {
      try {
        const response = await axios.post('/api/questions', {responses})
        console.log(response)
        if(response.status === 200){
          console.log('Here!!!')
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          })
          setResponses(initialData)
          setSubmissionState([true, false])
        }
      } catch (error) {
        console.error('Error login:', error)
      }
    }
    newQuestion()
    
  }

  //Event listeners
  useEffect(() => {
    fetchSections()
  },[])
  useEffect(() => {
    setResponses((prevData) => ({ ...prevData, 'section': sectionsMap[sections[0]] }))
    
  },[sections])
  useEffect(() => {
    setIsField(['text', 'numeric', 'alphanumeric', 'phone', 'money', 'email'].includes(responses.type))
    setIsMultiple(['radio', 'checkbox', 'dropdown'].includes(responses.type))
    console.log(responses)
  }, [responses])

  return (
    <div className={`relative w-full flex flex-row justify-between px-[10%] bg-[url('../../public/images/admin.jpg')] bg-cover bg-center bg-no-repeat z-10 overflow-x-hidden after:block after:absolute after:top-0 after:left-0 after:w-full after:h-full after:content-[''] after:-z-10 after:bg-dark/50`} >
      <div className='w-[49%] h-full bg-light/90 my-12 rounded-md'>
        <h1 className='py-14 bg-primary w-full px-[10%] text-light text-4xl rounded-t-md'>Alta de preguntas</h1>
        <div className='relative px-[10%]'>
          <GoodDialogue text='New question registered !!!' className={`${submissionState[0] ? 'opacity-100 scale-100' : 'opacity-0 scale-0'} flex absolute left-[10%] duration-500`} />
          <BadDialogue text='New question couldnt be registered !!!' className={`${submissionState[1] ? 'opacity-100 scale-100' : 'opacity-0 scale-0'} flex absolute duration-500`} />
          <form onSubmit={handleSubmit} className='py-24 my-12'>
            <DropDownQuestion question='Seleccione la sección de preguntas' options={sections} event={(name, value) => handleDataChange(name, value)} alias='section' binding={true} />
            <CustomQuestion value={responses.question} question='Ingrese la pregunta' icon={FaMarker} event={(name, value) => handleDataChange(name, value)} alias='question' binding={true} title="Sin comillas, dobles o simples." />
            <CustomQuestion value={responses.alias} question='Ingrese un alias' icon={FaHashtag} event={(name, value) => handleDataChange(name, value)} alias='alias' binding={true} pattern="[a-z]+" title='Solo minúsculas, sin espacios.'/>
            <DropDownQuestion question='Seleccione el tipo de pregunta' options={questionType} event={(name, value) => handleDataChange(name, value)} alias='type' binding={true} />
            <div className={`${isField ? 'block' : 'hidden'}`}>
              <CustomQuestion value={responses.placeholder} question='Ingrese una sugerencia para el usuario' icon={FaMapSigns} event={(name, value) => handleDataChange(name, value)} alias='placeholder' title="Sin comillas, dobles o simples." />
            </div>
            <div className={`${isMultiple ? 'block' : 'hidden'}`}>
              <MultipleFieldInput text='Ingrese las opciones para la pregunta' event={(name, value) => handleDataChange(name, value)} alias='options' />
            </div>
            <ToggleButton text='Obligatoria ?' event={(name, value) => handleDataChange(name, value)} alias='requiered' />
            <button type="submit" className='w-full h-11 bg-light rounded-md text-dark hover:bg-primary hover:text-light duration-300'>Guardar Pregunta</button>
          </form>
        </div>
      </div>
      <div className='w-[49%] my-12 border rounded-full h-80'>
      </div>
    </div>
  )
}

const adminQuestions = () => {
  return (
    <AdminQuestions />
  )
}

export default adminQuestions