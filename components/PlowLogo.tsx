import { FC } from 'react'

export interface Field33LogoProps {
  /**
   * Whether the logo is displayed in its primary color or the current color.
   */
  primary?: boolean
  small?: boolean
}
export const PlowLogo: FC<Field33LogoProps> = ({ primary, small }) => {
  return (
      <svg
          // I avoid tailwind here because on initial loading the svg is loaded before the css assets and you can see a screen-filling logo for a second.
          style={{
            height: small ? "2.5rem" : "4rem",
            width: small ? "2.5rem" : "4rem"
          }}
          viewBox="0 0 45 45"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
      >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 1.85332V43.1462C0 43.6379 0.195032 44.1089 0.542169 44.4568C0.889305 44.8043 1.36046 45 1.85122 45H43.1488C43.6395 45 44.1107 44.8048 44.4578 44.4568C44.805 44.1094 45 43.6379 45 43.1462V1.85332C45 1.36161 44.805 0.89059 44.4578 0.542629C44.1107 0.195198 43.6395 0 43.1488 0H1.85175C1.36046 0 0.889305 0.195198 0.542169 0.542629C0.195032 0.89059 0 1.36161 0 1.85332ZM37.3448 16.2113C38.3664 15.7659 39.1542 15.1232 39.7095 14.2831C40.2648 13.4444 40.5424 12.4443 40.5424 11.2855C40.5424 10.1267 40.2688 9.12398 39.7214 8.27724C39.1741 7.4305 38.393 6.7771 37.3793 6.31573C36.3644 5.85569 35.1687 5.625 33.7924 5.625H27.8807C27.429 5.625 27.0637 5.9917 27.0637 6.44507V20.537C27.0637 20.9184 27.3705 21.2264 27.7505 21.2264H29.8668C30.3052 21.2264 30.6612 20.869 30.6612 20.429V16.8807H33.7924C35.6935 16.8807 37.3448 16.2126 37.3448 16.2126V16.2113ZM30.6612 14.0058V8.5666H33.5918C34.6719 8.5666 35.4942 8.80129 36.0562 9.26933C36.6181 9.73737 36.8997 10.4094 36.8997 11.2868C36.8997 12.1643 36.6181 12.8177 36.0562 13.2924C35.4929 13.7684 34.6719 14.0058 33.5918 14.0058H30.6612Z"
            fill={primary ? '#E8A631' : 'currentColor'}
        />
      </svg>
  )
}
