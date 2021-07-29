import './../component_styles/Toggle.css';
import {useState} from "react";

const Toggle = () => {

    const prices = [
        'от 500 тыс. р.',
        'от 1 млн. р.',
        'от 1.5 мли. р.',
        'от 2 млн. р.'
    ]

    const [active, setActive] = useState(0);

    // return active.map((e) => {
    // });

    console.log('rerender')
    console.log(active)

    return <div className={'Toggle'} key={1}>
        {prices.map((price, index) => {
            return <span key={price} onClick={
                () => {
                    setActive(index)
                }
            }>{price}</span>
        })}
        <div
            style={
                {left: 25 * active + '%',}
            }/>
    </div>
}

export default Toggle;