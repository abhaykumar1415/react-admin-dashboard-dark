import React, { Component } from 'react'
import './style.css';
export default class TaskActivity extends Component {
  render() {
    return (
      <div className="task-activity-content">
        <div className="task-wrapper">
          <div className="task-activity-header">Assigned Tasks</div>
          <div className="list-content">
            <div className="list-wrapper">
              <div className="selection-wrapper">
                <i class="material-icons margin-right">
                  crop_square
            </i>
                <div>Lorem,ipsum dolor sit amet</div>
              </div>
              <div className="status-pending">pending</div>
            </div>
            <div className="list-wrapper">
              <div className="selection-wrapper">
                <i class="material-icons margin-right">
                  crop_square
            </i>
                <div>Lorem,ipsum dolor sit amet</div>
              </div>
              <div className="status-pending">pending</div>
            </div>
            <div className="list-wrapper">
              <div className="selection-wrapper">
                <i class="material-icons margin-right">
                  crop_square
            </i>
                <div>Lorem,ipsum dolor sit amet</div>
              </div>
              <div className="status-pending">pending</div>
            </div>
            <div className="list-wrapper">
              <div className="selection-wrapper">
                <i class="material-icons margin-right">
                  crop_square
            </i>
                <div>Lorem,ipsum dolor sit amet</div>
              </div>
              <div className="status-completed">completed</div>
            </div>
            <div className="list-wrapper">
              <div className="selection-wrapper">
                <i class="material-icons margin-right">
                  crop_square
            </i>
                <div>Lorem,ipsum dolor sit amet</div>
              </div>
              <div className="status-completed">completed</div>
            </div>
            <div className="list-wrapper">
              <div className="selection-wrapper">
                <i class="material-icons margin-right">
                  crop_square
            </i>
                <div>Lorem,ipsum dolor sit amet</div>
              </div>
              <div className="status-completed">completed</div>
            </div>
            <div className="list-wrapper">
              <div className="selection-wrapper">
                <i class="material-icons margin-right">
                  crop_square
            </i>
                <div>Lorem,ipsum dolor sit amet</div>
              </div>
              <div className="status-completed">completed</div>
            </div>
          </div>
          <div className="view-all-button">
            VIEW All
        </div>
        </div>
        {/* ACtivity Content */}
        <div className="activity-wrapper">
          <div className="task-activity-header">Activity</div>
          <div className="task-activity-wrapper">
            <div className="activity-content-wrapper">
              <img src={require('../../images/profile.png')} alt="profile" className="profile-image" />
              <div className="activity-name">
                <div className="activity-proofile-name font-weight">Eric John</div>
                <div className="description">
                  <div className="font-weight">Assigned you a task Mockup Design.</div>
                  <div>5 min ago</div>
                </div>
              </div>
            </div>
            <div className="activity-content-wrapper">
              <img src={require('../../images/profile.png')} alt="profile" className="profile-image" />
              <div className="activity-name">
                <div className="activity-proofile-name font-weight">Terry Moore</div>
                <div className="description">
                  <div className="font-weight">Follow up to close deal.</div>
                  <div>10 min ago</div>
                </div>
              </div>
            </div>
            <div className="activity-content-wrapper">
              <img src={require('../../images/profile.png')} alt="profile" className="profile-image" />
              <div className="activity-name">
                <div className="activity-proofile-name font-weight">Eric John</div>
                <div className="description">
                  <div className="font-weight">Assigned you a task Mockup Design.</div>
                  <div>1 hour ago</div>
                </div>
              </div>
            </div>
            <div className="activity-content-wrapper">
              <img src={require('../../images/profile.png')} alt="profile" className="profile-image" />
              <div className="activity-name">
                <div className="activity-proofile-name font-weight">Eric John</div>
                <div className="description">
                  <div className="font-weight">Assigned you a task Mockup Design.</div>
                  <div>2 hours ago</div>
                </div>
              </div>
            </div>
          </div>
          <div className="view-all-button">
            LOAD MORE
        </div>
        </div>
      </div>
    )
  }
}
