import { Col, Container, Row } from 'react-bootstrap';
import {
    FontH2,
    GreenLines,
    PStyled,
    FontH2Left,
    PStyledLeft,
    BannerContainer,
    DivHappyClients,
    TextStyled,
    TextStyledNumber,
} from './styles';
import ImageAbout01 from '../../assets/fotosabout/01.jpg';
import ImageAbout02 from '../../assets/fotosabout/02.jpg';
import Maintitle from '../MainTitle/index';
import CircleBannerHome from '../CircleBannerHome/index';
import BillyRay from '../../assets/fotosabout/man1.jpg';
import DanielleReed from '../../assets/fotosabout/woman1.jpg';
import PeterCastro from '../../assets/fotosabout/man2.jpg';

const MainAbout = () => (
    <main className="w-100">
        <Container>
            <Row className="py-5 g-0">
                <Col xs={12} md={6}>
                    <div className="d-flex justify-content-end">
                        <img
                            src={ImageAbout01}
                            alt="ImageAbout01"
                            className="img-fluid"
                        />
                    </div>
                </Col>
                <Col xs={12} md={6} className="ps-3">
                    <FontH2 className="pt-2"> Who We Are </FontH2>
                    <GreenLines className="my-4" />
                    <PStyled>
                        We are a manufacturing base of organic food produced on
                        our farm. We are a family health care production team,
                        created by today&apos;s need for clean and safe food,
                        driven by the desire to build meaningful and meaningful
                        experiences. Vivamus et enim accumsan, tempus dui non,
                        pretium libero. Vivamus vitae justo non metus malesuada
                        finibus. Pellentesque vehicula porttitor eleifend. Proin
                        eget velit in arcu consectetur tempor. Sed pulvinar,
                        purus sed efficitur elementum, risus risus tincidunt
                        massa, a iaculis risus turpis id sapien. Pellentesque a
                        metus urna. Integer placerat et ante quis pharetra.
                        Nulla facilisi. Donec egestas tortor non ante pulvinar,
                        sit amet sollicitudin nisl auctor. Vestibulum aliquet
                        finibus consectetur. Nullam faucibus vehicula est nec
                        pulvinar.
                    </PStyled>
                </Col>
                <Col xs={12} md={6} className="pe-3">
                    <div className="d-flex flex-column align-items-end">
                        <FontH2Left className="pt-5"> What We Do </FontH2Left>
                        <GreenLines className="my-4" />
                        <PStyledLeft>
                            We provide all kinds of organic products. Produced
                            on our farm, the products are always fresh,
                            multi-vitamins, rich variety for your family. With
                            our organic food will bring delicious meals to your
                            family.
                        </PStyledLeft>
                        <PStyledLeft>
                            Vestibulum eu nisl vitae tortor feugiat aliquet
                            finibus in libero. Vivamus et enim accumsan, tempus
                            dui non, pretium libero. Vivamus vitae justo non
                            metus malesuada finibus. Pellentesque vehicula
                            porttitor eleifend. Proin eget velit in arcu
                            consectetur tempor. Sed pulvinar, purus sed
                            efficitur elementum, risus risus tincidunt massa, a
                            iaculis risus turpis id sapien diam pellentesque
                            ullamcorper.
                        </PStyledLeft>
                    </div>
                </Col>
                <Col xs={12} md={6}>
                    <img
                        src={ImageAbout02}
                        alt="ImageAbout02"
                        className="img-fluid"
                    />
                </Col>
            </Row>
        </Container>
        <BannerContainer className="py-5">
            <Container>
                <Row>
                    <Col xs={12} md={6} lg={3}>
                        <DivHappyClients>
                            <TextStyledNumber>154</TextStyledNumber>
                            <TextStyled>HAPPY CLIENT</TextStyled>
                        </DivHappyClients>
                    </Col>
                    <Col xs={12} md={6} lg={3}>
                        <DivHappyClients>
                            <TextStyledNumber>234</TextStyledNumber>
                            <TextStyled>PRODUCTS IN STORE</TextStyled>
                        </DivHappyClients>
                    </Col>
                    <Col xs={12} md={6} lg={3}>
                        <DivHappyClients>
                            <TextStyledNumber>32</TextStyledNumber>
                            <TextStyled>YEAR OF EXPERIENCE</TextStyled>
                        </DivHappyClients>
                    </Col>
                    <Col xs={12} md={6} lg={3}>
                        <DivHappyClients>
                            <TextStyledNumber>126</TextStyledNumber>
                            <TextStyled>RUNING PROJECTS</TextStyled>
                        </DivHappyClients>
                    </Col>
                </Row>
            </Container>
        </BannerContainer>
        <Maintitle title="Our Team" />
        <Row>
            <Col xs={12} md={4}>
                <CircleBannerHome
                    titleH3="Billy Ray"
                    image={BillyRay}
                    description="Leader"
                />
            </Col>
            <Col xs={12} md={4}>
                <CircleBannerHome
                    titleH3="Danielle Reed"
                    image={DanielleReed}
                    description="Farmer"
                />
            </Col>
            <Col xs={12} md={4}>
                <CircleBannerHome
                    titleH3="PeterCastro"
                    image={PeterCastro}
                    description="Farmer"
                />
            </Col>
        </Row>
    </main>
);

export default MainAbout;
