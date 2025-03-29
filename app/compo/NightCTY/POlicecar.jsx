const PoliceCar = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 100" className="z-30 absolute">
      {/* Main body */}
      <rect x="30" y="50" width="140" height="30" rx="3" fill="#2a56c6"/>
      
      {/* Cabin */}
      <polygon points="80,50 80,30 130,30 160,60" fill="#2a56c6"/>
      
      {/* Light bar */}
      <rect x="80" y="25" width="52" height="5" fill="red"/>
      
      {/* Windows */}
      <rect x="85" y="35" width="20" height="10" fill="#a6cef7"/>
      <rect x="100" y="35" width="30" height="10" fill="#a6cef7"/>
      
      {/* Wheels */}
      <circle cx="50" cy="80" r="8" fill="#333"/>
      <circle cx="150" cy="80" r="8" fill="#333"/>
      
      {/* Police text */}
      <text x="100" y="70" fontFamily="Arial" fontWeight="bold" fontSize="8" fill="white" textAnchor="middle">POLICE</text>
    </svg>
  );
  
  export default PoliceCar;