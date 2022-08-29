import React from 'react'
import pic from '../assets/Highres.jpg'

const About = () => {
  return (
    <div>
      <section id='about'>
        <div className='container my-5 py-5'>
            <div className='row'>
                <div className='col-md-6'>
                    <img src={pic} alt='About' className='w-75 mt-5'/>
                </div>
                <div className='col-md-6'>
                <h3 className='fs-5 mb-0'>About Us</h3>
                <h1 className='display-6 mb-2'>Who <b>We </b> Are</h1>
                <hr className='w-50'/>
                <p className='lead mb-4'>Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
                    dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
                    Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit
                    sodales taciti duis praesent id. Consequat urna vitae morbi nunc congue.
                </p>
                <button className='btn btn-primary rounded-pill px-4 py-2'> Get Started</button>
                <button className='btn btn-outline-primary rounded-pill px-4 py-2 ms-2'> Get Started</button>

                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default About;
