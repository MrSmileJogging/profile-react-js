import React, { useEffect, useState } from 'react';
import './style/HomeStyle.css';
export default () => {
    const [state, setstate] = useState(5)
	useEffect(() => {
		return () => {};
	}, []);
	return <div className="basic">{state}</div>;
};
