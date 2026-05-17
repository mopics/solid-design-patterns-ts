export function Footer() {
  return (
    <footer className="text-center text-sm py-12 text-teal-100">
      Background image based on the Art of {' '}
      <a
        href="https://www.reddit.com/r/Astroneer/comments/1jkvaiq/space_jungle/"
        target="_blank"
        rel="noopener noreferrer"
        className="underline text-green-400 hover:text-green-200 transition-colors hover:[text-shadow:0_0_8px_#4ade80,0_0_16px_#4ade80]"
      >
        r/Astroneer
      </a>
    </footer>
  )
}
