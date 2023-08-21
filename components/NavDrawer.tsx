import NavLinks from "@/components/NavLinks";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { IconMenu2 } from "@tabler/icons-react";
import Image from "next/image";
import React from "react";
import { Link } from "react-scroll";

function NavDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <div className="sm:flex lg:hidden">
      <IconMenu2
        ref={btnRef}
        size={35}
        stroke={3}
        strokeLinejoin="miter"
        className="text-primary-400 cursor-pointer"
        onClick={onOpen}
      />

      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Link
              smooth
              spy
              duration={30}
              to={"home"}
              onClick={onClose}
              className="cursor-pointer flex space-x-2 items-center font-poppins text-2xl font-semibold tracking-wide text-gray-700"
            >
              <Image
                src="/mindcusp-logo.svg"
                height={45}
                width={45}
                alt={"mindcusp logo"}
              />
              <span>mindcusp</span>
            </Link>
          </DrawerHeader>

          <DrawerBody>
            <div className="flex flex-col space-y-2">
              <NavLinks onClick={onClose} />
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default NavDrawer;
