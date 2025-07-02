import "./footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footerContainer">
                <div className="footerList">
                    <div>
                        <span className="footerListTitle">Support</span>
                        <ul className="fList">
                            <li className="fListItem">Coronavirus (COVID-19) FAQs</li>
                            <li className="fListItem">Manage your trips</li>
                            <li className="fListItem">Contact Customer Service</li>
                            <li className="fListItem">Safety resource centre</li>
                        </ul>
                    </div>

                    <div>
                        <span className="footerListTitle">Discover</span>
                        <ul className="fList">
                            <li className="fListItem">Genius loyalty programme</li>
                            <li className="fListItem">Seasonal and holiday deals</li>
                            <li className="fListItem">Travel articles</li>
                            <li className="fListItem">Traveller Review Awards</li>
                            <li className="fListItem">Car hire</li>
                            <li className="fListItem">Flight finder</li>
                            <li className="fListItem">Restaurant reservations</li>
                        </ul>
                    </div>

                    <div>
                        <span className="footerListTitle">Terms and settings</span>
                        <ul className="fList">
                            <li className="fListItem">Privacy & cookies</li>
                            <li className="fListItem">Accessibility Statement</li>
                            <li className="fListItem">Grievance officer</li>
                            <li className="fListItem">Modern Slavery Statement</li>
                            <li className="fListItem">Human Rights Statement</li>
                        </ul>
                    </div>

                    <div>
                        <span className="footerListTitle">Partners</span>
                        <ul className="fList">
                            <li className="fListItem">Extranet login</li>
                            <li className="fListItem">Partner help</li>
                            <li className="fListItem">List your property</li>
                            <li className="fListItem">Become an affiliate</li>
                        </ul>
                    </div>

                    <div>
                        <span className="footerListTitle">About</span>
                        <ul className="fList">
                            <li className="fListItem">About BookEase.com</li>
                            <li className="fListItem">How we work</li>
                            <li className="fListItem">Sustainability</li>
                            <li className="fListItem">Press centre</li>
                            <li className="fListItem">Careers</li>
                            <li className="fListItem">Investor relations</li>
                            <li className="fListItem">Corporate contact</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer