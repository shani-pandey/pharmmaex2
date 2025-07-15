import React from 'react';


const boxs = [
    {
        name : "Shivam Sharma",
        pos : "Managing Director-PharmmaEx",
        contact : "M. +91-9258002828, +91-701 733 6797",
        email : "E. shivam.sharma@pharmmaex.com",
        image : "/assests/img/exhPerson.png"
    },
     {
        name : "Vivek Agarwal",
        pos : "Operation Manager-PharmmaEx",
        contact : "M. +91-789 573 8919, +91-701 733 6797",
        email : "E. info@pharmmaex.com",
        image : "/assests/img/vivek.svg"
    }
]
const ExhibitionQueries = () => {
    return (
        <div style={{
            margin: '2.5rem'
        }}>
            <h2 style={{
                textAlign: 'center',
                marginBottom: "2rem",
            }}>Exhibition Queries</h2>
            <div style={{ width: '80%', margin: '0 auto', display: 'flex', gap: '2rem', justifyContent: 'center' }}>
            {boxs.map((box,idx) => (
                <div key={idx} style={{ flex: 1, display: 'flex', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', minHeight: 220, border: "1.5px solid #00833D"}}>
                    {/* Image Column */}
                    <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem' }}>
                        <img src={box.image} alt="Shivam Sharma" style={{ width: '100%'}} />
                    </div>
                    {/* Data Column */}
                    <div style={{ flex: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '1.2rem', padding: '1.5rem' }}>
                        <div style={{ marginBottom: 0 }}>
                            <p style={{ margin: 0, color: '#444444',fontWeight: 600, fontSize: '1.1rem' }}>{box.name}</p>
                            <p style={{ margin: 0, color: '#444444', fontSize: '1rem' }}>{box.pos}</p>
                        </div>
                        <div style={{ marginTop: 0 }}>
                            <p style={{ margin: 0, color: '#444444', fontSize: '1rem' }}>{box.contact}</p>
                            <p style={{ margin: 0, color: '#444444', fontSize: '1rem' }}>{box.email}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        </div>
        
    );
};

export default ExhibitionQueries; 