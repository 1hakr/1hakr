export const imageLoadingAttr = (index: Number) => {
  const { isMobile } = useDevice()
  return isMobile ? (index == 0 ? 'eager' : 'lazy') : (Number(index) <= 2 ? 'eager' : 'lazy')
}