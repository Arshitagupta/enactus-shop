import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { publicRequest } from "../requestMethods";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/footer/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { mobile } from "../responsive";
import Categories from "../components/Categories";
const Container = styled.div`
justify-content:center;
`;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;
const ImgContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: contain;
  ${mobile({ height: "40vh" })}
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 200;
  
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

function Team() {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [team, setTeam] = useState();
  useEffect(() => {
    const getTeam = async () => {
      try {
        const res = await publicRequest.get("/teams/find/" + id);

        setTeam(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getTeam();
  }, [id]);
  console.log(team);
  return (
    <Container>
      <Navbar />
      <Announcement />
        <ImgContainer>
          <Image src={team?.titleImg} />
        </ImgContainer>
        <InfoContainer>
          <Desc>{team?.desc}</Desc>
        </InfoContainer>
      
      {team?.type==="college"&& <Title> {team?.title}'s Projects : </Title>}
      <Categories />
      <Newsletter />
      <Footer />
    </Container>
  );
}

export default Team;
