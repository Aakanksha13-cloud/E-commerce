import React from 'react';
import './appFooter.css';

const AppFooter = () => {
  return (
    <div className="foot-content">
        
        <div className="upper-footContent">
            <p className='feedback'>We’d love to hear what you think!</p>
            <button className="feedbackButton">Give Feedback!</button>
        </div>

       <div className="middle-footContent">
            <ul>
               <li>All Departments |</li> 
               <li>Store Directory |</li> 
               <li>careers |</li> 
               <li>Our Company |</li> 
               <li>Sell on Walmart.com |</li> 
               <li>Help |</li> 
               <li>Product Recalls |</li> 
               <li>Accessibility |</li> 
               <li>Tax Exempt Program |</li> 
               <li>Get the Walmart App |</li> 
               <li>Safety Data Sheet |</li>
               <li>Terms of Use |</li> 
               <li>Privacy Notice |</li> 
               <li>California Supply Chain Act |</li> 
               <li>Your Privacy Choices |</li> 
               <li>Notice at Collection |</li> 
               <li>AdChoices |</li> 
               <li>Consumer Health Data Privacy Notices |</li> 
               <li>Brand Shop Directory |</li> 
               <li>Pharmacy |</li> 
               <li>Walmart Business |</li> 
               <li>#IYWYK |</li> 
               <li>Delete Account |</li> 
            </ul>


        </div>

      <div className="lower-footContent">
            <p>© 2025 Walmart. The trademarks Walmart and the Walmart Spark design are registered with the US Patent and Trademark Office. All Rights Reserved.</p>
        </div>
      
    </div>
  )
}

export default AppFooter
