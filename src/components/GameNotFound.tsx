import { Container } from 'react-bootstrap'
import { Link } from 'react-router'

const GameNotFound = () => {
  return (
    <Container className='text-white text-center' style={{marginTop: '16rem'}}>
        <h2>Game Not Found!</h2>
        <p className='brand-color fs-1'>404</p>
        <p>Looks like you took a wrong turn. <Link className='brand-color' to='/'>Return Home</Link></p>
    </Container>
  )
}

export default GameNotFound