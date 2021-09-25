import styled from "styled-components";
import { useState, useEffect } from "react";
const getlocalData = () => {
  const Data = localStorage.getItem("MyToDoList");
  if (Data) {
    return JSON.parse(Data);
  } else {
    return [];
  }
};
const Home = () => {
  const [addItems, setAddItems] = useState("");
  const [storedItems, setStoredItems] = useState(getlocalData());
  const [editItem, setEditItem] = useState("");
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    localStorage.setItem("MyToDoList", JSON.stringify(storedItems));
  }, [storedItems]);
  const storeData = () => {
    if (!addItems) {
      alert("Add any Items");
    } else if (addItems && toggle) {
      setStoredItems(
        storedItems.map((element) => {
          if (element.id === editItem) {
            return { ...element, name: addItems };
          }
          return element;
        })
      );
      setAddItems("");
      setEditItem(null);
      setToggle(false);
    } else {
      const newIdAddItems = {
        id: new Date().getTime().toString(),
        name: addItems,
      };
      setStoredItems([...storedItems, newIdAddItems]);
      setAddItems("");
    }
  };
  const deleteItems = (id) => {
    const updatedItemList = storedItems.filter((element) => {
      return element.id !== id;
    });
    setStoredItems(updatedItemList);
  };
  const removeAll = () => {
    setStoredItems([]);
  };
  const editItems = (id) => {
    const editedItems = storedItems.find((element) => {
      return element.id === id;
    });
    setAddItems(editedItems.name);
    setEditItem(id);
    setToggle(true);
  };
  return (
    <Container>
      <Content>
        <img src="./Images/todo.png" alt="logo"></img>
        <h3>Make your day beautiful!</h3>
        <List>
          <AddItems>
            <input
              type="text"
              placeholder="Add Items.."
              value={addItems}
              onChange={(e) => {
                setAddItems(e.target.value);
              }}
            />
            {toggle ? (
              <img
                src="https://img.icons8.com/material-outlined/24/000000/edit--v1.png"
                alt="editIcon"
                onClick={storeData}
              />
            ) : (
              <img
                src="https://img.icons8.com/pastel-glyph/64/000000/add.png"
                alt="addIcon"
                onClick={storeData}
              />
            )}
          </AddItems>

          {storedItems.map((element) => {
            return (
              <ShowItems key={element.id}>
                <span>{element.name}</span>
                <Images>
                  <img
                    src="https://img.icons8.com/material-outlined/24/000000/edit--v1.png"
                    alt="editIcon"
                    onClick={() => {
                      editItems(element.id);
                    }}
                  />
                  <img
                    src="https://img.icons8.com/material-outlined/24/000000/delete-forever.png"
                    alt="deleteIcon"
                    onClick={() => {
                      deleteItems(element.id);
                    }}
                  />
                </Images>
              </ShowItems>
            );
          })}
          <button onClick={removeAll}> Remove All</button>
        </List>
      </Content>
    </Container>
  );
};

export default Home;
const Container = styled.div`
  min-height: calc(100vh - 70px);
  width: 100%;
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  top: 40px;
  position: relative;
  flex-direction: column;
  img {
    height: 50px;
    width: 230px;
    object-fit: cover;
  }
  h3 {
    color: #6dd47e;
    margin-top: 10px;
    letter-spacing: 3px;
    font-weight: 100;
    @media only screen and (min-width: 100px) and (max-width: 343px) {
      letter-spacing: 1px;
    }
  }
`;
const List = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 20px;
  button {
    margin-top: 20px;
    outline: none;
    border: none;
    background: #ffd55a;
    color: #111;
    transition: 0.5s ease-in-out;
    padding: 10px;
    font-size: 18px;
    cursor: pointer;
    &:hover {
      background: #fff;
      transition: 0.5s ease-in-out;
    }
  }
`;
const AddItems = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:300px;
background:#FFD55A;
height:30px;
transition:.5s ease-in-out;
cursor:pointer;
@media only screen and (min-width:100px) and (max-width:343px) {
  width: 250px;
}
input{
    height:25px;
    outline:none;
    border:none;
    background:#FFD55A;
    color:#111;
    transition:.5s ease-in-out;
    }
    img{
        height:25px;
        width:25px;
        object-fit;
        transition:.25s ease-in-out;

        &:hover{
            background:#FFF;
            transition:.25s ease-in-out;

        }
    }
    &:hover{
        background:#6dd47e;
        transition:.5s ease-in-out;

        input{
        background:#6dd47e;
        transition:.5s ease-in-out;

        }
    }
`;
const ShowItems = styled.div`
  margin-top: 10px;
  background: #ffd55a;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  transition: 0.5s ease-in-out;
  cursor: pointer;
  @media only screen and (min-width: 100px) and (max-width: 343px) {
    width: 250px;
  }
  span {
    padding: 2px;
    @media only screen and (min-width: 100px) and (max-width: 343px) {
      width: 150px;
      font-size: 12px;
    }
  }
  &:hover {
    background: #6dd47e;
    transition: 0.5s ease-in-out;
  }
`;
const Images = styled.div`
img{
    height:25px;
    width:25px;
    object-fit;
    margin-right:5px;
    transition:.25s ease-in-out;

    &:hover{
        background:#FFF;
    transition:.25s ease-in-out;

    }
}
`;
