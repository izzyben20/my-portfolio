import React, { useState } from 'react';
import { FaArrowAltCircleUp } from 'react-icons/fa';
import styled from 'styled-components';

const Button = styled.div`
    position: fixed;
    bottom: 30px;
    right: 40px;
    font-size: 3rem;
    z-index: 5;
    cursor: pointer;
    color: #26a9df;
    margin: 0 auto;

    @media ${(props) => props.theme.breakpoints.sm} {
        right: 15px;
    }
`

const ScrollButton = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;

        if(scrolled > 400) {
            setVisible(true)
        } else if (scrolled <= 400) {
            setVisible(false)
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    window.addEventListener('scroll', toggleVisible)

  return (
    <Button>
        <FaArrowAltCircleUp 
            onClick={scrollToTop}
            style={{display: visible ? 'inline' : 'none'}} />
    </Button>
  )
}

export default ScrollButton;