import { useEffect, useState } from "react";

const Seller = email => {
    const [isSeller, setIsSeller] = useState(false);
    const [isSellerLoading, setSellerLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`https://hit-the-road-server.vercel.app/userSeller/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setIsSeller(data.isSeller);
                    setSellerLoading(false);
                })
        }
    }, [email])
    return [isSeller, isSellerLoading]
}

export default Seller;