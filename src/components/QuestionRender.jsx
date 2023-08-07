import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FaCalendarAlt, FaDollarSign, FaEnvelope, FaFileAlt, FaFileVideo, FaHashtag, FaMarker, FaMinus, FaPlus, FaSubscript } from 'react-icons/fa'

export const FormLayout = ({ title, section, children: childs, event }) => {
  return (
    <div className='block rounded-md h-fit w-1/2 2xl:w-[60%] lg:w-3/4 md:w-full whitespace-normal break-words text-dark bg-light/30 backdrop-blur-lg my-12 md:my-0 transition-[width] duration-300'>
      <div className='px-[5%] bg-primary w-full py-24 rounded-t-md'>
        <h1 className='text-4xl text-light font-semibold'>{title}</h1>
        <h2 className='mt-8 text-2xl text-light/70'>{section}</h2>
      </div>
      <div className='right-0 items-center mt-24 mb-14 w-full px-[5%]'>
        <form onSubmit={event}>
          {childs}
        </form>
      </div>
    </div>
  )
}

const QuestionLayout = ({ question, type, placeholder, icon: Icon, pattern, binding = false, event = null, alias = '' }) => {
  return (
    <div className='relative my-7 m-0 h-fit w-full mb-24'>
      <div className='flex'>
        <h1 className='text-xl mb-6'>{question}</h1>
        <span className={`text-primary ml-2 text-3xl font-semibold ${binding ? 'inline-block' : 'hidden'}`}>*</span></div>
      <span className='inline-block absolute right-0 bottom-3 text-lg'><Icon /></span>
      <input type={type} name={alias} onChange={event !== null ? (e) => event(e.target.name, e.target.value) : null} required={binding} pattern={pattern} autoComplete='no' placeholder={placeholder}
        className='w-full h-12 bg-transparent outline-none pr-7 placeholder:text-dark border-solid border-b-2 border-b-dark text-lg' />
    </div>
  )
}

export const RadioQuestion = ({ question, options = [], binding = false, event = null, alias = '' }) => {
  return (
    <div>
      <div className='relative my-7 m-0 h-fit w-full mb-24'>
        <div className='flex'>
          <h1 className='text-xl mb-6'>{question}</h1>
          <span className={`text-primary ml-2 text-3xl font-semibold ${binding ? 'inline-block' : 'hidden'}`}>*</span></div>
        <div className='flex flex-col'>
          {options.map((option, index) => {
            return (
              <div key={index}>
                <input type="radio" name={alias} id={index} value={option} onChange={event !== null ? (e) => event(e.target.name, e.target.value) : null} className='mr-4 w-5 h-5 accent-primary' />
                <label htmlFor={index}>{option}</label>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export const CheckboxQuestion = ({ question, options = [], binding = false, event = null, value, alias = '' }) => {
  const [values, setValues] = useState([])
  const handleCheckboxChange = (e) => {
    const selectedValue = e.target.value
    if (values.includes(selectedValue)) {
      setValues(values.filter((value) => value !== selectedValue))
    } else {
      setValues([...values, selectedValue])
    }
  }
  useEffect(() => {
    if (event) {
      event(alias, values)
    }
  }, [values])

  return (
    <div>
      <div className='relative my-7 m-0 h-fit w-full mb-24'>
        <div className='flex'>
          <h1 className='text-xl mb-6'>{question}</h1>
          <span className={`text-primary ml-2 text-3xl font-semibold ${binding ? 'inline-block' : 'hidden'}`}>*</span></div>
        <div className='flex flex-col'>
          {options.map((option, index) => {
            return (
              <div key={index} >
                <input type="checkbox" name={alias} id={index} value={option} className='mr-4 w-4 h-4 accent-primary' onChange={handleCheckboxChange} />
                <label htmlFor={index}>{option}</label>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export const DropDownQuestion = ({ question, options = [], alias = '', binding = false, event = null, onFocus = null }) => {
  return (
    <div className='relative my-7 m-0 h-fit w-full mb-24'>
      <div className='flex'>
        <h1 className='text-xl mb-6'>{question}</h1>
        <span className={`text-primary ml-2 text-3xl font-semibold ${binding ? 'inline-block' : 'hidden'}`}>*</span></div>
      <span className='inline-block absolute right-0 bottom-3 text-lg'></span>
      <select id={alias} name={alias} onChange={event !== null ? (e) => event(e.target.name, e.target.value) : null} onFocus={onFocus !== null ? () => onFocus : null} className='w-full h-12 bg-transparent outline-none pr-7 placeholder:text-dark border-solid border-b-2 border-b-dark text-lg'>
        {options.map((option, index) => {
          return (
            <option key={index} value={option}>{option}</option>
          )
        })}
      </select>
    </div>
  )
}

export const TextQuestion = ({ question, placeholder = '', binding = false, event, alias }) => {
  const pattern = ""
  return (
    <QuestionLayout type='text' question={question} placeholder={placeholder} icon={FaFileAlt} pattern={pattern} binding={binding} event={event} alias={alias} />
  )
}

export const NumericQuestion = ({ question, placeholder = '', binding = false, event }) => {
  const pattern = ""
  return (
    <QuestionLayout type='numeric' question={question} placeholder={placeholder} icon={FaHashtag} pattern={pattern} binding={binding} event={event} />
  )
}

export const PhoneQuestion = ({ question, placeholder, binding = false, event }) => {
  const pattern = ""
  return (
    <QuestionLayout type='text' question={question} placeholder={placeholder} icon={FaDollarSign} pattern={pattern} binding={binding} event={event} />
  )
}

export const MoneyQuestion = ({ question, placeholder, binding = false, event }) => {
  const pattern = ""
  return (
    <QuestionLayout type='numeric' question={question} placeholder={placeholder} icon={FaDollarSign} pattern={pattern} binding={binding} event={event} />
  )
}

export const AlphaNumericQuestion = ({ question, placeholder, binding = false, event }) => {
  const pattern = ""
  return (
    <QuestionLayout type='text' question={question} placeholder={placeholder} icon={FaSubscript} pattern={pattern} binding={binding} event={event} />
  )
}

export const EmailQuestion = ({ question, placeholder, binding = false, event }) => {
  const pattern = ""
  return (
    <QuestionLayout type='email' question={question} placeholder={placeholder} icon={FaEnvelope} pattern={pattern} binding={binding} event={event} />
  )
}

export const DateQuestion = ({ question, binding = false, event = null, alias = '' }) => {
  const pattern = ""
  return (
    <div className='relative my-7 m-0 h-fit w-full mb-24'>
      <div className='flex'>
        <h1 className='text-xl mb-6'>{question}</h1>
        <span className={`text-primary ml-2 text-3xl font-semibold ${binding ? 'inline-block' : 'hidden'}`}>*</span></div>
      <input type='date' name={alias} onChange={event !== null ? (e) => event(e.target.name, e.target.value) : null} required={binding}
        className='w-full h-12 bg-transparent outline-none placeholder:text-dark border-solid border-b-2 border-b-dark text-lg' />
    </div>
  )
}

export const ToggleButton = ({ text, event = null, alias }) => {
  const [buttonState, setButtonState] = useState(false)
  const handleToggle = () => {
    setButtonState(!buttonState)
  }
  useEffect(() => {
    event ? event(alias, buttonState) : null
  }, [buttonState])
  return (
    <div className='relative my-7 m-0 h-fit w-full mb-24'>
      <h1 className='text-xl mb-6'>{text}</h1>
      <div className={`relative w-14 h-8 px-1 mt-5 rounded-full cursor-pointer duration-300 ${buttonState ? 'bg-primary/70' : 'bg-light'}`} onClick={handleToggle}>
        <div className={`absolute w-6 h-6 bg-dark rounded-full top-1/2 -translate-y-1/2 duration-300 ${buttonState ? 'translate-x-full' : 'translate-x-0'}`} />
      </div>
    </div>
  )
}

export const CustomQuestion = ({ question = '', placeholder = '', icon: Icon, binding = false, event = null, alias = '', value = '', pattern = "^[^'\";]*$", title = '' }) => {
  return (
    <div className='relative my-7 m-0 h-fit w-full mb-24'>
      <div className='flex'>
        <h1 className='text-xl mb-6'>{question}</h1>
        <span className={`text-primary ml-2 text-3xl font-semibold ${binding ? 'inline-block' : 'hidden'}`}>*</span></div>
      <span className='inline-block absolute right-0 bottom-3 text-lg'><Icon /></span>
      <input type={'text'} name={alias} value={value} onChange={event !== null ? (e) => event(e.target.name, e.target.value) : null} required={binding} pattern={pattern} title={title} autoComplete='no' placeholder={placeholder}
        className='w-full h-12 bg-transparent outline-none pr-7 placeholder:text-dark border-solid border-b-2 border-b-dark text-lg' />
    </div>
  )
}

export const MultipleFieldInput = ({ text = '', className = '', pattern = "^[^'\";]*$", event = null, alias = '' }) => {
  const [options, setOptions] = useState(['', ''])

  const handleOptionChange = (index, value) => {
    const updatedOptions = [...options]
    updatedOptions[index] = value
    setOptions(updatedOptions)
  }

  const addOption = () => {
    setOptions([...options, ''])
  }

  const removeOption = (index) => {
    const updatedOptions = [...options]
    if (index != 0 && index != 1) {
      updatedOptions.splice(index, 1)
      setOptions(updatedOptions)
    } else {
      console.log('There should be at least 2 options')
    }
  }

  useEffect(() => {
    event(alias, options)
  },[options])

  return (
    <motion.div className={`w-full flex flex-row mb-24 flex-wrap ${className}`}>
      <h1 className='text-xl mb-6'>{text}</h1>
      <ul className='w-full flex flex-row flex-wrap' >
        {
          options.map((option, index) => (
            <motion.li key={index} className='flex relative flex-row my-7 w-full' initial={{ opacity: 0 }} animate={{ opacity: 1 }} viewport={{ once: true }}>
              <span className='inline-block absolute right-0 bottom-3 text-lg'>{index + 1}</span>
              <input type='text' className='w-full pr-7 h-12 bg-transparent outline-none placeholder:text-dark border-solid border-b-2 border-b-dark text-lg' value={option} onChange={(e) => handleOptionChange(index, e.target.value)} pattern={pattern} title='Sin comillas, dobles o simples.' />
            </motion.li>
          ))
        }
        <div className='flex flex-row flex-wrap w-full justify-between'>
          <button type='button' className={`w-[49%] text-center rounded-sm text-red-800 bg-light/50 text-lg lg:text-base md:text-sm sm:text-xs `} onClick={() => removeOption(options.length-1)}><FaMinus className='mx-auto' /></button>
          <button type='button' className={`w-[49%] text-center block rounded-sm p-3 text-green-800 bg-light/50 text-lg lg:text-base md:text-sm sm:text-xs`} onClick={addOption}><FaPlus className='mx-auto' /></button>
        </div>
        
      </ul>
    </motion.div>
  )
}