interface ErrorMessageProps {
  message: string
}

export default function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div style={{ padding: '2rem', color: '#ff6b6b' }}>
      <strong>Error:</strong> {message}
    </div>
  )
}
