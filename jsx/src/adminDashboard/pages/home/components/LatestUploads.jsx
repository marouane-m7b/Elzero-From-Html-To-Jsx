function LatestUploads() {
    return (
        <div className="latest-uploads p-20 bg-white rad-10">
            <h2 className="mt-0 mb-20">Latest Uploads</h2>
            <ul className="m-0">
                <li className="between-flex pb-10 mb-10">
                    <div className="d-flex align-center">
                        <img className="mr-10" src="imgs/pdf.svg" alt="" />
                        <div>
                            <span className="d-block">my-file.pdf</span>
                            <span className="fs-15 c-grey">Elzero</span>
                        </div>
                    </div>
                    <div className="bg-eee btn-shape fs-13">2.9mb</div>
                </li>
                <li className="between-flex pb-10 mb-10">
                    <div className="d-flex align-center">
                        <img className="mr-10" src="imgs/avi.svg" alt="" />
                        <div>
                            <span className="d-block">My-Video-File.avi</span>
                            <span className="fs-15 c-grey">Admin</span>
                        </div>
                    </div>
                    <div className="bg-eee btn-shape fs-13">4.9mb</div>
                </li>
                <li className="between-flex pb-10 mb-10">
                    <div className="d-flex align-center">
                        <img className="mr-10" src="imgs/psd.svg" alt="" />
                        <div>
                            <span className="d-block">My-Psd-File.pdf</span>
                            <span className="fs-15 c-grey">Osama</span>
                        </div>
                    </div>
                    <div className="bg-eee btn-shape fs-13">4.5mb</div>
                </li>
                <li className="between-flex pb-10 mb-10">
                    <div className="d-flex align-center">
                        <img className="mr-10" src="imgs/zip.svg" alt="" />
                        <div>
                            <span className="d-block">My-Zip-File.pdf</span>
                            <span className="fs-15 c-grey">User</span>
                        </div>
                    </div>
                    <div className="bg-eee btn-shape fs-13">8.9mb</div>
                </li>
                <li className="between-flex pb-10 mb-10">
                    <div className="d-flex align-center">
                        <img className="mr-10" src="imgs/dll.svg" alt="" />
                        <div>
                            <span className="d-block">My-DLL-File.pdf</span>
                            <span className="fs-15 c-grey">Admin</span>
                        </div>
                    </div>
                    <div className="bg-eee btn-shape fs-13">4.9mb</div>
                </li>
                <li className="between-flex">
                    <div className="d-flex align-center">
                        <img className="mr-10" src="imgs/eps.svg" alt="" />
                        <div>
                            <span className="d-block">My-Eps-File.pdf</span>
                            <span className="fs-15 c-grey">Designer</span>
                        </div>
                    </div>
                    <div className="bg-eee btn-shape fs-13">8.9mb</div>
                </li>
            </ul>
        </div>
    )
}

export default LatestUploads