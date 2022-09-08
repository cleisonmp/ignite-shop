import styles from './BaseTemplate.module.css'

export interface BaseTemplateProps {
  sampleTextProp: string
}

export const BaseTemplate = ({ sampleTextProp }: BaseTemplateProps) => {
  return <div className={styles.container}>{sampleTextProp}</div>
}
