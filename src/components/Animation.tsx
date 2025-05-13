import { motion } from "framer-motion";
import { Box, Button } from "@chakra-ui/react";

export const AnimationBox = motion.create(Box);


//kanske använder en vacker dag
export const AnimationButton = motion.create(Button);

export const buttonVariants = {
	hidden: { opacity: 0, y: 10 },
	visible: (i: number) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: 0.5 + i * 0.15,
			duration: 0.4,
		},
	}),
};
