import Header from "@/components/Header";
import "./about.css";

export default function About() {
    return (
        <div>
            <div className="about-container">
                <Header />

                <div className="content">
                    <div className="text-section">
                        <h1 className="header"> Meet John </h1>
                        <p className="about-text">
                            Born in a small town, John earned a scholarship to Harvard, where he excelled academically and developed a passion for public service. After graduating, John pursued an MBA, quickly rising through the ranks of wall street to build a successful career that made him a self-made millionaire. John announced a presidential run, promising to combine their business acumen, elite education, and dedication to public service to tackle the problems of today.
                        </p>    
                    </div>

                    <div className="image-section">
                        <img src="Placeholder.png" alt="Jack" />
                    </div>
                </div>
            </div>
            <h2 className="policies-header">
            Policies
            </h2>
            <h3 className="energy-header">
            Energy
            </h3>
            <div className="nuclear-container">
                <div className="nuclear-content">
                    <div className="nuclear-image">
                        <img src="Reactor.png" alt="Nuclear Power Reactor"/>
                    </div>
                    
                    <div className="nuclear-text">
                        <p>With the rise of AI and an increase in computer server storage requirements energy prices are at an all-time high and grids are becoming maxed out. Nuclear energy provides a clean safe and extremely efficient power generation solution. I will get congress to pass a bill to make it easier to permit and build nuclear power plants and grant 150 billion dollars over 10 years in research funding and subsidies. The U.S. currently imports 8.51 million barrels of oil per day. I want those imports to be replaced by U.S. oil drilled by U.S. oil companies. My plan will deregulate Alaskan oil drilling and pipeline construction. </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
