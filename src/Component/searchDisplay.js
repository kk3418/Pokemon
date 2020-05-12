import React from 'react'
import {Icon} from './Icon'

export function Display (props) {
    const {isSearch, setSearch} = props.util
    
    return (
        <>
            <button id="back-button" onClick={
                () => setSearch({...isSearch, is: false})
            }>
                <Icon />
            </button>
            {
                props.render()
            }
        </>
    )
}