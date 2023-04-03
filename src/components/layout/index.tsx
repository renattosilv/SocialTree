import styles from './Styles.module.css'

export default function Layout({ children }: any) {
  return (
    <>
      <main className={styles.main}>
        {children}
      </main>
    </>
  )
}
