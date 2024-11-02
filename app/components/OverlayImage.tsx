import React from "react";

const OverlayImage = ({ bgColor, images }) => {
	return (
		<div className="relative w-3/4">
			<svg
				id="Layer_1"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="91.571 183.571 311.096 342.874"
				enableBackground="new 91.571 183.571 311.096 342.874"
			>
				<path
					opacity={0.4}
					fill={bgColor}
					enableBackground="new    "
					d="M255.857,337.857c0,5.523-4.478,10-10,10H101.571 c-5.522,0-10-4.477-10-10V193.571c0-5.523,4.478-10,10-10h144.286c5.522,0,10,4.477,10,10V337.857z"
				/>
				<path
					opacity={0.4}
					fill={bgColor}
					enableBackground="new    "
					d="M232.427,453.376c0,3.248-2.632,5.879-5.878,5.879h-84.812 c-3.246,0-5.878-2.631-5.878-5.879v-84.81c0-3.247,2.632-5.878,5.878-5.878h84.812c3.246,0,5.878,2.631,5.878,5.878V453.376 L232.427,453.376z"
				/>
				<path
					opacity={0.4}
					fill={bgColor}
					enableBackground="new    "
					d="M402.665,481.8c0,7.697-6.239,13.939-13.936,13.939H187.65 c-7.696,0-13.936-6.24-13.936-13.939V280.722c0-7.697,6.238-13.936,13.936-13.936h201.08c7.695,0,13.937,6.239,13.937,13.936 L402.665,481.8L402.665,481.8z"
				/>
			</svg>
			
			<div
				className="absolute w-[33%] h-[33%] top-[15%] left-[30%] rounded-xl bg-cover bg-center"
				style = {{ backgroundImage: `url('${images[0]}')` }}>
			</div>
			
			<div className="absolute w-[60%] h-[45%] bottom-[5%] right-[5%] rounded-xl bg-cover bg-center"
				style = {{ backgroundImage: `url('${images[1]}')` }}>
			</div>
		</div>
	);
}

export default OverlayImage;