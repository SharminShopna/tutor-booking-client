
import logo from '../assets/logo.png'
const Footer = () => {
  return (
    <>
      <footer className="footer bg-base-200 text-base-content p-10">
        <aside>
          <img src={logo} alt="" className='h-16 w-16 rounded-full ' />
          <h2 className='text-3xl text-orange-400 font-medium'>Tutor Booking Platform</h2>
          <p>
            An online tutor booking platform allows students to find, book,<br></br> and schedule lessons with qualified tutors. It provides an easy<br></br> interface, secure payment options, and a range of subjects<br></br> for learners.
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">English Language</a>
          <a className="link link-hover">Spanish Language</a>
          <a className="link link-hover">Japanese Language</a>
          <a className="link link-hover">Arabic Language</a>
          <a className="link link-hover">German Language</a>
          <a className="link link-hover">Chinese Language</a>
          <a className="link link-hover">French Language +</a>


        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Careers</a>

        </nav>
        <nav>
          <h6 className="footer-title">Contact</h6>
          <a className="link link-hover">Multi Education</a>
          <a className="link link-hover">Tejgaon Industrial Area,</a>
          <a className="link link-hover">Dhaka-1208</a>
          <a className="link link-hover">Bangladesh</a>
          <a className="link link-hover">Mobile: 01303058388</a>
          <a className="link link-hover">sharminshopna149@gmail.com</a>
        </nav>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-auto">
          {/* Facebook */}
          <a href="https://www.facebook.com/sharmin.shopna.338/" className="text-blue-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M9 8H6v4h3v12h5V12h3.642l.358-4h-4V6.333C14 5.378 14.192 5 15.115 5h2.885V0h-3.808C10.596 0 9 1.583 9 4.615V8z"></path>
            </svg>
          </a>

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/sharmin-shopna/" className="text-blue-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M22.23 0H1.77C.79 0 0 .774 0 1.728V22.27C0 23.226.79 24 1.77 24h20.46c.98 0 1.77-.774 1.77-1.73V1.73C24 .774 23.21 0 22.23 0zM7.12 20.453H3.56V8.994h3.56v11.46zM5.34 7.435c-1.14 0-2.07-.94-2.07-2.07s.93-2.07 2.07-2.07 2.07.94 2.07 2.07-.93 2.07-2.07 2.07zM20.45 20.453h-3.56v-5.59c0-1.34-.02-3.05-1.86-3.05s-2.15 1.46-2.15 2.96v5.68h-3.56V8.994h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.26 2.37 4.26 5.46v6.29z"></path>
            </svg>
          </a>

          {/* GitHub */}
          <a href="https://github.com/SharminShopna" className="text-gray-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.385.6.113.82-.26.82-.578 0-.285-.01-1.04-.015-2.04-3.34.726-4.04-1.61-4.04-1.61-.546-1.385-1.332-1.755-1.332-1.755-1.087-.743.082-.728.082-.728 1.203.085 1.837 1.235 1.837 1.235 1.07 1.832 2.803 1.304 3.487.998.107-.775.418-1.304.762-1.605-2.665-.304-5.466-1.335-5.466-5.933 0-1.312.47-2.383 1.235-3.222-.123-.304-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23.956-.267 1.98-.4 3-.405 1.02.005 2.044.138 3 .405 2.292-1.552 3.3-1.23 3.3-1.23.652 1.652.24 2.872.117 3.176.765.84 1.235 1.91 1.235 3.222 0 4.608-2.803 5.625-5.473 5.922.43.37.813 1.1.813 2.215 0 1.598-.015 2.887-.015 3.282 0 .32.22.696.825.577C20.565 21.797 24 17.3 24 12c0-6.63-5.37-12-12-12z"
              ></path>
            </svg>
          </a>
        </nav>

      </footer>
      <hr></hr>
      <footer className="footer footer-center bg-base-200 text-base-content p-4">
        <aside>
          <p>Copyright© 2024 TutorBookingPlatform - All rights reserved by edication Ltd.</p>
        </aside>
      </footer>
    </>
  );
};

export default Footer;

