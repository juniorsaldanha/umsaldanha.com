'use client'

import Header from '../src/components/structure/Header'
import Content from '../src/components/structure/Content'
import MatrixBackground from '../src/components/elements/MatrixBackground'
import Resume from '../src/resume.json'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    document.title = [
      Resume.basics.name,
      Resume.basics.label,
      [Resume.basics.location.region, Resume.basics.location.country].join(", ")
    ].join(" | ");
  }, []);

  return (
    <div>
      <MatrixBackground />
      <Header />
      <Content />
    </div>
  )
}
