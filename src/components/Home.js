import './../component_styles/Home.css';
import {useState} from "react";

const Home = () => {

    const [active, setActive] = useState([
        {
            "isActive": true
        },
        {
            "isActive": true
        },
        {
            "isActive": true
        },
    ]);

    active.forEach(e => {
        console.log(e.isActive)
    })

    return active.map(
        (e, index) => {
            return <div
                className={[
                    'Box',
                    `${e.isActive? 'Home' : 'Away'}`
                ].join(' ') }
                onMouseEnter={
                    () => {
                        setActive(active.map((e, idx) => {
                            e.isActive = idx === index;
                            return e;
                        }))
                    }
                }
                onMouseLeave={() => {
                setActive(active.map(e => {
                    e.isActive = true;
                    return e;
                }))
                }}
            >
                {index}
            </div>;
        }
    );
}

export default Home;