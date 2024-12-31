"use client";
import React, { useState, useEffect } from "react";

const page = ({ params }: { params: Promise<{id: string}> }) => {
	const { id } = React.use(params);
	const [url, setURL] = useState(null);
	const getPDF = async (id) => {
		const res = await fetch(`http://localhost:1337/api/our-programs?populate=*&filters[id][$eq]=${id}`);
		const resJson = await res.json();
		const pdfURL = resJson.data[0].Document.url;
		setURL(pdfURL);
	};
	
	useEffect(() => {
		getPDF(id);
	}, []);
	
  return (
    <div className="relative w-[90vw] h-[80vh] left-[5%]">
			<iframe
				src={url}
				width="100%"
				height="100%"
			/>
    </div>
  );
};

export default page;
