import './../component_styles/Toggle.css';
import {useState} from "react";

const Toggle = () => {

    const prices = [
        'от 500 тыс. р.',
        'от 1 млн. р.',
        'от 1.5 мли. р.',
        'от 2 млн. р.'
    ]

    const [active, setActive] = useState([
        {'selected': 0},
    ]);

    return active.map((e) => {
        return <div className={'Toggle'} key={1}>
            {prices.map((price, index) => {
                return <span key={price} onClick={
                    () => {
                        setActive(active.map((state) => {
                            e.selected = index
                            return e
                        }))
                    }
                }>{price}</span>
            })}
            <div
                style={
                    {left: e.selected * 25 + '%',}
                }/>
        </div>
    });
}

export default Toggle;