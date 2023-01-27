import { Ratio } from 'react-bootstrap';
import { TbMessageCircle2 } from 'react-icons/tb';
import {
    CardBackground,
    TitleH3,
    DateComment,
    CardBlog,
    DateCommentIntern,
} from './styles';

const BlogCard = ({
    image,
    title,
    description,
    date,
    comment,
    directioncolumn,
    directionrow,
}) => {
    CardBlog.defaultProps = {
        direction: {
            column: `${directioncolumn}`,
            row: `${directionrow}`,
        },
    };

    return (
        <CardBlog>
            <Ratio
                aspectRatio="1x1"
                style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center center',
                }}
            >
                <div />
            </Ratio>

            <CardBackground>
                <div className="pt-2">
                    <TitleH3>{title}</TitleH3>
                </div>
                <DateComment className="py-2">
                    <p>{date}</p>
                    <DateCommentIntern>
                        <p className="m-0">{comment}</p>
                        <TbMessageCircle2
                            className="ms-1 d-flex align-items-center"
                            color="#999"
                        />
                    </DateCommentIntern>
                </DateComment>
                <p className="pt-3">{description}</p>
            </CardBackground>
        </CardBlog>
    );
};

export default BlogCard;
