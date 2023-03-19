import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import MyHead from '@/components/myhead'

export default function Home() {
  return (
    <>
      <MyHead title="Hello World" />
      <h1 className={styles.title}>Hello World</h1>
    </>
  )
}
