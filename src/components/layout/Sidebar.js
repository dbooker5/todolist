import React from 'react'; 
import {FaChevronDown, FaInbox, FaRegCalendarAlt, FaRegCalendar} from 'react-icons/fa';

export const Sidebar = () => 
<div className="sidebar" data-testid="sidebar">
    <ul className="sidebar__generic">
        <li data-testid="inbox" className="active">
            <span><FaInbox />
            </span>
            <span>Inbox</span></li>
        <li data-testid="today" className="today">
            <span><FaRegCalendar />
            </span>
            <span>Today</span>
            </li>
        <li data-testid="next-7-days" className="next-7-days">
            <span><FaRegCalendarAlt />
            </span>
            <span>Next 7 Days</span>
            </li>
    </ul>

    <div className="sidebar__middle">
        <span>
            <FaChevronDown />
        </span>
        <h2>Projects</h2>
    </div>

    <ul className="sidebar__projects">Projects will be here</ul>
    <div className="sidebar__add-project">
        Add Project component here!!
    </div>
</div>;