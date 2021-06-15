import React from 'react'
import styled from 'styled-components'
// import PoweredByGelatoIcon from '../../assets/svg/poweredbygelato.svg'
// import PoweredByGelatoBlackIcon from '../../assets/svg/poweredbygelato_black.svg'
// import PoweredByGelatoWhiteIcon from '../../assets/svg/poweredbygelato_white.svg'
import PoweredByGelatoBlackTransparentIcon from '../../assets/svg/poweredbygelato_blacktransparent.svg'
import PoweredByGelatoWhiteTransparentIcon from '../../assets/svg/poweredbygelato_whitetransparent.svg'
import { ExternalLink } from '../../theme'
import { useDarkModeManager } from 'state/user/hooks'
import { isMobile } from 'react-device-detect'

export const PoweredByGelatoWrapper = styled.div<{
  stroke?: string
  size?: string
  marginRight?: string
  marginLeft?: string
}>`
  display: flex;
  left: 40px;
  bottom: -10px;
  align-items: center;
  justify-content: center;
  width: ${({ size }) => size ?? '20px'};
  height: ${({ size }) => size ?? '20px'};
  position: fixed;

  ${({ theme }) => theme.mediaWidth.upToMedium`
  left: 20px;
  bottom: 18px;
  grid-template-columns: 120px 1fr;
  align-items: center;
  justify-content: center;
  width: '10px'};
  height: '10px'};
`};
`

export default function PoweredByGelato() {
  const [isDarkMode] = useDarkModeManager()
  return isMobile ? null : (
    <ExternalLink href={'https://www.gelato.network/'}>
      <PoweredByGelatoWrapper size={'130px'}>
        <img
          src={isDarkMode ? PoweredByGelatoWhiteTransparentIcon : PoweredByGelatoBlackTransparentIcon}
          alt={'powered by gelato'}
        />
      </PoweredByGelatoWrapper>
    </ExternalLink>
  )
}
