import React from 'react';
import { TypeStyled } from './TypeStyle';

const Type = ({ typeName }) => {
	return <TypeStyled type={typeName}>{typeName}</TypeStyled>;
};

export default Type;
