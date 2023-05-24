'use client'

import { useState } from 'react'
import { useSession } from 'next-auth/react' // Allow us to know which user is log-in
import { useRouter } from 'next/navigation'
import Form from '@components/Form'

const CreatePrompt = () => {
  const [submitting , setSubmitting] = useState(false)

  const [post , setPost ] = useState({
    title: "",
    tag: ""
  })

  const createPrompt = async(e) => {

  }



  
  return (
    <Form
      type="Create"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={createPrompt}
    />
  )
}

export default CreatePrompt