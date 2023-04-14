import React from 'react';
import {
	Container404,
	Description404,
	Description404Container,
	Icon404,
	Photo404,
} from './Page40Styles';

const Page404 = () => {
	return (
		<Container404>
			<Description404Container>
				<Icon404 />
				<Description404>
					La pagina en la que estás, no la hemos encontrado! verifica la ruta
					del enlace
				</Description404>
				<Icon404 />
			</Description404Container>
			<Photo404
				src="https://yoast.com/app/uploads/2015/08/404_error_checking_FI.png"
				alt="Not Found"
			/>
		</Container404>
	);
};

export default Page404;
