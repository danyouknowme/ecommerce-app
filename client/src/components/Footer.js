import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })};
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: #fff;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })};
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  cursor: pointer;

  &:hover {
    color: gray;
  }
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "whitesmoke" })};
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
  cursor: pointer;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>DIZZY.</Logo>
        <Desc>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or ranfomised words which don't look even slightly believable.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook onClick = {() => window.open("https://web.facebook.com/dan.isreal.923/?_rdc=1&_rdr", "_blank")} />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram onClick = {() => window.open("https://www.instagram.com/danthanathip/", "_blank")} />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter onClick = {() => window.open("https://twitter.com/dxnnvbvb", "_blank")}  />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest onClick = {() => window.open("https://www.pinterest.com/", "_blank")}  />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem><Room style={{marginRight: "10px"}} /> 169/7 Watthat, Mueang, Nongkhai 43000</ContactItem>
        <ContactItem><Phone style={{marginRight: "10px"}} /> +66951683442</ContactItem>
        <ContactItem><MailOutline style={{marginRight: "10px"}} /> dannajaeiei@hotmail.com</ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
