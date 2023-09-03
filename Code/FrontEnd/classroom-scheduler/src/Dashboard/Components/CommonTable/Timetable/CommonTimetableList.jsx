import React from "react";

function CommonTimetableList({ rows }) {
  return (
    <div className="contain-table">
      <table className="striped-table">
        <thead>
          <tr>
            {[
              "No",
              "Date",
              "Start Time",
              "End Time",
              "Module Name",
              "Faculty",
            ].map((data, index) => (
              <th key={index}>{data}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.length > 0 ? (
            rows.map((data, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{data.date}</td>
                <td>{data.start_time}</td>
                <td>{data.end_time}</td>
                <td>{data.subject_name}</td>
                <td>{data.teacher_name}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={6}>No Timetable</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default CommonTimetableList;
