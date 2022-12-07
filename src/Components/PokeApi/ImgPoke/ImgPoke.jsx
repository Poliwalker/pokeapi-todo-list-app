import React from 'react';
import {
	ImageBoxStyled,
	ImageContainerStyled,
	ImageShadowStyled,
} from './ImgPokeStyle';

const ImgPoke = ({ image, alt }) => {
	return (
		<ImageContainerStyled>
			<ImageBoxStyled>
				<img src={image} alt={alt} />
				<ImageShadowStyled />
			</ImageBoxStyled>
		</ImageContainerStyled>
	);
};

export default ImgPoke;
