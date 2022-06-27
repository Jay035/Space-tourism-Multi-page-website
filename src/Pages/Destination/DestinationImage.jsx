export const DestinationImage = ({item, id}) => {
  return (
    <img key={id} src={item.images.png} alt="destination img" />
  )
}
