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
                            return {
                                'isActive': idx === index,
                            };
                        }))
                    }
                }
                onMouseLeave={() => {
                setActive(active.map(e => {
                    return {
                        'isActive': true,
                    };
                }))
                }}
            >
                {index}
            </div>;
        }
    );
}

export default Home;