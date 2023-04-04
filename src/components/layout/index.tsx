import styles from './Styles.module.css'

export default function Layout({ children, font }: any) {
  return (
    <>
      <main className={[styles.main, font].join(" ")}>
        {children}
      </main>
    </>
  )
}
