
const Buttons = ({imgUrl,clickHandler}) => {
  return (
    <button onClick={clickHandler}>
        <img src={imgUrl} alt="" />
    </button>
  )
}
export default Buttons
