import React,{FC}from 'react'
import {ImageBox} from '../atoms/ImageBox'
import {CoverImageContainer} from '../atoms/CoverImageContainer'

const CoverImage:FC<{imageUrl:string}> = (props)=>{
    return (
        <CoverImageContainer>
            <ImageBox imageUrl={props.imageUrl}/>
        </CoverImageContainer>
    )

}

export default CoverImage