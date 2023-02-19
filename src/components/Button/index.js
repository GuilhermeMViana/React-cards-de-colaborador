import './Button.css'

const Button = function(props) {
    return (      
            <button className='criar-card' type='submit'>{props.children}</button>
    )
}

export default Button