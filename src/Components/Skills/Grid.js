import React from 'react'
import styled from '@emotion/styled'

import { gridDefiner, designChecker, scaleFactorChecker, getNumber } from './utilities'

const ReactGridHover = (props) => { 
    const { children, itemSize = "50px", design = 'standard', scaleFactor = '1.1' } = props
    const columnsNumber = gridDefiner(children)
    const rowsNumber = gridDefiner(children) + 1
    const itemSizeNum = getNumber(itemSize)

    const GridContainer = styled.div`
        display: grid;
        grid-gap: 20px;
        width: ${itemSizeNum * columnsNumber}px;
        height: ${itemSizeNum * rowsNumber}px;
        grid-template-columns: repeat(${columnsNumber}, 1fr);
        grid-template-rows: repeat(${rowsNumber}, 1fr);
    `

    const GridChild = styled.div`
        width: ${itemSize};
        height: ${itemSize};
        transition-duration: 0.5s;
        ${designChecker(design) === 'flat' ? "" : 'box-shadow: -2px 2px 1px #888888'};
        :hover {
            transform: scale(${scaleFactorChecker(scaleFactor)});
            ${designChecker(design) === 'flat' ? "" : 'box-shadow: -3px 3px 20px #888888'};
            z-index: 1;
        }
        img {
            width: 100%;
            height: 100%;
        }
    `
    
    return ( 
        <GridContainer>
            {children.map((child, index) => (
                <GridChild key={index}>
                    {child}
                </GridChild>
            ))}
        </GridContainer>
     );
}


export default ReactGridHover
