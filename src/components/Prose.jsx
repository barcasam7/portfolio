export function Prose({ children, className }) {
  return (
    <div className={`${className} prose dark:prose-invert`}>{children}</div>
  )
}
