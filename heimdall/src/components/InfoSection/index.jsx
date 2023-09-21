/* eslint-disable react/prop-types */

import { Button } from '../ButtonElements';
import { InfoContainer, InfoWrapper, InfoRow, 
    Column1, Column2, TextWrapper, TopLine,
    Heading, Subtitle, BtnWrap,
    ImgWrap, Img } from './InfoElements';

function InfoSection (props) {
    const {id, lightBg, imgStart, topLine, headLine, lightText
        , darkText, description, buttonLabel, img, alt, primary, dark, dark2} = props;

  return (
    <>
        <InfoContainer id={id} lightBg={lightBg}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                        <TextWrapper>
                            <TopLine>
                                {topLine}
                            </TopLine>
                            <Heading lightText={lightText}>
                                {headLine}
                            </Heading>
                            <Subtitle darkText={darkText}>
                                {description}
                            </Subtitle>
                            <BtnWrap>
                                <Button to='home' 
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80}
                                primary={primary ? 1 : 0}
                                dark={dark ? 1 : 0}
                                dark2={dark2 ? 1 : 0} >{buttonLabel}</Button>
                            </BtnWrap>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={img} alt={alt}/>
                        </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>   
    </>
  )
}

export default InfoSection;