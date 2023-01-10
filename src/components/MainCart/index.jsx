import { Col, Container, Row } from 'react-bootstrap';
import CartTable from '../CartTable';
import CartTableMobile from '../CartTableMobile';

import { DivShopSorting } from './styles';

const MainCart = () => {
    return (
        <main>
            <DivShopSorting className="pt-5">
                <Container>
                    <Row className="d-flex justify-content-between">
                        <Col className="d-none d-lg-flex flex-column">
                            <CartTable />
                        </Col>
                        <Col className="d-lg-none flex-column">
                            <CartTableMobile />
                        </Col>
                    </Row>
                </Container>
            </DivShopSorting>
        </main>
    );
};

export default MainCart;
