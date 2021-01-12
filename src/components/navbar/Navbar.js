import React from "react";
import { FaFlask, FaHome } from "react-icons/fa";
import { Flex, Icon, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

export const Navbar = () => {
	return (
		<Flex w='100%' h='3rem' justify='space-between' bg='gray.400'>
			<Icon
				as={FaFlask}
				alignSelf='center'
				h='2rem'
				ml='0.5rem'
				color='greenyellow'
			/>
			<Flex>
				<Link as={RouterLink} to='/'>
					<Icon as={FaHome} />
				</Link>
				<Link as={RouterLink} to='/dilute'>
					<Icon as={FaFlask} />
				</Link>
			</Flex>
		</Flex>
	);
};
