const LoftLogo = ({ size = 28 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="2" y="2" width="10" height="10" rx="3" fill="#EEEAE2" />
      <rect x="16" y="2" width="10" height="10" rx="3" fill="#EEEAE2" opacity="0.35" />
      <rect x="2" y="16" width="10" height="10" rx="3" fill="#EEEAE2" opacity="0.35" />
      <rect x="16" y="16" width="10" height="10" rx="3" fill="#EEEAE2" opacity="0.12" />
    </svg>
  )
}

export default LoftLogo