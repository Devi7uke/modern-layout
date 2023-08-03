import { DropDownQuestion, FormLayout, TextQuestion, ToggleButton } from '@/components/QuestionRender'
import { data } from 'autoprefixer'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const AdminQuestions = () => {

  const [sections, setSections] = useState([])
  const fetchSections = async () => {
    try {
      const response = await axios.get('/api/questions')
      const section_names = response.data.result.map((item) => (item.section_name))
      setSections(section_names)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchSections()
  },[])

  const [responses, setResponses] = useState({})
  const handleDataChange = (name, value) => {
    setResponses((prevData) => ({ ...prevData, [name]: value }))
  }
  useEffect(() => {
    console.log(responses)
  }, [responses])

  return (
    <div className="w-full px-[10%] bg-cover bg-center bg-no-repeat bg-[url('../../public/images/admin.jpg')] overflow-x-hidden">
      <div className='w-1/2 h-full bg-light/50 my-12 rounded-md'>
        <h1 className='py-14 bg-primary w-full px-[10%] text-light text-4xl rounded-t-md'>Alta de preguntas</h1>
        <div className='px-[10%]'>
          <form onSubmit={null} className='py-24 my-12'>
            <DropDownQuestion question='Seleccione la sección de preguntas' options={sections} event={(name, value) => handleDataChange(name, value)} alias='section' />
            <TextQuestion question='Ingrese la pregunta' event={(name, value) => handleDataChange(name, value)} alias='question' />
            <TextQuestion question='Ingrese un alias' event={(name, value) => handleDataChange(name, value)} alias='alias' />
            <ToggleButton text='Obligatoria ?' event={(name, value) => handleDataChange(name, value)} alias='requiered' />
          </form>
        </div>
      </div>
      <div className='w-1/2 h-full'>

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