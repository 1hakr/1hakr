export const relativeDate = (date:string) => {
  const { $dateFns } = useNuxtApp()
  const { formatDistance } = $dateFns
  return formatDistance(new Date(date), new Date().getTime())
}