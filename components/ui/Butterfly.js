import uniqid from 'uniqid'

const Butterfly = () => {
  const usageId = uniqid()

  return (
    <svg
      height="18"
      viewBox="0 0 20 18"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <linearGradient
        id={usageId}
        x1="100%"
        x2=".000004%"
        y1="10.625001%"
        y2="89.375%"
      >
        <stop
          offset="0"
          stopColor="var(--gradient-color, #fff)"
          stopOpacity="0"
        />
        <stop
          offset=".539204"
          stopColor="var(--gradient-color, #fff)"
          stopOpacity=".8"
        />
        <stop
          offset="1"
          stopColor="var(--gradient-color, #fff)"
          stopOpacity="0"
        />
      </linearGradient>
      <g fill="none">
        <path
          d="m3.75 0h-3.75v5c0 2.07107 1.67893 3.75 3.75 3.75l-1.20558 1.2056c-.8288.8288-1.29442 1.9529-1.29442 3.125 0 2.4408 1.97864 4.4194 4.41942 4.4194 1.1721 0 2.2962-.4656 3.125-1.2944l1.20558-1.2056 1.2056 1.2056c.8288.8288 1.9529 1.2944 3.125 1.2944 2.4408 0 4.4194-1.9786 4.4194-4.4194 0-1.1721-.4656-2.2962-1.2944-3.125l-1.2056-1.2056c2.0711 0 3.75-1.67893 3.75-3.75v-5h-3.75l-6.25 6.25z"
          fill="var(--fill-color, #e90c76)"
        />
        <path
          d="m3.75 0h-3.75v5c0 2.07107 1.67893 3.75 3.75 3.75l-1.20558 1.2056c-.8288.8288-1.29442 1.9529-1.29442 3.125 0 2.4408 1.97864 4.4194 4.41942 4.4194 1.1721 0 2.2962-.4656 3.125-1.2944l1.20558-1.2056 1.2056 1.2056c.8288.8288 1.9529 1.2944 3.125 1.2944 2.4408 0 4.4194-1.9786 4.4194-4.4194 0-1.1721-.4656-2.2962-1.2944-3.125l-1.2056-1.2056c2.0711 0 3.75-1.67893 3.75-3.75v-5h-3.75l-6.25 6.25z"
          fill={`url(#${usageId})`}
        />
      </g>
    </svg>
  )
}

export default Butterfly
