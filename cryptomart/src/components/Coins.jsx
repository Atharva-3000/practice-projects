import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { server } from "../index";
import Error from "./Error";
import CoinCard from "./CoinCard";
import {
  Container,
  HStack,
  Text, Button, RadioGroup, Radio
} from "@chakra-ui/react";
import Loader from "./Loader";
const Coins = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("inr");

  const currencySymbol=currency==="inr"?"₹":currency==="eur"?"€":"$";
  const changePage=(page)=>{
    setPage(page);
    setLoading(true);
  }
  const btns=new Array(132).fill(1);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`);
        setCoins(data);
        console.log(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchCoins();
  }, [currency,page]);

  if (error) return <Error message={"Error while fetching coins"}/>;

  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Text textAlign={"center"}>Filter currency</Text>
        <RadioGroup value={currency} onChange={setCurrency} p={"8"}>
          <HStack spacing={"4"} justifyContent={"center"}>
            <Radio value={"inr"}>₹ INR</Radio>
            <Radio value={"usd"}>$ USD</Radio>
            <Radio value={"eur"}>€ EUR</Radio>
          </HStack>
        </RadioGroup>
          <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
            {coins.map((i) => (
              <CoinCard
              id={i.id}
                key={i.id}
                name={i.name}
                price={i.current_price}
                img={i.image}
                symbol={i.symbol}
                currencySymbol={currencySymbol}
              />
            ))}
          </HStack>

          <HStack w={"full"} overflowX={"auto"} p={"8"}>
            {
              btns.map((item,index)=>(
                <Button key={index} bgColor={"whiteAlpha.500"}  color={"white"} variant={"outline"} colorScheme="blue" onClick={()=>changePage(index+1)}>{index+1}</Button>
                
              ))
            }
          </HStack>
        </>
      )}
    </Container>
  );
};


export default Coins;
