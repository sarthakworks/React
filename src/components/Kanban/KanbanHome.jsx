import KanbanForm from "./KanbanForm";
import Todo from "./Todo";
import TaskData from "./data/Data";
import { useEffect, useState } from "react";
function KanbanHome() {
  const [Taskdata, setTaskdata] = useState(TaskData);
  // const addtaskk = (newFeedback) => {
  //   newFeedback.id = uuidv4();
  //   setFeedback([newFeedback, ...feedback]);
  // };

  // const deleteFeedback = (id) => {
  //   if (window.confirm("Are you sure you want to delete?")) {
  //     setFeedback(feedback.filter((item) => item.id !== id));
  //   }
  // };
  useEffect(() => {
    // console.log(Taskdata);
  }, []);
  return (
    <>
      <div className="container-fluid">
        {/* start page title */}
        <div className="row">
          <div className="col-12">
            <div className="page-title-box">
              <div className="page-title-right">
                <ol className="breadcrumb m-0">
                  <li className="breadcrumb-item">
                    <a href="#!">Hyper</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="#!">Tasks</a>
                  </li>
                  <li className="breadcrumb-item active">Kanban Board</li>
                </ol>
              </div>
              <h4 className="page-title">
                Kanban Board
                <button
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#add-new-task-modal"
                  className="btn btn-success btn-sm ms-3"
                >
                  Add New
                </button>
              </h4>
            </div>
          </div>
        </div>
        {/* end page title */}
        <div className="row">
          <div className="col-12">
            <div className="board">
              <Todo Taskdata={Taskdata} />
            </div>
            {/* end .board*/}
          </div>
          {/* end col */}
        </div>
        {/* end row*/}
      </div>
      <KanbanForm />
    </>
  );
}

export default KanbanHome;
