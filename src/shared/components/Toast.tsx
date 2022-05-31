import { FC, useRef, useEffect } from 'react';
import { removeGeneralError } from '../redux/actions';
import { useDispatch } from '../../container/store';
import { useLocation } from 'react-router-dom';
import { Logger } from '../../container/utilities';

type Props = {
    msg: string | null;
    type: 'danger' | 'warning' | 'success';
    index: number;
}

const DELAY = 30;

const Toast: FC<Props> = (props: Props) => {
    const dispatch = useDispatch();
    const location = useLocation();
    const ref = useRef<string>(location.pathname);

    useEffect(() => {
        const timer = setTimeout(closeToast, DELAY * 1000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (ref.current !== location.pathname) closeToast();
    }, [location]);

    const closeToast = () => {
        dispatch(removeGeneralError(props.index));
    }

    return (
        <div className="toast-container p-3">
            <div className={`toast align-items-center text-white bg-${props.type} show`} role="alert" aria-live="assertive" aria-atomic="true">
                <div className="align-items-center d-flex justify-content-between">
                    <div className="toast-body">
                        {props.msg}
                    </div>
                    <button type="button" onClick={closeToast} className="btn-close btn-close-white me-2 ms-2" data-bs-dismiss="toast" aria-label="Close" />
                </div>
            </div>
        </div>
    )
};

export default Toast;