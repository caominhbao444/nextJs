import { GetStaticProps, GetStaticPropsContext } from 'next'
import React from 'react'

export interface PostListPageProps {
  posts: any[]
}

export default function PostListPage({ posts }: PostListPageProps) {
  console.log('hi', posts)
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Post Page</h1>
      <ul>
        {posts.map((post) => {
          return <li key={post.id}>{post.title}</li>
        })}
      </ul>
    </div>
  )
}

export const getStaticProps: GetStaticProps<PostListPageProps> = async (
  context: GetStaticPropsContext,
) => {
  console.log('static props')
  const response = await fetch('https://648fbcb275a96b6644454d77.mockapi.io/api/car/posts')
  const data = await response.json()
  console.log(data)
  return {
    props: {
      posts: data,
    },
  }
}
