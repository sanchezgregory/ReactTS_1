import React from 'react'

export const Form = () => {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(form)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const [form, setForm] = React.useState({
        nick: '',
        subMonths: 0,
        avatar: '',
        description: ''
    })

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" name="nick" onChange={handleChange} placeholder="Nick"/>
        <input type="number" name="subMonths" onChange={handleChange} placeholder="Sub Months"/>
        <input type="text" name="avatar" onChange={handleChange} placeholder="Avatar"/>
        <input type="text" name="description" onChange={handleChange} placeholder="Description"/>
        <button type="submit">Submit</button>
    </form>
  )
}
