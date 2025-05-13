import { Icon, type IconProps } from "@chakra-ui/react";

import folder from "../assets/Icons/folder.svg?react";
import mail from "../assets/Icons/mail.svg?react";
import user from "../assets/Icons/user.svg?react";
import arrowRight from "../assets/Icons/arrowright.svg?react";
import arrowLeft from "../assets/Icons/arrowleft.svg?react";
import hamburger from "../assets/Icons/menu.svg?react";
import close from "../assets/Icons/x.svg?react";
import linkedIn from "../assets/Icons/link2.svg?react";
import github from "../assets/Icons/git2.svg?react";

export const Icons = {
  Folder: (props: IconProps) => (
    <Icon {...props} as={folder} />
  ),
  User: (props: IconProps) => (
    <Icon {...props} as={user} />
  ),
  Mail: (props: IconProps) => (
    <Icon {...props} as={mail} />
  ),
  ArrowLeft: (props: IconProps) => (
    <Icon {...props} as={arrowLeft} />
  ),
  ArrowRight: (props: IconProps) => (
    <Icon {...props} as={arrowRight} />
  ),
  Hamburger: (props: IconProps) => (
	<Icon {...props} as={hamburger} />
  ),
    Close: (props: IconProps) => (
	<Icon {...props} as={close} />
  ), 
    Github: (props: IconProps) => (
	<Icon {...props} as={github} />
  ), 
    LinkedIn: (props: IconProps) => (
	<Icon {...props} as={linkedIn} />
  ), 
};
