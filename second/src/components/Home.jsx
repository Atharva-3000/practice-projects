import { Box, Heading, Image, Container, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const headingOptions = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  textTransform: 'uppercase',
  p: '4',
  size: '4xl',
};
const Home = () => {
  return (
    <Box>
      <MyCarousel />
      <Container minH={'100vh'} maxW={'container.xl'} p="16">
        <Heading
          textTransform={'uppercase'}
          py="2"
          w={'fit-content'}
          borderBottom={'2px solid'}
          m={'auto'}
        >
          Services
        </Heading>

        <Stack
          h={'full'}
          p={'4'}
          alignItems={'center'}
          direction={['column', 'row']}
        >
          {/* choti screen ho to column else row, chakra inbuil for making responsive */}

          <Image src={img5} h={["40","400"]} filter={"hue-rotate(-130deg)"}/>

          <Text letterSpacing={"widest"} lineHeight={"190%"} p={["4","16"]} textAlign={"center"}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, reprehenderit fugit quo perspiciatis rem facere harum natus sint? Iste reprehenderit accusamus quam harum rem et a, cupiditate assumenda soluta dolores numquam in quae est ab blanditiis deleniti inventore, quaerat tenetur ipsam? Consequuntur accusamus laboriosam corrupti ea dolore, nobis minus tempora!
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};
const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={2000}
    showStatus={false}
    showThumbs={false}
    showArrows={false}
  >
    <Box w={'full'} h={'100vh'}>
      <Image src={img1} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
        Watch The Future
      </Heading>
    </Box>

    <Box w={'full'} h={'100vh'}>
      <Image src={img2} />
      <Heading bgColor={'whiteAlpha.900'} color={'black'} {...headingOptions}>
        Future is Gaming
      </Heading>
    </Box>

    <Box w={'full'} h={'100vh'}>
      <Image src={img3} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        Gaming on Console
      </Heading>
    </Box>

    <Box w={'full'} h={'100vh'}>
      <Image src={img4} />
      <Heading bgColor={'whiteAlpha.900'} color={'black'} {...headingOptions}>
        Night Life is Gaming
      </Heading>
    </Box>
  </Carousel>
);
export default Home;
