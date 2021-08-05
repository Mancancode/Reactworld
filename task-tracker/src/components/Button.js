
import PropTypes from 'prop-types'
const Button = ({text, color}) => {
    return (
        <button style={{background:color}}
         className='btn'>{text}</button>
    )
}
Button.defualtProps ={
    color: 'stealblue'
}

Button.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string,
}
export default Button
