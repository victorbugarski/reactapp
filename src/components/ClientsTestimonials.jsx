import React, { useEffect, useState } from 'react'
import Testimonials from './Testimonials'

const ClientsTestimonials = () => {
    const [testimonials, setTestimonials] = useState([])

    const getTestimonials = async () => {
        const res = await fetch('https://win24-assignment.azurewebsites.net/api/testimonials')
        const data = await res.json()
        setTestimonials(data)
    }
    
    useEffect(() => {
        getTestimonials()
    }, [])

    return (
    <section id="testiomonials" className="client-testimonials">
        <div className="container">
            <div className="first-column">
                <h2>Clients are loving our app</h2>
            </div>
            <div className="second-column">
                <div className="testimonials">

                    {
                        testimonials.map((testimonials) => (<Testimonials key={testimonials.id} item={testimonials}/>))
                    }
                
                    
            </div>
        </div>
    </div>
</section>
 )
}

export default ClientsTestimonials