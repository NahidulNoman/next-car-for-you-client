import { useEffect, useState } from "react"

const Admin = email => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [isAdminLoading, setAdminLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/userAdmin/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setIsAdmin(data.isAdmin);
                    setAdminLoading(false);
                })
        }
    }, [email])
    return [isAdmin, isAdminLoading]
}

export default Admin;