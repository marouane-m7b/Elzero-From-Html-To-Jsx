import React from 'react'
import AdminNavbar from '../../AdminNavbar'
import AdminSidebar from '../../AdminSidebar'

function AdminSettingsHome() {
  return (
    
    <div className="page d-flex">
      <AdminSidebar/>
      <div className="content w-full">
        <AdminNavbar/>
        <h1 className="p-relative">Settings</h1>
        <div className="settings-page m-20 d-grid gap-20">
          <div className="p-20 bg-white rad-10">
            <h2 className="mt-0 mb-10">Site Control</h2>
            <p className="mt-0 mb-20 c-grey fs-15">Control The Website If There Is Maintenance</p>
            <div className="mb-15 between-flex">
              <div>
                <span>Website Control</span>
                <p className="c-grey mt-5 mb-0 fs-13">Open/Close Website And Type The Reason</p>
              </div>
              <div>
                <label>
                  <input className="toggle-checkbox" type="checkbox" checked />
                  <div className="toggle-switch"></div>
                </label>
              </div>
            </div>
            <textarea className="close-message p-10 rad-6 d-block w-full" placeholder="Close Message Content"></textarea>
          </div>
          <div className="p-20 bg-white rad-10">
            <h2 className="mt-0 mb-10">General Info</h2>
            <p className="mt-0 mb-20 c-grey fs-15">General Information About Your Account</p>
            <div className="mb-15">
              <label className="fs-14 c-grey d-block mb-10" htmlFor="first">First Name</label>
              <input
                className="b-none border-ccc p-10 rad-6 d-block w-full"
                type="text"
                id="first"
                placeholder="First Name"
              />
            </div>
            <div className="mb-15">
              <label className="fs-14 c-grey d-block mb-5" htmlFor="last">Last Name</label>
              <input
                className="b-none border-ccc p-10 rad-6 d-block w-full"
                id="last"
                type="text"
                placeholder="Last Name"
              />
            </div>
            <div>
              <label className="fs-14 c-grey d-block mb-5" htmlFor="email">Email</label>
              <input
                className="email b-none border-ccc p-10 rad-6 w-full mr-10"
                id="email"
                type="email"
                value="o@nn.sa"
                disabled
              />
              <a className="c-blue" href="#">Change</a>
            </div>
          </div>
          <div className="p-20 bg-white rad-10">
            <h2 className="mt-0 mb-10">Security Info</h2>
            <p className="mt-0 mb-20 c-grey fs-15">Security Information About Your Account</p>
            <div className="sec-box mb-15 between-flex">
              <div>
                <span>Password</span>
                <p className="c-grey mt-5 mb-0 fs-13">Last Change On 25/10/2021</p>
              </div>
              <a className="button bg-blue c-white btn-shape" href="#">Change</a>
            </div>
            <div className="sec-box mb-15 between-flex">
              <div>
                <span>Two-Factor Authentication</span>
                <p className="c-grey mt-5 mb-0 fs-13">Enable/Disable The Feature</p>
              </div>
              <label>
                <input className="toggle-checkbox" type="checkbox" checked />
                <div className="toggle-switch"></div>
              </label>
            </div>
            <div className="sec-box between-flex">
              <div>
                <span>Devices</span>
                <p className="c-grey mt-5 mb-0 fs-13">Check The Login Devices List</p>
              </div>
              <a className="bg-eee c-black btn-shape" href="#">Devices</a>
            </div>
          </div>
          <div className="social-boxes p-20 bg-white rad-10">
            <h2 className="mt-0 mb-10">Social Info</h2>
            <p className="mt-0 mb-20 c-grey fs-15">Social Media Information</p>
            <div className="d-flex align-center mb-15">
              <i className="fa-brands fa-twitter center-flex c-grey"></i>
              <input className="w-full" type="text" placeholder="Twitter Username" />
            </div>
            <div className="d-flex align-center mb-15">
              <i className="fa-brands fa-facebook-f center-flex c-grey"></i>
              <input className="w-full" type="text" placeholder="Facebook Username" />
            </div>
            <div className="d-flex align-center mb-15">
              <i className="fa-brands fa-linkedin center-flex c-grey"></i>
              <input className="w-full" type="text" placeholder="Linkedin Username" />
            </div>
            <div className="d-flex align-center">
              <i className="fa-brands fa-youtube center-flex c-grey"></i>
              <input className="w-full" type="text" placeholder="Youtube Username" />
            </div>
          </div>
          <div className="widgets-control p-20 bg-white rad-10">
            <h2 className="mt-0 mb-10">Widgets Control</h2>
            <p className="mt-0 mb-20 c-grey fs-15">Show/Hide Widgets</p>
            <div className="control d-flex align-center mb-15">
              <input type="checkbox" id="one" checked />
              <label htmlFor="one">Quick Draft</label>
            </div>
            <div className="control d-flex align-center mb-15">
              <input type="checkbox" id="two" checked />
              <label htmlFor="two">Yearly Targets</label>
            </div>
            <div className="control d-flex align-center mb-15">
              <input type="checkbox" id="three" checked />
              <label htmlFor="three">Tickets Statistics</label>
            </div>
            <div className="control d-flex align-center mb-15">
              <input type="checkbox" id="four" checked />
              <label htmlFor="four">Latest News</label>
            </div>
            <div className="control d-flex align-center mb-15">
              <input type="checkbox" id="five" />
              <label htmlFor="five">Latest Tasks</label>
            </div>
            <div className="control d-flex align-center mb-15">
              <input type="checkbox" id="six" checked />
              <label htmlFor="six">Top Search Items</label>
            </div>
          </div>
          <div className="backup-control p-20 bg-white rad-10">
            <h2 className="mt-0 mb-10">Backup Manager</h2>
            <p className="mt-0 mb-20 c-grey fs-15">Control Backup Time And Location</p>
            <div className="date d-flex align-center mb-15">
              <input type="radio" name="time" id="daily" checked />
              <label htmlFor="daily">Daily</label>
            </div>
            <div className="date d-flex align-center mb-15">
              <input type="radio" name="time" id="weekly" />
              <label htmlFor="weekly">Weekly</label>
            </div>
            <div className="date d-flex align-center mb-15">
              <input type="radio" name="time" id="monthly" />
              <label htmlFor="monthly">Monthly</label>
            </div>
            <div className="servers d-flex align-center txt-c">
              <input type="radio" name="servers" id="server-one" />
              <div className="server mb-15 rad-10 w-full">
                <label className="d-block m-15" htmlFor="server-one">
                  <i className="fa-solid fa-server d-block mb-10"></i>
                  Megaman
                </label>
              </div>
              <input type="radio" name="servers" id="server-two" checked />
              <div className="server mb-15 rad-10 w-full">
                <label className="d-block m-15" htmlFor="server-two">
                  <i className="fa-solid fa-server d-block mb-10"></i>
                  Zero
                </label>
              </div>
              <input type="radio" name="servers" id="server-three" />
              <div className="server mb-15 rad-10 w-full">
                <label className="d-block m-15" htmlFor="server-three">
                  <i className="fa-solid fa-server d-block mb-10"></i>
                  Sigma
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminSettingsHome