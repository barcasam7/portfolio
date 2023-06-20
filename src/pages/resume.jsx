import { Container } from "@/components/Container";
import React, { useEffect } from "react";

const Resume = () => {
	return (
		<Container className="mt-16 sm:mt-32">
            <iframe title="resmume" style={{width: '100%', height: '800px'}} src="Sam_Ward_CV.pdf"></iframe>
		</Container>
	);
};

export default Resume;
