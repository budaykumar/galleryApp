import './index.css'

const ThumbnailItem = props => {
  const {eachImageDetails, onclickFunction} = props
  const {thumbnailUrl, thumbnailAltText, id} = eachImageDetails
  const updateImg = () => {
    onclickFunction(id)
  }

  return (
    <li className="list-Item">
      <img
        src={thumbnailUrl}
        alt={thumbnailAltText}
        className="imgThumbnail"
        onClick={updateImg}
      />
    </li>
  )
}

export default ThumbnailItem
