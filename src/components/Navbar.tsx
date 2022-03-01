import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import CallIcon from "@mui/icons-material/Call";

import EmailIcon from "@mui/icons-material/Email";
import { useTheme } from "next-themes";
import Switch from "@mui/material/Switch";
import LanguageIcon from "@mui/icons-material/Language";
import { AddressText, PlainText } from "src/text";

const NavbarContainer = styled.nav`
  width: 100vw;
  margin-bottom: 20px;
  background-color: var(--bg);
  display: flex;
  align-content: center;
  justify-content: space-between;
`;

const Wrapper = styled.div``;

const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const PictureContainer = styled.div`
  background-color: var(--primary);
  margin: 0;
  width: 60%;
  height: 235px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 20px;
`;

const ProfileWrapper = styled.img`
  object-fit: cover;
  width: 150px;
  height: 150px;
  background-color: var(--bg);
  border-radius: 50%;
  z-index: 2;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
  position: relative;
`;

const ThemeSwitch = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Name = styled.h1`
  font-size: var(--xxlFont);
  color: var(--primaryFont);
  font-weight: 500;
  line-height: 50px;
  margin: 40px 0px;
`;

const Position = styled.h4`
  font-size: var(--lFont);
  color: var(--primaryFont);
  margin: 0px 0px 25px;
  font-weight: 300;
  line-height: 30px;
`;

const AddressContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 98%;
  height: 50px;
  background-color: var(--primary);
`;

const Address = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  padding-left: 20px;
`;

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark === true) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, [dark, setTheme]);

  return (
    <NavbarContainer>
      <Left>
        <PictureContainer>
          <ProfileWrapper />
        </PictureContainer>
      </Left>
      <Right>
        <ThemeSwitch>
          <PlainText> Dark mode?</PlainText>
          <Switch checked={dark} onClick={() => setDark(!dark)} />
        </ThemeSwitch>
        <Name>Noppadon Raksasiripong</Name>
        <Position> Full Stack Developer(ReactJs, NodeJs)</Position>
        <AddressContainer>
          <Address>
            <CallIcon style={{ color: "var(--invertFont)" }} />
            <AddressText>tel</AddressText>
          </Address>
          <Address>
            <LanguageIcon style={{ color: "var(--invertFont)" }} />
            <AddressText>website</AddressText>
          </Address>
          <Address>
            <EmailIcon style={{ color: "var(--invertFont)" }} />
            <AddressText>email</AddressText>
          </Address>
        </AddressContainer>
      </Right>
    </NavbarContainer>
  );
};

export default Navbar;
