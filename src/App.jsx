import { Flex } from '@chakra-ui/react'
import React, { useState } from 'react'

import SimpleForm from './SimpleForm'
import SubmissionsList from './SubmissionsList'

import './App.css'

export default function App () {
  const [submissions, setSubmissions] = useState([])

  const deleteSubmission = id => {
    setSubmissions(submissions.filter(submission => submission.id !== id))
  }

  return (
    <Flex
      padding={[3, 0]}
      width='100%'
      justify='space-around'
      align='center'
      flexDirection={['column', 'row']}
    >
      <SimpleForm submissions={submissions} setSubmissions={setSubmissions} />
      <SubmissionsList
        submissions={submissions}
        deleteSubmission={deleteSubmission}
      />
    </Flex>
  )
}
