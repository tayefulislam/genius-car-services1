import { useEffect, useState } from "react"

const useServiceDetail = (serviceId) => {


    console.log(serviceId)

    const [service, setService] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/service/${serviceId}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setService(data)
            })
    }, [serviceId])

    console.log(service)

    return [service];

}


export default useServiceDetail;



