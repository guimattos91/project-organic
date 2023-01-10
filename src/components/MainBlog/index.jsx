import { Col, Container, Row } from 'react-bootstrap';
import {
    MdOutlineKeyboardArrowLeft,
    MdOutlineKeyboardArrowRight,
} from 'react-icons/md';
import Blog01 from '../../assets/blog-01.jpg';
import Blog02 from '../../assets/blog-02.jpg';
import Blog03 from '../../assets/blog-03.jpg';
import Blog04 from '../../assets/blog-04.jpg';
import Blog05 from '../../assets/blog-05.jpg';
import Blog06 from '../../assets/blog-06.jpg';
import BlogCard from '../BlogCard/index';
import { PageNumbers } from './styles';

const MainBlog = () => (
    <main>
        <Container>
            <Row className="pt-5">
                <Col xs={12} lg={4} className="py-4 p-md-3">
                    <BlogCard
                        title="Beauty With Organic Products"
                        date="February 05, 2017"
                        comment="2"
                        description="Etiam at varius diam, id blandit erat. Suspendisse eget volutpat risus, id venenatis justo.
                    Fusce elementum ligula elit. Duis ultricies ultrices nibh, a tincidunt risus pretium eleifend."
                        image={Blog01}
                        directionrow="row"
                        directioncolumn="column"
                    />
                </Col>
                <Col xs={12} lg={4} className="py-4 p-md-3">
                    <BlogCard
                        title="Green Vegetables Are Good For Healthy"
                        date="January 30, 2017"
                        comment="0"
                        description="Vivamus consectetur nulla mattis lorem ultricies,
                    ac congue tellus consectetur. Vivamus sed purus volutpat, varius mauris id, tempus augue. Nuefd ans congue liquam."
                        image={Blog02}
                        directionrow="row-reverse"
                        directioncolumn="column-reverse"
                    />
                </Col>
                <Col xs={12} lg={4} className="py-4 p-md-3">
                    <BlogCard
                        title="Refreshing Green Smoothie Recipe"
                        date="January 20, 2017"
                        comment="4"
                        description="Praesent efficitur felis eu luctus vestibulum. In hac habitasse platea dictumst.
                    Nam egestas eu nisl ac pellentesque. Duis congue suscipit lorem vel congue."
                        image={Blog03}
                        directionrow="row"
                        directioncolumn="column"
                    />
                </Col>
                <Col xs={12} lg={4} className="py-4 p-md-3">
                    <BlogCard
                        title="Beauty With Organic Products"
                        date="February 05, 2017"
                        comment="2"
                        description="Etiam at varius diam, id blandit erat. Suspendisse eget volutpat risus, id venenatis justo.
                    Fusce elementum ligula elit. Duis ultricies ultrices nibh, a tincidunt risus pretium eleifend."
                        image={Blog04}
                        directionrow="row-reverse"
                        directioncolumn="column-reverse"
                    />
                </Col>
                <Col xs={12} lg={4} className="py-4 p-md-3">
                    <BlogCard
                        title="Green Vegetables Are Good For Healthy"
                        date="January 30, 2017"
                        comment="0"
                        description="Vivamus consectetur nulla mattis lorem ultricies,
                    ac congue tellus consectetur. Vivamus sed purus volutpat, varius mauris id, tempus augue. Nuefd ans congue liquam."
                        image={Blog05}
                        directionrow="row"
                        directioncolumn="column"
                    />
                </Col>
                <Col xs={12} lg={4} className="py-4 p-md-3">
                    <BlogCard
                        title="Refreshing Green Smoothie Recipe"
                        date="January 20, 2017"
                        comment="4"
                        description="Praesent efficitur felis eu luctus vestibulum. In hac habitasse platea dictumst.
                    Nam egestas eu nisl ac pellentesque. Duis congue suscipit lorem vel congue."
                        image={Blog06}
                        directionrow="row-reverse"
                        directioncolumn="column-reverse"
                    />
                </Col>
            </Row>
            <PageNumbers className="d-flex py-5">
                <MdOutlineKeyboardArrowLeft />
                <p className="px-3">1 </p>
                <p className="px-3">2 </p>
                <p className="px-3">3 </p>
                <MdOutlineKeyboardArrowRight />
            </PageNumbers>
        </Container>
    </main>
);

export default MainBlog;
