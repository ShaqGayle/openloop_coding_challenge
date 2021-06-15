import React, { useRef } from 'react'
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea,
  Button,
  Box
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { v4 as uuidv4 } from 'uuid'

export default function SimpleForm ({ submissions, setSubmissions }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm()
  const inputRef = useRef(null)
  const onSubmit = data => {
    setSubmissions([...submissions, { id: uuidv4(), data }])
    reset()
    console.log(inputRef)
    inputRef.current && inputRef.current.focus()
  }
  const { ref: formRef, ...rest } = register('firstName', {
    required: { value: true, message: 'First Name is required' }
  })

  return (
    <Box
      as='form'
      onSubmit={handleSubmit(onSubmit)}
      width='100%'
      flexBasis='50%'
      padding={5}
      margin={3}
    >
      <FormControl isInvalid={errors.firstName}>
        <FormLabel htmlFor='firstName'>First Name</FormLabel>
        <Input
          autoFocus
          id='firstName'
          placeholder='Enter First Name'
          type='text'
          ref={ref => {
            formRef(ref)
            inputRef.current = ref
          }}
          {...rest}
        />
        <FormErrorMessage>
          {errors.firstName && errors.firstName.message}
        </FormErrorMessage>
      </FormControl>
      <FormControl mt={3} isInvalid={errors.lastName}>
        <FormLabel htmlFor='lastName'>Last Name</FormLabel>
        <Input
          id='lastName'
          placeholder='Enter Last Name'
          type='text'
          {...register('lastName', {
            required: { value: true, message: 'Last Name is required' }
          })}
        />
        <FormErrorMessage>
          {errors.lastName && errors.lastName.message}
        </FormErrorMessage>
      </FormControl>
      <FormControl mt={3} isInvalid={errors.email}>
        <FormLabel htmlFor='email'>Email</FormLabel>
        <Input
          id='email'
          placeholder='Enter Email'
          type='email'
          {...register('email', {
            required: { value: true, message: 'Email is required' }
          })}
        />
        <FormErrorMessage>
          {errors.email && errors.email.message}
        </FormErrorMessage>
      </FormControl>
      <FormControl mt={3} isInvalid={errors.note}>
        <FormLabel htmlFor='note'>Note</FormLabel>
        <Textarea
          id='note'
          placeholder='Enter Note'
          {...register('note', {
            required: { value: true, message: 'Note is required' }
          })}
        />
        <FormErrorMessage>
          {errors.note && errors.note.message}
        </FormErrorMessage>
      </FormControl>
      <Button mt={5} type='submit'>
        Submit
      </Button>
    </Box>
  )
}
