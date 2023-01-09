import { BsInstagram } from 'react-icons/bs';
import { BgContainer01, ButtonFollowUs } from './styles';

const FollowUs = () => (
    <BgContainer01 className="p-10 d-flex justify-content-center">
        <ButtonFollowUs type="submit">
            {' '}
            <BsInstagram color="white" /> FOLLOW US
        </ButtonFollowUs>
    </BgContainer01>
);

export default FollowUs;
