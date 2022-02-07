import styled from "styled-components"
import { Link } from 'react-router-dom'
import { animateScroll as scroll } from 'react-scroll'

import { popularProducts } from '../data'
import Product from "./Product"

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

const Products = () => {

    const toggleHome = () => {
        scroll.scrollToTop()
    }

    return (
        <Container>
            {popularProducts.map(item => (
                <Link to="/product/1l2kj3h4g5f6d7s89" onClick={toggleHome}>
                    <Product item={item} key={item.id} />
                </Link>
            ))}
        </Container>
    )
}

export default Products
