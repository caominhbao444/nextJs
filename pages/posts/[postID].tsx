import { useRouter } from 'next/router'
import * as React from 'react'

export interface PostDetailPageProps {}

export default function PostDetailPage(props: PostDetailPageProps) {
  const router = useRouter()
  const data = JSON.stringify(router.query)
  return (
    <div>
      <h1>Post Details Page</h1>
      <p>{data}</p>
    </div>
  )
}
