import React from 'react'
import {About} from '../img/about.jpg'

export const Pup = () => {
  return (
    <>
      <div className="Pup-container">
      <div class="Parent">
        <div class="child1">
          <img src="https://github.com/Soukthavilay/MERN-PetShop/blob/frontend-Dev/client/src/components/mainpages/home/img/about.jpg" alt=""/>
            <h1>Geeksforgeeks</h1>
        </div>
        <div class="child2">
            <h2>
                We provide a variety of services 
                for you to learn, thrive and also 
                have fun! Free Tutorials, Millions 
                of Articles, Live, Online and 
                Classroom Courses ,Frequent Coding 
                Competitions, Webinars by Industry 
                Experts, Internship opportunities 
                and Job Opportunities.
            </h2>
        </div>
    </div>
        <div className="pup-content">
          <div className="pup-img split"></div>
          <div className="pup-title split">
            <div className="pup-about"></div>
            <div className="pup-about-content"></div>
          </div>
        </div>
      </div>
    </>
  )
}
