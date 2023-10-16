export default function PersonalData() {
  return (
    <div className="w-full flex flex-col gap-y-8">
      {/** location */}
      <div className="flex flex-row items-center gap-x-4">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="ionicon w-8 h-auto" 
          viewBox="0 0 512 512"
          fill="#FFFFFF"
        >
          <path d="M256 32C167.67 32 96 96.51 96 176c0 128 160 304 160 304s160-176 160-304c0-79.49-71.67-144-160-144zm0 224a64 64 0 1164-64 64.07 64.07 0 01-64 64z"/>
        </svg>
        Sinzig, 53489
      </div>
      {/** language */}
      <div className="flex flex-row items-center gap-x-4">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="ionicon w-8 h-auto" 
          fill="#FFFFFF" 
          viewBox="0 0 512 512"
        >
          <path d="M363 176L246 464h47.24l24.49-58h90.54l24.49 58H480zm-26.69 186L363 279.85 389.69 362zM272 320c-.25-.19-20.59-15.77-45.42-42.67 39.58-53.64 62-114.61 71.15-143.33H352V90H214V48h-44v42H32v44h219.25c-9.52 26.95-27.05 69.5-53.79 108.36-32.68-43.44-47.14-75.88-47.33-76.22L143 152l-38 22 6.87 13.86c.89 1.56 17.19 37.9 54.71 86.57.92 1.21 1.85 2.39 2.78 3.57-49.72 56.86-89.15 79.09-89.66 79.47L64 368l23 36 19.3-11.47c2.2-1.67 41.33-24 92-80.78 24.52 26.28 43.22 40.83 44.3 41.67L255 362z"/>
        </svg>
        Deutsch, English
      </div>
      {/** Degree */}
      <div className="flex flex-row items-center gap-x-4">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="ionicon w-8 h-auto" 
          fill="#FFFFFF" 
          viewBox="0 0 512 512"
        >
          <path d="M256 370.43L96 279v98.42l160 88.88 160-88.88V279l-160 91.43z"/><path d="M512.25 192L256 45.57-.25 192 256 338.43l208-118.86V384h48V192.14l.25-.14z"/>
        </svg>
        Mittlere Reife (FIAE Ausbildung vorraussichtlich Mitte 2024)
      </div>
    </div>
  )
}