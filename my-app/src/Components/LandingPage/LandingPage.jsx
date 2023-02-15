import Blogs from "./Blogs/Blogs";
import FirstSection from "./firstSection/FirstSection";
import Involvements from "./Involvement/Involvement";
import Supporter from "./Supporter/Supporters";
import Testimonals from "./testtimonials/Testimonials";


export default function LandingPage() {
    return (
        <>
            <FirstSection/>
            <Testimonals />
            <Involvements />
            <Blogs/>
            <Supporter />
        </>
    )
}