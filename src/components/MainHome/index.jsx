import SectionCircleBanner from '../SectionCircleBanner/index';
import OurProducts from '../OurProducts/index';
import OrganicFood from '../OrganicFood/index';
import TheBlog from '../TheBlog/index';
import FollowUs from '../FollowUs/index';

const MainHome = () => (
    <main>
        <SectionCircleBanner className="pb-5" />
        <hr />
        <OurProducts />

        <OrganicFood />

        <TheBlog />

        <FollowUs />
    </main>
);

export default MainHome;
