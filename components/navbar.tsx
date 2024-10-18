"use client";
import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { Link } from "@nextui-org/link";
import {
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Navbar as NextUINavbar,
} from "@nextui-org/navbar";
import { signOut, useSession } from "next-auth/react";

import { usePathname } from "next/navigation";

export const Navbar = () => {
  const pathname = usePathname();
  const { data: session } = useSession();

  return (
    <NextUINavbar isBordered>
      <NavbarBrand>
        <Link href="/" color="foreground">
          <p className="font-bold text-inherit">MicroLearn</p>
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive={pathname === "/courses"}>
          <Link
            href="/courses"
            aria-current={pathname === "/courses" ? "page" : undefined}
          >
            Courses
          </Link>
        </NavbarItem>
        <NavbarItem isActive={pathname === "/challenges"}>
          <Link
            href="/challenges"
            aria-current={pathname === "/challenges" ? "page" : undefined}
          >
            Challenges
          </Link>
        </NavbarItem>
        {session && (
          <NavbarItem isActive={pathname === "/dashboard"}>
            <Link
              href="/dashboard"
              aria-current={pathname === "/dashboard" ? "page" : undefined}
            >
              Dashboard
            </Link>
          </NavbarItem>
        )}
      </NavbarContent>
      <NavbarContent justify="end">
        {session ? (
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                className="transition-transform"
                color="secondary"
                name={session.user.name}
                size="sm"
                src={session.user.image}
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-semibold">Signed in as</p>
                <p className="font-semibold">{session.user.email}</p>
              </DropdownItem>
              <DropdownItem key="create_course" href="/courses/create">
                Create Course
              </DropdownItem>
              <DropdownItem
                key="logout"
                color="danger"
                onPress={() => signOut()}
              >
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        ) : (
          <>
            <NavbarItem className="hidden lg:flex">
              <Link href="/login" color="foreground">
                Login
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Button as={Link} color="primary" href="/register" variant="flat">
                Sign Up
              </Button>
            </NavbarItem>
          </>
        )}
      </NavbarContent>
    </NextUINavbar>
  );
};
