import React from 'react'
import Head from 'next/head'

import MKSLogo from '../assets/MKSSistemas.svg'

import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>

      <MKSLogo />
      <h1>MKS Sistemas</h1>
      <p>A ReactJS + Next.js</p>
    </Container>
  )
}

export default Home
