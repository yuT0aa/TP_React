
function Task({task,onToggle,onDelete}){
    return(
        <div className={`task ${task.completed ? 'completed':''}`} onClick={()=>onToggle(task.id)}>
            <span>{task.title}</span>
            <button className="delete-btn" onClick={(e)=>{e.stopPropagation(); onDelete(task.id);}}>
                Delete
            </button>
        </div>
    );
}

export default Task;