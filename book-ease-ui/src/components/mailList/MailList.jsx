import "./mailList.css";

const MailList = () => {
  return (
    <div className="mail">
        <h2 className="mailTitle">Unlock Deals You'll Love - Straight to Your Inbox!</h2>
        <span className="mailDesc">Sign up and we'll send the best deals to you</span>
        <div className="mailInputContainer">
            <input type="text" placeholder="Your Email" />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default MailList