import React from "react";

interface StudentProgressCardProps {
  name: string;
  course: string;
  progress: number;
  alertMessage?: string; 

}

const StudentCard: React.FC<StudentProgressCardProps> = ({
  name,
  course,
  progress,
  alertMessage
}) => {
  return (
    <div className="card shadow-sm my-3" style={{ maxWidth: "400px" }}>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{course}</h6>
        
        <div className="progress my-3">
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: `${progress}%` }}
            aria-valuenow={progress}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            {progress}%
          </div>
        </div>

        {alertMessage && (
          <div className="alert alert-warning mt-3" role="alert">
            {alertMessage}
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentCard;
