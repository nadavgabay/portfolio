import React from 'react'

export const gridDefiner = (children) => {
    const numberOfChildrens = React.Children.count(children)
    return Math.floor(Math.sqrt(numberOfChildrens))
}

export const designChecker = string => string === 'flat' ? 'flat' : 'standard';

export const scaleFactorChecker = string => {
    if(parseFloat(string) > 0) {
        return string
     } else {
        console.error('scaleFactor prop is invalid.')
        return "1.1"
     }
}

export const getNumber = string => string.replace(/\D+$/g, '')
