import React, { useEffect } from 'react';
import './contactStyle.css';
import {Facebook,GitHub} from '@material-ui/icons';
export default () => {
    const [, set] = useState(initialState)
    useEffect(() => {
        return () => {
        }
    }, [])
	return (
		<div className="contact-container">
			<div className="icon-list">
                <div className="icon-itame">
                    <Facebook />
                    <h3  onClick={()=>window.open('https://www.facebook.com/natpon.krirat')}>Nuttapon Krairach</h3>
                </div>
                <div className="icon-itame">
                    <GitHub />
                    <h3 onClick={()=>window.open('https://github.com/devtest101bug')}>devtest101bug</h3>
                </div>
			</div>
		</div>
	);
};
