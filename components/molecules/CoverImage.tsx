import React,{FC}from 'react'
import {ImageBox} from '../atoms/ImageBox'
import {CoverImageContainer} from '../atoms/CoverImageContainer'

const CoverImage:FC<{imageUrl:string}> = (props)=>{
    const img = props.imageUrl?props.imageUrl:'/default.jpg'
    return (
        <CoverImageContainer>
            <ImageBox imageUrl={img}/>
        </CoverImageContainer>
    )

}

export default CoverImage