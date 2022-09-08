import Link from 'next/link'
import styles from './Header.module.css'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface HeaderProps {}

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link href='/'>
        <a>Home</a>
      </Link>
      <Link href='/about'>
        <a>About</a>
      </Link>
      <input className={styles.input} placeholder='Search...' />
    </header>
  )
}
