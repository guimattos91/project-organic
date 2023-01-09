import { TitleH2, GrayLines } from './styles';

const MainTitle = ({ title }) => (
    <div className="pt-4 d-flex flex-column align-items-center">
        <TitleH2 className="pt-4">{title}</TitleH2>
        <div className="pt-3">
            <GrayLines />
            <GrayLines />
        </div>
    </div>
);

export default MainTitle;
