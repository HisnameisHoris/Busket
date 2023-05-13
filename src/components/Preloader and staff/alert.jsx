import { useEffect } from "react";
import './alert.css';

export default function Alert(props) {
    const {name = "", closeAlert = Function.prototype} = props;

    useEffect(() => {
        const timerId = setTimeout(closeAlert, 3000);

        return() => {
            clearTimeout(timerId);
        };
    }, [name]);

    return(
        <div id="toast-container">
            <div className="toast">{name} add to basket</div>
        </div>
    );
}