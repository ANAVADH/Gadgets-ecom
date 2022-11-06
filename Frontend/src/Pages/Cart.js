
import styled from 'styled-components';
import { useCart } from "react-use-cart";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrash} from '@fortawesome/free-solid-svg-icons'
import { Link} from 'react-router-dom';


const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
 
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;



const Bottom = styled.div`
  display: flex;
  justify-content: space-between;

`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;


`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

// const ProductId = styled.span``;



const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;


`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;


`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;





const Cart = () => {

    const {
        isEmpty,
        totalUniqueItems,
        items,
        
        removeItem,
      } = useCart();
 
      

 
//########################################################################################################################
if (isEmpty) return  (<Container>
  <Wrapper>
    <Title>CART is empty</Title>
    <Top>
      <Link to='/'>
      <TopButton>Add products</TopButton>
      </Link>
      </Top>
      </Wrapper>
      </Container>
      )
  return (
    <Container>
     
    
    <Wrapper>
      <Title>CART ITEMS</Title>
      <Top>
        <Link to='/'>
        <TopButton>CONTINUE SHOPPING</TopButton>
        </Link>
       
      
        { totalUniqueItems?
        <Link to="/shipping">
        <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Link>:  <div></div>}
       
      </Top>
      <Bottom>
        <Info>
           { items.map((item) => ( <Product>
            <ProductDetail key={item.id}>
              <Image src={item.image} />
              <Details>
                <ProductName>
                  <b>Product:</b> {item.name}
                </ProductName>
               
                <ProductSize>
                  <b>Quantity:</b> {item.quantity}
                </ProductSize>
              </Details>
            </ProductDetail>
            <PriceDetail>
              <ProductAmountContainer>
             
                <ProductAmount></ProductAmount>
                <FontAwesomeIcon icon={faTrash} onClick={() => removeItem(item.id)}></FontAwesomeIcon>
              </ProductAmountContainer>
              <ProductPrice>${item.price * item.quantity}</ProductPrice>
            </PriceDetail>
          </Product>
         
         )) }
          <Hr />
         
        </Info>
       
      </Bottom>
    </Wrapper>
    {/* <Footer/> */}
  </Container>

  )

         }

export default Cart