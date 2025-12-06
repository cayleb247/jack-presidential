import Header from "@/components/Header";
import "./about.css";

export default function About() {
    return (
        <div>
            <Header />

{/* Text on the right image on the left */}
{/* About Me */}
            <div className="title-container">
                <div className="abouttext-section">
                    <h1 className="title"> Meet John </h1>
                    <p className="about-text">
                        Born in a small town, John earned a scholarship to Harvard, where he excelled academically and developed a passion for public service. After graduating, John pursued an MBA, quickly rising through the ranks of wall street to build a successful career that made him a self-made millionaire. John announced a presidential run, promising to combine their business acumen, elite education, and dedication to public service to tackle the problems of today.
                    </p>   
                </div> 

            <div className="face-container">
                <img src="Placeholder.png" alt="Jack" />
            </div>
            </div>
                
            <h2 className="policies-header">
            Policies
            </h2>

{/* Text on the right image on the left*/}
{/* Energy */}
            <div className="energy-container">
                <div className="nuclear-container">
                    <img src="Reactor.png" alt="Nuclear Power Reactor"/>
                </div>
                
                <div className="nuclear-text">
                    <h3 className="energy-title"> Energy </h3>
                    <p>
                        With the rise of AI and an increase in computer server storage requirements energy prices are at an all-time high and grids are becoming maxed out. Nuclear energy provides a clean safe and extremely efficient power generation solution. I will get congress to pass a bill to make it easier to permit and build nuclear power plants and grant 150 billion dollars over 10 years in research funding and subsidies.
                    </p>
                </div>
            </div>

{/* Text on the left image on the right */}
{/* Education */}
            <div className="title-container">
                <div className="abouttext-section">
                    <h1 className="energy-title"> Education </h1>
                    <p className="about-text">
                        America is facing an obesity crisis, and no one is doing anything about it. Policy makers need to start creating incentives for kids to lose weight. I will pass a law that if a student is in shape they will receive free lunch. With my plan families will be rewarded for promoting healthy eating habits and portion control. It will also provide relief for all Americans amid rising prices and increased inflation. I will also strive to create a more competitive learning environment. I will pass a law to create a national education standard to replace local ones. Students will be required to get a minimum of a C in all classes to advance to the next grade. National standardized testing will replace local standardized tests to ensure students are meeting educational requirements and provide a method of comparison.
                    </p>   
                </div> 

            <div className="school-container">
                <img src="School.png" alt="Jack" />
            </div>
            </div>

{/* Text on the right image on the left*/}
{/* Immigration */}
            <div className="energy-container">
                <div className="nuclear-container">
                    <img src="Border Wall.png" alt="Nuclear Power Reactor"/>
                </div>
                
                <div className="nuclear-text">
                    <h3 className="immigration-title"> Immigration </h3>
                    <p>
                        Something about making immigration run better.
                    </p>
                </div>
            </div>
        </div>
    );
}
