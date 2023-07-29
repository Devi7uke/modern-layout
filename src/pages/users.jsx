import React, { useState } from 'react'

const ShowUsers = () => {

  const id = 4
  const username = '172817'
  const password = 8003
  const name = 'Brayan Javier Frias Sandoval'
  const email = '172817@upslp.edu.mx'
  const level = 'admin'

  const [users, setUsers] = useState({})

  const getUsers = async () => {
    try {
      const response = await fetch('/api/users')
      const data = await response.json()
    } catch (error) {
      console.log('Error fetching users: ', error)
    }
  }

  const postUsers = async () => {
    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Set the Content-Type to specify JSON data
        },
        body: JSON.stringify({
          "username": username,
          "password": password,
          "name": name,
          "email": email,
          "level": level
        })
      })
      if (response.ok) {
        console.log(response)
      } else {
        console.error('Failed to create user')
      }
    } catch (error) {
      console.error('Error creating user:', error)
    }
  }

  const putUsers = async () => {
    try {
      const response = await fetch('/api/users', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json', // Set the Content-Type to specify JSON data
        },
        body: JSON.stringify({
          "id": id,
          "username": username,
          "password": password,
          "name": name,
          "email": email,
          "level": level
        })
      })
      if (response.ok) {
        console.log(response)
      } else {
        console.error('Failed to update user')
      }
    } catch (error) {
      console.error('Error updating user :', error)
    }
  }

  const deleteUsers = async () => {
    try {
      const response = await fetch('/api/users', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json', // Set the Content-Type to specify JSON data
        },
        body: JSON.stringify({
          "id": id
        })
      })
      if (response.ok) {
        console.log(response)
      } else {
        console.error('Failed to delete user')
      }
    } catch (error) {
      console.error('Error deleting user:', error)
    }
  }
  return (
    <>
      
    </>
  )
}

const users = () => {


  return (
    <div>users</div>
  )
}

export default users