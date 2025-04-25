import React, { useEffect, useState } from 'react';

const useFlower = () => {
    const [flowers, setFlowers] = useState([]);
    useEffect(() => {
        fetch('flowers.json')
            .then(res => res.json())
            .then(data => setFlowers(data))
    }, [])
    return [flowers]

};

export default useFlower;