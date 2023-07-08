import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  opacity: 0;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.4);
    z-index: 3;
    transition: all 0.5s ease;
    cursor: pointer;
`;
const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
  background-color: #f5fbfd;
  &:hover ${Info}{
    opacity: 1;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-width:1px;
  
  padding:2px;
  ${mobile({ height: "20vh" })}

`;


const Title = styled.h1`
    color:white;
    margin-bottom: 20px;
`;

const Button = styled.button`
    border:none;
    padding: 10px;
    background-color: white;
    color:gray;
    cursor: pointer;
    font-weight: 600;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Link to={`/products/${item.cat}`} >
        <Image src={item.img} />
      </Link>
    </Container>
  );
};

export default CategoryItem;
