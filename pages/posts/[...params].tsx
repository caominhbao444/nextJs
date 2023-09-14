import { useRouter } from 'next/router'
import * as React from 'react'

export interface ParamProps {}

export default function ParamPage(props: ParamProps) {
  const router = useRouter()
  const data = JSON.stringify(router.query)
  return (
    <div>
      <h1>Post Details Page</h1>
      <p>{data}</p>
    </div>
  )
}
