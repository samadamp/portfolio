import { Box, Flex, Text } from "@chakra-ui/react";
import { AnimationBox } from "../components/Animation";
import { useNavigate } from "react-router";
import { routePaths } from "../routepaths";
import { useEffect } from "react";

export function LandingPage() {
	
	const navigate = useNavigate();

	useEffect(() => {
		const timer = setTimeout(() => {
			navigate(routePaths.home);
		}, 4000);

		return () => clearTimeout(timer); 
	});

	return (
		<Flex
			w="100vw"
			h="100vh"
			justifyContent="center"
			alignItems="center"
			bg="teal.50"
		>
			<AnimationBox
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.5, duration: 3 }}
				w="100%"
				borderRadius="lg"
				display="flex"
				flexDir="column"
				justifyContent="center"
				alignItems="center"
			>
				<Text fontSize="5xl" fontWeight="bold">
					WELCOME TO SAMS PORTFOLIO
				</Text>
				
					<Box p={8} fontSize="2xl" fontStyle="italic">
						“{"Aspiring frontend developer"}”
					</Box>
		
			</AnimationBox>
		</Flex>
	);
}
