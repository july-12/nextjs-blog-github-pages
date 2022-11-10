import Head from 'next/head'
// import Image from 'next/image'
// import styles from './layout.module.css'
// import utilStyles from '../styles/utils.module.css'
// import Link from 'next/link'
import BasicLayout from '@os2edu/layout'

// const name = 'os2edu'
export const siteTitle = 'os2edu community'

export default function Layout({ children, home }) {
  return (
    <div style={{ height: '100vh' }}>
      <Head>
        <link rel="icon" href={`${process.env.BASE_PATH}/favicon.ico`} />
        <meta name="description" content={siteTitle} />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <BasicLayout>
        <main>{children}</main>
      </BasicLayout>
    </div>
  )
}
