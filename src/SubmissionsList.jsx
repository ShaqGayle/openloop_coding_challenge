import { Stack, Box, Heading, Text, CloseButton, Flex } from '@chakra-ui/react'
import React from 'react'
import { camelToTitleCase } from './utils'

function SubmissionItem ({ deleteSub, data, index, id }) {
  return (
    <Stack shadow='md' padding={3} borderRadius='xl'>
      <Flex width='100%' justify='space-between' align='center' pb={3}>
        <Heading size='lg'>{`Submission ${index}`}</Heading>
        <CloseButton onClick={() => deleteSub(id)} />
      </Flex>
      {Object.entries(data).map(([key, value]) => {
        return (
          <Box key={key}>
            <Heading size='xs'>{camelToTitleCase(key)}</Heading>
            <Text color='teal.500' size='xl' isTruncated={value.length > 100}>
              {value}
            </Text>
          </Box>
        )
      })}
    </Stack>
  )
}

export default function SubmissionsList ({ submissions, deleteSubmission }) {
  return (
    <Stack
      border='1px solid'
      borderColor='gray.300'
      spacing='10px'
      width='100%'
      flexBasis='50%'
      minWidth='50%'
      padding={5}
      margin={5}
      height='450px'
      minHeight='450px'
      overflowY='scroll'
      borderRadius='xl'
    >
      {submissions.map(({ id, data }, index) => {
        return (
          <SubmissionItem
            key={id}
            id={id}
            data={data}
            deleteSub={deleteSubmission}
            index={index}
          />
        )
      })}
    </Stack>
  )
}
