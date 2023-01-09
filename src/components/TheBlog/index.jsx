import { Col, Container, Row } from 'react-bootstrap';
import Maintitle from '../MainTitle/index';
import BlogCard from '../BlogCard/index';
import Blog01 from '../../assets/blog-01.jpg';
import Blog02 from '../../assets/blog-02.jpg';
import Blog03 from '../../assets/blog-03.jpg';

const TheBlog = () => (
    <>
        <Maintitle title="The Blog" />
        <Container className="py-4">
            <Row>
                <Col xs={12} md={4}>
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
                <Col xs={12} md={4}>
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
                <Col xs={12} md={4}>
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
            </Row>
        </Container>
    </>
);

export default TheBlog;
