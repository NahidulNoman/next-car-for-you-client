import { useEffect, useState } from "react"

const Buyer = email => {
    const [isBuyer, setIsBuyer] = useState(false);
    const [isBuyerLoading, setBuyerLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`https://hit-the-road-server.vercel.app/users/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setIsBuyer(data.isBuyer);
                    setBuyerLoading(false);
                })
        }
    }, [email])
    return [isBuyer, isBuyerLoading]
}

export default Buyer;