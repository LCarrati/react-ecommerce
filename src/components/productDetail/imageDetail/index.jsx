import React, {useState} from 'react'
import { BigImage, MiniImages, Wrapper } from './styles'

const ImageDetail = ({mainImg}) => {
  // const [bigImg, setBigImg] = useState('../'+mainImg[0])
  const [bigImg, setBigImg] = useState(mainImg[0]) //estado que guarda a imagem ampliada

  const handleImgChange = (img) => {
    // setBigImg('../'+img)
    setBigImg(img)
  }

  return (
    <Wrapper>
      <MiniImages>
        <ul>
          {/* {mainImg.map((img,index) => <li key={index}><img onClick={() => handleImgChange (img)} src={'../'+img} alt="" /></li>)} */}
          {mainImg.map((img,index) => <li key={index}><img onClick={() => handleImgChange (img)} src={img} alt="" /></li>)}
        </ul>
      </MiniImages>
      <BigImage>
        <img src={bigImg} alt=""/>
      </BigImage>
    </Wrapper>
  )
}

export default ImageDetail