import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useContext, useEffect } from "react";
import UserContext from "../../contexts/UserContext";
import { postSignIn } from '../../service/api';

export default function HomeDisplay() {
    
    const { tasks, setTasks } = useContext(UserContext);
    const navigate = useNavigate();
    
    return (
        <Content>
            <Header>
                JOLLY
                <Icons>
                    <Icon>
                        <ion-icon name="home"></ion-icon>
                    </Icon>
                    <Icon>
                        <ion-icon name="cart"></ion-icon>
                    </Icon>
                    <Icon>
                        <ion-icon name="person"></ion-icon>
                    </Icon>
                </Icons>
            </Header>
            <Banner>
                <BannerImage src='https://arredo.qodeinteractive.com/wp-content/uploads/2018/05/h3-product-img-1-500x588.jpg'></BannerImage>
                <TextFlexing>
                    <BannerText>Cadeiras premium</BannerText>
                    <BannerDescription>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula nec purus a placerat. Nam mattis malesuada nisl, at finibus sem ornare id. Praesent vel purus et eros pharetra consequat. Donec eleifend mattis purus vel cursus. Etiam eu hendrerit lorem. Curabitur pharetra tortor eu libero imperdiet tincidunt. Sed sed ultricies nunc.
                    </BannerDescription>
                    <SignUpText>Cadastre-se para receber todas as novidades!</SignUpText>
                </TextFlexing>
            </Banner>
            <CollectionText>Coleção Capri<New>New</New></CollectionText>
            <ProductsList>
                <Product>
                    <ProductImage src='https://arredo.qodeinteractive.com/wp-content/uploads/2018/05/product-img-6.jpg'></ProductImage>
                    <ProductTitle>Cadeira de madeira</ProductTitle>
                    <ProductPrice>199,90</ProductPrice>
                </Product>
            </ProductsList>
        </Content>
    );
}

const ProductPrice = styled.p`

`;
const ProductTitle = styled.p`

`;

const ProductImage = styled.img`
    width: 275px;
    height: 350px;
    object-fit: cover;
    object-position: center;
`;

const Product = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ProductsList = styled.div`
    display: flex;
    width: 90%;
    justify-content: space-between;
    margin-top: 75px;
`;

const CollectionText = styled.div`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    color: #000000;
    margin-top: 50px;
    display: flex;
    align-items: center;
`;

const New = styled.div`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    box-sizing: border-box;
    padding: 5px;
    color: lightgrey;
    margin-left: 10px;
    border: 1px solid lightgray;
    border-radius: 10px;
`;

const Icon = styled.div`
    :hover{
        color: gray;
        cursor: pointer;
    }
`;

const BannerDescription = styled.div`
`;

const SignUpText = styled.div`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    color: #000000;
    margin-top: 10px;
    text-decoration-line: underline;
    margin-bottom: 20px;
    :hover{
        color: gray;
        cursor: pointer;
    }
`;

const TextFlexing = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    margin-right: 8%;
`;

const BannerText = styled.div`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 60px;
    color: #000000;
    margin-bottom: 20px;
    margin-top: 20px;
`;

const BannerImage = styled.img`
    height: 24vw;
    width: 26vw;
    margin-left: 8%;
    object-fit: cover;
    object-position: bottom;

    margin-bottom: 20px;
`;

const Banner = styled.div`
    width: 90%;
    margin-top: 130px;
    height: 700px;
    background-color: rgb(242,242,242);
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 300;
    font-size: 19px;
    color: gray;
`;

const Icons = styled.div`
    font-size: 25px;
    display: flex;
    justify-content: space-between;
    width: 110px;
`;

const Header = styled.div`
    width: 100%;
    background-color: rgba(255,255,255,0.95);
    height: 75px;
    border: 1px solid lightgray;
	display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding-left: 5%;
    padding-right: 5%;
    font-family: 'Orbitron';
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    line-height: 30px;
    color: #000000;
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 1;
`;

const Content = styled.div`
    width: 100vw;
    height: 100vh;
	display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
`;
