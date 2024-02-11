function LatestNews() {
    return (
        <div className="latest-news p-20 bg-white rad-10 txt-c-mobile">
            <h2 className="mt-0 mb-20">Latest News</h2>
            <div className="news-row d-flex align-center">
                <img src="imgs/news-01.png" alt="" />
                <div className="info">
                    <h3>Created SASS Section</h3>
                    <p className="m-0 fs-14 c-grey">New SASS Examples & Tutorials</p>
                </div>
                <div className="btn-shape bg-eee fs-13 label">3 Days Ago</div>
            </div>
            <div className="news-row d-flex align-center">
                <img src="imgs/news-02.png" alt="" />
                <div className="info">
                    <h3>Changed The Design</h3>
                    <p className="m-0 fs-14 c-grey">A Brand New Website Design</p>
                </div>
                <div className="btn-shape bg-eee fs-13 label">5 Days Ago</div>
            </div>
            <div className="news-row d-flex align-center">
                <img src="imgs/news-03.png" alt="" />
                <div className="info">
                    <h3>Team Increased</h3>
                    <p className="m-0 fs-14 c-grey">3 Developers Joined The Team</p>
                </div>
                <div className="btn-shape bg-eee fs-13 label">7 Days Ago</div>
            </div>
            <div className="news-row d-flex align-center">
                <img src="imgs/news-04.png" alt="" />
                <div className="info">
                    <h3>Added Payment Gateway</h3>
                    <p className="m-0 fs-14 c-grey">Many New Payment Gateways Added</p>
                </div>
                <div className="btn-shape bg-eee fs-13 label">9 Days Ago</div>
            </div>
        </div>
    )
}

export default LatestNews;