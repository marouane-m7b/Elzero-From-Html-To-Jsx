function Overview() {
    return (
        <div className="overview bg-white rad-10 d-flex align-center">
            <div className="avatar-box txt-c p-20">
                <img className="rad-half mb-10" src="imgs/avatar.png" alt="" />
                <h3 className="m-0">Osama Elzero</h3>
                <p className="c-grey mt-10">Level 20</p>
                <div className="level rad-6 bg-eee p-relative">
                    <span style={{ width: "70%" }}></span>
                </div>
                <div className="rating mt-10 mb-10">
                    <i className="fa-solid fa-star c-orange fs-13"></i>
                    <i className="fa-solid fa-star c-orange fs-13"></i>
                    <i className="fa-solid fa-star c-orange fs-13"></i>
                    <i className="fa-solid fa-star c-orange fs-13"></i>
                    <i className="fa-solid fa-star c-orange fs-13"></i>
                </div>
                <p className="c-grey m-0 fs-13">550 Rating</p>
            </div>
            <div className="info-box w-full txt-c-mobile">
                <div className="box p-20 d-flex align-center">
                    <h4 className="c-grey fs-15 m-0 w-full">General Information</h4>
                    <div className="fs-14">
                        <span className="c-grey">Full Name</span>
                        <span>Osama Mohamed</span>
                    </div>
                    <div className="fs-14">
                        <span className="c-grey">Gender:</span>
                        <span>Male</span>
                    </div>
                    <div className="fs-14">
                        <span className="c-grey">Country:</span>
                        <span>Egypt</span>
                    </div>
                    <div className="fs-14">
                        <label>
                            <input className="toggle-checkbox" type="checkbox" defaultChecked />
                            <div className="toggle-switch"></div>
                        </label>
                    </div>
                </div>
                <div className="box p-20 d-flex align-center">
                    <h4 className="c-grey w-full fs-15 m-0">Personal Information</h4>
                    <div className="fs-14">
                        <span className="c-grey">Email:</span>
                        <span>o@nn.sa</span>
                    </div>
                    <div className="fs-14">
                        <span className="c-grey">Phone:</span>
                        <span>019123456789</span>
                    </div>
                    <div className="fs-14">
                        <span className="c-grey">Date Of Birth:</span>
                        <span>25/10/1982</span>
                    </div>
                    <div className="fs-14">
                        <label>
                            <input className="toggle-checkbox" type="checkbox" />
                            <div className="toggle-switch"></div>
                        </label>
                    </div>
                </div>
                <div className="box p-20 d-flex align-center">
                    <h4 className="c-grey w-full fs-15 m-0">Job Information</h4>
                    <div className="fs-14">
                        <span className="c-grey">Title:</span>
                        <span>Full Stack Developer</span>
                    </div>
                    <div className="fs-14">
                        <span className="c-grey">Programming Language:</span>
                        <span>Python</span>
                    </div>
                    <div className="fs-14">
                        <span className="c-grey">Years Of Experience:</span>
                        <span>15+</span>
                    </div>
                    <div className="fs-14">
                        <label>
                            <input className="toggle-checkbox" type="checkbox" defaultChecked />
                            <div className="toggle-switch"></div>
                        </label>
                    </div>
                </div>
                <div className="box p-20 d-flex align-center">
                    <h4 className="c-grey w-full fs-15 m-0">Billing Information</h4>
                    <div className="fs-14">
                        <span className="c-grey">Payment Method:</span>
                        <span>Paypal</span>
                    </div>
                    <div className="fs-14">
                        <span className="c-grey">Email:</span>
                        <span>email@website.com</span>
                    </div>
                    <div className="fs-14">
                        <span className="c-grey">Subscription:</span>
                        <span>Monthly</span>
                    </div>
                    <div className="fs-14">
                        <label>
                            <input className="toggle-checkbox" type="checkbox" />
                            <div className="toggle-switch"></div>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Overview