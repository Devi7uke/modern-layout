import React, { useEffect, useState } from 'react'
import { FaCalendarAlt, FaDollarSign, FaEnvelope, FaFileAlt, FaFileVideo, FaHashtag, FaMarker, FaSubscript } from 'react-icons/fa'

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
            <h1 className='text-xl mb-6'>{question}</h1>
            <span className='inline-block absolute right-0 bottom-3 text-lg'><Icon /></span>
            <input type={type} name={alias} onChange={event !== null ? (e) => event(e.target.name, e.target.value) : null} required={binding} pattern={pattern} autoComplete='no' placeholder={placeholder}
                className='w-full h-12 bg-transparent outline-none pr-7 placeholder:text-dark border-solid border-b-2 border-b-dark text-lg' />
        </div>
    )
}

export const RadioQuestion = ({ question, options = [], binding = false, event = null, alias = '' }) => {
    const [value, setValue] = useState('')
    return (
        <div>
            <div className='relative my-7 m-0 h-fit w-full mb-24'>
                <h1 className='text-xl mb-6'>{question}</h1>
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
                <h1 className='text-xl mb-6'>{question}</h1>
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
            <h1 className='text-xl mb-6'>{question}</h1>
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

export const DateQuestion = ({ question, binding = false, event = null, alias = '', value }) => {
    const pattern = ""
    return (
        <div className='relative my-7 m-0 h-fit w-full mb-24'>
            <h1 className='text-xl mb-6'>{question}</h1>
            <input type='date' value={value} name={alias} onChange={event !== null ? (e) => event(e.target.name, e.target.value) : null} required={binding}
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

export const NoFormatQuestion = ({ question, placeholder, binding = false, event }) => {
    const pattern = ""
    return (
        <QuestionLayout type='date' question={question} placeholder={placeholder} icon={FaMarker} pattern={pattern} binding={binding} event={event} />
    )
}