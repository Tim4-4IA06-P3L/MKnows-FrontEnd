import React from "react";
import Image from "next/image";
import ClientLogos from "../../components/clientlogos left";
import ClientLogosRight from "../../components/clientlogos right";

const OurClient = () => {
	const idx = Array.from(new Array(58), (x, i) => i+1);
  const imageArr = idx.map((i) => `/client/image ${i}.png`);
	
	const chunkImage = (arr, chunkSize) => {
		const chunks = [];
		for(let i=0; i<arr.length; i+=chunkSize) {
			chunks.push(arr.slice(i, i+chunkSize));
		}
		return chunks
	};
	
	const imageChunks = chunkImage(imageArr, 12);

  return (
		<main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 mb-12 w0full">
			<h1 className="text-2xl sm:text-3xl lg:text-5xl font-semibold text-blue-800 my-6 sm:my-8 lg:my-12 text-center">
				Our Clients
			</h1>
			
			{
				imageChunks.map((chunk, index) => (
				<React.Fragment key={index}>
					<ClientLogos images={chunk.slice(0, 5)} />
					<ClientLogosRight images={chunk.slice(6, 12)} />
				</React.Fragment>
				))
			}
		</main>
  );
};

export default OurClient;
