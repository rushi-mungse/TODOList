import styled from "styled-components";
const Navigation = () => {
  return (
    <Nav>
      <NavLeft>
        <img src="./Images/todo.png" alt="logo" />
      </NavLeft>
      <NavRight>
        <a href='https://twitter.com/rushi_mungse' target='_blank'>About Me</a>
      </NavRight>
    </Nav>
  );
};

export default Navigation;
const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 80px;
  height: 70px;
  width: 100%;
  @media only screen and (min-width:100px) and (max-width:483px) {
    padding:0 10px;
  }
`;
const NavLeft = styled.div`
  height: 50px;
  width: 230px;
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
    @media only screen and (min-width:100px) and (max-width:343px) {
      height: 50px;
      width: 150px;
    }
`;
const NavRight = styled.div`
  a {
    color: #ffd55a;
    text-decoration: none;
  }
`;
