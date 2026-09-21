import { Bell, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const notices = [
  {
    id: 1,
    title: "Admission Enquiry Open",
    date: "20 September 2026",
    isNew: true,
  },
  {
    id: 2,
    title: "Important School Announcement",
    date: "18 September 2026",
    isNew: true,
  },
  {
    id: 3,
    title: "Parent-Teacher Meeting Notice",
    date: "15 September 2026",
    isNew: false,
  },
  {
    id: 4,
    title: "Academic Session Updates",
    date: "12 September 2026",
    isNew: false,
  },
  {
    id: 5,
    title: "School Activity Announcement",
    date: "10 September 2026",
    isNew: false,
  },
];

function NoticePreview() {
  return (
    <section className="notice-board-section">
      <div className="container">
        <div className="notice-board-box">
          {/* Notice Header */}
          <div className="notice-board-header">
            <div className="notice-board-title">
              <Bell size={22} />
              <h2>Notice Board</h2>
            </div>

            <Link to="/notice" className="notice-board-view-all">
              View All
              <ChevronRight size={17} />
            </Link>
          </div>

          {/* Scrollable Notices */}
          <div className="notice-board-list">
            {notices.map((notice) => (
              <div className="notice-board-item" key={notice.id}>
                <div className="notice-board-item-content">
                  <h3>{notice.title}</h3>

                  <span>{notice.date}</span>
                </div>

                {notice.isNew && (
                  <span className="notice-new-badge">NEW</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default NoticePreview;